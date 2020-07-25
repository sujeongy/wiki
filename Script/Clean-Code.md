# Clean Code

## # 함수(Function)
- 매개변수(parameter): 2개 이하, 없는 경우가 제일 좋다.
- 한 함수에 한가지 행동만 수행(순수 함수) -> *테스트에 용이하게 함수를 분해
- 중복된 코드는 한 함수로 묶기
- **매개변수로 플래그(flag) 사용 피하기**
    ```
    //bad
    function createFile(name, flag) {
        if(flag) {
            //..
            fs.create(`./test/${name}`);
        } else {
            //..
            fs.create(name);
        }
    }

    //good
    function createFile(name) {
        fs.create(name);
    }
    function createTempFile(name) {
        fs.create(`./test/${name}`);
    }
    ```
- **부작용(side effect) 피하기**
    ```
    //bad
    let name = 'Yoo Sujeong';

    function splitIntoFirstandLastName() {
        name = name.split(' ');
    }

    splitIntoFirstandLastName();
    
    console.log(name); //['Yoo', 'Sujeong']

    //good
    function splitIntoFirstandLastName() {
        name = name.split(' ');
    }

    let name = 'Yoo Sujeong';
    let newName = splitIntoFirstandLastName(name);

    console.log(name); //'Yoo Sujeong'
    console.log(newName); //['Yoo', 'Sujeong']
    ```

- 전역함수 변경 피하기
- **조건문 캡슐화**
    ```
    //bad
    if(obj.state == 'working' && someFunc(list)) {
        //...
    }

    //good
    function checkCodition(obj, list) {
        return obj.state == 'working' && someFunc(list);
    }
    if(checkCodition(objInstance, listInstance)) {
        //...
    }
    ```
- **다형성(객제지향 vs. 절차형)



## # References
- [2020년 6월 20일 개발 이야기 특집(클린코드](https://www.slideshare.net/jrogue/2020-6-20?ref=https://jhrogue.blogspot.com/2020/06/b-2020-6-20.html)