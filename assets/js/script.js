//TIMER 

var count = 30;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
}
}, 1000);
var recount = "count - 10";
var L = setL(function(){
    document.getElementById('recount').innerHTML=recount;
  recount--;
})


//buttons 
var solution = "D"
if (SubmitEvent === "D") {
    alert("good job click okay");
} else SubmitEvent !== "D"; {
    clearInterval(interval)
    document.getElementById('recount').innerHTML='Done';
}
    

