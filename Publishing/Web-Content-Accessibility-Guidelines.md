# 웹 접근성 (Web Content Accessibility)

### [포커스를 시각적으로 구별할 수 있는가?](https://nuli.navercorp.com/sharing/a11y/checklist/6.3.1)
- onfocus = this.blur(); 처리 제거
- 클릭 시 포커스를 blur 처리 제거
- outline:none을 제거하거나 포커스 시 포커스 되었음을 알 수 있는 대체 수단 제공

```html
<!--- a 요소의 자식 요소인 img 요소에 position:absolute가 선언되어 a 요소가 자체 크기를 갖지 못하게 됨. 그 결과 키보드 포커스 시 외곽선이 표시되지 못함. -->
<!-- bad -->
<style>
img{position:absolute;top:100px;left:100px}
</style>
<a href="http://naver.com"><img src="http://static.naver.net/www/u/2010/0611/nmms_215646753.gif" alt="네이버"></a>
<!-- good -->
<!-- good -->
<style>
a{position:absolute;top:100px;left:100px}
</style>
<a href="http://naver.com"><img src="http://static.naver.net/www/u/2010/0611/nmms_215646753.gif" alt="네이버"></a>
```
    
```html
<!-- good -->
<!-- bad -->
```


## # References
- [NHN Web Content Accessibility Guidelines (NWCAG) 1.0](https://nuli.navercorp.com/sharing/a11y/nwcag)
- [널리 - 웹접근성](https://nuli.navercorp.com/sharing/a11y/education#task4)
- [널리 - PC/모바일 웹 접근성 체크리스트](https://nuli.navercorp.com/sharing/a11y/checklist/1.1.1)


## # See also
- 
