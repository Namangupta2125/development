let showform = '';
let titlesarray =[]
let audio1 = new Audio("./door openeing.mp3")
let audio2 = new Audio("./door closing.mp3")
let erroraudio =new Audio("./error.wav");
let clickaudio = new Audio("./clk.wav");
let editform = false;
let aboutclick = false;
let searchfunctionality = false;
function fillform()
{
    document.getElementById("inputform").style.display="flex"
    document.getElementById('mainbody').style.opacity ='0.2'
    showform = true;
    document.getElementById('inputtitle').focus();

}
function clearingform()
{
    document.getElementById("inputtitle").value =""
    document.getElementById("desc").value =""
    document.getElementById("startingdatetime").value =""
    document.getElementById("endingdatetime").value =""
}
function scrollscreen(display)
{
    
}
function showlist(ans)
{
    document.getElementById('list').innerHTML ="";
    let count = 0;
    titlesarray.forEach(element=>{
        if(element.includes(ans))
        {
            let li = document.createElement('li');
            li.innerText = element;
            if(count ==0 && count==titlesarray.length-1)
            {
                li.style.borderRadius ="5px 5px 5px 5px "
            }
            else if(count ==0)
            {
                li.style.borderRadius ="5px 5px 0  0"
            }
            else if(count == titlesarray.length-1)
            {
                li.style.borderRadius ="5px 5px 0  0"
            }
            else
            li.style.borderRadius = "0"
            document.getElementById('list').appendChild(li);
            li.addEventListener('click',function()
            {
                document.getElementById('searcharea').value = li.innerText;
                document.getElementById('list').innerHTML ="";
            })
        }
        count++;

    })
}
function creatediv(title,stdate,enddate,description){   
    // adding data to title array
      titlesarray.push(title);
    //date
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;  
    // creating all elements and entering there data   
   let maindiv = document.createElement('div');maindiv.classList.add('box');maindiv.id='box1' // main box
   let f0 = document.createElement('h1');f0.innerText = title;// title of card
   let hr = document.createElement('hr');hr.id ='hr';
   let f1=document.createElement('span');f1.id ="span1";f1.innerText ="TimeLine :-"; // timeline heading span
   let f2=document.createElement('div');f2.id='time1';f2.classList.add('time'); //timearea
   let f3=document.createElement('div');f3.id='startdate1';f3.classList.add('startdate');f3.innerText =stdate; //start date area inside time area
   let f4=document.createElement('span') //;f4.innerText='Start Date'; //inside start date area end
   let f5=document.createElement('div');f5.classList.add('imageArrow');f5.id='imageArrow1'; // arrow image inside time area
   let image=document.createElement('img');image.src='./logoimages/two-arrows.png'; // arrow image inside image arrow classList.add   
   let f6=document.createElement('div');f6.classList.add('enddate');f6.id='enddate1';f6.innerText =enddate; // end date area inside time area
   let f7=document.createElement('span') //;f7.innerText='End Date'; // inside end date area
   let f8=document.createElement('div');f8.classList.add('description'); //inside main div
   let f9=document.createElement('span');f9.id='description1'; f9.innerText='Description :- '; // inside descrption area
   let f10=document.createElement('div');f10.id='description2'; f10.classList.add('description2');f10.innerText =description; // inside main div
   let f11=document.createElement('div');f11.classList.add('last');f11.id='last1'; // system date
   let f12=document.createElement('div');f12.classList.add('date');f12.id='date1';
   let f13 = document.createElement('h6');f13.innerText='Created on :- ';  
   let f14 = document.createElement('span');f14.innerText =currentDate;f14.style.marginTop=5+'px';
   let f15 = document.createElement('div');f15.classList.add('custom');
   let but1 = document.createElement('button');but1.id ="but1"
  
   but1.addEventListener('click',function(event){
    fillform();event.stopPropagation();
    editform = [f0,f3,f6,f10];
    document.getElementById('inputtitle').value = title;
    document.getElementById('startingdatetime').value = stdate;
    document.getElementById('endingdatetime').value = enddate;
    document.getElementById('desc').value = description;
    document.getElementById('back').style.opacity = "0"
   })
   let but2 = document.createElement('button');but2.id ="but2"
   but2.addEventListener('click',function(){
    titlesarray = titlesarray.filter((element)=>{
        return element!=title;
    })
    clearingform()
    maindiv.remove();
   })
   // appending all child
   maindiv.appendChild(f0);
   maindiv.appendChild(hr)
   maindiv.appendChild(f1);
   maindiv.appendChild(f2);
   f2.appendChild(f3);
   f3.appendChild(f4);
   f2.appendChild(f5);
   f5.appendChild(image);
   f2.appendChild(f6);
   f6.appendChild(f7);
   maindiv.appendChild(f8);
   f8.appendChild(f9);
   f8.appendChild(f10);
   maindiv.appendChild(f11);
   f11.appendChild(f12);
   f12.appendChild(f13);
   f12.appendChild(f14);
   f11.appendChild(f15);
   f15.appendChild(but1)
   f15.appendChild(but2)
    return maindiv
}


