var player='X'
var cnt=0;
var result=""
var flg=1

function restart(){
    
    var arr= ['b1', 'b2', 'b3','b4', 'b5', 'b6','b7', 'b8', 'b9']
    for(i=0; i<9;i++){
        let z=document.getElementById(arr[i]).innerText="";
        let x=document.getElementById(arr[i]).style.color="black"
    }
    flg=1;
    document.getElementById("res").innerText=""
    cnt=0;
}
function game(val)
{
    if(flg===1){
    var b=document.getElementById(val)
    
    if(player==='X'  && !b.textContent){
        b.innerText=player;
        b.style.color="red";
        player='O'
    }
    else if(player==='O' && !b.textContent){

        b.innerText=player;
        player='X'
    }
    else{
        return;
    }
    cnt++;
    checkwin();
   
    console.log(cnt)
    if(cnt===9){
        result="It is Tie";
        document.getElementById("res").innerText=result
        flg=0;
        cnt=0;
    }
}
}
 

function checkwin(){
    const winningCombinations = [
        ['b1', 'b2', 'b3'],
        ['b4', 'b5', 'b6'],
        ['b7', 'b8', 'b9'],
        ['b1', 'b4', 'b7'],
        ['b2', 'b5', 'b8'],
        ['b3', 'b6', 'b9'],
        ['b1', 'b5', 'b9'],
        ['b3', 'b5', 'b7']   
    ];
   
    for(i=0;i<winningCombinations.length;i++){
        let a=document.getElementById(winningCombinations[i][0]);
        let b=document.getElementById(winningCombinations[i][1]);
        let c=document.getElementById(winningCombinations[i][2]);
      
        if(a.innerText===b.innerText && b.innerText===c.innerText && a.innerText==='X'){
            
            result="X Won";
            document.getElementById("res").innerText=result
            flg=0;
            cnt=0;
        }
        else if(a.innerText===b.innerText && b.innerText===c.innerText && a.innerText==='O'){
            result="O Won";
            document.getElementById("res").innerText=result
            flg=0;
            cnt=0;
        }
        
    }


}
