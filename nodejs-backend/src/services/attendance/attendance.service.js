const { Attendance } = require('./attendance.class');
const createModel = require('../../models/attendance.model');
const hooks = require('./attendance.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/attendance', new Attendance(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('attendance');

  service.hooks(hooks);
};