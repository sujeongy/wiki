# CLI

## 포트번호 바꾸기

```shell
// npm start -- --port "port number"
npm start -- --port 8000
```

## Change `npm` version

```
// `--save` 저장된 것을 overwrite 해주는 개념
// ex. 리액트 버젼을 바꿔보기
// #1 기존의 포함되어 있는 것들을 `uninstall`(*if not, overwrite error)
npm uninstall --save react react-dom react-scripts
// #2 해당하는 버젼을 `@`함께 입력
npm install --save react@16.13.1 react-dom@16.14.1 react-scripts@3.4.4
```

## Get Directory `Tree`

```
// only folder
$ tree
$ tree -a // text
// with files
$ tree -f
```

\*\* `bash`에서 는 작동하지 않음 -> `powershell`에서 사용할 것

- [참고 how do I add the 'tree' command to git-bash on Windows?](https://superuser.com/questions/531592/how-do-i-add-the-tree-command-to-git-bash-on-windows)

## npx

> `npx create-react-app`처럼 일회성에 자주 사용

- [npx란 무엇인가?](https://geonlee.tistory.com/32)

## Basics

#### windows

```shell
$ ls === $ dir
```
