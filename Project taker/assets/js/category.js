const dropdo_item=document.getElementById('dropdo_item');
const category_side=document.getElementById('category_side');
if(window.outerWidth<750){
    category_side.classList.add('displayNone');
    category_side.classList.add('ctgs')
}
dropdo_item.addEventListener('click',()=>{
   
        if(category_side.classList.contains('displayNone')){
            category_side.classList.remove('displayNone');
            category_side.classList.add('displayBlock')
        }else{
            category_side.classList.remove('displayBlock');
            category_side.classList.add('displayNone');
        }
    
})