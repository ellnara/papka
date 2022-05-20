var btn = document.getElementById("open");
var body2 = document.getElementById("body2");
var body = document.getElementById("body");
var btn2=document.getElementById("close");
btn.onclick = function () {
  body2.style.transform = "skew(15deg)";
  body2.style.marginLeft = "94px";
  body2.style.height = "40px";
  body2.style.marginTop = "-56px";
};
btn2.onclick=function(){
body2.style.transform = "skew(0deg)";
  body2.style.marginLeft = "99px";
  body2.style.height = "50px";
  body2.style.marginTop = "-66px";
}
