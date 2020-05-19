let subscribeButton = document.getElementById("arrow-icon");
let textBox = document.getElementById("email");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// console.log("yay");
subscribeButton.addEventListener("click",function(){
    if (textBox.target.value===1){
console.log("yay");

                // emailInput.style.border = 'thin solid green';
                // errorMsg.style.display = 'none';
                // successMsg.style.display = 'block';
                // emailInput.value = '';
            } else{
                // emailInput.style.border ='thin solid red';
                // errorMsg.style.display = 'block';
                // successMsg.style.display ='none';
                // emailInput.value = 'example@email/com';
console.log("no");

            }
})

// emailInput.addEventListener('blur',($event)=>{
//     if ($event.target.value.match(mailFormat)){
//         emailInput.style.border = 'thin solid green';
//         errorMsg.style.display = 'none';
//         successMsg.style.display = 'block';
//         emailInput.value = '';
//     } else{
//         emailInput.style.border ='thin solid red';
//         errorMsg.style.display = 'block';
//         successMsg.style.display ='none';
//         emailInput.value = 'example@email/com';
//     }
// });