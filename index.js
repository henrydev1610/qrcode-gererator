const wrapper = document.querySelector('.wrapper')
const qrInput = document.querySelector('.form input')
const geradorBtn = wrapper.querySelector('.form button')
const qrImg = wrapper.querySelector('.qr-code img')

geradorBtn.addEventListener('click',()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    //api qrcode https://goqr.me/api/
    qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`

    wrapper.classList.add('active') // cria uma nova div alternativa aonde gera o qr-code 
     
});