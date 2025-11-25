function checkPassword() {
    const correctPassword = "password";
    const entered = document.getElementById("pwd").value;

    if (entered == correctPassword){
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
    
    else
        alert("FUCK YOU!");
}