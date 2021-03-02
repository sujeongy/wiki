// import { sendEmail, sendSNS } from "./msgService";
const messageService = require('./msgService');

const data = require('./data');

module.exports = {
  findAll() {
    return data.users;
  },

  create(user) {
    data.users.push(user);
  },

  destroy(id) {
    data.users.splice(data.users.findIndex(user => user.id === id), 1);
  },

  update(id, user) {
    data.users[data.users.findIndex(user => user.id === id)] === user;
  },

  register(user) {
    const msg = '회원 가입을 환영합니다!';
    messageService.sendEmail(user.email, msg);
    messageService.sendSNS(user.phone, msg);
  },

  deregister(user) {
  const msg = '탈퇴 처리 되었습니다.';
  messageService.sendEmail(user.email, msg);
  messageService.sendSNS(user.phone, msg);
  },
};
