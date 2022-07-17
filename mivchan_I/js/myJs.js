var prodList = ["<th>product name</th><th>product price</th><th>product category</th><th>image</th><th>action</th>"];

function addProduct(){
    var productName = document.getElementById('productName');
    var productPrice = document.getElementById('productPrice'); 
    var prodCat = document.getElementById('prodCat');
    var imageLocation = document.getElementById('imageLocation');   
    var prodTable = document.getElementById('prodTable');   


    //add new product to list
    addToList(productName,productPrice,prodCat,imageLocation);
    //create the table from the array
    prodTable.innerHTML = createTable(productName,productPrice,prodCat,imageLocation);
    //reset the form data...
    resetForm(productName,productPrice,prodCat,imageLocation);
}

function addToList(productName,productPrice,prodCat,imageLocation){
    var myString = "";
    myString+="<tr>";
    myString+="<td>" + productName.value + "</td>";
    myString+="<td>" + productPrice.value + "</td>";
    myString+="<td>" + prodCat.value + "</td>";
    myString+="<td><img src='"+imageLocation.value+"'/></td>";
    myString+="<td><img src='media/delete.png' onClick='removeItem("+prodList.length+")'/></td>";
    myString+="</tr>";
    prodList.push(myString);
}

function removeItem(index){
    //we need filter....
}

function createTable(productName,productPrice,prodCat,imageLocation){
    myString = "";
    for (var index=0;index<prodList.length;index+=1){
        myString+=prodList[index];
    }
    return myString;
}

function resetForm(productName,productPrice,prodCat,imageLocation){
    productName.value = "";
    productPrice.value = "";
    prodCat.value = "";
    imageLocation.value = "";
}