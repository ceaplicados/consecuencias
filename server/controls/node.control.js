import Node from '../models/node.model.js';

class NodeControl {
    static getNodes = (req, res) => {
        Node.find()
            .then(nodes => res.json(nodes))
            .catch(err => res.status(400).json('Error: ' + err));
    };

    static addNode = (req, res) => {
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
    };

    static getNode = (req, res) => {
        Node.findById(req.params.id)
            .then(node => res.json(node))
            .catch(err => res.status(400).json('Error: ' + err));
    };

    static deleteNode = (req, res) => {
        Node.findByIdAndDelete(req.params.id)
            .then(() => res.json('Node deleted!'))
            .catch(err => res.status(400).json('Error: ' + err));
    };

    static updateNode = (req, res) => {
        Node.findById(req.params.id)
            .then(node => {
                node.title = req.body.title || node.title;
                node.body  = req.body.body || node.body;
                node.type  = req.body.type || node.type;
    
                node.save()
                    .then(() => res.json('Node updated!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    };
}

export default NodeControl;
