// book review webpage feedback form
// validate.js
function chkName() {
    var myName = document.getElementById("custname");
    var pos = myName.value.search(/^[a-zA-Z]+ [a-zA-Z]+$/);
    if (pos != 0) {
        alert("INVALID NAME");
        myName.focus();
        myName.select();
        return false;
    } else
        return true;
}

function chkPhone() {
    var myPhone = document.getElementById("phone");
    var pos = myPhone.value.search(/^\d{10}$/);
    if (pos != 0) {
        alert("INVALID PHONE");
        myPhone.focus();
        myPhone.select();
        return false;
    } else
        return true;
}

function chkMail() {
    var myMail = document.getElementById("mail");
    var pos = myMail.value.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pos != 0) {
        alert("INVALID MAIL");
        myMail.focus();
        myMail.select();
        return false;
    } else
        return true;
}
