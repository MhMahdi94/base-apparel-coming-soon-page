function validateEmail(){
    let x = document.getElementById("user-email").value;
    console.log(x);
    if (x==null || x==""){  
        // alert("Name can't be blank"); 
        document.getElementById("msg").innerText("Error"); 
        // return false;  
      }
}