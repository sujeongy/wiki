/* RESOURCE FROM: https://www.daleseo.com/jest-before-after/ */

const userService = require('../src/userService');
const data = require('../src/data');

/*
* beforeEach()로 중복 코드 제거하기
* 중복된 코드를 작성하는 것은 유지보수를 어렵게한다
* 초기 데이터를 적재하는 코드 추출하여 함수의 인자로 넘기기
*/
beforeEach(() => {
  data.users.push(
      { id: 1, email: 'user1@test.com' },
      { id: 2, email: 'user2@test.com' },
      { id: 3, email: 'user3@test.com' },
  );
});

/*
* afterEach() 로 데이터 정리
* 이전 테스트가 data.users[]에 영향을 주는것을 막기위해
* 각각의 테스트가 실행되고 호출된다.
*/
afterEach(() => {
  data.users.splice(0);
});

test('find all users', () => {
  const users = userService.findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: 'user1@test.com' });
  expect(users).toContainEqual({ id: 2, email: 'user2@test.com' });
  expect(users).toContainEqual({ id: 3, email: 'user3@test.com' });
});


test('create a user', () => {
  const user = { id: '4', email: 'user4@test.com' };

  userService.create(user);

  expect(data.users).toHaveLength(1); //!error: nedd afterEach()
  expect(data.users).toContainEqual(user);
});


test('destory a user', () => {
  const id = 3;
  const user = data.users.find(user => user.id === id);

  userService.destroy(id);

  expect(data.users).toHaveLength(2);
  expect(data.users).not.toContainEqual(user);
});


/*
* beforeAll(), afterAll()
* 각각의 함수가 아닌 맨 처음과 맨 끝에 한 번씩만 호출
* ex) DB에 접속할 필요한 연결(Connection) 객체
*     테스트 함수마다 매번 connection을 맺고 끊는 것보다 처음 맺고, 마지막에 종료하는 것이 효율적
*/
// let connection;
//
// beforeAll(() => {
//   connection = openConnection({ host: '...', port: '...'});
// });
//
// afterAll(() => {
//   connection.close();
// });


/*
* only()
* 테스트 코드를 디버깅할 떄
* 하나의 함수만 단독으로 실행하고 싶을 떄 사용
*
* skip()
* 해당 함수만 뺴고 실행
*/
test.only('run only', () => {
  // 이 테스트 함수만 실행됨
});

test('not run', () => {
  // 실행 안됨
});

test.skip('skip', () => {
  // 이 테스트 함수는 제외됨
});

test('run', () => {
  // 실행됨
});


/*
* describe(), it()
* 연관된 테스트 함수끼리 묶을때 describe()
* it()는 test()의 별칭
*/
describe('group 1', () => {
  test('test 1-1', () => {
    // ...
  });

  test('test 1-2', () => {
    // ...
  });
});

describe('group 2', () => {
  it('test 2-1', () => {
    // ...
  });

  it('test 2-2', () => {
    // ...
  });
});

