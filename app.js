const userLogin=prompt("Enter your name");
const userPassword=prompt("Enter your password");

const login="sona";
const password="sona1"

const form=(a,b)=>{
    if(userLogin==a && userPassword==b){
        alert("You have entered the page")
    }
    else{
        alert("You have entered an incorrect username and password")
    }
}
form(login,password);