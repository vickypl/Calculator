let screen = document.getElementById("screen");
button = document.querySelectorAll("button");
let screenContent='';
for(item of button) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='Clear') {
            screen.innerHTML="";
            screenContent="";
        } else if(buttonText=='=') {
            screen.innerHTML=eval(screenContent);
            screenContent=eval(screenContent);
        } else if(buttonText=='Backspace') {
            screenContent = screenContent.substring(0, screenContent.length - 1);
            screen.innerHTML=screenContent;
        } else {
            screen.innerHTML+=buttonText;
            screenContent+=buttonText;
        }
    })
}