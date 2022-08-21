const intTime = ()=>10000;
    
$(()=>{})

const myItems = ["burger","pasta","biryani","idly","dosa","samosa"]

const myImages = setInterval(()=>
        myItems.map(item=>{
            $.ajax({
                type: "GET",
                url: "https://foodish-api.herokuapp.com/api/images/"+item,
                success: (response)=>changeImage(item,response.image),
                error: err=>console.log(err),
            })
        }),intTime());

const changeImage = (cat,image)=>{
    console.log(image);
    $("#"+cat).attr("src",image);
}