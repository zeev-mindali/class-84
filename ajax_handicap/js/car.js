const handiURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";

const checkCar= ()=>{
    $.ajax({
        type: "GET",
        url :  handiURL+($("#carNumber").val()),
        success: response=>carData(response),
        error: err=>console.log(err),
    });
}

const carData = (response)=>{
    //console.log(response.result.records.length);
    const isHandicap = response.result.records.length==0;
    $("#res").html("the car is "+(isHandicap?"not":"")+" handicap car")
};