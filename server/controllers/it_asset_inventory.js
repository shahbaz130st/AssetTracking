const IT_Asset_Inventory = require('../models').IT_Asset_Inventory;

module.exports = {
    create(req, res) {
        return IT_Asset_Inventory
            .create({
                asset_id: req.body.asset_id,
                inventory_date: req.body.inventory_date,
                number_assigned: req.body.number_assigned,
                number_in_stock: req.body.number_in_stock,
                other_details: req.body.other_details
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => {
                console.log(error);
                res.status(400).send(error.errors[0])
            }
            );
    },
    update(req, res) {
        return IT_Asset_Inventory
            .findOne({
                where: {
                    id: req.params.id,
                    asset_id: req.params.asset_id,
                },
            })
            .then(IT_Asset_Inventory => {
                if (!IT_Asset_Inventory) {
                    return res.status(404).send({
                        message: 'IT_Asset_Inventory Not Found',
                    });
                }

                return IT_Asset_Inventory
                    .update({
                        inventory_date: req.body.inventory_date || IT_Asset_Inventory.inventory_date,
                        number_assigned: req.body.number_assigned || IT_Asset_Inventory.number_assigned,
                        number_in_stock: req.body.number_in_stock || IT_Asset_Inventory.number_in_stock,
                        other_details: req.body.other_details || IT_Asset_Inventory.other_details
                    })
                    .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    destroy(req, res) {
        return IT_Asset_Inventory
            .findOne({
                where: {
                    id: req.params.id,
                    asset_id: req.params.asset_id,
                },
            })
            .then(IT_Asset_Inventory => {
                if (!IT_Asset_Inventory) {
                    return res.status(404).send({
                        message: 'IT_Assets Not Found',
                    });
                }

                return IT_Asset_Inventory
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};