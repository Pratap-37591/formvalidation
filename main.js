//  TODO:  clear function......

function clearErrors() {
  errors = document.getElementsByClassName("error");

  for (let item of errors) {
    item.innerHTML = "";
  }
}

function setError(id, error) {
  document.getElementById(id).innerHTML = error;
}

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let 
//  !username = id("username").value,
  email = id("Email"),
//   password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");
//  inputsuccess = classes("focus-success");
//  inputfail = classes("focus-fail");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  failureIcon[0].style.opacity = "0";
  successIcon[0].style.opacity = "1";
  failureIcon[1].style.opacity = "0";
  successIcon[1].style.opacity = "1";
  failureIcon[2].style.opacity = "0";
  successIcon[2].style.opacity = "1";
  

  var returnval = true;
  clearErrors();

//  TODO ! engine(username,0,"username can't be blank");
//    ! engine(email,1,"email can't be blank");
//    TODO ! engine(password,2,"password can't be blank");

//  ! Username....................
let username = document.getElementById("username").value;


if (username === "") {
    setError("username-error", "*name cannot be blank");
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";

    returnval = false;
  }
  else if(!username.match(/^\w+[-_.@]+\d+$/)){
    setError("username-error", "*Username should must be letters,special char.");
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";
    returnval = false;
  }
  if (username.startsWith(" ")) {
    setError("username-error", "*name cannot start with a space");
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";
    returnval = false;
     
  }
  else if(username.endsWith(" ")) {
    setError("username-error", "*username cannot ends with a space");
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";
    returnval = false;
  }
 

  // ! Email code here........
  let email = document.getElementById("Email").value;
  
  if(email === ""){
    setError("email-error", "*email cannot be blank");
    failureIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";
    returnval = false;
  }
   
  else if(!email.match(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
    setError("email-error", "*email should contain letter,special char, alphanumeric char");
    failureIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";
    returnval = false;
   }
 
// ! password code here .........
  let password = document.getElementById("password").value;


  if(password == ""){
    setError("password-error", "*password cannot be empty");
    failureIcon[2].style.opacity = "1";
    successIcon[2].style.opacity = "0";
    returnval = false;
  }
  else if(password.length < 7 || password.length > 20) {
    setError("password-error", "*password should have a minimum 8 char and not max 20");
    failureIcon[2].style.opacity = "1";
    successIcon[2].style.opacity = "0";
    returnval = false;
  }
  else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/)){
    setError("password-error", "*password must contain letters, num, and special char.");
    failureIcon[2].style.opacity = "1";
    successIcon[2].style.opacity = "0";
    returnval = false;
  }

  


  

  return returnval;
});

// !let engine = (id, serial, message) => {
//  ! if (id.value.trim() === "") {
//    ! errorMsg[serial].innerHTML = message;
//     !failureIcon[serial].style.opacity = "1";
//    ! successIcon[serial].style.opacity = "0";
//  ! } else {
//   !  errorMsg[serial].innerHTML = " ";
//   !  failureIcon[serial].style.opacity = "0";
//    ! successIcon[serial].style.opacity = "1";
//  ! }
// !};
