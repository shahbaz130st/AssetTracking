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
    update(req, res) {
        return Employee_Assets
            .findOne({
                where: {
                    id: req.params.id,
                    asset_id: req.params.asset_id,
                    employee_id:req.params.employee_id,
                },
            })
            .then(Employee_Assets => {
                if (!Employee_Assets) {
                    return res.status(404).send({
                        message: 'Employee_Assets Not Found',
                    });
                }

                return Employee_Assets
                    .update({
                        date_out: req.body.date_out||Employee_Assets.date_out,
                        date_returned: req.body.date_returned||Employee_Assets.date_returned,
                        condition_out: req.body.condition_out||Employee_Assets.condition_out,
                        condition_returned: req.body.condition_returned||Employee_Assets.condition_returned,
                        other_details: req.body.other_details||Employee_Assets.other_details
                    })
                    .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    destroy(req, res) {
        return Employee_Assets
            .findOne({
                where: {
                    id: req.params.id,
                    asset_id: req.params.asset_id,
                    employee_id:req.params.employee_id,
                },
            })
            .then(Employee_Assets => {
                if (!Employee_Assets) {
                    return res.status(404).send({
                        message: 'Employee_Assets Not Found',
                    });
                }

                return Employee_Assets
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

};