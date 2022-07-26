let totalSelect=0;
const myColor = document.getElementById("myColor");
let lastColor=myColor.value;

const colorSelector = ()=>{
    console.log(myColor.value);
    //בחירת הצבע
    lastColor=myColor.value;
    //מספר הפעמים שלקוח בחר צבע
    totalSelect+=1;
}

setTimeout(()=>{
    alert(`
    total times: ${totalSelect}
    currentColor: ${myColor.value}
    lastColor : ${lastColor}
    }
    `);
},5000);