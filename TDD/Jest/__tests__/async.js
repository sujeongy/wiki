/* RESOURCE FROM: https://www.daleseo.com/jest-async/ */

/*
* CONTENTS
* 1. Callback func test
* 2. Promise test
* 3. Async/Await test
*/

/*
  Callback Func Test
  테스트 함수가 done()이라는 함수 인자를 받고,
  done()함수를 콜백 함수의 제일 마지막에 호출하도록 수정
*/
function fetchUser(id, cb) {
  setTimeout(() => {
    console.log('wiat 0.1 sec');
    const user = {
      id,
      name: 'User' + id,
      email: id + '@test.com'
    };
    cb(user);
  }, 100);
}

test('fetch a user', (done) => {
  fetchUser(1, user => {
  // fetchUser(2, user => {
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com'
    });
    done();
  });
});


/*
  Promise Test(https://www.daleseo.com/js-async-promise/)
  Promise타입의 결과값으로 다음 수행할 작업을 진행
  변수에 할당보다 리턴값으로 사용되는 경우가 많다
*/

function fetchUser02(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('wiat 0.1 sec');
      const user = {
        id,
        name: 'User' + id,
        email: id + '@test.com'
      };
      resolve(user);
    }, 100);
  });
}

test('fetch a user02', () => {
  fetchUser02(1).then(user => {
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com'
    });
  });
});


/*
  Async/Await test(https://www.daleseo.com/js-async-async-await/)
*/
test('fetch a user02', async () => {
  const user = await fetchUser02(1);
  expect(user).toEqual({
    id: 1,
    name: 'User1',
    email: '1@test.com'
  });
});


