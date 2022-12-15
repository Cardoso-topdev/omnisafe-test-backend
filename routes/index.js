import { Router } from 'express';
import { getEventTypes } from '../controllers/events.controller';
import { signIn, signUp } from '../controllers/users.controller';
import { checkDuplicateEmail, verifyToken } from '../middleware/UserMiddleware';

var router = Router();

router.post('/sign-up', [checkDuplicateEmail], signUp)
router.post('/sign-in', signIn)

router.get('/event-types', [verifyToken], getEventTypes)

export default router;