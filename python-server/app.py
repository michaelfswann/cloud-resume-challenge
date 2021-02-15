import os


import boto3


from flask import Flask, jsonify, request

app = Flask(__name__)


COUNTERS_TABLE = os.environ['DYNAMODB_TABLE']

client = boto3.client('dynamodb')


@app.route("/")
def hello():

    return "Hello World!"


@app.route("/counters/<string:counter_id>")
@cross_origin()
def get_counter(counter_id):

    resp = client.get_item(

        TableName=COUNTERS_TABLE,

        Key={

            'counterId': {'S': counter_id}

        }

    )

    item = resp.get('Item')

    if not item:

        return jsonify({'error': 'User does not exist'}), 404

    return jsonify({

        'counterId': item.get('counterId').get('S'),

        'visitors': item.get('visitors').get('N')

    })


@app.route("/counters/<string:counter_id>/increment")
@cross_origin()
def increment_counter(counter_id):

    resp = client.update_item(

        TableName=COUNTERS_TABLE,

        Key={
            'counterId': {'S': counter_id}
        },

        UpdateExpression='SET visitors = visitors + :inc',

        ExpressionAttributeValues={':inc': {'N': '1'}},

        ReturnValues="UPDATED_NEW"
    )

    return jsonify({'success': 'visit counter incremented'}), 200


@app.route("/counters", methods=["POST"])
@cross_origin()
def create_counter():

    counter_id = request.json.get('counterId')

    visitors = request.json.get('visitors')

    if not counter_id or not visitors:

        return jsonify({'error': 'Please provide counterId and visitors'}), 400

    resp = client.put_item(

        TableName=COUNTERS_TABLE,

        Item={

            'counterId': {'S': counter_id},

            'visitors': {'N': visitors}

        }

    )

    return jsonify({

        'counterId': counter_id,

        'visitors': visitors

    })
