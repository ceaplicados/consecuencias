import express from 'express';
import NodeControl from '../controls/node.control.js';

const router = express.Router();

router.route('/').get(NodeControl.getNodes);
router.route('/add').post(NodeControl.addNode);
router.route('/:id').get(NodeControl.getNode);
router.route('/:id').delete(NodeControl.deleteNode);
router.route('/update/:id').post(NodeControl.updateNode);

export default router;
