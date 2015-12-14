---
layout: post
title: "command pattern"
category: design-pattern
tags: command pattern
---

---

### 개요

Command Pattern은 행위 패턴(Behavioral Pattern)중 하나이며, 행위의 구체적인 사항을 객체화하여 쉽게 처리할 수 있도록 해주는 패턴이다.
일반적으로 역활에 따라 4개의 클래스가 기본이 되며, 다음과 같다.

- command
- receiver
- invoker
- client

각 클래스의 역활을 간략히 정리해보면 다음과 같다.

- command : 행위의 구체적인 사항을 보유하는 클래스.
- receiver : 실제 행위를 하는 클래스.
- invoker : command를 실행하는 클래스.
- client : invoker에게 command를 전달하는 클래스.

일반적으로, Command Pattern을 사용하지 않으면서, 객체의 메소드를 호출하는 방식은 다음과 같다.

	호출자(client) ==== 호출(call object method) ===> 객체(receiver)

command와 invoker 클래스를 추가하여 **호출부분을 추상화 및 캡슐화** 한 것이 Command Pattern이다.

Command Pattern을 사용함으로써 얻게 되는 이점을 정리해보면 다음과 같다.

- client는 receiver의 구체적인 사항(객체명, 메소드명, 메소드에 필요한 파라미터)에 대해 알 필요가 없다.
- 그로 인해 어떠한 행위를 실행하거나 일련의 작업으로 처리하는 일반화된 모듈을 만들기 쉽다.
- invoker를 통해, client는 예약이나 모드에 전혀 모르는 상태에서, command를 예약하거나 다른 모드에서 실행할 수 있다.

실제 적용 예를 통해서 Command Pattern을 적용해 볼 수 있는 경우를 생각해보자.

---

### 적용 예

- GUI buttons and menu items

	Swing이나 Borland Delphi에서, Action은 Command객체이다. 
	Action은 원하는 명령을 실행시키는 기능뿐만 아니라,
	Action과 관련된 icon, 키보드 단축키, 툴팁내용 등을 가질수도 있다.
	툴바 버튼이나 메뉴 컨포넌트는 Action객체만으로 완벽하게 초기화될 것이다.

- Macro recording

	유저의 모든 행동이 Command객체들로 표현된다면,
	프로그램은 Command객체가 실행됨에 따라 Command객체의 리스트를 유지함으로써
	간단하게 일련의 행동들을 기록할 수 있다.
	만약 프로그램이 스크립트 엔진을 내장하고 있다면,
	각 Command객체는 toScript() 메소드를 통해 실행된다는 전제하에,
	유저의 행동들은 쉽게 스크립트로 기록될 수 있다.
	
- Mobile Code

	Java 같은 언어(URLClassloader와 Codebase를 통해 코드를 
	하나의 시스템에서 다른 시스템으로 전달할 수 있는 언어)를 사용하면, 
	Command들은 원격 시스템(EJB Command, Master Worker)으로 전달되는 행동을 할 수도 있다.

- Multi-level undo

	하나의 프로그램에서 유저의 모든 행동들이 Command객체를 통해 구현된다면,
	가장 최근에 실행된 명령들을 스택형식으로 유지할 수 있다.
	유저가 어떤 명령을 되돌리기(undo)하고 싶어 한다면, 
	프로그램은 가장 최근의 Command객체를 뽑아내서(pop) 객체의 undo() 메소드를 실행하면 된다.

- Networking

	다른 기기에서 실행되도록 네트워크를 통해서 모든 Command객체를 전달하는 것이 가능하다.
	예를 들면 컴퓨터 게임에서 플레이어의 움직임들은 네트워크를 통해서 전달된다.

- Parallel Processing

	자원을 공유하는 작업이나 병렬처리에서 수 많은 쓰레드에서 실행되는 작업들은
	Command객체를 이용해서 작성될 수 있다.

- Progress bars

	어느 프로그램이 순서대로 실행되어야 할 일련의 Command들을 가지고 있다고 생각해 보자.
	각각의 Command들이 getEstimateDuration()이라는 메소드를 가지고 있다면,
	프로그램에서는 전체 소요시간을 쉽게 예측할 수 있다.
	이러한 것을 진행바로 표시해 줄 수 있다.

- Thread pools

	전형적이고 보통의 쓰레드 풀 클래스는 보통 
	**addTask()**(실행대기인 작업들을 보관하는 내부 큐에 작업을 넣는)라는 메소드를 가지고 있다.
	이것은 큐에서 작업을 실행시키는 쓰레드 풀을 관리한다.
	큐에 들어가는 항목들은 Command객체다.
	일반적으로 이런 객체들은 
	**java.lang.Runnable**(쓰레드 풀 자체는 지정된 작업들이 사용될거라는 것에 대해 전혀 알지 못함에도 불구하고
	쓰레드 풀이 명령들을 실행하도록 해준다.)같은 일반적인 인터페이스를 구현한다.

- Transactional behavior

	undo와 비슷하게, 데이터베이스 엔진이나 소프트웨어 설치프로그램은
	앞으로 할 작업이나 작업한 리스트를 유지한다.
	작업들 중 하나라도 실패한다면,
	다른 모든 작업들은 복구되거나 무시될 수 있다(일반적으로 rollback이라 불린다).
	예를 들어,
	서로를 참고하고 있는 두개의 데이터베이스 테이블이 변경되어야 하는데,
	두번째 변경이 실패했다면,
	첫번째 테이블이 잘못된 참조값을 가지고 있지 않도록
	transaction은 변경사항을 되돌릴 수 있다.

- Wizards

	흔히 마법사 프로그램은 하나의 작업(마지막 페이지에서 'Finish' 버튼을 클릭해야지만 무언가가 일어나는)에
	여러개의 설정 페이지를 제공한다.
	이런 경우에, UI 코드와 동작(application) 코드를 따로 구분하는 방법은
	Command객체를 이용해 마법사를 구현하는 것이다.
	Command객체는 마법사가 처음 화면에 보여질때 생성된다.
	각 페이지는 화면변화를 Command객체에 저장하고,
	사용자의 진행에 따라 그 객체들을 활성화시킨다.
	'Finish'는 단순히 execute() 호출을 발동시킨다.
	이러 방법으로 Command 클래스는 잘 작동할 것이다.

지금까지 알아본 적용 예들을 잘 생각해보면서 실제 구현을 해보자.

---

### 구현

C++ 를 이용해서 범용적인 클래스를 만들고, 
간단한 예제 프로그램에 적용해 보도록 하자.

{% highlight cpp %}
namespace CommandPattern {
class ICommand;
class IReceiver;
class IInvoker;
class IClient;

class ICommand {
	virtual void execute() = 0;
};

class IReceiver {
};

class IInvoker {
	virtual void pushCommand(ICommand*) = 0;
	virtual void run() = 0;
};

class IClient {
	virtual void registerCommand(ICommand*) = 0;
	virtual void registerInvoker(IInvoker*) = 0;
};

} // namespace CommandPattern.
{% endhighlight %}
---

### 생각해보면...



