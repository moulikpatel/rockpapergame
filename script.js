let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let button=document.getElementById("btn");
let userscore=document.getElementById("user");
let computerscore=document.getElementById("comp");
let arr=["http://127.0.0.1:5500/images/rock.png","http://127.0.0.1:5500/images/paper.png","http://127.0.0.1:5500/images/scissors.png"];
let you=0;
let comp=0;
rock.addEventListener('click',function(){
    let a=Math.floor(Math.random()*3);
    let b=arr[a];
    if(rock.src==arr[a]){
        button.innerHTML="Draw";
        button.style.backgroundColor="black";
    }
    else if(b==arr[1]){
        button.innerHTML="You lost. Paper beats rock";
        button.style.backgroundColor="red";
        comp+=1;
        computerscore.innerHTML=comp;
        

    }
    else if(b==arr[2]){
        button.innerHTML="You won! rock beats scissors";
        button.style.backgroundColor="green";
        you+=1;
        userscore.innerHTML=you;
    }
});
paper.addEventListener('click',function(){
    let a=Math.floor(Math.random()*3);
    let b=arr[a];
    if(paper.src==arr[a]){
        button.innerHTML="Draw";
        button.style.backgroundColor="black";
    }
    else if(b==arr[0]){
        button.innerHTML="You won. Paper beats rock";
        button.style.backgroundColor="green";
        you+=1;
        userscore.innerHTML=you;
        

    }
    else if(b==arr[2]){
        button.innerHTML="You lost! scissors beats paper";
        button.style.backgroundColor="red";
        comp+=1;
        computerscore.innerHTML=comp;
    }
});
scissors.addEventListener('click',function(){
    let a=Math.floor(Math.random()*3);
    let b=arr[a];
    if(scissors.src==arr[a]){
        button.innerHTML="Draw";
        button.style.backgroundColor="black";
    }
    else if(b==arr[0]){
        button.innerHTML="You lost. rock beats scissors";
        button.style.backgroundColor="red";
        comp+=1;
        computerscore.innerHTML=comp;
        

    }
    else if(b==arr[1]){
        button.innerHTML="You won! scissors beats paper";
        button.style.backgroundColor="green";
        you+=1;
        userscore.innerHTML=you;
    }
});