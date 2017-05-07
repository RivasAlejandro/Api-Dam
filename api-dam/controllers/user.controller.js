
exports.getUsers = (req, res, User) => {
    User.find({}, (err, found)=>{
        if(err) {
            return res.status(500).json({error: err.toString()});
        }
        res.json({users: found})
    });
};

exports.getUserById = (req, res, User) => {
    let id = req.params._id;
    User.findOne({_id: id}, (err, found)=>{
        if(err) {
            return res.status(500).json({error: err.toString()});
        }
        res.json({users: found})
    });
};


exports.createUser = (req, res, User) => {
    let user = req.body;
    User.create(user, (err, inserted)=>{
        if(err){
            return res.status(500).json({error: err.toString()});
        }
        res.json({users: inserted});
    });
};

exports.deleteUser = (req, res, User) => {
    let id = req.params._id;
    User.findByIdAndRemove(id, (err, deleted) => {
        if (err) {
            return res.status(500).json({error: err.toString()});
        }
        res.json({users: deleted});
    });
};

exports.updateUser = (req, res, User) => {
    let id = req.params._id;
    let user = req.body;
    User.findByIdAndUpdate(id, user, (err, updated) => {
        if(err){
            return res.status(500).json({erros: err.toString()});
        }
        res.json({users: updated});
    });
};