var username=document.getElementById('username');
var password=document.getElementById('password');
var password_comfirm=document.getElementById('passwordcomfirm');

var err_user=document.getElementById('err_user');
var err_pass=document.getElementById('err_pass');
var err_pass_cf=document.getElementById('err_pass_cf');

var submit=document.getElementById('submit');

submit.addEventListener('click',check)


function check(e){
  
    e.preventDefault();
    var error=new Map();
    error.set(password,'');
    error.set(username,'');
    error.set(password_comfirm,'');
    if(username.value==''){
        error.set(username,'username null')
        // console.log('username null');
    }
       

    if(password.value==''){
        error.set(password,'password null')
        // console.log('password null');
        
    }
    if(password.value!=password_comfirm.value){
        error.set(password_comfirm,'password_comfirm null')
        // console.log('password_comfirm error');
        
    }
    
     err_user.innerHTML='<li>'+error.get(username)+'</li>';
     err_pass.innerHTML='<li>'+error.get(password)+'</li>';
    //  console.log(error.get(password_comfirm))
     err_pass_cf.innerHTML='<li>'+error.get(password_comfirm)+'</li>';
   
    //  err.style.color='red';
   
    
}

