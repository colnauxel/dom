
var itemList=document.getElementById('items');
var form=document.getElementById('addForm');
var filter=document.getElementById('filter');


form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItem);
function addItem(e){
    e.preventDefault();

    //get input value
    var dataInput=document.getElementById('item').value;
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    // //add tex node with data input
     li.appendChild(document.createTextNode(dataInput));

   //create new button element
   var button=document.createElement('button');
   //add class button
   button.className='btn btn-danger btn-sm float-right delete'
    //add text button
    button.appendChild(document.createTextNode('X'));
    
    li.appendChild(button);

    itemList.appendChild(li);
    
}
function removeItem(e){
   if(e.target.classList.contains('delete')){
       if(confirm('are you sure?')){
           var li=e.target.parentElement;
            itemList.removeChild(li);
       }
   }
}


function filterItem(e){
    var text =e.target.value.toLowerCase();
    //GET list
    var items=itemList.getElementsByTagName("li");
  //convert to an array
  Array.from(items).forEach(function(item){
        var itemName=item.textContent;
        // console.log(itemName);
        
        if(itemName.toLocaleLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
        
  });
    
}
// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework.`);
//     callback();
//   }
  
//   doHomework('math', function() {
//     alert('Finished loc my homework');
//   });