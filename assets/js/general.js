let openShareId = document.getElementById("open-share");
let closeShareId = document.getElementById("close-share");
let containerShareId = document.getElementById("share-container");
let copyShareId = document.getElementById("share-copy");
let copyTextShareId = document.querySelector("#share-modal-text");

openShareId.addEventListener("click", openShare);
closeShareId.addEventListener("click", toggleHideShare);
copyShareId.addEventListener("click", copyToClipboard);

function openShare() {
    document.getElementById("share-modal-text").innerHTML = window.location.protocol + "//" + window.location.host + "/index.html"
    toggleHideShare()
}

function toggleHideShare() {
    containerShareId.classList.toggle("hide-me");
}

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp to help me
function copyToClipboard() {
    document.getElementById("share-modal-text").innerHTML = "<textarea id='myTextArea'>" + window.location.protocol + "//" + window.location.host + "/index.html</textarea>"
    document.getElementById("myTextArea").select();
    document.execCommand("copy");
    document.getElementById("share-modal-text").innerHTML = window.location.protocol + "//" + window.location.host + "/index.html"
    alert("Link copied to clipboard");
}

