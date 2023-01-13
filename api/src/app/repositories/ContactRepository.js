const { v4: uuidv4 } = require('uuid');

const contacts = [
  {
    id: uuidv4(),
    name: 'pedrogermano232@gmail.com',
    phone: '123123123',
    category_id: uuidv4(),

  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve, reject) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
