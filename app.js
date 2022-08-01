// ==============fetch the data from json file==========
const dataar = fetch("./data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  });

console.log(dataar);
