# 2023-SSAFY Project 
# Enjoy trip 홈즈 

#### Project member : Lee Do Ha, Hong Seung Jun

--------------------------
## Description
사용자에게 한국의 다양한 관광지, 먹거리, 축제, 행사 등을 소개하여 지역 관광 활성화를 위한 지역 관광 소개 페이지를 구축하려고 한다. 한국관광공사에서 제공하는 국문관광정보서비스_GW의 다양한 상세기능정보 API를 활용하여 지역별 관광지 data를 분석하고 화면에 표시한다. 또한 여행계획을 위한 스케줄과 여행경로 공유 등 사용자 편의 기능을 구현해 본다. 추가적으로 나만의 숨은 관광지를 소개하는 페이지와 자유롭게 토론이 가능한 게시판 등을 구현해 본다.

## Environment

> html, css, js  
> VSCODE
> Windows  
 

## Manual 

#### 필수 요구 사항
1. 프로젝트 메인 화면
<img width="80%" alt="main" src="https://user-images.githubusercontent.com/107923409/226160801-6899bbc0-fe2c-4d0b-90ab-35419b7fcc81.png">
</br>
</br>

2. 아파트 매매/전월세 , 주택 매매/전월세 별로 선택 후 검색  
<img width="80%" src="https://user-images.githubusercontent.com/44559332/215703781-acb4e292-810d-4154-82e1-c4b064eb6afe.png"/>
</br>
</br>

3. 동으로 검색  
<img width="80%" src="https://user-images.githubusercontent.com/44559332/215703306-c891e033-ccfe-4e9e-9be4-310f87e00f5c.png"/> 
</br>
</br>

4. 아파트 이름으로 검색  
<img width="80%" src="https://user-images.githubusercontent.com/44559332/215702986-fc40a4fa-b34a-41c8-94f5-256151de16eb.png"/> 
</br>
</br>

이때, 해당하는 매물의 이미지 값을 띄워준다.  


5. 요구하는 코드를 람다식으로 변경 완료!


#### 주변 환경 오염 정보 분석
1. 매물을 선택 한 다음 환경체크 버튼을 클릭시 환경 지도 내역 점검 창이 뜨게된다.  
<img width="80%" src="https://user-images.githubusercontent.com/44559332/215704252-6f8bb94c-dd71-47dd-8b3a-d6aab109e10c.png"/></br>
  
이때, 매물을 선택한다면 법정동 코드 값을 환경 지도 클래스에 넘긴다.
</br>
</br>

2. 환경지도 점검 내역 창에서 읽기 버튼을 누르면 넘겨받은 지역코드와 일치하는 환경지도내역 파일을(XML파일) 파싱해 원하는 내역을 보여준다.
<img width="80%" src="https://user-images.githubusercontent.com/44559332/215705616-36f5d0a2-f277-466a-b81d-5430aab37efd.png"/> 
</br>
</br>



#### 주변 상권 정보 분석
1. 매물을 선택 한 다음 상권 정보 버튼을 클릭시 상권 정보 창이 뜨게된다.  
   <img width="80%" src="https://user-images.githubusercontent.com/107923409/215762539-30c64f13-0f5e-4a55-ba5d-f63e5551a6ab.png"/>
</br>
</br>

2. 상권 정보 창에서 읽기 버튼을 누르게 되면 상권정보 파일에서 해당하는 구의 값만을 읽어와 보여준다.
   <img width="80%" src="https://user-images.githubusercontent.com/107923409/215761199-3287c206-ba8c-4a65-aec8-2e9dd24e7bc2.png"/>
</br>
</br>

마지막에 타이틀을 조원이름으로 변경!!!! 