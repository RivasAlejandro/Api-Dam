let router = require('express').Router();

module.exports = (wagner) => {
    router.get('/', wagner.invoke( function(User) {
        return function(req, res){
            return require('../controllers/user.controller').getUsers(req, res, User);
        }
    }));

    router.get('/:_id', wagner.invoke( function(User) {
        return function(req, res){
            return require('../controllers/user.controller').getUserById(req, res, User);
        }
    }));

    router.post('/', wagner.invoke( function(User){
        return function (req, res){
            return require('../controllers/user.controller').createUser(req, res, User);
        }
    }));

    router.delete('/:_id', wagner.invoke(function(User){
        return function(req, res){
            return require('../controllers/user.controller').deleteUser(req, res, User);
        }
    }));

    router.put('/:_id', wagner.invoke(function(User){
        return function(req, res){
            return require('../controllers/user.controller').updateUser(req, res, User);
        }
    }));

    return router;
};