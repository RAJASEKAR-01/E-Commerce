/*const img=document.getElementById("img");
function set(){
    img.setAttribute("src","ipad.jpg");
}

function clrchange(){
    var input=document.getElementById('in').value;
    document.getElementById("s").style.color=input;

}*
function convert(){
    var invalue=document.getElementById('in').value;
    var inchvalue=invalue/2.54;
    var result=inchvalue;
    document.getElementById("answer").style.color="red";
    document.getElementById("answer").innerHTML=result.toFixed(3)+" inches";
    
}/*
var str1="raja";
var str2="sekar";

console.log(str1.concat(str2));
console.log(str2.repeat(5));
let fname="raja";
let lname="sekar";
let place="tirupur";
console.log(fname+lname+place);
console.log(`${fname}`);


  let num=5;
  let place=["tirupur","chennai","london","tamilnadu"];
  console.log(place[3]);
  for(var i=0;i<place.length;i++){
    console.log(place[i]);
  }
  let number=[[3,4],[6.9],[79,97],[47,8]];
  console.log(number[3][0,1]);
  let alphabets=["a","b","c","d"];
  alphabets.push("f");
  alphabets.pop('f');
  alphabets.shift();
  alphabets.unshift("a");
  alphabets.splice(2,1)
  alphabets.splice(2,1,"c");
  alphabets.splice(2,0,"b");
  alphabets.reverse();
  let arr=alphabets.join();

  console.log(alphabets);
  console.log(arr);
  var a=67;
  /*var b=65;
  var max=a>b?a:b;
  console.log(max);
 function convert(){
  var months=document.getElementById("in").value;
    eval(months);
    var rate=0;
 
    if(eval(months)<=50){
        rate=0.75
    }
    else if(eval(months)>50 && eval(months)<=100){
        rate=1;
    }
    else if(eval(months)>100 && eval(months)<=200) {
        rate=7
    }
    else{
        "go to the ofice"
    }*/
   // let result=document.getElementById("answer");
   // result.innerHTML="your interest rate is"+rate;   

