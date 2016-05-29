 var time = setInterval(timer, 100);
function timer() {
var date = new Date();
var timeNow = date.toLocaleTimeString();
document.getElementById("timeNow").innerHTML=Day()+" , "+ timeNow;
}
function Day(){
var day = new Date();
var intDay = day.getDay();
var daysArr = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday"];
var currentDay = daysArr[intDay];
return currentDay;
} 