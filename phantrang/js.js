var as=document.querySelectorAll('#lists li .item')
var left=document.querySelector('#left');
var right=document.querySelector('#right');
var count=0;
as.forEach(a=>a.addEventListener('click',change));
function reset(){
    as.forEach(a=>(a.classList.remove('active')));
}
function change(e){ 
   reset();
    e.target.classList.add('active');
}

function start(){
    as[0].classList.add('active');
}
start()
//>>>>>>>>>
function showright(){
    reset();
    as[count+1].classList.add('active');
    count++;
}
right.addEventListener('click',function(){
    if(count==as.length-1){
        count=-1;
    }
    showright()
})

//<<<<<<<<<
function showleft(){
    reset();
    as[count-1].classList.add('active');
    count--;
}
left.addEventListener('click',function(){
    if(count===0){
        count=as.length;
    }
    showleft();
})
