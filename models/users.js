import bcrypt from 'bcrypt'

export default (sequelize, Sequelize) => sequelize.define('users', {
  username: {
    type: Sequelize.STRING
  },
  surname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  instanceMethods: {
    generateHash(password) {
      return bcrypt.hash(password, bcrypt.genSaltSync(8));
    },
    validPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }
})