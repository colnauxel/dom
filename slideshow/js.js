var dots=document.querySelectorAll('.item');
var left=document.querySelector('#left');
var right=document.querySelector('#right');
var listImg=document.querySelector('.slideWarp');
var count=0;
var img=0;
dots.forEach(dot=>dot.addEventListener('click',change));

//lis dost and next,prev
function reset(){
    dots.forEach(dot=>dot.classList.remove('active'));
}
function change(e){
    reset();
    e.target.classList.add('active');
    
    
}

function strat(){
    dots[0].classList.add('active');
    listImg.style.left='-'+0*1000+'px';
}
strat();
function showright(){
    reset()
    dots[count+1].classList.add('active');
    listImg.style.left='-'+(count+1)*1000+'px';
    count++;

}
right.addEventListener('click',function(){

    if(count==dots.length-1){
        count=-1;
    }
    showright()
})
//auto slideshow
// setInterval(function(){
//     if(count==dots.length-1){
//         count=-1;
//     }
//     showright()
// },3000)
function showleft(){
    reset();
    dots[count-1].classList.add('active');
    listImg.style.left='-'+(count-1)*1000+'px';
    count--;
}
left.addEventListener('click',function(){
    if(count===0){
        count=dots.length;
    }
    showleft();
})
//list img










