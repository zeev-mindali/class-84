let myData = [{}];
let projectTypes = [];
let projectStat = {};

const myURL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=99aad98f-2b54-4eea-834d-650b56389bf3&limit=2000";

$.ajax({
  url: myURL,
  success: (response) => {
    console.log("total prjects found: " + response.result.records.length);
    myData = response.result.records;
    createProjectType();
  },
  error: (error) => {
    console.log(error);
  },
});

const createProjectType = () => {
  myData.map((item) => {
    //שלב תכנוני
    //יחד פוטנציאל לשיווק
    if (!projectTypes.includes(item["שלב תכנוני"])) {
      projectTypes.push(item["שלב תכנוני"]);
      //איתחול של ערך
      projectStat[item["שלב תכנוני"]] = item["יחד פוטנציאל לשיווק"];
    } else {
      //הוספה לערך קיים
      projectStat[item["שלב תכנוני"]] += item["יחד פוטנציאל לשיווק"];
    }
  });
  console.log(projectStat);
};

$("#stat").click(() => {
  $("#res").html(createTable());
});

const createTable = () => {
  let tableData = "<table class='center'>";
  tableData += "<tr >";
  projectTypes.map((item) => {
    tableData += `<td>${item}</td>`;
  });
  tableData += "</tr>";
  tableData += "<tr>";
  projectTypes.map((item) => {
    tableData += `<td>${projectStat[item]}</td>`;
  });
  tableData += "</tr>";
  tableData += "</table>";
  return tableData;
};
