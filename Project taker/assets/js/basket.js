const basket = document.getElementById('basket');
const popUp=document.getElementById('pop_up');
const remove=document.getElementById('close');
basket.addEventListener('click',function checkDisplay(e){
    e.preventDefault()
   
    if(popUp.classList.contains('displayNone')){
        popUp.classList.remove('displayNone');
        popUp.classList.add('displayBlock')
    }else{
        popUp.classList.remove('displayBlock');
        popUp.classList.add('displayNone');
    }

});
remove.addEventListener('click',function remove(e){
   e.preventDefault();
   popUp.classList.remove('displayBlock');
   popUp.classList.add('displayNone');
})