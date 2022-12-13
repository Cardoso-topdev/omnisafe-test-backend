import Sequelize from 'sequelize'
import ImportUsers from './users'

let sequelize
const db = {}

export const initSequelize = () => {
  sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PWD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: false
  })
  db.Sequelize = Sequelize
  db.sequelize = sequelize

  db.users = ImportUsers(sequelize, Sequelize)
}
export default db