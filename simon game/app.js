let gameseq =[];
let userseq = [];
let color = ["yellow","green","blue","red"];
let level =0;
let started = false;
function levelup()
{
    level++;
    userseq.splice(0,userseq.length);

    document.querySelector('h2').innerText = `Level ${level}`;
    let randomcolor = Math.floor(Math.random()*4)
    btnflash(color[randomcolor]);
    gameseq.push(color[randomcolor]);
    
}

function btnflash(btn) // do button flashes
{
   document.getElementById(btn).style.opacity ="0.2";
   setTimeout(()=>{
    document.getElementById(btn).style.opacity ="1";
   },200)
}
function checkans(indx)
{
    if(userseq[indx] == gameseq[indx])
    {
        if(indx == gameseq.length-1)
        {
            setTimeout(function(){levelup()},1000);
        }
    }
    else{
        document.querySelector('h2').innerText ="game over push any button to play again"
        level = 0;
        // started = false;
        userseq = [];
        gameseq =[];
        setTimeout(function(){started = false},1000)
    }
}

function userflash(){
    btnflash(this.id);
    userseq.push(this.id);
    checkans(userseq.length-1);
}

// event listeners
document.addEventListener('click',function(){
    if(started == false)
    {started = true;levelup();}
})
let userbtn = document.getElementsByClassName('color');
for(let i of userbtn)
{
    i.addEventListener('click',userflash);
}