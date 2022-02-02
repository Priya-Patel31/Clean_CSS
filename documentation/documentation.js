var hamIcon = document.getElementById("hamburg");
var sidebar = document.getElementById("sidebar-mobile");
var isSideBarVisible = false;

var close = false;

function setAttribute() {
  sidebar.setAttribute("style", "display:block");
  sidebar.setAttribute("style", "display:block");
}
hamIcon.addEventListener("click", () => {
  isSideBarVisible
    ? sidebar.setAttribute("style", "display:none")
    : setAttribute();
  isSideBarVisible = !isSideBarVisible;
});

async function runApp() {
  const files = [
    {
      id: "alerts-container",
      source: fetch("../component/alert/alert.html"),
    },
    {
      id: "avatar-container",
      source: fetch("../component/avatar/avatar.html"),
    },
   
    {
      id: "badge-container",
      source: fetch("../component/badge/badge.html"),
    },
    {
      id: "button-container",
      source: fetch("../component/button/button.html"),
    },
    {
      id: "cards-container",
      source: fetch("../component/card/card.html"),
    },
    {
      id: "form-container",
      source: fetch("../component/form/form.html"),
    },
    {
      id: "responsive-image-container",
      source: fetch("../component/image/image.html"),
    }
   
  ];

  const promises = await Promise.allSettled(files.map((e) => e.source));

  for (let i = 0; i < promises.length; i++) {
    const promise = promises[i];
    if (promise.value.status === 200) {
      const component = await (await promise.value).text();
      document.getElementById(files[i].id).innerHTML = component;
     
    }
  }
 
}
runApp();


//THIS COMMENTED PART IS FOR FUTURE REFRENCE AS IT A SECOND WAY OF DOING BY USING FETCH



// fetch("../component/alert/alert.html")
// .then(res => res.text())
// .then(html => document.getElementById("alerts-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/avatar/avatar.html")
// .then(res => res.text())
// .then(html => document.getElementById("avatar-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/badge/badge.html")
// .then(res => res.text())
// .then(html => document.getElementById("badge-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/button/button.html")
// .then(res => res.text())
// .then(html => document.getElementById("button-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/card/card.html")
// .then(res => res.text())
// .then(html => document.getElementById("cards-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/form/form.html")
// .then(res => res.text())
// .then(html => document.getElementById("form-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/image/image.html")
// .then(res => res.text())
// .then(html => document.getElementById("responsive-image-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/lists/lists.html")
// .then(res => res.text())
// .then(html => document.getElementById("lists-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/modal/modal.html")
// .then(res => res.text())
// .then(html => document.getElementById("modal-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/typography/typography.html")
// .then(res => res.text())
// .then(html => document.getElementById("typography-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/rating/rating.html")
// .then(res => res.text())
// .then(html => document.getElementById("rating-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/slider/slider.html")
// .then(res => res.text())
// .then(html => document.getElementById("slider-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/grid-simplified/grid-simplified.html")
// .then(res => res.text())
// .then(html => document.getElementById("grid-simplified-container").innerHTML = html)
// .catch(err => console.log(err));

// fetch("../component/toast/toast.html")
// .then(res => res.text())
// .then(html => document.getElementById("toast-container").innerHTML = html)
// .catch(err => console.log(err));
