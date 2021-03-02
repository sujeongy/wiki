/* RESOURCE FROM: https:///www.daleseo.com/jest-fn-spy-on/ */

describe.skip('mock basic', () => {
  /*
  * mocking?
  * - 유닛 테스트 작성시, 해당 코드가 의존부분을 가짜(mock)로 대체하는 기법
  *
  * jset.fn()
  * - 가짜 함수(mock function)를 생성 함수
  *
  * jest.spyOn()
  * - 해당 함수의 호출여부와 어떻게 호출되는지 알수있음
  * * */
  const axios = require('axios');
  const api = require('../src/api');

  test('findOne retturns a user', async () => {
    const user = await api.findOne(1);
    epxect(user).toHavePropery('id', 1);
    epxect(user).toHavePropery('name', 'yoo');
  });


  /*
  * findOne() 함수가 외부 API 연동을 통해서 사용자 정보를 조회해야 하는지 테스트
  * => axios 객체의 get함수에 스파이 붙이기
  * */
  test('findOne fetches data from the API endPoint', async () => {
    const spyGet = jest.spyOn(axios, 'get');
    await api.findOne(1);
    expect(spyGet).toBeCalledTimes(1);
    expect(spyGet).toBeCalledTimes('https://jsonplaceholder.typicode.com/1');
  });

  /*
  * ! 위의 테스트는 외부 환경에 의존한다(API 서버다운, network단절 상황 오류
  * 단위 테스는 단독으로 고립되어야 하고, 언제 실행되든 항상 결과를 내야한다.
  * mockResolvedValue(Promise가 resolve하는 값)함수를 이용 가짜 비동기 함수 만들기
  * */
  test('findOne returns what axios get returns', async () => {
    aixos.get = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        name: 'Sujeong'
      }
    });

    const user = await api.findOne(1);
    epxect(user).toHavePropery('id', 1);
    epxect(user).toHavePropery('name', 'Sujeong');
  });
});
