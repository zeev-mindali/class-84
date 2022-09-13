$("#search").click(() => {
  getData(`https://restcountries.com/v3.1/name/${$("#country").val()}`);
});
$("#all").click(() => {
  getData("https://restcountries.com/v3.1/all");
});

//senior
const getData = (apiURL) => {
  $.ajax({
    url: apiURL,
    success: (response) => createData(response),
  });
};

//junior
const getAll = () => {
  $.ajax({
    url: "https://restcountries.com/v3.1/all",
    success: (response) => createData(response),
  });
};

const createData = (data) => {
  //console.log(data);
  //console.log("total countries:", data.length);
  createStat(data);
  createCountries(data);
  createContinent(data);
};

const createStat = (data) => {
  let totalPopulation = 0;
  data.map((item) => (totalPopulation += item.population));
  $("#stat").html(`
        Total countries: ${data.length}<br/>
        Total population: ${totalPopulation}<br/>
        Average population: ${Math.floor(totalPopulation / data.length)}<br/>
    `);
};
const createCountries = (data) => {
  let myTable = `
        <table class="center">
            <tr>
                <td>Country</td>
                <td>Population</td>
            </tr>
    `;

  data.map((item) => {
    myTable += `
            <tr>
                <td>${item.name.common}</td>
                <td>${item.population}</td>
            </tr>
        `;
  });

  myTable += "</table>";

  $("#countries").html(myTable);
};
const createContinent = (data) => {
  const myContinent = {};
  let regionList = [];

  data.map((item) => {
    if (myContinent[item.region]) {
      myContinent[item.region] += 1;
    } else {
      myContinent[item.region] = 1;
      regionList.push(item.region);
    }
  });
  console.log(regionList);

  let myTable = `
    <table class="center">
        <tr>
            <td>Region</td>
            <td>total countries</td>
        </tr>
  `;

  regionList.map((item) => {
    myTable += `
        <tr>
            <td>${item}</td>
            <td>${myContinent[item]}</td>
        </tr>
    `;
  });

  myTable += "</table>";

  $("#region").html(myTable);
};
