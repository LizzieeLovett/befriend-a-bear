// general.js variables
let openShareId = document.getElementById("open-share");
let closeShareId = document.getElementById("close-share");
let containerShareId = document.getElementById("share-container");
let copyShareId = document.getElementById("share-copy");

// general.js event listeners
openShareId.addEventListener("click", openShare);
closeShareId.addEventListener("click", toggleHideShare);
copyShareId.addEventListener("click", copyToClipboard);

// general.js functions
// openShare opens a modal which is populated using the url of the page
function openShare() {
  let str = window.location.pathname;
  let newStr = str.replace("index", "");
  newStr = newStr.replace("contact", "");
  newStr = newStr.replace("404", "");
  newStr = newStr.replace(".html", "");
  document.getElementById("share-modal-text").innerHTML = window.location.protocol + "//" + window.location.host + newStr;
  toggleHideShare();
}

// toggleHideShare toggles the visibility of the share modal.
function toggleHideShare() {
  containerShareId.classList.toggle("hide-me");
}

// copyToClipboard copies the url printed in openShare to the clipboard and creates an alert for the user.
// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp used to create function
function copyToClipboard() {
  let str = window.location.pathname;
  let newStr = str.replace("index", "");
  newStr = newStr.replace("contact", "");
  newStr = newStr.replace("404", "");
  newStr = newStr.replace(".html", "");
  document.getElementById("share-modal-text").innerHTML = "<textarea id='myTextArea'>" + window.location.protocol + "//" + window.location.host + newStr + "</textarea>";
  document.getElementById("myTextArea").select();
  document.execCommand("copy");
  document.getElementById("share-modal-text").innerHTML = window.location.protocol + "//" + window.location.host + newStr;
  alert("Link copied to clipboard");
}