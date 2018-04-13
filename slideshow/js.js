var dots=document.querySelectorAll('.item');
var left=document.querySelector('#left');
var right=document.querySelector('#right');
var count=0;
dots.forEach(dot=>dot.addEventListener('click',change));


function reset(){
    dots.forEach(dot=>dot.classList.remove('active'));
}

function change(e){
    reset();
    e.target.classList.add('active');
}
function strat(){
    dots[0].classList.add('active');
}
strat();

function showright(){
    reset()
    dots[count+1].classList.add('active');
    count++;

}
right.addEventListener('click',function(){
    if(count==dots.length-1){
        count=-1;
    }
    showright()
})
setInterval(function(){
    if(count==dots.length-1){
        count=-1;
    }
    showright()
},3000)

function showleft(){
    reset();
    dots[count-1].classList.add('active');
    count--;
}

left.addEventListener('click',function(){
    if(count===0){
        count=dots.length;
    }
    showleft();
})





