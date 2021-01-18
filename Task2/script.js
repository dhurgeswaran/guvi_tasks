var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
console.log(this.response);
var data = JSON.parse(this.response);
//console.log(data);
//console.log(data.length);
//console.log(data[1]);
for (i in data)
{
    console.log( data[i].name);
}

}