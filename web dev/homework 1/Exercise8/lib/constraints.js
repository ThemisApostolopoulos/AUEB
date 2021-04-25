window.addEventListener("load", function(){
    const lastNameInput = document.getElementById("last_name");
    const form = document.getElementById("my-form");
    const birthDayInput = document.getElementById("birthday");
    const passWordInput = document.getElementById("password");
    const passWordInput2 = document.getElementById("password2");
    passWordInput2.onchange = () =>{
        let valid = false;
        if(passWordInput.value == passWordInput2.value){
            valid = true;
        }

        if(valid){
            passWordInput2.setCustomValidity("");
            console.log("kodikoi match");
        }else{
            passWordInput2.setCustomValidity("Passwords dont match");
            console.log("kodikoi dont match");
        }
    }

    
        
    



    lastNameInput.addEventListener('input', () => {
    lastNameInput.setCustomValidity("");
    lastNameInput.checkValidity();

});


    passWordInput.addEventListener("input", ()=>{
        passWordInput.setCustomValidity("");
        passWordInput.checkValidity();
    });

    passWordInput2.addEventListener("input", ()=>{
        passWordInput2.setCustomValidity("");
        passWordInput2.checkValidity();
    });



lastNameInput.addEventListener('invalid', () => {
  if(lastNameInput.value === '') {
    lastNameInput.setCustomValidity('Βάλε επίθετο!');
    console.log("bruh");
  } else {
    lastNameInput.setCustomValidity('Τα επίθετα πρέπει να είναι μόνο κεφαλαία οι πεζοί χαρακτήρες !');
    console.log("bruh2");
  }
});

birthDayInput.onchange = () =>{
    let valid = false;
    let birthday = new Date(birthDayInput.value);
    let base = new Date("2003-01-01");
    if(birthday <  base){
        valid = true;
    }

    if(valid){
        birthDayInput.setCustomValidity("");
        console.log("18+");
    }else{
        birthDayInput.setCustomValidity("Πρέπει να είσαι πάνω απο 18");
        console.log("aniliko");
    }
}


})


