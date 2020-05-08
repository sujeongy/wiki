# 마크업(Markup)
> 접근성도 고려해야 히지만, 무엇보다 **버그가 나지 않는** 이상적인 마크업에 대한 사색을 정리하는 공간

## Table of Contents

  1. [a vs. button - 언제쓸까?](#a-vs.-button)
  1. [input + label - 어떻게 쓸까?](#input-+-label)
  
---
  
### a vs. button
> 언제 쓸까?


#### # References
- [꿀팁: 편한 CSS3 체크박스와 라디오버튼](https://webdesign.tutsplus.com/ko/articles/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953)


---

### input + label
> 어떻게 쓸까?
  ```html
  <input type="checkbox" id="test01" name="inputs">
  <label for="test01">
    <span class="">icon</span>
    <span claa="">text<span>
  </label>
      
  <label>
    <input type="checkbox" id="test02" name="inputs">
    <span class="">icon</span>
    <span claa="">text<span>
  </label>
  ```


#### # References
- [꿀팁: 편한 CSS3 체크박스와 라디오버튼](https://webdesign.tutsplus.com/ko/articles/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953)
