document.getElementById('Check').onclick = function(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if (login == 'admin' && password == 'admin')
        alert("Welcome");
    else if (login == "123" && password == "123")
        alert("welcome");
    else alert("Incorrect login or password")
}