import Sequelize from 'sequelize'
import ImportUsers from './users'
import EventTypes from './event-type'
import Events from './event'
import dotenv from 'dotenv'
import { initEventData } from '../controllers/events.controller'

dotenv.config()
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
  db.eventTypes = EventTypes(sequelize, Sequelize)
  db.events = Events(sequelize, Sequelize)
  db.eventTypes.hasMany(db.events)

  db.sequelize.sync()

  // initEventData()
}
export default db