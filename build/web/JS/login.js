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
    /* document.addEventListener('DOMContentLoaded', function () {
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

    let isValidName = false;
    let isValidemail = false;
    let isValidpassword = false;
    let isValidrepassword = false;

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
            isValidName = false;
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            nameError.style.display = 'block';
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            repasswordError.style.display = 'none';
            nameInput.style.borderBottomColor = 'red';
            nameError.innerText = "Name can't contain symbol or number ";
            isValidName = false;
        } else {
            nameError.style.display = 'none';
            nameInput.style.borderBottomColor = 'green';
            isValidName = true;
        }
    });

    // Event listener for email input
    emailInput.addEventListener('input', function () {
        const email = emailInput.value.trim();
        if (email === '') {
            nameError.style.display = 'none';
            emailError.style.display = 'block';
            passwordError.style.display = 'none';
            repasswordError.style.display = 'none';
            emailError.innerText = "Email can't be empty ";
            emailInput.style.borderBottomColor = 'red';
            isValidemail = false;
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            nameError.style.display = 'none';
            emailError.style.display = 'block';
            passwordError.style.display = 'none';
            repasswordError.style.display = 'none';
            emailError.innerText = "Enter a valid email address";
            emailInput.style.borderBottomColor = 'red';
            isValidemail = false;
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderBottomColor = 'green';
            isValidemail = true;
        }
    });

    // Event listener for password input
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value.trim();
        if (password === '') {
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            passwordError.style.display = 'block';
            repasswordError.style.display = 'none';
            passwordError.innerText = "Password field can't be blank";
            passwordInput.style.borderBottomColor = 'red';
            isValidpassword = false;
        } else if (password.length < 8) {
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            passwordError.style.display = 'block';
            repasswordError.style.display = 'none';
            passwordError.innerText = "Password should contain at least 8 characters";
            passwordInput.style.borderBottomColor = 'red';
            isValidpassword = false;
        } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(password)) {
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            passwordError.style.display = 'block';
            repasswordError.style.display = 'none';
            passwordError.innerText = "Password should Abc1234(@,!,#,$,%,^,&,*,)";
            passwordInput.style.borderBottomColor = 'red';
            isValidpassword = false;
        } else {
            passwordError.style.display = 'none';
            passwordInput.style.borderBottomColor = 'green';
            isValidpassword = true;
        }
    });

    // Event listener for repassword input
    repasswordInput.addEventListener('input', function () {
        const repassword = repasswordInput.value.trim();
        const password = passwordInput.value.trim();
        if (password !== repassword) {
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            repasswordError.style.display = 'block';
            repasswordError.innerText = "Password does't match";
            repasswordInput.style.borderBottomColor = 'red';
            isValidrepassword = false;
        } else {
            repasswordError.style.display = 'none';
            repasswordInput.style.borderBottomColor = 'green';
            isValidrepassword = true;
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
        var termandcondition = Register.termandcondition.checked;
        if (!termandcondition) {
            alert("You must accept the terms and conditions");
            return false;
        }
        if (!isValidName || !isValidemail || !isValidpassword || !isValidrepassword ) {
            return false;
        }

        return true; // Return true to allow form submission, or false to prevent it
    }
}); */

     document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('registrationForm');
        const fields = {
            name: {
                input: document.getElementById('name'),
                error: document.getElementById('nameError'),
                isValid: false,
                validate: (value) => {
                    if (value.trim() === '') {
                        showError(fields.name, "Name can't be empty");
                    } else if (!/^[A-Za-z\s]+$/.test(value)) {
                        showError(fields.name, "Name can't contain symbols or numbers");
                    } else {
                        hideError(fields.name);
                        fields.name.isValid = true;
                    }
                },
            },
            email: {
                input: document.getElementById('email'),
                error: document.getElementById('emailError'),
                isValid: false,
                validate: (value) => {
                    if (value.trim() === '') {
                        showError(fields.email, "Email can't be empty");
                    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                        showError(fields.email, 'Enter a valid email address');
                    } else {
                        hideError(fields.email);
                        fields.email.isValid = true;
                    }
                },
            },
            password: {
                input: document.getElementById('password'),
                error: document.getElementById('passwordError'),
                isValid: false,
                validate: (value) => {
                    if (value.trim() === '') {
                        showError(fields.password, "Password field can't be blank");
                    } else if (value.length < 8) {
                        showError(fields.password, 'Password should contain at least 8 characters');
                    } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(value)) {
                        showError(fields.password, 'Password should Abc1234(@,!,#,$,%,^,&,*,)');
                    } else {
                        hideError(fields.password);
                        fields.password.isValid = true;
                    }
                },
            },
            repassword: {
                input: document.getElementById('repassword'),
                error: document.getElementById('repasswordError'),
                isValid: false,
                validate: (value) => {
                    const passwordValue = fields.password.input.value.trim();
                    if (value !== passwordValue) {
                        showError(fields.repassword, "Passwords don't match");
                    } else {
                        hideError(fields.repassword);
                        fields.repassword.isValid = true;
                    }
                },
            },
            termCon: {
                input: document.getElementById('termCon'),
                error: document.getElementById('termandconditionError'),
                isValid: false,
                validate: () => {
                    if (!fields.termCon.input.checked) {
                    showError(fields.termCon, "Tick the T&C box");
                    } else {
                        hideError(fields.termCon);
                        fields.termCon.isValid = true;
                    }
                },
            },
        };
    
        // Function to display an error message
        function showError(field, message) {
            field.input.style.borderBottomColor = 'red';
            field.input.classList.add('invalid');
            field.input.classList.remove('valid');
            field.error.style.display = 'block';
            field.error.innerText = message;
        }
    
        // Function to hide an error message
        function hideError(field) {
            field.input.style.borderBottomColor = 'green';
            field.input.classList.add('valid');
            field.input.classList.remove('invalid');
            field.error.style.display = 'none';
        }
    
        // Event listeners for form fields
        Object.values(fields).forEach((field) => {
            if (field.input) {
                field.input.addEventListener('input', function () {
                    field.validate(field.input.value.trim());
                });
            }
        });
    
        // Event listener for the form submission
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission
    
            // Validate all fields
            Object.values(fields).forEach((field) => {
                if (field.validate) {
                    field.validate(field.input.value.trim());
                }
            });
    
            // Check if all fields are valid
            const isFormValid = Object.values(fields).every((field) => field.isValid);
    
            // If all fields are valid, allow form submission
            if (isFormValid) {
                form.submit();
            }
        });
    });
    

