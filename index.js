
    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
let password = document.getElementById('pass').value;
let confirmPassword = document.getElementById('confirmpass').value;
    
   
   const usernameCheck = / ^[A-Za-z. 1-9]{3,20}$/  //regEx for username 

   const passwordCheck= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;  //regex for password (password must be of min. 8 characters , atleast one letter,one number and one special character)

   const emailCheck = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$ / ; //Regex for emailcheck capital and small letters allowed following with dot or underscore and @ after at therate capiatal or small letter then . {1} then capital or small letter with min of 2 characters and 6 max allowed


const  validation=()=>
{
   
    event.preventDefault()
    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
let password = document.getElementById('pass').value;
let confirmPassword = document.getElementById('confirmpass').value;
    
    
   const usernameCheck = / ^[A-Za-z. 1-9]{3,20}$/  //regEx for username 

   const passwordCheck= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;  //regex for password (password must be of min. 8 characters , atleast one letter,one number and one special character)

   const emailCheck = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$ / ; //Regex for emailcheck capital and small letters allowed following with dot or underscore and @ after at therate capiatal or small letter then . {1} then capital or small letter with min of 2 characters and 6 max allowed


   if(usernameCheck.test(user))
   {
       document.getElementById('userVal').innerHTML="";
   }

   else 
   {
    document.getElementById('userVal').innerHTML="Not a valid user name";
   }

   if(passwordCheck.test(password))
   {
    document.getElementById('passwordVal').innerHTML="";

   }
   else 
   {
    document.getElementById('passwordVal').innerHTML="Password must be 8 charcters long with atleat one of each letter,special character and number";

   }


   if(passwordCheck.test(confirmPassword))
   {
    document.getElementById('confirmPassVal').innerHTML="";

   }
   else {
    document.getElementById('confirmpassVal').innerHTML="Password doesn't matched with the above password";
   }

   if(emailCheck.test(email))
   {
    document.getElementById('emailVal').innerHTML="";
   }

   else 
   {
    document.getElementById('emailVal').innerHTML="Email ID not valid";
   }
   
   
}



