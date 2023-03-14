document.getElementById("register-btd").onclick = function () {

    let id = document.querySelector("#registerid").value;
    let password = document.querySelector("#registerpassword").value;
    let email = document.querySelector("#registeremail").value;
    let name = document.querySelector("#registername").value;
    let age = document.querySelector("#registerage").value;

    if (!id) {
        alert("아이디를 입력해주세요!");
        return;
    } else if (!password) {
        alert("비밀번호를 입력해주세요!");
        return;
    } else if (!email) {
        alert("이메일을 입력해주세요!");
        return;
    } else if (!name) {
        alert("이름을 입력해주세요!");
        return;
    } else if (!age) {
        alert("나이를 입력해주세요!")
        return;
    }
    
    
    let users = JSON.parse(localStorage.getItem("Users"));
    

    localStorage.setItem(id, password);
    window.location.replace("main.html");
}