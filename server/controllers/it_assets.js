const IT_Assets = require('../models').IT_Assets;

module.exports = {
    create(req, res) {
        return IT_Assets
            .create({
                asset_type_code: req.body.asset_type_code,
                description: req.body.description,
                other_details: req.body.other_details
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => {
                console.log(error);
                res.status(400).send(error.errors[0])
            }
            );
    },
};