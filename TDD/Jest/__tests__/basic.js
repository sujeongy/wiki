/* RESOURCE FROM: https://www.daleseo.com/jest-basic/ */

/*
* HOW TO USE
* test('테스트 설명', () => {
*   expect('검증 대상').toXXX('기대 결과');
* });
*
* toXXX부분에서 사용되는 함수: Test Mathcher
* tobe의 경우, 객체가 아닌 기본형을 비교할 때, 사용됨
*
*/
// _test('1 is 1', () => {
//   expect(1).toBe(1);
// });


function getUser(id) {
  if( id <= 0) throw new Error('Invalid ID');
  return {
    id,
    email: `user${id}@test.com`
  };
}
describe('Basic test', () => {
  test('return a user object', () => {
    // expect(getUser(1)).toBe({
    expect(getUser(1)).toEqual({
      id: 1,
      email: `user1@test.com`
    });
  });

  test('number 0 is falsy but string 0 is truthy', () => {
    expect(0).toBeFalsy();
    expect('0').toBeTruthy();
  });

  test('array', () => {
    const colors = ['Red', 'Yellow', 'Blue'];
    expect(colors).toHaveLength(3);
    expect(colors).toContain('Yellow');
    expect(colors).not.toContain('Green');
  });

  test('string', () => {
    expect(getUser(1).email).toBe('user1@test.com');
    expect(getUser(2).email).toMatch(/.*test.com$/);
  });

  /*
  * toThrow() 함수를 사용할 떄,
  * 반드시 expect() 합수에 넘기는 검증 대상을 함수로 한 번 감싸줘야 한다.
  * 그렇지 않으면, 예의 발생 여부 체크가 아니라 테스트 도중 그 예외 발생
  */
  test('throw when id is non negative', () => {
    // expect(getUser(-1)).toThrow();
    // expect(getUser(-1)).toThrow('Invalid ID');
    expect(() => getUser(-1)).toThrow();
    expect(() => getUser(-1)).toThrow('Invalid ID');
  })
});
