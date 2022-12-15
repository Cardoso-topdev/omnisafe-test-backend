import db from '../models/index.js'
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'

export const insertEventType = async (param) => {
  const EventTypes = db.eventTypes
  try {
    return await EventTypes.create(param)
  } catch (exception) {
    console.log('=== ERROR OCCUR insertEventType ===')
    console.log(exception)
    console.log('===================================')
  }
}

export const getEventTypes = async (req, res, next) => {
  try {
    const jwt_decoded = Jwt.verify(req.token.replace(/['"]+/g, '') , process.env.JWT_KEY)
    if (!jwt_decoded) {
      res.sendStatus(403)
      return
    }
    const EventTypes = db.eventTypes
    const Events = db.events
    const eventTypes = await EventTypes.findAll({
      include: Events
    })
    res.status(200).json({
      result: 'success',
      data: eventTypes
    })
  } catch (exception) {
    console.log('=== ERROR OCCUR getEventTypes ===')
    console.log(exception)
    console.log('=================================')
    res.status(400).json({
      result: 'failure',
      message: 'Unknown Error!'
    })
  }
}


export const initEventData = async () => {
  const mockEventTypes = [
    {
      name: 'Football',
      types: [
        {
          name: 'Mexico vs Brazil',
          description: 'Description about the match',
          status: false
        },
        {
          name: 'Mexico vs Argentina',
          description: 'Description about the match',
          status: true
        }
      ]
    },
    {
      name: 'Basketball',
      types: [
        {
          name: 'Mexico vs Chile',
          description: 'Description about the match',
          status: false
        },
        {
          name: 'Argentina vs Brazil',
          description: 'Description about the match',
          status: true
        }
      ]
    },
    {
      name: 'CrossFit',
      types: [
        {
          name: 'Mexico vs Canada',
          description: 'Description about the match',
          status: false
        }
      ]
    }
  ]
  for (let idx = 0; idx < mockEventTypes.length; idx++) {
    const mockItem = mockEventTypes[idx];
    const addedMockItem = await insertEventType(mockItem)
  }
}