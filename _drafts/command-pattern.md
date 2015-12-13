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

일반적으로 객체의 메소드를 호출하는 방식은 다음과 같다.

	호출자(client) ==== 호출(call object method) ===> 객체(receiver)

command와 invoker 클래스를 추가하여 "호출"부분을 추상화 및 캡슐화 한 것이 Command Pattern이다.

Command Pattern을 사용함으로써 얻게 되는 이점을 정리해보면 다음과 같다.

- client는 receiver의 클래스, 메소드, 메소드에 필요한 파라미터에 알 필요가 없다.
- 그로 인해 어떠한 행위를 실행하거나 일련의 작업으로 처리하는 일반화된 모듈을 만들기 쉽다.
- invoker를 통해 client는 예약이나 모드에 전혀 모르는 상태에서 command를 예약하거나 다른 모드에서 실행할 수 있다.

실제 적용 예를 통해서 Command Pattern을 적용해 볼 수 있는 경우를 생각해보자.

---

### 적용 예

---

### 구현

---

### 생각해보면...



