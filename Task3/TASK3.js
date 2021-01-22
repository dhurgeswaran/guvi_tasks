var arr = [4,5,9,1,100,56,17,22,36,88,03];

var anonymousFunc = function(arr){
    console.log("=======================================")
    console.log("Odd Numbers Using anonymous Function:");
    console.log("=======================================")
    for(let i of arr)
    {
        if(i%2!==0)
        {
            console.log(i);
        }
    }
}

anonymousFunc(arr);


(function(arr){
    console.log("=======================================")
    console.log("Odd Numbers Using IIFE Function:");
    console.log("=======================================")
    for(let i of arr)
    {
        if(i%2!==0)
        {
            console.log(i);
        }
    }
})(arr);


var str1 = "hello MY Name is jAvA ScRIpt. What IS YOUR name?"

console.log("Original String:", str1);


console.log("===================================");
console.log("Title Caps Using Ananymous Function")
console.log("===================================");

var titleCaps = function(str1){
    
    strarr = str1.toLowerCase().split(" ");
    
    for(let i=0;i<strarr.length;i++)
    {
        strarr[i] = strarr[i].charAt(0).toUpperCase() + strarr[i].slice(1);
        
    }
    console.log(strarr.join(" "));
 }
 titleCaps(str1);



console.log("===================================");
console.log("Title Caps Using IIFE Function")
console.log("===================================");

(function(str1){
    
    strarr = str1.toLowerCase().split(" ");
    
    for(let i=0;i<strarr.length;i++)
    {
        strarr[i] = strarr[i].charAt(0).toUpperCase() + strarr[i].slice(1);
        
    }
    console.log(strarr.join(" "));
 })(str1);
 
 
 var arr1=[1,5,7,8,11,88,34,29,88];

console.log("=======================================");
console.log("Sum of Array using ananymous Function");
console.log("========================================");
console.log("Input Array:", arr1);

var func_sum = function(arr1)
{
    let sum = 0;
    for(let i of arr1)
    {
    sum+=i;
    }
    return sum;
}
console.log(func_sum(arr1));

console.log("=======================");
console.log("Sum of Array using IIFE");
console.log("=======================");
console.log("Input Array:", arr1);

(function(arr1)
{
    let sum1 = 0;
    for(let i of arr1)
    {
    sum1+=i;
    }
    console.log(sum1);
})(arr1);



var arr1=[1,5,7,8,11,88,34,29,88];
console.log(arr1.length)
var prime_arr=[];
console.log("=============================================");
console.log("Print Prime numbers using ananymous Function");
console.log("=============================================");
console.log("Input Array:", arr1);
var prime_func = function(arr2)
{
    for(let i=0;i<arr2.length;i++)
    {
    prime_arr.push(arr2[i]);
    for(let j=2;j<arr2[i];j++)
    {       
        if(arr2[i]%j==0)
        {   
            prime_arr.pop();         
            break;
        }
    }
}
return prime_arr;
}
console.log(prime_func(arr1));

console.log("=================================");
console.log("Print Prime numbers using IIFE");
console.log("=================================");
console.log("Input Array:", arr1);

prime_arr=[];

var primenum=(function(arr2)
{
    for(let i=0;i<arr2.length;i++)
    {
    prime_arr.push(arr2[i]);
    for(let j=2;j<arr2[i];j++)
    {       
        if(arr2[i]%j==0)
        {   
            prime_arr.pop();         
            break;
        }
    }
}
return prime_arr;
})(arr1);

console.log(primenum);




var arr1=['RACE CAR','HELLO','MALAYALAM','DID','DOCTOR'];
var arr2=['RACE CAR','HELLO','MALAYALAM','DID','DOCTOR'].map((a)=>a.replace(/[\W]/g,""));
//console.log("arr2",arr2);

var palinarr=[];
console.log("=============================================");
console.log("Print Palindrome using ananymous Function");
console.log("=============================================");
console.log("Input Array:", arr1);

var palinfunc = function(arr3)
{
for(let i=0;i<arr1.length;i++)
{
    let revs="";
  for(char of arr3[i].replace(/[\W]/g,""))
  {
    revs = char+ revs;
  }
  if(revs==arr3[i])
    {
        palinarr.push(arr1[i])
    }
}
return palinarr;
}
console.log("Palindrome Array List:");
console.log(palinfunc(arr2));


palinarr = [];
console.log("=============================================");
console.log("Print Palindrome using IIFE");
console.log("=============================================");
console.log("Input Array:", arr1);


