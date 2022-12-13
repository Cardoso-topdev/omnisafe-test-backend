import { Router } from 'express';
import { init } from '../controllers/main.controller';
import { signUp } from '../controllers/users.controller';
// import { getAllCategories } from '../controllers/main.controller'
var router = Router();

router.post('/sign-up', async(req, res, next) => {
  const result = await signUp(req.body)
  console.log('============================')
  console.log(result.user.dataValues)
  console.log('============================')
  if (result.status) {
    res.status(200).json({
      result: 'success', 
      data: result.user.dataValues
    })
  } else {
    res.status(400).json({
      result: 'failure',
      message: 'User already exist!'
    })
  }
})

export default router;