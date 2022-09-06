const url =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=64edd0ee-3d5d-43ce-8562-c336c24dbc1f&q=";
let myResult = [];

// Document ready after leon will cry....
$(() => {
  $("#searchMe").click(() => {
    // if (!sessionStorage.getItem("data")) {
    //   console.log("getting data from server...");
    //   getData();
    // } else {
    //   console.log("getting data from session...");
    //   myResult = JSON.parse(sessionStorage.getItem("data"));
    //   getNapot().map((item) => console.log(item));
    // }
    getData();
    //console.log(myResult[1]);
    // getTotal();
    // createTable();
  });
});

const createTable = () => {
  let tableBuilder = "";

  tableBuilder += "<table>";
  getTotal().map((item) => {
    tableBuilder += `<tr>
    <td>${item.napa}</td>
    <td>${item.age5_0}</td>
    <td>${item.age6_18}</td>
    <td>${item.age19_45}</td>
    <td>${item.age46_55}</td>
    <td>${item.age56_64}</td>
    <td>${item.age65}</td>
    <td>${item.total}</td>
    </tr>`;
  });
  tableBuilder += "</table>";

  $("#res").html(tableBuilder);
};

const getNapot = () => {
  let napot = [];
  myResult.map((item) => {
    if (!item["נפה"].includes("לא ידוע") && !napot.includes(item["נפה"])) {
      napot.push(item["נפה"]);
    }
  });
  return napot;
};

const getNapotFor = () => {
  let napot = [];
  for (let index = 0; index < myResult.length; index++) {
    if (
      !myResult[index]["נפה"].includes("לא ידוע") &&
      !napot.includes(myResult[index]["נפה"])
    ) {
      napot.push(myResult[index]);
    }
  }
  return napot;
};

//בנייה של מבנה נתונים שאנחנו רוצים לקבל
let singleObject = {
  age5_0: 0,
  age6_18: 0,
  age19_45: 0,
  age46_55: 0,
  age56_64: 0,
  age65: 0,
  total: 0,
  napa: "",
};

const getTotal = () => {
  let napaTotal = [];
  //איטרציה על כל המידע לפי שם נפה
  getNapot().map((napaName) => {
    //חיתוך עפ"י שם הנפה, קבלת המידע עבור נפה בודדת
    const singleNapa = myResult.filter(
      (singleCity) => singleCity["נפה"] == napaName
    );
    //יצירה של משתנה חדש עפ"י המבנה שייצרנו, שמייצג כתובת אחרת בזיכרון
    let myData = { ...singleObject };
    //הכנסת שם הנפה
    myData.napa = napaName;

    //איטרציה על כל היישובים שקשורים לנפה בודדת, וסיכום הערכים של הגילאים
    singleNapa.map((singleCity) => {
      myData.age5_0 += singleCity["גיל_0_5"];
      myData.age6_18 += singleCity["גיל_6_18"];
      myData.age19_45 += singleCity["גיל_19_45"];
      myData.age46_55 += singleCity["גיל_46_55"];
      myData.age56_64 += singleCity["גיל_56_64"];
      myData.age65 += singleCity["גיל_65_פלוס"];
      myData.total += singleCity["סהכ"];
    });
    // console.log(myData);
    //הוספת הנפה למערך שמייצג את כל הנפות
    napaTotal.push(myData);
  });
  //console.log(napaTotal);
  //החזרת מערך הנפות מסוכם
  return napaTotal;
};

function getData() {
  const myURL = url + $("#city").val();
  console.log(myURL);
  $.ajax({
    url: myURL,
    success: function (data) {
      myResult = data.result.records;
      getTotal();
      createTable();
      console.log(myResult);
      //console.log(myResult);
      //sessionStorage.setItem("data", JSON.stringify(myResult));
    },
  });
}
