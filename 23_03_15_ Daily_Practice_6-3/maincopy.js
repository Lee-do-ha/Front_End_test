
function login() {
    
    var id = prompt("아이디입력");

    var password = prompt("비밀번호입력");


    let realPS = localStorage.getItem(id);

    console.log(id);
    console.log(realPS);

    if (!realPS || id == "Login") {
        alert("회원가입하세용!");
    } else {
        if (password == realPS) {
            changeTop();
            changeProfile();
            localStorage.setItem("Login", "1");
        } else {
            alert("비밀번호가 틀렸습니다.");
        }
    }
    
}

function make_choice(){
    window.open("makepoll.html", "poll", "width = 400, height = 400, top = 300, left = 300");
}

function changeTop() {
    document.getElementById("header_3").style.display = 'block';
    document.getElementById("header_4").style.display = 'block';
    document.getElementById("header_5").style.display = 'block';
    document.getElementById("header_1").style.display = 'none';
    document.getElementById("header_2").style.display = 'none';
}

function changeProfile() {
    document.getElementById("header-nav-comfirm-on").style.display = 'block';
    document.getElementById("header-nav-comfirm-off").style.display = 'none';
}

document.getElementById("header_3").onclick = function () {
    localStorage.setItem("Login", "0");
    location.reload();
}

window.onload = function () {
    
    let logincheck = localStorage.getItem("Login");
    console.log(localStorage.getItem("Login"))
    if (logincheck == "1") {
        changeProfile();
        changeTop();
    }
  
    // // 투표만들기 창 띄우기
    // document.getElementById("btn-make-poll").onclick = function() {
    //     window.open("makepoll.html", "poll", "width = 400, height = 280, top = 300, left = 300");
    // }

    // // localstorage에서 진행중이 투표 얻기
    // let answers = localStorage.getItem("answers");
    
    // let pollViewDiv = document.querySelector(".vote");

    // if (answers) {
    //     // 투표가 있는 경우 = storage에 값이 있음
    //     let answerArr = JSON.parse(answers);

    //     let poll = `<div class="poll-title">[당신의 선택]</div>
    //     <div class="poll-answer">
    //         <ul>`
    //         for(let answer of answerArr){
    //         poll += `<li><input type="radio" name="poll-answer" id="" />${answer}</li>`
    //         }
        
    //         poll+=`
    //         </ul>
    //     </div>
    //     <div class="poll-btn">
    //     <button id="btn-poll" class="button btn-primary">투표하기</button>
    //     <button class="button">이전결과보기</button>
    //     </div>
    //     <div class="poll-date">투표기간 : 2023.03.01 ~ 2025.12.31</div>`;

        
    
    //     pollViewDiv.innerHTML = poll;
    //     pollViewDiv.style.display="";
    // } else {
    //     let pollContent = '진행중인 투표가 없습니다.';
    //     pollViewDiv.innerHTML = pollContent;

    //     pollViewDiv.setAttribute("style", "text-align : , color : red; display : ;");
    // }
};