// event listeners
document.getElementById("newbutton").addEventListener('click',event=>{
   clickaudio.play();
   document.getElementById('back').style.opacity ='0'
    fillform(); event.stopPropagation();
   
})
document.querySelector('#mainbody').addEventListener('click',()=>{
    if(showform)
    {
        clickaudio.play();
        document.getElementById("inputform").style.display="none"
        document.getElementById('mainbody').style.opacity ='1'
        showform = false
    }
})
document.getElementById("clearbutton").addEventListener('click',()=>{
    clearingform();
    clickaudio.play();
    document.getElementById('back').style.opacity ='1'

})
document.getElementById("cancelbutton").addEventListener('click',()=>{
    clickaudio.play();
    document.getElementById("inputform").style.display="none"
    document.getElementById('mainbody').style.opacity ='1'
    document.getElementById('back').style.opacity ='1'
 
    showform=false;
})

document.getElementById("savedata").addEventListener('click',()=>{
    if(editform ==''){
    if(document.querySelector('#inputtitle').value != ''){
        clickaudio.play();
    document.getElementById("inputform").style.display="none"
    document.getElementById('mainbody').style.opacity ='1'
    document.getElementById('back').style.opacity ='1'
    showform=false;
    let newdiv = new creatediv(document.querySelector('#inputtitle').value,document.querySelector('#startingdatetime').value,document.querySelector('#endingdatetime').value,document.querySelector('#desc').value);
    
    document.querySelector('.cardsarea').appendChild(newdiv)
   }
    else{
        erroraudio.play()
        document.getElementById('back').style.opacity ='1'
    }}
    else{
        if(document.querySelector('#inputtitle').value != ''){
            clickaudio.play();
       editform[0].innerText = document.getElementById('inputtitle').value;
       editform[1].innerText = document.getElementById('startingdatetime').value;
       editform[2].innerText = document.getElementById('endingdatetime').value;
       editform[3].innerText = document.getElementById('desc').value;
       document.getElementById("inputform").style.display="none"
        document.getElementById('mainbody').style.opacity ='1'
        document.getElementById('back').style.opacity ='1'
        showform=false;
        editform =''}
        else{
            erroraudio.play()
           document.getElementById('back').style.opacity ='1'
        }
        
    }
    clearingform()
    
})

document.querySelector("#deleteall").addEventListener('click',function(){
    clickaudio.play();
    titlesarray=[];
    document.querySelectorAll("#box1").forEach(element=>{
        element.remove();
    })
})

document.querySelector('#aboutus').addEventListener('click',()=>{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.querySelector('body').style.overflow ="hidden"
    if(aboutclick == false){
    audio1.play();aboutclick = true;}
    document.getElementById('baap').style.rotate = '-22.5deg'
})

document.getElementById('searcharea').addEventListener('input',function()
{
    if(this.value !='')
    {
        searchfunctionality = true
        showlist(this.value)
    }
    else{
        document.getElementById('list').innerHTML ="";
    }
})
document.getElementById('back').addEventListener('click',function()
{
    document.querySelector('body').style.overflow ="visible"
    audio2.play()
    document.getElementById('baap').style.rotate = '0deg'
    aboutclick = false
})
document.querySelector('#homebutton').addEventListener('click',function(){
    if(aboutclick == true){
        document.querySelector('body').style.overflow ="visible"
    audio2.play()
    document.getElementById('baap').style.rotate = '0deg'
    aboutclick = false}
})
document.getElementById('searchbarid').addEventListener('click',function()
{
    let distance;
    let blinkbox;
    
    document.querySelectorAll('.box h1').forEach(element=>{
      
       if(element.innerText == document.querySelector('#searcharea').value)
       {
          blinkbox = element.parentElement
         distance = element.parentElement.getBoundingClientRect();
           return
       }
      
   })
   blinkbox.scrollIntoView();
   if(distance.top<=20)
   window.scrollBy(0,-100);
    blinkbox.style.opacity = "0.2";
    setTimeout(() => {
        blinkbox.style.opacity = "1";
    }, 700);
    document.getElementById('searcharea').value = '';
    searchfunctionality = false;

})

