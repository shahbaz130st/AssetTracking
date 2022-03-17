const Asset_Type = require('../models').Asset_Types;

module.exports = {
    create(req, res) {
        return Asset_Type
            .create({
                id:req.body.id,
                asset_type_description: req.body.asset_type_description
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => {
                console.log(error);
                res.status(400).send(error.errors[0])
            }
            );
    },
};