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
    //containerShareId.classList.toggle("hide-me");
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
    let failCheck
    for(let i = 0; i < validationNullCheck.length; i++)
    {
        if(validationNullCheck[i].value == null || validationNullCheck[i].value == "" || validationNullCheck[i].value == "Select..." || validationNullCheck[i].validity.typeMismatch) {
            failCheck = "Fail"
        } 
    }
    if (failCheck=="Fail") {
        event.preventDefault()
        document.getElementById("submit-modal-text").innerHTML = "Sorry, something on your form doesn't look right. Please review your answers and try to submit again."
    } else {
        document.getElementById("submit-modal-text").innerHTML = "Thank you for your submission! We'll be in contact with you regarding your message as soon as we can."
    }
    return false
}
