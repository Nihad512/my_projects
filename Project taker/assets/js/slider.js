const rightSlider=document.getElementById('slide_right');
const leftSlider=document.getElementById('slide_left');
const slide=document.querySelectorAll('.comments');
/* var firstSlider=document.querySelector('.first_cm').getBoundingClientRect().left;
var firstValueSLider=document.querySelector('.first_cm').getBoundingClientRect().left;

var secondSlider=document.querySelector('.second_cm').getBoundingClientRect().left;
var secondValueSLider=document.querySelector('.second_cm').getBoundingClientRect().left;

var thirdSlider=document.querySelector('.thirt_cm').getBoundingClientRect().left;
var thirdValueSLider=document.querySelector('.thirt_cm').getBoundingClientRect().left;

var fourthSlider=document.querySelector('.fourth_cm').getBoundingClientRect().left;
var fourthValueSLider=document.querySelector('.fourth_cm').getBoundingClientRect().left; */
var firstSlider=-300;
var firstValueSLider=-300;

var secondSlider=-200;
var secondValueSLider=-200;

var thirdSlider=0;
var thirdValueSLider=0;

var fourthSlider=1150;
var fourthValueSLider=1150;
function increasingChecker() {
    if (firstSlider==firstValueSLider+300) {
        firstValueSLider=firstSlider;
    }
    if (secondSlider==secondValueSLider+300) {
        secondValueSLider=secondSlider;
    }
    if (thirdSlider==thirdValueSLider+300) {
        thirdValueSLider=thirdSlider;
    }
    if (fourthSlider==fourthValueSLider+300) {
        fourthValueSLider=fourthSlider;
    }
    
}
function decreasingChecker() {
    if (firstSlider==firstValueSLider-300) {
        firstValueSLider=firstSlider;
    }
    if (secondSlider==secondValueSLider-300) {
        secondValueSLider=secondSlider;
    }
    if (thirdSlider==thirdValueSLider-300) {
        thirdValueSLider=thirdSlider;
    }
    if (fourthSlider==fourthValueSLider-300) {
        fourthValueSLider=fourthSlider;
    }
}
rightSlider.addEventListener('click', function nihad(){

 let myvar= setInterval(function changer() {
        if (firstSlider<firstValueSLider+300) {
            firstSlider++;
            document.querySelector('.first_cm').style.left=firstSlider+'px';
           
        }
        if (secondSlider<secondValueSLider+300) {
            secondSlider++;
            document.querySelector('.second_cm').style.left=secondSlider+'px';
           
        }
        if (thirdSlider<thirdValueSLider+300) {
            thirdSlider++;
            document.querySelector('.thirt_cm').style.left=thirdSlider+'px';
           
        }
        if (fourthSlider<fourthValueSLider+300) {
            fourthSlider++;
            document.querySelector('.fourth_cm').style.left=fourthSlider+'px';
           
        }
        else{
            increasingChecker()
            clearInterval(myvar);
            return;
           
        }
       
    },2);
  
   
});
leftSlider.addEventListener('click',()=>{

    let myvar= setInterval(function changer() {
        if (firstSlider>firstValueSLider-300) {
            console.log(firstSlider);
            firstSlider=firstSlider-1;
            document.querySelector('.first_cm').style.left=firstSlider+'px';
           
        }
        if (secondSlider>secondValueSLider-300) {
            secondSlider=secondSlider-1;
            document.querySelector('.second_cm').style.left=secondSlider+'px';
           
        }
        if (thirdSlider>thirdValueSLider-300) {
            thirdSlider=thirdSlider-1;
            document.querySelector('.thirt_cm').style.left=thirdSlider+'px';
           
        }
        if (fourthSlider>fourthValueSLider-300) {
            fourthSlider=fourthSlider-1;
            document.querySelector('.fourth_cm').style.left=fourthSlider+'px';
           
        }
        else{
            decreasingChecker()
            clearInterval(myvar);
            return;
           
        }
       
    },2);
})