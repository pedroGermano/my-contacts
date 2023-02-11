const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  show() { }

  store() { }

  uptdate() {

  }

  delete() { }
}

module.exports = new ContactController();
