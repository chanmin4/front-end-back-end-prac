const logininput=document.querySelector("#login-form input");
const loginform=document.querySelector("#login-form");
const greeting =document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";
function onloginsubmit(event){
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username = logininput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);

}

function paintGreeting(username){
    greeting.innerText=`hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(!savedUsername){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit",onloginsubmit);
}
else{
  
    paintGreeting(savedUsername);
}


