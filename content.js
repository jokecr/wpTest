var sprintf = require('sprintf')
  .sprintf;
module.exports = sprintf('"content.js"<br/>And "%s"<br/>File:"%s"', 'with sprintf',__filename);
