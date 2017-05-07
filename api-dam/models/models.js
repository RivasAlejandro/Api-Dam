
let mongoose = require('mongoose');
let undersore = require('underscore');

module.exports = (wagner)=>{
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/api-dam');

    wagner.factory('db', () => mongoose);

    let User = mongoose.model(
        'User',
        require('./user.model'),
        'users'
    );

    let models = { User: User };
    undersore.map(models, (val, key) => {
        wagner.factory(key, () => val);
    });

};