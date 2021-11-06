var dt = document.lastModified;
document.getElementById("datetime").innerHTML = dt;

function validateForm1(myform){
 var fnameRGEX = /^[a-zA-Z]{1,25}(?: [a-zA-Z]+){0,2}$/;
 var lnameRGEX = /^[a-zA-Z]{1,25}(?: [a-zA-Z]+){0,2}$/;
 var userRGEX =  /^[a-z\d]{5,12}$/i;
 var passwordRGEX = /^[\d\w@-]{8,20}$/i;
 var emailRGEX  = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
 var phoneRGEX = /^\d{3}-\d{3}-\d{4}$/;
 if (myform.firstname.value == "" || myform.firstname.value == null)
 {
   alert("First Name is mandatory");
   return false;

 }
     if(fnameRGEX.test(firstname.value) == false){
   alert("The length of First Name must be atleast 1-25 alphacharacters");
   firstname.focus();
   return false;
 }
    if(myform.lastname.value == "" || myform.lastname.value == null)
    {
      alert("Last Name is mandatory");
      return false;
    }
    if(lnameRGEX.test(lastname.value) == false){
   alert("The length of Last Name must be atleast 1-25 alpha characters");
   lastname.focus();
   return false;
 }
   if(myform.username.value == "" || myform.username.value == null)
    {
      alert("UserName is mandatory");
      return false;
    }
   if(userRGEX.test(username.value) == false){
   alert("The length of UserName must be atleast 5-12 alphanumeric characters");
   username.focus();
   return false;
 }
  if(myform.password1.value == "" || myform.password1.value == null)
    {
      alert("PassWord is mandatory");
      return false;
    }
   if(passwordRGEX.test(password1.value) == false){
   alert("The length of PassWord must be atleast 8-20 alphanumeric/special characters");
   password1.focus();
   return false;
 }
  if (myform.password1.value !=
            myform.password2.value){
      alert("Confirm PassWord must match PassWord");
   password2.focus();
   return false;
 }
 if(myform.email1.value == "" || myform.email1.value == null || myform.email1.value == "youremail.yahoo.com")
    {
      alert("Email is mandatory");
      return false;
    }
   if(emailRGEX.test(email1.value) == false){
   alert("Email Address is invalid");
   email1.focus();
   return false;
 }
 if(myform.phone.value == "" || myform.phone.value == null || myform.phone.value == "222-222-2222")
    {
      alert("Phone number is mandatory");
      return false;
    }
   if(phoneRGEX.test(phone.value) == false){
   alert("Phone number is invalid");
   phone.focus();
   return false;
 }
    else{
      return true;
    }
  }