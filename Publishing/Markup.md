# 마크업(Markup)
> 접근성도 고려해야 히지만, 무엇보다 **버그가 나지 않는** 이상적인 마크업에 대한 사색을 정리하는 공간

## Table of Contents

  1. [a vs. button - 언제쓸까?](#a-vs.-button)
  1. [input + label - 어떻게 쓸까?](#input-+-label)
  1. [video vs. iframe - 무엇을 쓸까?](#ivideo vs.iframe)
 
  
  
---
  
  
## a vs. button
> 언제 쓸까?

### **[TL;DR]**


#### # References
- [a 태그 코딩시 필수 체크](http://tana.kr/ui/archives/41)


---


## input + label
> 어떻게 쓸까?
 
 ### **[TL;DR]**
 접근성을 고려한다면 명시적으로 input에 id + label for 로 연결하는 것이 좋다.
 허나, 개인의 취향상 id는 스크립트 쓸 때만 사용하는 편이라 암시적 연결(label안 input)를 사용할 예정
 
 
 [HTML]
 
  ```html
  // explicit connect
  // good for web accessibility
  <input type="checkbox" id="test01" name="inputs">
  <label for="test01">
    <span class="">icon</span>
    <span clasa="">text<span>
  </label>
      
   // implicit connect
   // use in bootstrap
  <label>
    <input type="checkbox" id="test02" name="inputs">
    <span class="">icon</span>
    <span clasa="">text<span>
  </label>
  ```
  
  [이슈]
  - 명시형으로 input type="[radio || checkbox]" 생성하여 기본값으로 checked 설정시, iOS 에서 동일한 name을 가진 모든 input이 checked된다.
     > [해결] 암시적 연결로 마크업을 바꾸어 해결
     >
     > [더보기] 명시적 연결로도 해결하기
  
  [더보기]
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="krystaly" data-slug-hash="zYvWpKd" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="input + label example.">
    <span>See the Pen <a href="https://codepen.io/krystaly/pen/zYvWpKd">
    input + label example.</a> by KrystalY (<a href="https://codepen.io/krystaly">@krystaly</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>


#### # References
- [꿀팁: 편한 CSS3 체크박스와 라디오버튼](https://webdesign.tutsplus.com/ko/articles/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953)
- [암시적인 label 요소 안의 checkbox 사용에 대해 질문](https://hashcode.co.kr/questions/6399/%EC%95%94%EC%8B%9C%EC%A0%81%EC%9D%B8-label-%EC%9A%94%EC%86%8C-%EC%95%88%EC%9D%98-checkbox-%EC%82%AC%EC%9A%A9%EC%97%90-%EB%8C%80%ED%95%B4-%EC%A7%88%EB%AC%B8%EC%9D%B4-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4)


---


## video vs. iframe
> 무엇을 쓸까?


#### # References
- [stackoverflow - What are the differences between using an html5 embedded video vs. an iframe with a youtube link?
](https://stackoverflow.com/questions/37359348/what-are-the-differences-between-using-an-html5-embedded-video-vs-an-iframe-wit)


---
