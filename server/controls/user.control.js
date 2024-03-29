import User from '../models/user.model.js';

class UserControl {
    static getUsers = (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json('Error: ' + err));
    };

    static addUser = (req, res) => {
        const username = req.body.username;
    
        const newUser = new User({ username });
    
        newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    };
}

export default UserControl;
