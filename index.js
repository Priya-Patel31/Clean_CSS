var hamIcon = document.getElementById("hamburg");
var sidebar = document.getElementById("sidebar-mobile");
var close = document.getElementById("close");

var isSideBarVisible = false;

var isClose = false;

function toggle(){
    (isSideBarVisible) ? sidebar.setAttribute("style", "display:none") : sidebar.setAttribute("style","display:block")
    isSideBarVisible = !isSideBarVisible;
    (isClose) ? close.setAttribute("style", "display:none") : close.setAttribute("style","display:block")
    isClose = !isClose  ;
}
hamIcon.addEventListener("click", toggle);

close.addEventListener("click",toggle);

