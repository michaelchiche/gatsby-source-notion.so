const crypto = require('crypto');

const createDigest = content =>
  crypto
    .createHash('md5')
    .update(JSON.stringify(content))
    .digest('hex');

export default createDigest;
