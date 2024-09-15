let toastBox = document.getElementById('toast-box');

let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfuly submited';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please check the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';

const createToast = (msg) => {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg
    toastBox.appendChild(toast);

    if(msg.includes('error'))
        toast.classList.add('error');
    if(toast.innerText.includes('Invalid'))
        toast.classList.add('invalid');

    setTimeout(() => {
        toast.remove();
    }, 6000)

}