/*var state=document.getElementById("in");
var resultdiv=document.createElement("div");
resultdiv.id="result";
document.getElementById("box").appendChild(resultdiv);
resultdiv.style.backgroundColor="red";
var btn=document.querySelector("button");
btn.addEventListener('click',displaystats);
function displaystats(){
     var city=state.options[state.selectedIndex].value;
     console.log(city);
     let population=0,literacyrate=0,language="";
     switch(city){
        case "tamilnadu":
            population=123678
            literacyrate=678
            language="tamil,english,malayalam"
            break
        case "india":
            population=1245673489
            literacyrate=675678
            language="tamil,english,hindi,telugu,malayalam"
            break
        case "chennai":
            population=12389
            literacyrate=68
            language="tamil,english"
            break
        case "Tirupur":
            population=123789
            literacyrate=78
            language="tamil"
            break

     }
     
     let text=`the city of ${city} has a population ${population},and the language ${language} and the leteracity rate is ${literacyrate}`;

     console.log(text);
     //let result=document.getElementById("answer");
     //result.textContent=text;
    
     document.getElementById("result").innerHTML=text;
    
}
let student={
    name:"rajasekar",
    age:18,
    class:"2nd year",
    dept:"bsc cyber",
    college:{
        place:"saravanampatti",
        city:"tamilnadu",
        district:"coimbatore"
    },
    friends(){
        console.log("dharshan "+"pandi");
    }
}

console.log(student);
 

let student2=new Object;
student2.name="pandi";
student2.age=18;
student2.class="2ndyear";



console.log(student2);
student2.name="dharshan"
console.log(student2["name"]);
console.log(student.college.city);*/
//console.log(student.friends());
/*

let na=document.getElementById("name").value;
let num=document.getElementById("number").value;
let psw=document.getElementById("password").value;


let details={
    studentname:na,
    studentnumber:num,
    studentpassword:psw,
}
//console.log(details);

 let informationdiv=document.createElement("div");
 informationdiv.id="info";
 document.getElementById("border").appendChild(informationdiv);
 var forminfo=document.getElementById("info");

 
forminfo.innerHTML=details.studentname;
//submit.addEventListener('click',studentdetails)
 function studentdetails(){
    console.log(details.studentname);
   
   
 }

 for(var i=0;i<5;i++){
    console.log(i*2+1);
 }
 var j=0;
 while(j<=10){
    console.log(j);
    j++;
 }
 var l=0;
 do{
    console.log(l*2);
    l++;
 }while(l<20);
while(true){
    let num=Number(prompt("enter the number"));
    if(!isNaN(num))
       break;
}
let arr=["raja","dhahan","pandi"];
console.log(arr);
for(let friends of arr)
console.log(friends);
let student={
    name:"rajasekar",
    age:18,
    class:"2nd year",
    dept:"bsc cyber",
    college:{
        place:"saravanampatti",
        city:"tamilnadu",
        district:"coimbatore"
    },
    friends(){
        console.log("dharshan "+"pandi");
    }
}
for(let key in student){
    console.log(student[key]);
}


 var b=document.querySelector("body");
 var btn=document.querySelector("button");
 var hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
 var cn=document.getElementById("colornum");
 function randomhex(){
    let  random=Math.floor(Math.random()*16);
    return hex[random]
    
 }
 btn.addEventListener("click",change);
 function change(){
    let hexcolor="#";
    for(let i=1;i<=6;i++){
        hexcolor+=randomhex();
    }
    b.style.backgroundColor=hexcolor;
    cn.innerHTML=hexcolor;

    
 }
 function ispositive(num){
    return num>0
 }
function facto(n){
    if(n==1)
        return n
    else
      return  n*facto(n-1)
}

let valume=(l,b,h)=>{
    return l*b*h
}
var arr =[1,2,3,4,5,6,7,8,9,];
var sumofarr=arr=>{
    var sum=0
    for( var val of arr){
        sum+=val;
    }
    return sum

}
console.log(sumofarr(arr));


let area=r=>Math.PI*r*r;
console.log(area(5));

let prod=function(...args){
    console.log(args);
}
console.clear();
function* indexgenerator(){
    let index=1;
    while(true){
        yield index++
    }
}
const gen=indexgenerator();
console.log(gen.next(1).value);
console.log(gen.next(1));
console.log(gen.next(1));
console.log(gen.next(1));
console.log(gen.next(1));
console.log(gen.next(1));

function greet(names){
    console.log("hello ",names);
}
function greeth(name){
    const heading=document.querySelector("body").innerHTML="hello"+name;

}
function grethh(callback){
    callback("raja")
}
grethh(greeth)
var arr=[1,4,8,3,9];
arr.forEach(val=>{
    const opt=document.createElement("option");
    opt.textContent=val;
    opt.value=val;  
    document.getElementById("branch").appendChild(opt);
})

let priceus=[20,40,57];
let priceinr=priceus.map(x=>x*83)
console.log(priceinr);
let input=[
    {name:"raja",age:18},
    {name:"pandi",age:18},
    {name:"dharshan",age:18}
  
]
const ages=input.map(x=>x.age)
console.log(ages);
let cost=[22,56,66,33];
let lessthan100=cost.filter(x=>x<50);
console.log(lessthan100);

let costtotal=cost.reduce((total,el)=>total+el,2000);
console.log(costtotal);

let arr=[["a","b","c"],
        ["c","d","e"],
        ["e","f","g"]
    ];
let chectarr=arr.flat().reduce(
    (accumalator,curval)=>{
        if(accumalator[curval]){
            accumalator[curval]++
        }
        else
            accumalator[curval]=1;
        return accumalator

    },{});
    console.log(chectarr);
let a=100;
function func1(x){
    return function(y){
        return x+y
    }
}
let callfunc =func1(5);
let addfunc=callfunc(10);
console.log(addfunc);

let myset=new Set();
myset.add(4);
myset.add(4);
myset.add(5);

console.log(myset.delete(5));
console.log(myset);

console.clear();

*/


var sidenav=document.querySelector(".side-nav");
function shownavbar(){
    sidenav.style.left="0";
}
function closenavbar(){
    sidenav.style.left="-60%";
}
        























