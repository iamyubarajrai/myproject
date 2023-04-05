/**
 * variable making keywords
 * 
 * ES5:
 *  - var  (ReDeclare and ReDefine is allowed)
 * ES6:
 *  - let (ReDeclare is not allowed, but ReDefine is allowed)
 *  - const (ReDeclare and ReDefine is not allowed)
 * 
 * example:
 * var name; //declare
 *  name = "Yubaraj Rai"; //Define
 * 
 * var name; //redeclare, it is allowed
 *     name = "Hari"; //redefine, it is allowed 
 *
 * let n = 10;
 * //let n; // not allowed
 *  n = 5; //allowed
 * 
 * const y = 9; //perfect
 * 
 * //const x;
 * //x = 7; //error, this behaves redefine calling on new line
 * 
 * 
 * Note: Standard name of JavaScript is EcmaScript.
 *       JavaScript version starts with ES
 * 
 *  ES1 = Initialization, 
 *  ES2 = Documentation, 
 *  ES3 = Data type management
 *  ES4 = Debugging statndard
 * 
 *  ES5 = Major version of data validation rules
 *  ES6 = Major version of standard documentation 
 * 
 *  updating new version: ES7, ES8...
 */

var n = 10;
console.log(n);
var n2 = 5;
console.log(n + n2);

let form = document.contact_form;
let fullname = document.contact_form.fname;
let email = document.contact_form.email;
console.log(fullname, email);

/**
 * Common JavaScript event:
 * - Mouse event (i.e.: onclick, onmouseover)
 * - Keyboard event (i.e.: onkeyup, onkeydown)
 * - Window event (i.e.: onload)
 * - Form event (i.e.: onchange, onfocus, onsubmit)
 * 
 * listen method: element.addEventListener("event", callback());
 * 
 * callback() { ... }
 */

form.addEventListener("submit", function(event) {
    if(fullname.value.length == 0) {
        fullname.nextElementSibling.innerText = "Fullname is empty!";
        event.preventDefault();
    } else {
        fullname.nextElementSibling.innerText = "";
    }

    if(email.value.length == 0) {
        email.nextElementSibling.innerText = "Email is empty!";
        event.preventDefault();
    } else {
        email.nextElementSibling.innerText = "";
    }
});

email.addEventListener("keyup", function() {
    if(this.value.indexOf("@") == -1) {
        email.nextElementSibling.innerText = "'@' symbol is required!";
    } else if(this.value.indexOf(".") == -1) {
        email.nextElementSibling.innerText = "'.' symbol is required!";
    } else if(this.value.indexOf("@") != this.value.lastIndexOf("@")) {
        email.nextElementSibling.innerText = "'@' symbol must be one!";
    } else {
        email.nextElementSibling.innerText = "";
    }
});



