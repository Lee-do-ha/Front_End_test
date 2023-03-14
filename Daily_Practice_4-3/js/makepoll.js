window.onload = function () {
    // 추가 버튼
    document.querySelector("#btn-add").onclick = function () {
        //화면 만들기
        let pollAnswerListDiv = document.getElementById("poll-answer-list");

        // div 태그로 만들고 class 이름 넣어주기
        let divEl = document.createElement("div");
        divEl.setAttribute("class", "poll-answer-item");
        
        // input 태그로 만들고 type,name 값 넣어주기
        let inputEl = document.createElement("input");
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("name", "answer");

        // button 태그로 만들고 type, class 값 넣어주기
        let buttonEl = document.createElement("button");
        buttonEl.id = "btn-del";
        buttonEl.setAttribute("type", "button");
        buttonEl.setAttribute("class", "button");
        
        // <button>과 </button> 사이에 "삭제"라는 텍스트 넣어주기 => appenchild앞에 붙은 태그 시작점과 태그 종료점 사이에 넣어주기
        buttonEl.appendChild(document.createTextNode("삭제"));

        buttonEl.addEventListener("click", function () {
            let parentEl = this.parentNode;
            pollAnswerListDiv.removeChild(parentEl);
        })

        // div 아래에 input 엘리먼트 넣기
        divEl.appendChild(inputEl);
        divEl.appendChild(buttonEl);
        pollAnswerListDiv.appendChild(divEl);
    }

    // document.querySelector("#btn-make").onclick = function(){
    //     if(confirm("투표를 생성하시겠습니까?")){
    //     let question = document.querySelector("#question").value;
    //     let answers = document.querySelectorAll("input[name='answer']");
    
    //       // console.log(question);
    //       // console.log(answers);
    
    //     let answerArr = [];
    
    //       // for(let i = 0; i < answers.length; i++){
    //       //   alert(answers[i].value)
    //       // }
    
    //       // in과 of의 차이점 잘 알아두기
    //       // for(let answer in answers){
    //       //   alert(answer.value)
    //       // }
    //       // for...of : 배열에서 값을 가져올 때 많이 사용
    //     for(let answer of answers){
    //         // alert(answer.value)
            
    //         answerArr.push(answer.value);
    //     }
    
    //     let poll = `<div class="poll-title">[당신의 선택]</div>
    //     <div class="poll-question">${question}</div>
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
    
    //     console.log(poll);
    
    //     let pollBtnDiv = opener.document.querySelector(".content-left-poll-btn");
    //     let pollViewDiv = opener.document.querySelector(".content-left-poll");
    
    //     pollBtnDiv.style.display = "none";
    //     pollViewDiv.innerHTML = poll;
    //     pollViewDiv.style.display="";
    //     window.close();
    //       // console.log(pollBtnDiv);
    //       // console.log(pollViewDiv);
    
    //     }
    
    // }
    
    document.querySelector("#btn-make").addEventListener("click", function () {
        // let answers = document.querySelectorAll("input[name='answer']");
        
        // 답변들 얻어오기
        let answers = document.getElementsByName("answer");
        
        // 얻은 답변들 중 비어있다면 알람
        for (let answer of answers) {
            if (!answer.value) {
                alert("답변 항목 입력해주세요!");
                return;
            }
        }

        // 답변들 배열상태로 넣어주기
        let answerArr = [];
        for(let answer of answers){
            
            answerArr.push(answer.value);
        }

        // 로컬스토리지에 저장하기 위해 배열인 answerArr String 형태로 변환하여 로컬에 저장
        localStorage.setItem("answers", JSON.stringify(answerArr));

        // 아래 문장과 같은 창에 확인을 누르면 닫힘
        if (confirm("투표를 생성하시겠습니까?")) {
            self.close();
        }
    })
};