const IT_Asset_Inventory = require('../models').IT_Asset_Inventory;

module.exports = {
    create(req, res) {
        return IT_Asset_Inventory
            .create({
                asset_id:req.body.asset_id,
                inventory_date:req.body.inventory_date,
                number_assigned:req.body.number_assigned,
                number_in_stock:req.body.number_in_stock,
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