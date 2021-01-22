var apikey="0e7e3d15c688bd70aade057eea66dee4";
var weatherurl="";
var lat = "";
var long = "";
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
var data = JSON.parse(this.response);
for (i in data)
{
    
   lat = data[i].latlng[0];
   long = data[i].latlng[1];
   //console.group(data[i].name);
   weatherurl = "https://api.openweathermap.org/data/2.5/weather?lat=" +lat+ "&lon="+long+"&appid=" + apikey;
   var request1 = new XMLHttpRequest();
   request1.open('GET',weatherurl,true);
   request1.send();
   request1.onload = function(){
   var data1 = JSON.parse(this.response);
   console.log(data1.main.temp);
}
}
}




