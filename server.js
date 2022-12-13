import express from 'express'
import bodyParser from 'body-parser'
import defaultRoutes from './routes/index.js'
import cors from 'cors'
import { initSequelize } from './models/index.js'
import db from './models/index.js'

const app = express();
app.use(cors())

initSequelize()
db.sequelize.sync()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log('listening on ', process.env.PORT || 3000)
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', defaultRoutes)
