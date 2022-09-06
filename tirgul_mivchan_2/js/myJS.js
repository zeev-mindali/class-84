const url =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=64edd0ee-3d5d-43ce-8562-c336c24dbc1f&q=";
let myResult = [];

// Document ready after leon will cry....
$(() => {
  $("#searchMe").click(() => {
    if (!sessionStorage.getItem("data")) {
      console.log("getting data from server...");
      getData();
    } else {
      console.log("getting data from session...");
      myResult = JSON.parse(sessionStorage.getItem("data"));
      getNapot().map((item) => console.log(item));
    }
    console.log(myResult[1]);
  });
});

const getNapot = () => {
  let napot = [];
  myResult.map((item) => {
    if (!item["נפה"].includes("לא ידוע") && !napot.includes(item["נפה"])) {
      napot.push(item["נפה"]);
    }
  });
  return napot;
};

function getData() {
  $.ajax({
    url: url, //+$("#city").val()
    success: function (data) {
      myResult = data.result.records;
      //console.log(myResult);
      sessionStorage.setItem("data", JSON.stringify(myResult));
    },
  });
}
