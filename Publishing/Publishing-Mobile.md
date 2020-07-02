## 모바일 작업시 고려사항
> 모바일 기기의 해상도는 PC모니터 해상도와 다르다.

  모바일 기기의 물리적인 가로, 세로값이 아닌 ratio(비율)라는 해상도 개념 존재
  (모바일 기기 ratio 2 = 물리적 1px = css 1px; 즉 물리적인 1*1 픽셀 크기에 2*2픽셀이 들어가게 되어, 총 4픽셀이 물리적인 1픽셀 안에 들어가게 된다.)
  
> input
- css에 line-height 적용시, 디바이스에서 커서가 이상하게 나온다.  
  
> IOS Issue
- placeholder issue


> iPhone Safe Area
- [노치(notch) 대응](https://wit.nts-corp.com/2019/10/24/5731)
```
<meta name='viewport' content='initial-scale=1, viewport-fit=cover'>
```
```
.wrap {
    padding-right:constant(safe-area-inset-right);
    padding-left:constant(safe-area-inset-left);
    padding-right:env(safe-area-inset-right);
    padding-left:env(safe-area-inset-left);
}
.btn {
    padding: 15px 0 calc(constant(safe-area-inset-bottom) + 15px);
    padding: 15px 0 calc(env(safe-area-inset-bottom) + 15px);
}
```


## bug note
- [모바일 웹 에서 keyup / keydown 이 마음대로 안되는 경우](https://eunsood.tistory.com/entry/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9-%EC%97%90%EC%84%9C-keyup-keydown-%EC%9D%B4-%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C-%EC%95%88%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0)
```js
$('#inputbox').bind("change keyup input", function(e) {
  fc();
});
```

- [iOS10에서 flex-column 레이아웃 깨짐현상](https://sunyrora.github.io/iphone-flex/)

