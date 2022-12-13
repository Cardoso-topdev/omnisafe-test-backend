import db from '../models/index.js'

export const signUp = async (params) => {
  const {
    email,
  } = params
  const Users = db.users

  try {
    const existUser = await Users.findOne({
      where: {email: email}
    })
    if (!existUser) {
      const user = await Users.create(params)
      return {
        result: true,
        user: user
      }
    } else {
      return {
        result: false,
        user: existUser
      }
    }
  } catch (exception) {
    return {
      result: false
    }
  }
}