const Employees = require('../models').Employees;

module.exports = {
    create(req, res) {
        return Employees
            .create({
                first_name:req.body.first_name,
                last_name: req.body.last_name,
                department:req.body.department,
                email_address:req.body.email_address,
                other_details:req.body.other_details,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => {
                console.log(error);
                res.status(400).send(error.errors[0])
            }
            );
    },
};