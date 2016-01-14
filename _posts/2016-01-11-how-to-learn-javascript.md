---
layout: post
title: "Javascript 공부방법"
date: 2016-01-11, 16:31:00, +0900 
category: javascript
tags: how-to learn javascript
---

---

2016-01-11 마지막 업데이트.

### 시작하며.. 

이 글은 자바스크립트를 공부해 보고자 했던 이전의 도전들이
매번 좋지 않은 결과만을 주고 끝이 나는 것에 **화딱지가 나서**
기록을 남기어 다음 도전에는 지금하는 도전보다 한 발 앞으로 나아가는데 도움이 되고자
이렇게 글을 쓰기 시작한다. 언제든지 내용은 추가되거나 변경될 수 있다.

다시 이 글을 읽고 있으며, 이 글 뒷편에 덧붙여서 다시 도전을 할려고 하는 미래의 내 자신에게 한 마디 하자면...

	시간은 많지만, 모든 것은 때가 있기 마련이다.
	그 때라는 것은 지나고 나서야 안다.
	그 때가 그 때였다는 사실을..
	지금이 그 때라고 생각하고 도전해라.

아래 작성될 내용은 다음에 열거된 페이지들을 참고하여 작성될 것이다.
추가적으로 참고한 곳이 있으면 이곳에 추가하도록 하겠다.

- [How to Learn Javascript Properly][How-to-Learn-JavaScript-Properly]

---

### 교재는

[Beginning Javascript][amazon beginning javascript link] 를 초보자용으로 추천.
현재(2015-12-15) 최신판은 5판이다. 아쉽게도 번역판이 없다. 

---

### 어떻게 공부 시작하나

교재를 통해서 접하는 모든 예제를 **직접 쳐보고 테스트해보라**.
항상 눈으로만 읽고서 아는 내용이라고 테스트 해보지 않고 넘어가는 
**나의 잘못된 습관에 너무 길들여 지지 마라**.
Firefox나 크롬 브라우저의 콘솔창에서 예제 코드들을 실제 그대로 쳐보고, 
고쳐서 해보기도 하고, 결과를 눈으로 확인해라.
브라우저 콘솔은 자바스크립트 코드를 작성하고 실행시켜볼 수 있는 공간이다.

교재 외에 추가적으로 보거나 학습할 수 있는 꺼리를 알려준다.