console.log("Palindrome Array List:");
console.log((function(arr3)
{
for(let i=0;i<arr1.length;i++)
{
    let revs="";
  for(char of arr3[i].replace(/[\W]/g,""))
  {
    revs = char+ revs;
  }
  if(revs==arr3[i])
    {
        palinarr.push(arr1[i])
    }
}
return palinarr;
}
)(arr2));


var arr1=[1,2,3,4,1,7,9,2,5,3,1,,7,11];
var uniqlist=[];

console.log("=============================================");
console.log("Remove Duplicates using Ananymous Funtion");
console.log("=============================================");

var remdup = function(arr1)
{
    console.log("Input Array List:",arr1);
    for(i in arr1)
    {
        if(arr1.indexOf(arr1[i])==arr1.lastIndexOf(arr1[i]))
        {
            uniqlist.push(arr1[i]);
        }
    }
    return uniqlist;
}
console.log(remdup(arr1));


uniqlist = [] ;
console.log("=============================================");
console.log("Remove Duplicates using IIFE");
console.log("=============================================");
console.log((function(arr1)
{
    console.log("Input Array List:",arr1);
    for(i in arr1)
    {
        if(arr1.indexOf(arr1[i])==arr1.lastIndexOf(arr1[i]))
        {
            uniqlist.push(arr1[i]);
        }
    }
    return uniqlist;
})(arr1));


var arr1 = [1,8,21,82,91,99];
var arr2 = [0,7,9,199,899,1000];
var res= [];
let i=0;
let j=0;

console.log("====================================================");
console.log("Print Median of 2 sorted Arrays using Ananymous func");
console.log("====================================================");
console.log("Input Array1:", arr1);
console.log("Input Array2:", arr2);

var median_sort  = function(a1,a2)
{
    while(i<a1.length && j<a2.length)
    {
        if(a1[i]<a2[j])
        {
            res.push(a1[i])
            i++;
        }
        else
        {
            res.push(a2[j]);
            j++;
            
        }
    }
    
    while(i<a1.length)
    {
        res.push(a1[i++]);
    }
    while(j<a2.length)
    {
        res.push(a2[j++]);
    }
   let reslen = res.length;
   console.log("Sorted Array:", res);
   if(reslen%2!=0)
   {
       let median=Math.floor(reslen/2)+1-1;
       return res[median];
   }
   else
   {
       let n1=Math.floor(reslen/2)+1-1;
       let n2 = Math.floor(reslen/2)-1;
       return (res[n1] + res[n2])/2;
   }
}
median =median_sort(arr1,arr2);
console.log("Median:", median);





console.log("===========================================");
console.log("Print Median of 2 sorted Arrays using IIFE");
console.log("===========================================");
console.log("Input Array1:", arr1);
console.log("Input Array2:", arr2);

let median1 = (function(a1,a2)
{
    while(i<a1.length && j<a2.length)
    {
        if(a1[i]<a2[j])
        {
            res.push(a1[i])
            i++;
        }
        else
        {
            res.push(a2[j]);
            j++;
            
        }
    }
    
    while(i<a1.length)
    {
        res.push(a1[i++]);
    }
    while(j<a2.length)
    {
        res.push(a2[j++]);
    }
   let reslen = res.length;
   console.log("Sorted Array:", res);
   if(reslen%2!=0)
   {
       let median=Math.floor(reslen/2)+1-1;
       return res[median];
   }
   else
   {
       let n1=Math.floor(reslen/2)+1-1;
       let n2 = Math.floor(reslen/2)-1;
       return (res[n1] + res[n2])/2;
   }
})(arr1,arr2);

console.log("Median:", median1);



var arr1 = [1,8,21,82,91,99];
var ktimes = 2;
console.log("====================================================");
console.log("Rotation Of Array using Ananymous func");
console.log("====================================================");
console.log("Input Array1:", arr1);

var arr_rotate = function(n,arr)
{
    for(let r=0;r<n;r++)
    {
    let temp = arr[0];
    for(let i=0;i<arr.length-1;i++)
    {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]=temp;
    }
    console.log(arr);
}
arr_rotate(ktimes,arr1);

arr1 = [1,8,21,82,91,99];
console.log("=============================");
console.log("Rotation Of Array using IIFE ");
console.log("=============================");
console.log("Input Array1:", arr1);

(function(n,arr)
{
    for(let r=0;r<n;r++)
    {
    let temp = arr[0];
    for(let i=0;i<arr.length-1;i++)
    {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]=temp;
    }
    console.log(arr);
})(ktimes,arr1);









 
 