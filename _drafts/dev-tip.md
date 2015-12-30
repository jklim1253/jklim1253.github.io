---
layout: post
title: "dev tip"
category: dev-tip
tags: dev tip
---

---

### git

#### msysgit 사용시 ssh-agent 자동 실행

msysgit을 설치하고 git-bash상에서 commit 내용을 push 하려고 할때, ssh에 등록된 암호를
묻는데 ssh-agent 가 실행중이지 않기 때문에 그런 현상이 발생한다. 윈도우 부팅 후 한번만
실행해주면 재부팅을 할 때까지는 더 이상 묻지 않는다.
그래서 부팅할 때마다 ssh-agent를 실행해야 하는데, bash를 실행할때 자동으로 ssh-agent를
실행시켜주는 코드가 아래 주소에 나와있다.

- [auto launch ssh agent on msysgit][ssh-agent-auto-launch]


### 생각해보면...



[ssh-agent-auto-launch]: https://help.github.com/articles/working-with-ssh-key-passphrases/#auto-launching-ssh-agent-on-msysgit
