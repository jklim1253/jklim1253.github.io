---
layout: post
title: "[Modern C++]Lambda Functions And Expression"
category: modern-cpp
tags: modern cpp lambda function expression
---

---

## 간략한 설명(intro)

람다 함수(Lambda Function)라는 기능은
C++11 에서부터 지원하기 시작된 언어 고유 기능(core functionality)입니다.
부를수 있는 함수명이 없어서 임의 함수(Anonymous Function)라고 불리기도 합니다.
큰 의미에서는 람다 표현식(Lamdba Expression)이나,
클로저(Closure)라고 까지 불리기도 합니다.  
짧게 용어 정리하고 넘어갑니다.

- Lambda expression  

	임의의 함수 객체를 지정하는 표현식입니다.

- Lambda function  

	"Lambda expression" 용어와 상호교환적으로 사용됩니다.

- Closure  

	Lambda expression의 결과로 컴파일러에 의해 자동적으로
	만들어지는 임의의 함수 객체(anonymous function object)입니다.
	클로저는 람다 표현식를 정의한 시야(scope of the definition of
	the lambda expression)에서의 변수들을 저장하며,
	람다 표현식내에서 사용됩니다.

람다 표현식을 이용해서 **이름이 없는 함수뿐만 아니라 객체까지도 정의**할 수 있습니다.
함수 인자뿐만 아니라, 정의된 범위의 지역 변수까지도 접근이 가능합니다.
함수 객체를 특정 위치에 전달하기 위해서 이전 C++의 경우에는 클래스를 정의하고,
그 클래스의 객체를 만들고, 값을 설정한 후 전달했어야 했습니다.
람다 표현식을 이용하면 이러한 불편함이 해소될 수 있습니다.

- 이전 코드

{% highlight cpp %}
struct dividableBy {
	int i;
	dividableBy(int i):i(i){}
	bool operator()(int x) const {
		return (x%i == 0);
	}
};

int i = 2;
auto count = count_if(v.begin(), v.end(), dividableBy(i));
{% endhighlight %}

- 람다를 이용한 코드

{% highlight cpp %}
int i = 2;
int sum = 0;
auto count = count_if(v.begin(), v.end(), [&](int v){ 
	if (v%i == 0) sum += v; 
	return v%i == 0;
});
{% endhighlight %}

이전 코드에서 2로 나누어 지는 값들의 합을 구하려고 한다면 어떻게 해야될까? 생각해보자.

---

## 문법(syntax-grammar of lambda expression)

	[capture](parameters) -> return_type { function_body }

- capture : 기본값은 \[\](empty, **no access**), \[&\](**access by reference**),
	\[=\](**access by value**)
- parameters : 생략가능, function_body 에서 사용할 수 있는 함수 인자.
- return_type : **생략가능**, decltype(return_value)로 **자동으로 결정**될 수 있다.
- function_body : 처리할 표현식들, capture에 따라 **람다 함수와 동일한 scope의 값을 접근 가능**.

위 람다를 이용한 코드예제를 분석하면 다음과 같다.

- **capture** 로 \[&\]를 사용하여 외부의 변수를 reference로 접근이 가능하다.(i, sum)  
\[=\]를 사용하면 (i, sum)의 값을 이용할 수는 있지만 그 값들을 변경은 할 수 없으며,
\[\]를 사용하면 외부 변수를 전혀 접근할 수 없다.
- **parameter**로 int v를 사용하여, count_if 의 영향으로 컨테이너 v의 각 값을 전달받는다.(지역 변수 v)  
count_if 의 세번째 인자가 UnaryPred 이므로 인자를 하나 받아야 하며, 그 인자값은
첫번째와 두번째 인자인 InputIterator 의 reference된 값이다.
- **return_type**은 생략되었다. 하지만 람다 내부에서 반환되는 값
(v%i == 0)의 타입인 bool 타입으로 자동 처리된다.
자동으로 반환값을 기준으로 타입이 결정되므로 일반적으로는 생략해도 되지만,
명시적으로 특정 타입의 값으로 반환해야 할 경우에는 명시해주어야 한다.
- **function_body**에서는 람다 외부의 i 와 지역 변수 v 의 각값을 전달받아 나누어지는지를 판단하여
결과에 따라 람다 외부의 sum 에 누적한다. 판단 결과의 횟수를 세기위해 판단 결과를 반환한다.
처리할 로직의 필요에 따라 capture, parameter, return_type을 적절하게 지정해 주어야 한다.

---

## 활용방법(Exercise)

위에서 보여준것처럼 함수객체를 전달해야 하는 경우에 쉽게 사용할 수 있다.
그 외에 시스템의 콜백처리부분이나 이벤트 처리 관련하여 사용할 수 있겠다.

---

## 제약사항(Limitation)

함수객체는 템플릿으로 선언하여 사용하기도 한다. 람다는 템플릿화가 안된다.

---

## 생각해보면...(Let me think...)

---

## 참고자료(Reference)

- [\[MSDN\]Lambda Expressions in C++][msdn-lambda-expression]
- [\[IOS C++\]Lambda expressions and closures for C++][sc22-wg21-2006-n1968]

[msdn-lambda-expression]: https://msdn.microsoft.com/en-us/library/dd293608.aspx
[sc22-wg21-2006-n1968]: http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2006/n1968.pdf
