const container = document.querySelector(".containe"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});

/*
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
             nameInput.style.borderBottomColor='red';
             return false;
         }
         var namePattern = /^[A-Za-z\s]+$/; 
         if (!name.match(namePattern)) {
             nameError.style.display='block';
             emailError.style.display='none';
             passwordError.style.display='none';
             repasswordError.style.display='none';
             nameInput.style.borderBottomColor='red';
             nameError.innerText="Name can't contain symbol or number ";
             return false;
         }
         if (name.match(namePattern)){
             nameError.style.display='none';
             nameInput.style.borderBottomColor='green';
         }
     
         var email = Register.email.value;
         if (email.trim() === "") {
             nameError.style.display='none';
             emailError.style.display='block';
             passwordError.style.display='none';
             repasswordError.style.display='none';
             emailError.innerText="Email can't be empty ";
             emailInput.style.borderBottomColor='red';

             return false;
         }
         var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (!email.match(emailPattern)) {
             nameError.style.display='none';
             emailError.style.display='block';
             passwordError.style.display='none';
             repasswordError.style.display='none';
             emailError.innerText="Enter a valid email address";
             emailInput.style.borderBottomColor='red';
             return false;
         }
         if (email.match(emailPattern)){
             emailError.style.display='none';
             emailInput.style.borderBottomColor='green';
         }
     
         var password = Register.password.value;
         if (password.trim() === "") {
             nameError.style.display='none';
             emailError.style.display='none';
             passwordError.style.display='block';
             repasswordError.style.display='none';
             passwordError.innerText="Password field can't be blank";
             passwordInput.style.borderBottomColor='red';
             return false;
         }
         if (password.length < 8) {
             nameError.style.display='none';
             emailError.style.display='none';
             passwordError.style.display='block';
             repasswordError.style.display='none';
             passwordError.innerText="Password should contain at least 8 characters";
             passwordInput.style.borderBottomColor='red';
             return false;
         }
         var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
         if (!password.match(passwordPattern)) {
             nameError.style.display='none';
             emailError.style.display='none';
             passwordError.style.display='block';
             repasswordError.style.display='none';
             passwordError.innerText="Password should Abc1234(@,!,#,$,%,^,&,*,)";
             passwordInput.style.borderBottomColor='red';
             return false;
         }
         if (password.match(passwordPattern)){
             passwordError.style.display='none';
             passwordInput.style.borderBottomColor='green';
         }
     
         var repassword = Register.repassword.value;
         if (password !== repassword) {
             nameError.style.display='none';
             emailError.style.display='none';
             passwordError.style.display='none';
             repasswordError.style.display='block';
             repasswordError.innerText="Password does't match";
             repasswordInput.style.borderBottomColor='red';
             return false;
         }
         if (password === repassword) {
             repasswordError.style.display='none';
             repasswordInput.style.borderBottomColor='green';

         }

     
         var termandcondition = Register.termandcondition.checked;
         if (!termandcondition) {
             alert("You must accept the terms and conditions");
             return false;
         }
     
         return true;
     }
     */

document.addEventListener('DOMContentLoaded', function () {
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

    // Function to display an error message
    function showError(element, message) {
        element.style.borderBottomColor = 'red';
        element.classList.add('invalid');
        element.classList.remove('valid');
        element.style.display = 'block';
        element.innerText = message;
    }

    // Function to hide an error message
    function hideError(element, message) {
        element.style.borderBottomColor = 'green';
        element.classList.add('valid');
        element.classList.remove('invalid');
        message.style.display = 'none';
    }

    nameInput.addEventListener('input', function () {
        const name = nameInput.value.trim();
        if (name === '') {
            nameError.style.display = 'block';
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            repasswordError.style.display = 'none';
            nameError.innerText = "Name can't be empty";
            nameInput.style.borderBottomColor = 'red';
            return false;
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            nameError.style.display = 'block';
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            repasswordError.style.display = 'none';
            nameInput.style.borderBottomColor = 'red';
            nameError.innerText = "Name can't contain symbol or number ";
            return false;
        } else {
            nameError.style.display = 'none';
            nameInput.style.borderBottomColor = 'green';
            return true;
        }
    });

    // Event listener for email input
    emailInput.addEventListener('input', function () {
        const email = emailInput.value.trim();
        if (email === '') {
            showError(emailInput, 'Email can\'t be empty');
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            showError(emailInput, 'Enter a valid email address');
        } else {
            hideError(emailInput, emailError);
        }
    });

    // Event listener for password input
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value.trim();
        if (password === '') {
            showError(passwordInput, 'Password field can\'t be blank');
        } else if (password.length < 8) {
            showError(passwordInput, 'Password should contain at least 8 characters');
        } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(password)) {
            showError(passwordInput, 'Password should contain at least one uppercase letter, one lowercase letter, one digit, and one symbol');
        } else {
            hideError(passwordInput, passwordError);
        }
    });

    // Event listener for repassword input
    repasswordInput.addEventListener('input', function () {
        const repassword = repasswordInput.value.trim();
        const password = passwordInput.value.trim();
        if (password !== repassword) {
            showError(repasswordInput, 'Passwords don\'t match');
        } else {
            hideError(repasswordInput, repasswordError);
        }
    });

    // Event listener for the form submission
    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Function to validate the entire form
    function validateForm() {
        if(!name){
            return false;
        }
        return true; // Return true to allow form submission, or false to prevent it
    }
});

