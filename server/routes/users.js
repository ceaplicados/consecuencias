import express from 'express';
import UserControl from '../controls/user.control.js';

const router = express.Router();

router.route('/').get(UserControl.getUsers);
router.route('/add').post(UserControl.addUser);

export default router;
