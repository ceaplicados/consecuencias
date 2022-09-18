const router = require('express').Router();
let Node     = require('../models/node.model');

router.route('/').get((req, res) => {
    Node.find()
        .then(nodes => res.json(nodes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const body  = req.body.body;
    const type  = req.body.type;

    const newNode = new Node({
        title,
        body,
        type,
    });

    newNode.save()
        .then(() => res.json('Node added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
