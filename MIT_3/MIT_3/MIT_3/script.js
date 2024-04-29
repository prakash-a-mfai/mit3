var sen=document.getElementById("fname")
var lname=document.getElementById("lastname")
var mail=document.getElementById("email")
var password=document.getElementById("pass")
function display(){

    if(name.value.length>4 && name.value!=("")){

    }
    if(lname.value.length>1 && lname.value!=(""))
    if(mail.value!=("") && mail.contains("@gmail.com"))
    if(password.value.length>6 && password.value.length<16){
        if(password.value.isUppercase() && password.value.isLowercase()&& password.value)
    sen.style.bordercolor="red"
    sen.style.color="white"
    lname.style.bordercolor="red"
} 
}