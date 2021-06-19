let openShareId = document.getElementById("open-share");
let closeShareId = document.getElementById("close-share");
let containerShareId = document.getElementById("share-container");
let copyShareId = document.getElementById("share-copy");
let openSubmitId = document.getElementById("contact-submit-button");
let closeSubmitId = document.getElementById("close-submit");
let containerSubmitId = document.getElementById("submit-container");
let validationNullCheck = document.getElementsByClassName("validation-check")

openShareId.addEventListener("click", openShare);
closeShareId.addEventListener("click", toggleHideShare);
copyShareId.addEventListener("click", copyToClipboard);
openSubmitId.addEventListener("click", validationCheck);
closeSubmitId.addEventListener("click", function() {
    containerSubmitId.classList.toggle("hide-me");
});

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


function validationCheck() {
    containerSubmitId.classList.toggle("hide-me");
    for(let i = 0; i < validationNullCheck.length; i++)
    {
        if(validationNullCheck[i].value == null || validationNullCheck[i].value == "" || validationNullCheck[i].value == "Select...") {
            console.log("Fail") 
        }
            
    }
}
