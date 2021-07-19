# Git CMD

#### pull vs. fetch

pull = fecth + merge

#### cherry pick

(..pending)

#### 자주 사용하는 것

```
// **[브랜치명]은 `-`를 사용해 띄워쓴다.
// 브랜치 갱신
$ git remote update

// 브랜치 확인
$ git branch // local
$ git branch -r // remote
$ git branch -a // local + remote

// 브랜치 생성
$ git branch [브랜치명]
// 브랜치 생성 + 이동
$ git checkout -b [브랜치명]
//sub branch 커멘드 라인으로 체크아웃 하기
$git checkout -b 브랜치이름 // 일반
$git checkout -b 브랜치이름 특정오리진브랜

// 브랜치 변경
$ git checkout [브랜치명]

// remote 브랜치 가져오기
$ git fetch && git checkout [브랜치명]
$ git checkout -t [브랜치명]

// Branch(브랜치) 삭제하기
$ git branch -D [브랜치명] // local
$ git push origin --delete [브랜치명] // remote

// 유효하지 않은 브랜치 정리
$ git remote prune origin
// 로컬 저장소를 최신 정보로 갱신(리모트 저장소와 동기화)
$ git fetch -p

// 커밋 메시지 변경
// #1 push 전
$ git commit --amend -m "commit message"
// #2 push 후
// 1) $ git rebase HEAD~[커밋의 역순의 index] -i
$ git rebase HEAD~1-i
// 2) [insert] pick -> reword
// 3) `i`를 입력하여 편집모드로 수정 -> `ESC` -> `:wq!`
$ git push -f

//수정 되돌리기
//git add 명령을 하기 이전(stage에 올리지 않은 경우)
//repository 내 모든
$ git checkout .
$ git store . (^2.3)

//특정 폴더||파일 아래의 모든
$ git checkout {dir}||{file_name}


//레파지토리 연결
$ git remote add origin [연결할 git repo url]
//upstream 연결후, 소스 상태 갱신
$ git remote add upstream [연결할 git repo url]
$ git remote // 연결확인 origin, upstream 존재
$ git fetch upstream
$ git merge upstream/main


//레파지토리 이름 변경
$ git remote set-url origin [변경할 git repo url]

//사용자 이름, 이메일 변경
git config --global user.name "유수정"
git config --global user.email "yoosj0703@gmail.com"

//삭제
$ git config --unset  user.name
$ git config --unset --global user.name

// gitignore 나중에 선택할 때, 이전 커밋삭제
$ git rm -r --cached .

// stash
$ git stash
$ git stash save

$ git stash list

$ git stash apply
$ git stash apply [stash 이름]
$ git stash drop
$ git stash drop [stash 이름]
```

### git commit template

> `git commit msg template`

1. `git-commit-template.txt`에 `commit convention`작성
1. git config commit.template에 설정해주기
1. `git commit` -> 해당 템플릿으로 이동
1. `insert`키로 commit msg 작성후 -> *:qa*로 끝내기(`:qw!`가 아님!!: Aborting commit; you did not edit the message 발생원인)
1. 커밋 확인 -> `git push`

```bash
$ git config --global commit.template [해당루트]/git-commit-template.txt
```

### 리눅스(Linux) 명령어

> Git 이용시, 함께 자주 사용하는 스크립트 정리

1. `;`(semicolon) vs. `&&`
   > 공통적으로 명령어들을 순차적으로 실행할 때 사용
   > `&&` 전제가 `true`여만 다음 명령어 실행 / `;`는 `true`여부와 상관없이 순차적으로 실행

```
$ rm -rf .next && npm run build && ..
```

2. rm(remove) 명령어 - 파일, 폴더 삭제

```
// 해당 폴더와 그 폴더 하위 모든 파일, 폴더 삭제
$ rm -rf [폴더명]
// rm -f 강제 삭제
// rm -r 모든 파일, 폴더 삭제
```

#### Issue log

###### `git push` to private git

- Issue
  ```
  fatal: remote error: Invalid username or password.
  ```
- Solved

  ```
  // #1 remote.origin.url 확인
  $ git config --list
  // #2 기존 url 제거
  $ git remote remove origin
  // #3 url 재연결
  $ git remote add origin https://USERNAME:PASSWORD@<REPOSITORY URL>
  // #4 변경된 url 확인 -> pull 정상작동 확인
  $ git config --list
  $ git pull

  ```

### References

- [Git을 사용할 때 알아야 할 4 가지](https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/git%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%EC%95%8C%E]C%95%84%EC%95%BC-%ED%95%A0-4-%EA%B0%80%EC%A7%80-f8a64f5fa558)
- [Git을 이용한 협업 워크플로우](https://lhy.kr/git-workflow)
- [GitHub 저장소 이름 및 url 변경하기](https://12bme.tistory.com/43)
- [Git - 수정한 것 되돌리기](http://hochulshin.com/git-revert-changes/)
- [지금 당장 좋은 커밋 메시지를 남기는 방법(with Git Commit Template)](https://jeong-pro.tistory.com/207)
- [git diff 에서 변경된 부분을 더 명확하게 보는 방법](https://blog.outsider.ne.kr/1011)
- [Git 리모트(remote) 브랜치 생성 및 삭제하기](https://trustyoo86.github.io/git/2017/11/28/git-remote-branch-create.html)
- [사람들이 잘 안알려주는 GitHub 팁](https://medium.com/@kkweon/%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%B4-%EC%9E%98-%EC%95%88%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-github-%ED%8C%81-941e4d644402)
- [효율적인 commit message 작성을 위한 conventional commits](https://medium.com/humanscape-tech/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-commit-message-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-conventional-commits-ae885898e754)
- [karma git-commit-msg](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)
- [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [git template 설정하기 - 기본기를 쌓는 정아마추어 코딩블로그](https://jeong-pro.tistory.com/207)
- [리모트 브랜치 참조와 업데이트](https://mylko72.gitbooks.io/git/content/remote/remote_update.html)
- [[번역] Github 를 통해 이미 작성한 코드를 리뷰하는 방법](https://blog.kshgroup.kr/code-reviews-for-existing-code-with-github/)
- [사람들이 잘 안알려주는 GitHub 팁](https://medium.com/@kkweon/%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%B4-%EC%9E%98-%EC%95%88%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94-github-%ED%8C%81-941e4d644402)
- [How to Become a Master of Git Tags](https://blog.daftcode.pl/how-to-become-a-master-of-git-tags-b70fbd9609d9)
- [Semantic Versioning](https://semver.org/)
