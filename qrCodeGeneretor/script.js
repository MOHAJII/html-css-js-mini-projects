let inputQr = document.getElementById('input-qr');
let qrBox = document.getElementById('qr-box');
let imgQr = document.getElementById('img-qr')

const generateQrCode = () => {
    if (inputQr.value.length > 0) {
        imgQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputQr.value;
        qrBox.classList.add('show-img');
    } else {
        inputQr.classList.add('error');
        setTimeout(() => {
            inputQr.classList.remove('error')
        }, 1000);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')
        generateQrCode();
    else
        inputQr.focus();
})