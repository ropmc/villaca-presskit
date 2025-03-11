document.addEventListener("DOMContentLoaded", () => {
    var selectElement = document.getElementById('lang-selection');

    selectElement.addEventListener('change', (e) =>{
        if(selectElement.options[selectElement.selectedIndex].value == 'US'){
            window.location.href = '/en.html' 
        } else{
            window.location.href = '/index.html';
        }
    })


})