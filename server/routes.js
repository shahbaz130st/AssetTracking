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
    app.post('/api/add_asset',it_assets_Controller.create);
    app.post('/api/add_asset_inventory',it_asset_inventory_Controller.create);
    app.post('/api/add_emplyees',employees_Controller.create);
    app.post('/api/add_emplyee_assets',employees_assets_Controller.create);
};