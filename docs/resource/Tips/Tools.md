# Editor

## VS Code

### 자주 쓰는 단축키

```
// insert line below: 코드중간에서 다음줄로 이동하고 싶을때
Ctrl + Enter
// Undo last Cursor: 이전 위치 커서
Ctrl + U
// current selection
Shift + Alt + i // 선택된 블록 각줄 뒷부분에 커서생성
```

---

### Extension

- [TODO Hightligh](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight#review-details)
- [Tabout](https://marketplace.visualstudio.com/items?itemName=albert.TabOut)

---

### Issue Log

##### **vscode `tab` not working**

> `tab` key 제대로 동작하지 않아, `space`입력이나 `emmet`동작이 되지 않았다.

- [해결법][visual studio code tab key does not insert a tab](https://stackoverflow.com/questions/35519538/visual-studio-code-tab-key-does-not-insert-a-tab)

```
"emmet.triggerExpansionOnTab": false
```

#### **`prettier` not working**

> 기존에 동작하던 `.prettierrc`가 동작하지 않는다.

[접근법]

1. 세팅값이 저장할때마다 동작하도록 설정되어 있는가? `"editor.formatOnSave": true`
1. prettier 확장있는가?
1. `.prettierrc` 파일이 있는가?

[해결법][vscode깃허브](https://github.com/microsoft/vscode/issues/108447#issuecomment-707236252)의 이슈를 참고해보면,

```
File -> Preferences -> Settings (for Windows)
Code -> Preferences -> Settings (for Mac)
Search for "Default Formatter". In the dropdown, prettier will show as esbenp.prettier-vscode.
> 세팅창에 들어가 'Default Formatter' 검색한 뒤, 'esbenp.prettier-vscode' 로 설정해주기
```

[추가 팁]

```
로컬에 npm으로 설치하는 방법은 여러 개발자들과 같은 코딩 Format을 유지하고자 할때 좋은 방법
혼자서 편히 VScode를 사용하고자 할때는 익스텐션으로 설치
`settings.json < .editorconfig < .prettierrc` 순으로 오버라이딩 된다.
결국은 `.prettierrc` 파일이 '짱'이다.
출처: https://uxgjs.tistory.com/150 [UX 공작소]
```

---
