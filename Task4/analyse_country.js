var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
var data = JSON.parse(this.response);
//console.log(data);

console.log("*******ASIAN COUNTRIES*******")
var asian_con = data.filter((con)=>con.region=='Asia');
console.log(asian_con);
console.log("**************")

console.log("*******Population Less than 2L*******")
var popul = data.filter((con)=>con.population<200000);
console.log(popul);
console.log("**************")

console.log("*******ForEach illustration*******");
data.forEach(element => {
    console.log(element.name + '<==>' + element.capital+ '<==>' + element.flag);
});

console.log("**************");

console.log("*******Total Population in REST Countries*******")
var tpop = data.reduce((agg, con)=>agg + con.population,0);
console.log(tpop);
console.log("**************")


console.log("*******Countries using currencies as USD*******")
var usd = data.filter((cont)=>cont.currencies[0].code=='USD');
console.log(usd);
console.log("**************")


}



