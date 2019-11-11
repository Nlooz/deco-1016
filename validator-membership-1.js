//Validator contraints for the form
var constraints = {
    name: {
        //Set to true when name of user is entered
        presence: true,

        //Length of name must be between 3 - 15 characters
        length: {
            minimum: 3,
            maximum: 15
        },
        format: {
            //characters that are not alphabets and numbers are not allowed
            pattern: "[a-z0-9]+",

            //Lower-case and upper-case alphabets are allowed
            //Flag variable raised to ensure if the string contains alphabets and/or numbers
            flags: "i",
            //return error message if the condition is false
            message: "Can only take characters 'a' to 'z' and numbers 0 to 9"
        }
    },

    username: {
        //User needs to enter username
        presence: true,

        //Length of username needs to be between 3 to 15 characters
        length: {
            minimum: 3,
            maximum: 15,
        },
        //Similar to the name contraint, letters 'a' to 'z' and numbers '0' to '9' are allowed
        format: {
            pattern: "[a-z0-9]+",
            flags: "i",
            message: "Can only take characters 'a' to 'z' and numbers 0 to 9"
        }
    },
    email: {
        //Email is required to proceed
        presence: true,
        //Confirmation that it is an email that is entered
        email: true,
    },

    password: {
        //User is required to enter password
        presence: true,
        //Password must be at least 8 characters long
        length: {
            minimum: 8,
        }
    },

}

//Form is hooked up to prevent printing the user's entered data
var form = document.querySelector("form");
form.addEventListener("submit",function(ev) {
    ev.preventDefault();
    handleSubmitForm(form);
});

//Below validates the form against given constraints. If there are not errors, it returns "Success!" 
function handleSubmitForm (form, input) {
    var error = validate(form, constraints);
    displayError(form,error);
    if (!error) {
        return "Success!"
    }
}
