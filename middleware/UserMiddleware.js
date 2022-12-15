import db from '../models/index.js'

export const checkDuplicateEmail = async (req, res, next) => {
  const Users = db.users
  try {
    // Email
    const user = await Users.findOne({
      where: {
        email: req.body.email
      }
    });
    if (user) {
      console.log("==== Failed! Email is already in use! ====")
      return res.status(200).send({
        result: 'failure',
        message: "Failed! Email is already in use!"
      });
    }
    next();
  } catch (error) {
    console.log('=== Error Occur checkDuplicateEmail ===')
    console.log(error)
    console.log('=======================================')
    return res.status(200).send({
      result: 'failure',
      message: "Unable to validate Username!"
    });
  }
}

export const verifyToken = async (req, res, next) => {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403)
  }
}