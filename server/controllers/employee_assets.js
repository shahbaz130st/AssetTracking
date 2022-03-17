const Employee_Assets = require('../models').Employee_Assets;

module.exports = {
    create(req, res) {
       console.log(req.body)
        return Employee_Assets
            .create({
                asset_id: req.body.asset_id,
                employee_id: req.body.employee_id,
                date_out: req.body.date_out,
                date_returned: req.body.date_returned,
                condition_out: req.body.condition_out,
                condition_returned: req.body.condition_returned,
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