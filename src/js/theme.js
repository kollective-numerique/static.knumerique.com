const themeSwitchBtn = document.querySelector('#light-switcher-inpt');
const body = document.querySelector('body');
themeSwitchBtn.addEventListener('click',(e)=>{
    if(body.classList.contains('light')){
        body.classList.remove('light');
    }else{
        body.classList.add('light');
    }
    
})