'use strict'
// enter button functionality
    document.getElementById('mainbutton').addEventListener('click',()=>{
       
           $('body').empty();
           game();
      
          
    })
    document.getElementById('mainbutton').addEventListener('touch',()=>{
       
        $('body').empty();
        game();
   
       
 })
    document.body.addEventListener('keydown',(e)=>{
        if(e.key =="Enter" && document.getElementById('mainbutton')!=null){
        $('body').empty();
        game();
       }
     })
     
    // main game function
    function game()
    {
        $('body').empty();
        bodyflexchange();
        let score = 0;
        // creating status bar
         let statusbar = document.createElement('div');
         statusbar.id ='gamestatus';
         document.body.appendChild(statusbar);
           
            // creatiing score
            let scorediv = document.createElement('div');
            scorediv.id ='score'
            statusbar.appendChild(scorediv);
            scoremaker(scorediv);
            
        // creating another div our main game board
        let board = document.createElement('div');
        board.id = 'board'
        document.body.appendChild(board);



        let player2 = document.createElement('div')
        player2.id = 'play2'
        board.appendChild(player2);
        $('#play2').top = board.getBoundingClientRect().height-player2.getBoundingClientRect().height;


        var leftarrowpressed = false;
        var rightarrowpressed = false;
        var mousemove = false;
        board.addEventListener('mousedown',function(){
           mousemove = true
        })
        board.addEventListener('mouseup',function(){
            mousemove = false
        })
        board.addEventListener('touchstart',function(){
            mousemove = true
         })
         board.addEventListener('touchend',function(){
             mousemove = false
         })
        window.addEventListener('keydown',(e)=>{
            if(e.key ==="ArrowRight")
            rightarrowpressed = true;
            else if(e.key === "ArrowLeft")
            {
                leftarrowpressed = true;
            }
        })
        window.addEventListener('keyup',(e)=>{
            if(e.key ==="ArrowRight")
            rightarrowpressed = false;
            else if(e.key === "ArrowLeft")
            {
                leftarrowpressed = false;
            }
        })


        //creatign ball
       let ball = document.createElement('div');
       ball.id ='balle'
        board.appendChild(ball)
    
        let intial =0;
        let speedx =0.8
        let speedy =0.8
        let speed = 10
        gameloop();
        function gameloop()
        {
            let coordinates = board.getBoundingClientRect();
            let playercoordinate= player2.getBoundingClientRect();
            if(coordinates.width<400)speed = 4
            if(rightarrowpressed && player2.offsetLeft<coordinates.width-playercoordinate.width-10)
            {
               player2.style.left=intial+"px";
               intial+=speed;
            }
            else if(leftarrowpressed && player2.offsetLeft>5)
            {
                player2.style.left=intial+"px";
               intial-=speed;
            }
            board.addEventListener('mousemove',function(event){
                if(mousemove)
                {
                    player2.style.left = Math.max(Math.min(event.clientX,coordinates.width-playercoordinate.width/2-7)-10,playercoordinate.width/2+7)-playercoordinate.width/2+'px';
                }
            })
            board.addEventListener('touchmove',function(event){
                if(mousemove)
                {
                    player2.style.left = Math.max(Math.min(event.touches[0].clientX,coordinates.width-playercoordinate.width/2-7)-10,playercoordinate.width/2+7)-playercoordinate.width/2+'px';
                }
            })
            $('#balle').css({
                'top':$('#balle').position().top +speedy+'px',
                'left':$('#balle').position().left +speedx+'px'
            })
            if($('#balle').position().top <=3)speedy*=-1;
            if($('#balle').position().left <=3 || $('#balle').position().left >= coordinates.width-22 )speedx*=-1;
            if($('#balle').position().left>=$(player2).position().left  && $('#balle').position().left<=$(player2).position().left+$(player2).width()){
               if($('#balle').position().top>=$(player2).position().top-playercoordinate.height)
               {
                $('#balle').top = $(player2).position().top-21
                 speedy*=-1
                 score++;
               }
            }
            if($('#balle').position().top >= coordinates.height-22){score =0;gameover();return;}
            if(speedx<0)speedx-=0.0005;
            else speedx+=0.0005
            
            if(speedy<0)speedy-=0.00015;
            else speedy+=0.00015
            scorediv.innerText =`Score-${score}`
            requestAnimationFrame(gameloop);
        }
       
       
    }
    



function gameover()
{
    
    $('body').empty();
    var restart = document.createElement('div')
    $(restart).css({
        "position":'absolute',
        'align-self':'center',
        'top':'30%',
        'width':'40vw',
        'height':'35vh',
        'background':'transparent',
        'backdrop-filter':'blur(10px)',
        'display':'flex',
        'padding':'15',
        'flex-direction':'column',
        'justify-content':'space-between',
        'align-items':'center'
    })
    $(restart).html("<p id='gameover'>GAME OVER</p><div id ='rb'>Restart</div>")
    
   document.body.appendChild(restart)
    document.querySelector('#rb').addEventListener("click",function(){
        $(this).css({'box-shadow':'0 0 5px white'});
        game();
        })


}


// body flex direction change function
function bodyflexchange()
{
    document.body.style.flexDirection ='column';
    document.body.style.justifyContent ='start';
    document.body.style.alignItems ='center';
}

//creating score
function scoremaker(scorediv)
{
    scorediv.style.display ='transparent'
    scorediv.style.fontSize ='xx-large'
    scorediv.style.color ='white'
    scorediv.innerText ="Score - 0"
    scorediv.style.marginLeft = 10 +'px'
}

