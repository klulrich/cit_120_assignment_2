var prompter=prompt ("What is your name?");

var billtotal=Number(prompt("What is your bill total?"));
var taxtotal=Number(prompt("What is the tax? (ex. 7%=0.07)"));
var tipAmt=Number(prompt("What are you tipping? (ex. 5%=0.05)"))
var taxanswer=(billtotal*taxtotal)
var taxedbill=(billtotal-taxanswer).toFixed(2)
var tip=(taxedbill*tipAmt).toFixed(2)

document.body.querySelector("#cool").innerHTML=taxedbill;
document.body.querySelector("#cool2").innerHTML=tip;
document.body.querySelector("#lessCool").innerHTML=prompter;