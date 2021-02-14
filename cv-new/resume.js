/* // adding visitor counter

// increment counter
fetch("http://localhost:8000/incrementCounter")
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

// read counter
fetch("http://localhost:8000/counter")
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    document.getElementById(
      "counter-text"
    ).innerText = `${data.counterValue} Visitors and counting...`;
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
 */
