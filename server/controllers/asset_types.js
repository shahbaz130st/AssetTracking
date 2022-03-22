const Asset_Type = require('../models').Asset_Types;
const IT_Assets = require('../models').IT_Assets;

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
    update(req, res) {
        return Asset_Type
          .findByPk(req.params.asset_type_id, {
            include: [{
              model: IT_Assets,
              as: 'it_assets',
            }],
          })
          .then(Asset_Type => {
            if (!Asset_Type) {
              return res.status(404).send({
                message: 'Asset_Type Not Found',
              });
            }
            return Asset_Type
              .update({
                asset_type_description: req.body.asset_type_description || Asset_Type.asset_type_description,
              })
              .then(() => res.status(200).send(Asset_Type))  // Send back the updated todo.
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
    destroy(req, res) {
        return Asset_Type
          .findByPk(req.params.asset_type_id)
          .then(Asset_Type => {
            if (!Asset_Type) {
              return res.status(400).send({
                message: 'Asset_Type Not Found',
              });
            }
            return Asset_Type
              .destroy()
              .then(() => res.status(204).send())
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      },
};
