# Git

### # pull vs. fetch

### # cherry pick

### # 자주 사용하는 것
```
// 브랜치 확인
git branch
git branch -a // local + remote
// 브랜치 변경
git checkout [브랜치명]
// Branch(브랜치) 삭제하기
git branch -d [브랜치명] //Local
git branch -d [브랜치명] //Remote


// 커밋 메시지 변경
git commit --amend "commit message"

//수정 되돌리기
//git add 명령을 하기 이전(stage에 올리지 않은 경우)
//repository 내 모든
$ git checkout .

//특정 폴더||파일 아래의 모든
$ git checkout {dir}||{file_name}
```


## # References  
- [Git을 사용할 때 알아야 할 4 가지](https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/git%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-4-%EA%B0%80%EC%A7%80-f8a64f5fa558)
- [Git을 이용한 협업 워크플로우](https://lhy.kr/git-workflow)
- [GitHub 저장소 이름 및 url 변경하기](https://12bme.tistory.com/43)
- [Git - 수정한 것 되돌리기](http://hochulshin.com/git-revert-changes/)
