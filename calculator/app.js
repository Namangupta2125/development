var displaytext = document.querySelector('.display');
var expression =""
var button = document.querySelectorAll('.nbtn');
var opbutton = document.querySelectorAll('.obtn');
//adding mouse events for number and dot button
button.forEach(
    (item)=>{
        item.addEventListener('mousedown',event=>{
           item.style.boxShadow = '0px 0px 6px black inset '
           console.log(item.innerHTML)
           if(item.innerHTML =="AC")
           expression ="";
           else if(item.id =="backspace")
           expression = expression.slice(0,-1);
           else if(item.id =='Exp')
           expression = expression+"**";
           else
           expression+=item.innerHTML;
           displaytext.value = expression
        })
    }
)
button.forEach(
    (item)=>{
        item.addEventListener('mouseup',event=>{
           item.style.boxShadow = 'none'
        })
    }
)
button.forEach(
    (item)=>{
        item.addEventListener('mouseout',event=>{
           item.style.boxShadow = 'none'
        })
    }
)
// adding keyboard enter control
document.addEventListener("keydown",function(event){
    if(event.key =="Enter")
    expression = eval(expression).toString();
    else if(event.key =="Backspace")
    expression = expression.slice(0,-1);
    else if(event.key>="0" && event.key<="9" ||(event.key=="+")||(event.key=="-")||(event.key=="*")||(event.key=="/"))
    expression+=event.key;
       displaytext.value= expression
})
//  adding mouse event for operations button
opbutton.forEach(
    (item)=>{
        item.addEventListener('mousedown',event=>{
           item.style.boxShadow = '0px 0px 6px black inset '
           if(item.innerHTML == "=")
           expression = eval(expression).toString();
           else
           expression+=item.innerHTML;
           displaytext.value= expression
        })
    }
)
opbutton.forEach(
    (item)=>{
        item.addEventListener('mouseup',event=>{
           item.style.boxShadow = 'none'
        })
    }
)
opbutton.forEach(
    (item)=>{
        item.addEventListener('mouseout',event=>{
           item.style.boxShadow = 'none'
        })
    }
)

