function getifsc(ifsc)
{
    
var url = "https://ifsc.razorpay.com/" + ifsc;
fetch(url)
.then((response)=>response.json())
.then((data)=>
{
    //console.log("Data Length:", data.length);
   // console.log(data);
    // console.log(Object.keys(data))
   // console.log(Object.values(data).length);

    createData(data);
    
})
.catch((e)=>
{
console.log(e);
//alert(e);
}
)

}

function createData(data1)
{
  div2 = document.querySelector("#div2");
  div2.innerHTML ="";

 
    console.log("DATA PRESENT")
    console.log(data1);
    //tb = document.querySelector("#table1");
    div2 = document.querySelector("#div2");
//   while (tb.rows.length > 1) {
//   tb.deleteRow(1);
// }
var table1 = document.createElement("table");
var tr1 = document.createElement("tr");
var th1 = document.createElement("th");
th1.textContent="key";
th2 = document.createElement("th");
th2.textContent="Value";
table1.appendChild(th1);
table1.appendChild(th2);

    for(i in data1)
    {
    tr1 = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.textContent=i;
    td2.textContent=data1[i];
    tr1.appendChild(td1); 
    tr1.appendChild(td2); 
    table1.appendChild(tr1);
    //console.log(data1[i]);
    }
    div2.appendChild(table1);

    //console.log()
    // cap.textContent = "TABLE";

//     tb = document.querySelector("#table1");
// console.log(tb);
// var cap = document.createElement("caption");
// cap.textContent = document.getElementById('text1').value;
// cap.id="cap1";
// console.log(document.getElementById('text1').value);
// tb.appendChild(cap);

    

}
