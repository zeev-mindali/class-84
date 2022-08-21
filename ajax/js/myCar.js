const myURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

$.ajax({
    type: "GET",
});

const findCarData = ()=>{
    $.ajax({        
        url: myURL+($("#carNumber").val()),
        success: (response)=>{
            recData(response.result.records[0]);
        },
        error: (response)=>{console.log(response)},
        complete: ()=>{console.log("finished processing")},    
    });
}

$(()=>{
    $("#carInfo").hide();
});

const recData = (response)=>{
    //console.log(response);
    $("#mispar_rechev").html(response.mispar_rechev);
    $("#tozeret_nm").html(response.tozeret_nm);
    $("#kinuy_mishari").html(response.kinuy_mishari);
    $("#tzeva_rechev").html(response.tzeva_rechev);
    $("#sug_delek_nm").html(response.sug_delek_nm);
    $("#shnat_yitzur").html(response.shnat_yitzur);
    $("#tokef_dt").html(myDate(response.tokef_dt));
    $("#carInfo").show();
    $("#carNumber").val("");
};

const myDate = (date)=>{
    let tokefDate = date.split("T")[0];
    tokefDate = tokefDate.split("-");
    return tokefDate[2]+"/"+tokefDate[1]+"/"+tokefDate[0];
}