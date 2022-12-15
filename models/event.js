export default (sequelize, Sequelize) => sequelize.define('event', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.BOOLEAN
  }
}, {
  timestamps: false
})