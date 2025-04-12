// let df = document.querySelectorAll("li");
// // console.log(df);
// df.forEach(
//   (myFunction = (element) => {
//     // console.log(e);
//     element.addEventListener(
//       "click",
//       (myFun = (e) => {
//         console.log(e.target);

//         // e.target.style.textDecoration = "line-through";
//         e.target.remove();
//       })
//     );
//   })
// );

let cc = document.querySelector("ul");
let btn = document.querySelector(".clickMe");

btn.addEventListener("click", function () {
  let created = document.createElement("li");
  created.textContent = "something new";
  //   cc.append(created);        //~last me add hoga
  cc.prepend(created); //~ top me add hoga
});

const box = document.getElementById("hoverBox");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "black";
  box.style.color = "white";
});

box.addEventListener("mouseout", () => {
  box.style.color = "black";
  box.style.backgroundColor = "white";
});

let keyDown = document.querySelector("#keydown");
keyDown.addEventListener("keydown", (e) => {
  alert(`key down ${e.key}`);
});

window.addEventListener("load", () => {
  alert("Page fully loaded!");
});

let on = document.querySelector(".bulb_on");
let im = document.querySelector("#myImage");
let off = document.querySelector(".bulb_off");

on.addEventListener("click", () => {
  im.src = "pic_bulbon.gif";
});

off.addEventListener("click", () => {
  im.src = "pic_bulboff.gif";
});
