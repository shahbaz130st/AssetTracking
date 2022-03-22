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
    update(req, res) {
        return IT_Assets
          .findOne({
              where: {
                id: req.params.asset_id,
                asset_type_code: req.params.asset_type_code,
              },
            })
          .then(IT_Assets => {
            if (!IT_Assets) {
              return res.status(404).send({
                message: 'IT_Assets Not Found',
              });
            }
      
            return IT_Assets
              .update({
                description: req.body.description||IT_Assets.description,
                other_details: req.body.other_details||IT_Assets.other_details,
              })
              .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      },
      destroy(req, res) {
        return IT_Assets
          .findOne({
              where: {
                id: req.params.asset_id,
                asset_type_code: req.params.asset_type_code,
              },
            })
          .then(IT_Assets => {
            if (!IT_Assets) {
              return res.status(404).send({
                message: 'IT_Assets Not Found',
              });
            }
      
            return IT_Assets
              .destroy()
              .then(() => res.status(204).send())
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      },
};