const MAX = 280;
let tweet = document.getElementById("tweet");

let sp = document.createElement("span");
sp.id = "counter";
sp.className = "bottomT";
sp.innerHTML = `${MAX} characters left`;
sp.style.color = "#54a3d1";

let tweetBtn = document.getElementById("tweetSubmit");
tweetBtn.setAttribute("disabled", "disabled");
tweetBtn.style.opacity = "40%";

window.onload = () => {
  tweet.focus();
};

tweet.oninput = function () {
  let c = this.value.length;
  let left = MAX - c;
  sp.innerHTML = `${left} characters left`;

  if (left === MAX) {
    tweetBtn.setAttribute("disabled", "disabled");
    tweetBtn.style.opacity = "40%";
    tweetBtn.setAttribute("class", "dis");
    sp.style.color = "#54a3d1";
  } else if (left > 20 && left < MAX) {
    tweetBtn.removeAttribute("disabled");
    tweetBtn.style.opacity = "100%";
    tweetBtn.setAttribute("class", "ena");
    sp.style.color = "#54a3d1";
  } else if (left > 0 && left <= 20) {
    tweetBtn.removeAttribute("disabled");
    tweetBtn.style.opacity = "100%";
    tweetBtn.setAttribute("class", "ena");
    sp.style.color = "gold";
  } else if (left === 0) {
    tweetBtn.removeAttribute("disabled");
    tweetBtn.style.opacity = "100%";
    tweetBtn.setAttribute("class", "ena");
    sp.style.color = "crimson";
  } else {
    tweetBtn.setAttribute("disabled", "disabled");
    tweetBtn.style.opacity = "40%";
    tweetBtn.setAttribute("class", "dis");
    sp.style.color = "crimson";
  }
};

tweet.after(sp);
