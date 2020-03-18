                          
# 용어정리  
프로젝트 진행시, 매번 격는 어려움은 **용어정리**  
  
물론 gnb, aside, footer 등의 쉽게 구분이 가는 것들이 있지만,  
  
다들 작업해온 환경이 달라서,  
  
해당 UI 컴포넌트에 대한 용어와 기능 정의를 명확히 할 필요성을 매번 느낀다.  
  
 1. Button  
 - 링크<a> vs. 기능<button> 으로 구분되나, 모양은 똑같이 구현해야함  
 - <button> 경우, type 설정을 꼭 해주어야 한다. (default: sumbit)  
  
2. Popup vs. Modal  
  
3. DropDown vs. Select  
- 초기 기획 단계에서 이 둘은 명확히 구분  
- 사용자에게 어떤 값의 입력(선택)을 요구하기 위해서는 셀렉트를 사용합(디자인은 변경가능성 고려하지만, 핵심은 '선택'이라는 기능)  
- 드롭다운을 사용 1) 하위 메뉴에서 어떤 액션이 있어야 한다면, 2)버튼 뒤에 숨겨진 메뉴를 표현하기 위해서  
- **구현은 기획에 맞추어 진행**  
- 또는 UI Select 위젯들이 많다. jqeury, [toastui](https://ui.toast.com/select-box/)e등등 찾아서 맞는 것을 사용해도 좋을 듯하다.  
  
  
  
# references  
- [헷갈리는 UI, 스티비는 이렇게 씁니다.](https://blog.stibee.com/%ED%97%B7%EA%B0%88%EB%A6%AC%EB%8A%94-ui-%EC%8A%A4%ED%8B%B0%EB%B9%84%EB%8A%94-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EC%94%81%EB%8B%88%EB%8B%A4-fa2d52f36a6c)
- [button 사용 이유](https://jsunnylab.tistory.com/38)
