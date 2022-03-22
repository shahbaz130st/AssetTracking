const asset_types_Controller = require('./controllers').asset_types;
const it_assets_Controller = require('./controllers').it_assets;
const it_asset_inventory_Controller = require('./controllers').it_asset_inventory;
const employees_Controller = require('./controllers').employees;
const employees_assets_Controller = require('./controllers').employee_assets;
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Assets Tracking API!',
    }));

    app.post('/api/add_asset_types', asset_types_Controller.create);
    app.post('/api/add_asset', it_assets_Controller.create);
    app.post('/api/add_asset_inventory', it_asset_inventory_Controller.create);
    app.post('/api/add_emplyees', employees_Controller.create);
    app.post('/api/add_emplyee_assets', employees_assets_Controller.create);
    app.delete('/api/remove_asset_types/:asset_type_id', asset_types_Controller.destroy);
    app.put('/api/update_asset_types/:asset_type_id', asset_types_Controller.update);
    app.put('/api/update_assets/:asset_id/items/:asset_type_code', it_assets_Controller.update);
    app.delete('/api/delete_assets/:asset_id/items/:asset_type_code', it_assets_Controller.destroy);
    app.put('/api/update_assets_inventory/:id/items/:asset_id', it_asset_inventory_Controller.update);
    app.delete('/api/delete_assets_inventory/:id/items/:asset_id', it_asset_inventory_Controller.destroy);
    app.put('/api/update_employee/:employee_id', employees_Controller.update);
    app.delete('/api/delete_employee/:employee_id', employees_Controller.destroy);
    app.put('/api/update_employee_assets/:id/asset/:asset_id/employee/:employee_id', employees_assets_Controller.update);
    app.delete('/api/delete_employee_assets/:id/asset/:asset_id/employee/:employee_id', employees_assets_Controller.destroy);
};