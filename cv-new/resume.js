// adding visitor counter

// increment counter
fetch(
  "https://nclzlrcvud.execute-api.eu-west-1.amazonaws.com/dev/counters/visitors/increment",
  {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
)
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

// read counter
fetch(
  "https://nclzlrcvud.execute-api.eu-west-1.amazonaws.com/dev/counters/visitors",
  {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
)
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    document.getElementById(
      "counter-text"
    ).innerText = `${data.visitors} Visitors and counting...`;
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
