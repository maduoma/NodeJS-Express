const helloView = require('../view/helloView');
// Import your data model and use it for your business logic
module.exports = {
  callbacks: (req, res, next) => {
    res.statuse(200).send('Hello There!');
  },
};
