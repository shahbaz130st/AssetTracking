const Employees = require('../models').Employees;
const Employee_Assets = require('../models').Employee_Assets;

module.exports = {
    create(req, res) {
        return Employees
            .create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                department: req.body.department,
                email_address: req.body.email_address,
                other_details: req.body.other_details,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => {
                console.log(error);
                res.status(400).send(error.errors[0])
            }
            );
    },
    update(req, res) {
        return Employees
            .findByPk(req.params.employee_id, {
                include: [{
                    model: Employee_Assets,
                    as: 'employee_assets',
                }],
            })
            .then(Employees => {
                if (!Employees) {
                    return res.status(404).send({
                        message: 'Employees Not Found',
                    });
                }
                return Employees
                    .update({
                        first_name: req.body.first_name || Employees.first_name,
                        last_name: req.body.last_name || Employees.last_name,
                        department: req.body.department || Employees.department,
                        email_address: req.body.email_address || Employees.email_address,
                        other_details: req.body.other_details || Employees.other_details
                    })
                    .then((update) => res.status(200).send(update))  // Send back the updated todo.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return Employees
            .findByPk(req.params.employee_id)
            .then(Employees => {
                if (!Employees) {
                    return res.status(400).send({
                        message: 'Employees Not Found',
                    });
                }
                return Employees
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};