/* RESOURCE FROM: https://www.daleseo.com/jest-mock-modules/ */
describe.skip('msg mock test', () => {
// import { register, deregister } from "../src/userService2";
// import * as messageService from '../src/msgService';
  const userService = require('../src/userService');
  const messageService = require('../src/msgService');


  messageService.sendEmail = jest.fn();
  messageService.sendSMS = jest.fn();

  const sendEmail = messageService.sendEmail;
  const sendSMS = messageService.sendSMS;

  beforeEach(() => {
    sendEmail.mockClear();
    sendSMS.mockClear();
  });

  const user = {
    email: 'test@email.com',
    phone: '012-345-6789',
  };

  test('register sends messeges', () => {
    userService.register(user);

    expect(sendEmail).toBeCalledTimes(1);
    expect(sendEmail).toBeCalledWith(user.email, '회원 가입을 환영합니다!');

    expect(sendSMS).toBeCalledTimes(1);
    expect(sendSMS).toBeCalledWith(user.phone, '회원 가입을 환영합니다!');
  });

  test('deregister sends messaes', () => {
    userService.deregister(user);

    expect(sendEmail).toBeCalledTimes(1);
    expect(sendEmail).toBeCalledWith(user.email, '탈퇴 처리 되었습니다.');

    expect(sendSMS).toBeCalledTimes(1);
    expect(sendSMS).toBeCalledWith(user.phone, '탈퇴 처리 되었습니다.');
  });
});
