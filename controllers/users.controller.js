import db from '../models/index.js'
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'

export const signIn = async (req, res, next) => {
  const {email, password} = req.body
  const Users = db.users
  try {
    const user = await Users.findOne({
      where: {
        email: email
      }
    });
    if (!user) {
      res.status(200).json({
        result: 'failure',
        message: `User doesn't exist!`
      })
      return
    }
    const passwordIsValid = bcrypt.compareSync(
      password,
      user.password
    );
    if (!passwordIsValid) {
      res.status(200).json({
        result: 'failure',
        message: `Password invalid!`
      })
      return
    }
    const token = Jwt.sign({ username: user.username }, process.env.JWT_KEY, {
      expiresIn: 86400
    })
    res.status(200).json({
      result: 'success', 
      message: 'Signin success!',
      data: {
        user: {
          email: user.email,
          id: user.id,
          username: user.username,
          surname: user.surname
        },
        token: token
      }
    })
  } catch (exception) {
    console.log('=== ERROR OCCUR signIn ===')
    console.log(exception)
    console.log('==========================')
    res.status(400).json({
      result: 'failure',
      message: 'Unknown Error!'
    })
  }
}

export const signUp = async (req, res, next) => {
  const {
    username,
    password
  } = req.body
  const Users = db.users

  try {
    const token = Jwt.sign({ username: username }, process.env.JWT_KEY, {
      expiresIn: 86400
    })
    // console.log('==============')
    // const jwt_decoded = Jwt.verify(token, process.env.JWT_KEY)
    // console.log(token)
    // console.log(jwt_decoded)
    // console.log('==============')

    const user = await Users.create({...req.body, password: await bcrypt.hashSync(password, 8)})
    res.status(200).json({
      result: 'success',
      message: 'Signup success!',
      data: {
        user: {
          email: user.email,
          id: user.id,
          username: user.username,
          surname: user.surname
        },
        token: token
      }
    })
  } catch (exception) {
    console.log('=== ERROR OCCUR signUp ===')
    console.log(exception)
    console.log('==========================')
    res.status(400).json({
      result: 'failure',
      message: 'Unknown Error!'
    })
  }
}