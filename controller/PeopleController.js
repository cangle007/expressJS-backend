class PeopleController {
  constructor({ name, title, salary, myuserTable }, knex) {
    this._name = name;
    this._title = title;
    this._salary = salary;
    this._myuser = myuserTable;
    this._knex = knex;
    this._bindMethod(['get_userInfo']);
  }

  get_userInfo(request, response, next) {
    try {
      this._knex(this._myuser)
        .select('*')
        .then(users => {
          response.json(users);
        });
    } catch (err) {
      next(err);
    }
    console.log('hello there handsome!!', this._name);
  }

  //****Binding Methods****//
  _bindMethod(methodNames) {
    methodNames.forEach(methodName => {
      this[methodName] = this[methodName].bind(this);
    });
  }
}

module.exports = PeopleController;
