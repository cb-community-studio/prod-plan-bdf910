const users = require("./users/users.service.js");
const attendance = require("./attendance/attendance.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(attendance);
    // ~cb-add-configure-service-name~
};
