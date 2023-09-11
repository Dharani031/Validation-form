let fullName=document.getElementById("txtfullName");
let email=document.getElementById("txtEmail");
let phno=document.getElementById("txtPhno");
let password=document.getElementById("txtpassword");
let conpassword=document.getElementById("txtConpassword");
let form=document.querySelector("form");
const dobInput = document.getElementById("dob");
const dobError = document.getElementById("dob-error");

let isFormValid = true;
function validateInput(){
//Name is checked
const minlength=5
const currentLength = fullName.value.length;
if(fullName.value.trim()===""){
onError(fullName,"Name cannot be empty");
isFormValid = false
}else if(currentLength < minlength){
onError(fullName,"Name cannot be less than 5 Character");
isFormValid = false
}
else{
onSuccess(fullName);
isFormValid = true
}

//email is checked
if(email.value.trim()===""){
onError(email,"Email cannot be empty");
isFormValid = false
}else{
if(!isValidEmail(email.value.trim())){
onError(email,"Email is not valid");
isFormValid = false
}else{
onSuccess(email);
isFormValid = true
}
}

//phone number is checked
const lengthphone=10
const userlength = phno.value.length;
if(phno.value.trim()===""){
onError(phno,"Phone number cannot be empty");
isFormValid = false
}else if(phno.value.trim()==="123456789"){
onError(phno,"Please enter valid number");
isFormValid = false
}else if(lengthphone > userlength || lengthphone < userlength){
onError(phno,"Phone number is invalid");
isFormValid = false
}
else{
onSuccess(phno);
isFormValid = true
}

// date of birth is checked
if (dobInput.value.trim() === "") {
onError(dobInput, "Date of Birth is required.", dobError);
isFormValid = false;
} else {
onSuccess(dobInput, dobError);
isFormValid = true
}

//password is checked
const minlen=8

const curLength = password.value.length;
if(password.value.trim()===""){
onError(password,"Password cannot be empty");
isFormValid = false
}else if(curLength < minlen){
onError(password,"Password cannot can be less than 8 Character");
isFormValid = false
}else if(password.value.trim()==="password"||
password.value.trim()==="PASSWORD" || password.value.trim()==="Password"){
onError(password,"Enter the strong password");
isFormValid = false
}else if (password.value.trim()===fullName.value.trim()){
onError(password,"Enter the strong password");
isFormValid = false
}else{
onSuccess(password);
isFormValid = true
}

//conform password is checked
if(conpassword.value.trim()===""){
onError(conpassword,"User Name cannot be empty");
isFormValid = false
}else if(curLength < minlen){
onError(conpassword,"password cannot can be less than 8 Character");
isFormValid = false
}else if(password.value.trim()==="password"||
password.value.trim()==="PASSWORD" || password.value.trim()==="Password"){
onError(conpassword,"Ebter Strong Password");
isFormValid = false
}else if (conpassword.value.trim()===fullName.value.trim()){
onError(conpassword,"Enter the strong password");
isFormValid = false
}else{
if(password.value.trim()!==conpassword.value.trim()){
onError(conpassword,"Password & Confirm password not matching");
isFormValid = false
}
else{
onSuccess(conpassword);
isFormValid = true
}
}
if (isFormValid) {
alert("success")

form.reset();
}else{
alert("Please check once again")
}

}
document.querySelector("button")
.addEventListener("click",(event)=>{
event.preventDefault();
validateInput();//function is called
});
function onSuccess(input){
let parent=input.parentElement;
let messageEle=parent.querySelector("small");
messageEle.style.visibility="hidden";
parent.classList.remove("error");
parent.classList.add("success");

}
function onError(input,message){
let parent=input.parentElement;
let messageEle=parent.querySelector("small");
messageEle.style.visibility="visible";
messageEle.innerText=message;
parent.classList.add("error");
parent.classList.remove("success");
}
function isValidEmail(email){
return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

//eye icon
let eyeicon = document.getElementById("eyeicon");
let eye = document.getElementById("eye");

eyeicon.onclick = function() {
if (password.type === "password") {
password.type = "text";
eyeicon.src = "https://cdn-icons-png.flaticon.com/512/63/63568.png";
} else {
password.type = "password";
eyeicon.src =
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/OOjs_UI_icon_eyeClosed.svg/1200px-OOjs_UI_icon_eyeClosed.svg.png";
}
}
eye.onclick = function() {
if (conpassword.type === "password") {
conpassword.type = "text";
eye.src = "https://cdn-icons-png.flaticon.com/512/63/63568.png";
} else {
conpassword.type = "password";
eye.src =
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/OOjs_UI_icon_eyeClosed.svg/1200px-OOjs_UI_icon_eyeClosed.svg.png";
}
}

//form is reseted
function reset() {
document.getElementById("form-group").reset();

}