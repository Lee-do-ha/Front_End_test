document.getElementById("Write").addEventListener("click", function () {
    if (localStorage.getItem("Login") == 0) {
        alert("게시물 작성은 로그인이 필요합니다.");
    } else[
        location.replace("")
    ]
})

function boardlogout() {
    localStorage.setItem("Login", 0);
    location.reload();
}