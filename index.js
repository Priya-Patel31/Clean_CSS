var hamIcon = document.getElementById("hamburg");
var sidebar = document.getElementById("sidebar-mobile");
var isSideBarVisible = false;

var close = false;

function setAttribute(){
    sidebar.setAttribute("style", "display:block");
    sidebar.setAttribute("style","display:block")
}
hamIcon.addEventListener("click", () => {
   (isSideBarVisible) ? sidebar.setAttribute("style", "display:none") : setAttribute()
    isSideBarVisible = !isSideBarVisible;
});

