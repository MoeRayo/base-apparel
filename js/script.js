let subscribeButton = document.getElementById("arrow-icon");
let textBox = document.getElementById("email");
let errorText = document.getElementById("error-text");
let errorIcon = document.getElementById("error-icon")
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

subscribeButton.addEventListener('click', function(){
    if (textBox.value == "" || !textBox.value.match(mailFormat)){
        errorText.style.display ="block";
        errorIcon.style.display ="block";

    } else {
        errorText.style.display ="none";
        errorIcon.style.display ="none";
    }
})