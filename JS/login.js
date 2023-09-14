const container = document.querySelector(".containe"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

        const form = document.getElementById('registrationForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const repasswordInput = document.getElementById('repassword');
        const termConCheckbox = document.getElementById('termCon');
        const registerButton = document.getElementById('registerButton');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const repasswordError = document.getElementById('repasswordError');
    
        function valid() {
            var name = Register.name.value;
            if (name.trim() === "") {
                nameError.style.display='block';
                emailError.style.display='none';
                passwordError.style.display='none';
                repasswordError.style.display='none';
                nameError.innerText="Name can't be empty";
                return false;
            }
            var namePattern = /^[A-Za-z\s]+$/; 
            if (!name.match(namePattern)) {
                nameError.style.display='block';
                emailError.style.display='none';
                passwordError.style.display='none';
                repasswordError.style.display='none';
                nameError.innerText="Name can't contain symbol or number ";
                return false;
            }
            if (name.match(namePattern)){
                nameError.style.display='none';
            }
        
            var email = Register.email.value;
            if (email.trim() === "") {
                nameError.style.display='none';
                emailError.style.display='block';
                passwordError.style.display='none';
                repasswordError.style.display='none';
                emailError.innerText="Email can't be empty ";
                return false;
            }
            var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!email.match(emailPattern)) {
                nameError.style.display='none';
                emailError.style.display='block';
                passwordError.style.display='none';
                repasswordError.style.display='none';
                emailError.innerText="Enter a valid email address";
                return false;
            }
            if (email.match(emailPattern)){
                emailError.style.display='none';
            }
        
            var password = Register.password.value;
            if (password.trim() === "") {
                nameError.style.display='none';
                emailError.style.display='none';
                passwordError.style.display='block';
                repasswordError.style.display='none';
                passwordError.innerText="Password field can't be blank";
                return false;
            }
            if (password.length < 8) {
                nameError.style.display='none';
                emailError.style.display='none';
                passwordError.style.display='block';
                repasswordError.style.display='none';
                passwordError.innerText="Password should contain at least 8 characters";
                return false;
            }
            var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
            if (!password.match(passwordPattern)) {
                nameError.style.display='none';
                emailError.style.display='none';
                passwordError.style.display='block';
                repasswordError.style.display='none';
                passwordError.innerText="Password should Abc1234(@,!,#,$,%,^,&,*,)";
                return false;
            }
            if (password.match(passwordPattern)){
                passwordError.style.display='none';
            }
        
            var repassword = Register.repassword.value;
            if (password !== repassword) {
                nameError.style.display='none';
                emailError.style.display='none';
                passwordError.style.display='none';
                repasswordError.style.display='block';
                repasswordError.innerText="Password does't match";
                return false;
            }
            if (password === repassword) {
                repasswordError.style.display='none';
            }

        
            var termandcondition = Register.termandcondition.checked;
            if (!termandcondition) {
                alert("You must accept the terms and conditions");
                return false;
            }
        
            return true;
        }
        
