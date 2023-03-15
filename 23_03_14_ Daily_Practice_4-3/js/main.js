
function login() {
    
    // 아이디 입력받기
    var id = prompt("아이디입력");
    
    // 비밀번호 입력받기
    var password = prompt("비밀번호입력");

    // 해당 아이디에 맞는 비밀번호 가져오기
    let realPS = localStorage.getItem(id);
    
    // 비밀번호가 존재하지않는다면 아이디가 존재하지않음.
    if (!realPS) {
        alert("가입된 아이디가 없습니다.");
    } else {
        // 아이디 비밀번호가 맞는다면 프로필사진 상위 메뉴창 바꾸고 스토리지에 로그인 한 상태로 남기기
        if (password == realPS) {
            changeTop();
            changeProfile();
            localStorage.setItem("Login", "1");
        } else {
            alert("비밀번호가 틀렸습니다.");
        }
    }
    
}

//투표창 만들기
function make_choice(){
    window.open("makepoll.html", "poll", "width = 400, height = 400, top = 300, left = 300");
}


// 상위 메뉴창 바꾸기
function changeTop() {
    var login = document.getElementsByClassName("header-nav-comfirm-off");
    var logout = document.getElementsByClassName("header-nav-comfirm-on");

    for (var i = 0; i < login.length; i++){
        var A = login.item(i);
        A.style.display = "none";
    }

    for (var i = 0; i < logout.length; i++){
        var B = logout.item(i);
        B.style.display = "block";
    }
}

// 로그인되면 프로필사진 바꾸기
function changeProfile() {
    document.getElementById("profile_img").style.display = 'block';
    document.getElementById("no_img").style.display = 'none';
}

// 서울 하위지역 
function Store1() {
    var Alist = document.getElementsByClassName("seoul");
    for (var i = 0; i < Alist.length; i++){
        var A = Alist.item(i);
        if (window.getComputedStyle(A).display == "block") {
            A.style.display = "none";
        } else{
            A.style.display = "block";
        }
    }

    document.getElementById("store-display-on").style.display = 'none';
    document.getElementById("store-display-off").style.display = 'block';
}

// 대전 하위지역
function Store2() {
    var Alist = document.getElementsByClassName("daejeon");
    for (var i = 0; i < Alist.length; i++){
        var A = Alist.item(i);
        if (window.getComputedStyle(A).display == "block") {
            A.style.display = "none";
        } else{
            A.style.display = "block";
        }
    }

    document.getElementById("store-display-on").style.display = 'none';
    document.getElementById("store-display-off").style.display = 'block';
}

// 구미 하위지역
function Store3() {
    var Alist = document.getElementsByClassName("gumi");
    for (var i = 0; i < Alist.length; i++){
        var A = Alist.item(i);
        if (window.getComputedStyle(A).display == "block") {
            A.style.display = "none";
        } else{
            A.style.display = "block";
        }
    }

    document.getElementById("store-display-on").style.display = 'none';
    document.getElementById("store-display-off").style.display = 'block';
}

// 광주 하위지역
function Store4() {
    var Alist = document.getElementsByClassName("gwangju");
    for (var i = 0; i < Alist.length; i++){
        var A = Alist.item(i);
        if (window.getComputedStyle(A).display == "block") {
            A.style.display = "none";
        } else{
            A.style.display = "block";
        }
    }

    document.getElementById("store-display-on").style.display = 'none';
    document.getElementById("store-display-off").style.display = 'block';
}

// 모든 항목 펼치기
function Stores1() {
    var seoulList = document.getElementsByClassName("seoul");
    for (var i = 0; i < seoulList.length; i++){
        var a = seoulList.item(i);
        a.style.display = 'block';
    }

    var seoulList = document.getElementsByClassName("daejeon");
    for (var i = 0; i < seoulList.length; i++){
        var a = seoulList.item(i);
        a.style.display = 'block';
    }

    var seoulList = document.getElementsByClassName("gumi");
    for (var i = 0; i < seoulList.length; i++){
        var a = seoulList.item(i);
        a.style.display = 'block';
    }

    var seoulList = document.getElementsByClassName("gwangju");
    for (var i = 0; i < seoulList.length; i++){
        var a = seoulList.item(i);
        a.style.display = 'block';
    }

    document.getElementById("store-display-on").style.display = 'none';
    document.getElementById("store-display-off").style.display = 'block';

}

// 모든 항목 접기
function Stores2() {
    var seoulList = document.getElementsByClassName("seoul");
    for (var i = 0; i < seoulList.length; i++){
        var a = seoulList.item(i);
        a.style.display = 'none';
    }

    var seoulList = document.getElementsByClassName("daejeon");
    for (var i = 0; i < seoulList.length; i++){
        var a = seoulList.item(i);
        a.style.display = 'none';
    }

    var seoulList = document.getElementsByClassName("gumi");
    for (var i = 0; i < seoulList.length; i++){
        var a = seoulList.item(i);
        a.style.display = 'none';
    }

    var seoulList = document.getElementsByClassName("gwangju");
    for (var i = 0; i < seoulList.length; i++){
        var a = seoulList.item(i);
        a.style.display = 'none';
    }

    document.getElementById("store-display-on").style.display = 'block';
    document.getElementById("store-display-off").style.display = 'none';
}

// 로그아웃누르면 스토리지값 변경하고 페이지 새로고침
document.getElementById("logout").onclick = function () {
    localStorage.setItem("Login", "0");
    location.reload();
}

// 자동으로 실행되는 문장
window.onload = function () {
    
    // 로그인 이미 했는지 체크하기
    let logincheck = JSON.parse(localStorage.getItem("Login"));
    if (logincheck == "1") {
        changeProfile();
        changeTop();
    }
  
    // 투표만들기 창 띄우기
    document.getElementById("btn-make-poll").onclick = function() {
        window.open("makepoll.html", "poll", "width = 400, height = 280, top = 300, left = 300");
    }

    // localstorage에서 진행중인 투표 얻기
    let answers = localStorage.getItem("answers");
    
    // 투표창을 감쌀 vote Class
    let pollViewDiv = document.querySelector(".vote");

    if (answers) {
        // 투표가 있는 경우 = storage에 값이 있음
        let answerArr = JSON.parse(answers);

        let poll = `<div class="poll-title">[당신의 선택]</div>
        <div class="poll-answer">
            <ul>`
            for(let answer of answerArr){
            poll += `<li><input type="radio" name="poll-answer" id="" />${answer}</li>`
            }
        
            poll+=`
            </ul>
        </div>
        <div class="poll-btn">
        <button id="btn-poll" class="button btn-primary">투표하기</button>
        <button class="button">이전결과보기</button>
        </div>
        <div class="poll-date">투표기간 : 2023.03.01 ~ 2025.12.31</div>`;

        
    
        pollViewDiv.innerHTML = poll;
        pollViewDiv.style.display="";
    } else {
        let pollContent = '진행중인 투표가 없습니다.';
        pollViewDiv.innerHTML = pollContent;

        pollViewDiv.setAttribute("style", "text-align : , color : red; display : ;");
    }
};