- [JavaScriptIsSexy.com][javascriptissexy], 현재 이글의 원문이 있는 사이트, 영문 사이트다.
참고할 만한 글이 4개 정도 있다.
- [Codecademy.com][codecademy] 에 가입해서 제공되는 과정을 병행하라. 영문 사이트다. 
참고할만한 과정이 4개 과정이 있다.
- [Stack Overflow](http://stackoverflow.com/) 에 가입해서 바보같아 보일거 같은 것이라도 궁금한 것이 있으면 물어보라. 영어 사이트다.

참고 사이트에서는 **7주에 걸쳐서 자바스크립트에 대해 공부하는 일정**을 소개해준다.

- 1주차 ~ 5주차

	교재의 각 장을 순서대로, 차례에 적힌대로 읽는 것은 아니지만
	각 장을 모두 읽어야 하는 것은 맞다.
	일일이 주차별 읽어야 하는 부분을 적다가 의미가 없어서 지워버렸다.

	교재 5판의 경우 총 18장으로 구성되어 있으며, 거의 순서대로 읽으면 되는데,
	모든 프로그래밍 언어의 소개에 해당하는 
	자료형, 변수, 흐름 제어, 반복, 함수까지는 쭈욱 읽고서(Chapter 4까지)

	다음으로 넘어가기 전에
	마지막장에 소개된 **'흔한 실수들, 디버깅, 에러 처리'**를 먼저 읽고 다음 장으로 넘어간다.

	지옥의 5주가 될것이다. 한달이 약간 넘는 시간을 대략 600페이지의 책을 읽어야 한다.
	그냥 읽는 것도 아니고 하나씩 다 테스트 해보면서, 이해도 해야한다.
	겁나 어려울 거다.

	그래서 [Codecademy.com][codecademy]에서 제공하는 무료 교육도 이용하라고 되어 있다.

	- [Web Fundamentals][web-fundamentals]
	- [Make a Website][make-a-website]
	- [Javascript Track][javascript-track]
	- [jQuery Track][jquery-track]
	- [Make an Interactive Website][make-an-interactive-website]
	
	JavaScriptIsSexy.com의 글도 읽어보라고 되어 있다.

	- [JavaScript Objects in Detail][javascript-objects-in-detail]
	- [JavaScript Variable Scope and Hoisting Explained][javascript-variable-scope-and-hoisting-explained]
	- [Understand JavaScripts "this" With Clarity, and Master It.][understand-javascripts-this-with-clarity-and-master-it]
	- [OOP In JavaScript: What You NEED to Know.][oop-in-javascript-what-you-need-to-know]

- 6주차

	5주동안 꾸준히 책을 읽어 왔다면 대충 감을 잡을 시기인가.

	여기까지 했다면, 탄탄한 자바스크립트 웹 어플을 만들 수 있는 충분한 지식을 갖추었다.
	아래에 기술된 것을 성공적으로 만들 수 있을 때까지 더 이상 진행하지 마라.
	질문하는 것을 두려워 하지말고, 개념 이해를 위해 교재를 다시 읽어보자.

	**** 퀴즈 웹 어플리케이션 만들기 ****

	- 라디오 버튼을 선택하는 간단한 퀴즈다. 완료될때까지 그동안의 누적된 점수를 보여줘야 한다.
	- 퀴즈는 여러 질문 중 몇번에 해당하는 질문도 보여줄 수 있고, 선택지도 마찬가지다.
	- 최종적으로 마지막 페이지에서 유저의 점수와 최종 점수를 보여준다. 마지막 페이지는 점수만 보여줄 것이고, 당연히 마지막 문제는 지운다.
	- 모든 질문을 저장하기 위해 배열을 사용해라. 각 질문, 각 선택지 그리고 정답은 객체에 저장되어야 한다. 질문 배열은 다음과 같은 형태일 것이다.

			var allQuestions = [{
				question:"한국의 대통령은 누구인가?",
				choices:["오징어","감자","김치","짜장면"],
				correctAnswer:0}];
	- 유저가 "다음"버튼을 누르면, 동적으로 현재 질문을 제거하고, 다음 질문을 추가하라. 이 퀴즈 버전에서는 "다음"버튼이 진행하는 유일한 버튼이다.
	- 모르는 것이 있으면 물어보라. Stack Overflow 한테.

	**** 퀴즈 웹 어플리케이션 개선하기 ****

	- client-side 데이터 정합성체크 기능을 추가하라 :
	다음 퀴즈로 가기 전에 각 퀴즈에 대해 답을 하게 하라.
	- 뒤로 가서 선택지를 변경할 수 있도록 "뒤로가기"버튼을 추가하라 :
	유저는 첫번째 질문까지 돌아갈 수 있다. 유저가 이미 답한 질문에 대해서,
	선택했던 답의 라디오 버튼이 선택되어 있도록 해서,
	이미 답했던 질문에 다시 답하도록 강요하지 않는다.
	- jQuery를 이용해서 애니메이션을 추가하라 :
	현재 질문을 페이드아웃 처리하고, 다음 질문은 페이드인 처리한다.
	- IE 9 에서 테스트 해보고, 버그를 고쳐라. 이 작업은 좋은 훈련이 될것이다.
	- 외부 JSON파일에 퀴즈의 질문을 저장하라.
	- 사용자 인증을 추가하라 : 
	유저가 로그인 하도록 하고, 로컬 저장소(HTML5 browser storage)에 로그인 인증상태를 저장하자.
	- 유저를 기억하도록 쿠키를 사용하고, 퀴즈를 다시 하려하면
	"'이름'님 환영합니다."라는 문구를 보여주자.

	6주차가 길게 걸릴수도, 짧게 걸릴수도 있겠다. 지난 5주동안 어떻게 공부해왔는냐가 관건일 것이다.

- 7주차

	**Git과 함께 시작해보자; 객체 지향 자바스크립트; 퀴즈를 좀더 개선시켜보자**

	1. [Git 수업](https://www.codeschool.com/courses/try-git)을 들어라.
	1. [OOP In JavaScript: What You NEED to Know][oop-in-javascript-what-you-need-to-know]
	를 읽어라.
	1. 퀴즈를 좀 더 개선시켜보자.
		- 전체 페이지 레이아웃을 위해 [Twitter Bootstrap][twitter-bootstrap]을 사용하라.
		보다 폴리쉬드하게 보이게 퀴즈 요소를 포함시키자.
		추가적으로, [tabs][bootstrap-tabs] 유저 인터페이스를 사용해보라.
		- [Handlebars.js][tutorial-handlebars.js]를 공부해서 퀴즈에 Handlebars.js 템플릿을 추가하라.
		더 이상 자바스크립트 코드에 어떤 HTML도 필요없을 것이다.
		여러분의 퀴즈는 보다 나아질 것이다. 조금씩 조금씩.
		- 퀴즈를 했던 모든 유저의 기록을 유지하라.
		그래서 유저의 점수가 다른 유저와의 랭크에서 어떤 위치에 있는지 보여줘라.
	1. Backbone.js 과 Node.js 나 Meteor.js 를 배운 후에, 이 기술들을 이용해서 
	퀴즈 어플을 재구성해보고, 이래 저래 해서 데이터베이스까지 사용해서 저장해보자.
	1. 만들어 볼만한 개인 프로젝트를 결정하자. 결정했다면 만들기 시작하자.
	책을 참고서 삼고, Stack Overflow의 멤버이지 않는가:모르면 물어보면 되잖아.
	이젠 물어보는 것만 아니라 답변을 달 수 있을지도 모르는 거니까.

6주차까지는 뭐 하려고 한다면 할 수 있는 내용들이다. 물론 쉽게 할 수 있는 과정은 아닐 것이다.
마지막 7주차에 소개된 내용은 이젠 중급자로 넘어가라는 내용같다. 
6주차만 보더라도 기술된 내용을 기반으로 웹 어플 하나 만드는 것이고, 
7주차의 퀴즈 개선시키기까지 했다면 다른 내용을 찾아서 공부해야 할 것이다.

일단 지금으로써는 지옥의 5주를 시작해보자.

아... 여기까지 쓰는데도 힘들다.. 물 좀 먹고...

---

### Javascript에 대한 것들..

- [x] Chapter 1. Introduction to Javascript and the Web
- [x] Chapter 2. Data Types and Variables
- [x] Chapter 3. Decisions and Loops
- [x] Chapter 4. Functions and Scope
- [ ] Chapter 5. Javascript - An Object-Based Language
- [ ] Chapter 6. String Manipulation
- [ ] Chapter 7. Date, Time, and Timers
- [ ] Chapter 8. Programming The Browser
- [ ] Chapter 9. DOM Scripting
- [ ] Chapter 10. Events
- [ ] Chapter 11. HTML Forms : Interacting With The User
- [ ] Chapter 12. JSON
- [ ] Chapter 13. Data Storage
- [ ] Chapter 14. AJAX
- [ ] Chapter 15. HTML5 Media
- [ ] Chapter 16. JQuery
- [ ] Chapter 17. Other Javascript Libraries
- [ ] Chapter 18. Common Mistakes, Debugging, And Error Handling

function은 first-class citizen이다. 변수처럼 사용될 수 있다.(C/C++의 함수포인터로 사용가능하다.)

---

### 참고한 자료들

- [How to Learn JavaScript Properly][How-to-Learn-JavaScript-Properly]


[How-to-Learn-JavaScript-Properly]: http://javascriptissexy.com/how-to-learn-javascript-properly/
[amazon beginning javascript link]: http://www.amazon.com/Beginning-JavaScript-Jeremy-McPeak/dp/1118903331/ref=sr_1_1?s=books&ie=UTF8&qid=1450174227&sr=1-1&keywords=beginning+javascript
[Codecademy]: http://www.codecademy.com/
[twitter-bootstrap]: http://twitter.github.com/bootstrap/
[bootstrap-tabs]: http://twitter.github.com/bootstrap/javascript.html#tabs
[tutorial-handlebars.js]: http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
[javascriptissexy]: http://javascriptissexy.com/
[web-fundamentals]: http://www.codecademy.com/tracks/web
[make-a-website]: http://www.codecademy.com/skills/make-a-website
[javascript-track]: http://www.codecademy.com/tracks/javascript
[javascript-objects-in-detail]: http://javascriptissexy.com/javascript-objects-in-detail/
[jquery-track]: http://www.codecademy.com/tracks/jquery
[make-an-interactive-website]: http://www.codecademy.com/skills/make-an-interactive-website
[javascript-variable-scope-and-hoisting-explained]: http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/
[understand-javascripts-this-with-clarity-and-master-it]: http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
[oop-in-javascript-what-you-need-to-know]: http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/

