
module.exports = function(app) {
    // Root routing
    var icgcapp = require('public/js/controller/contactFormController.js');
 
    app.route('/contact-form').post(icgcapp.sendMail);
};