const PortfolioCtrl = require ('./../controllers/PortfolioCtrl.js')

module.exports = (app) => {
    app.get('/', PortfolioCtrl.index)
}