const { v4: uuidV4 } = require('uuid');

const getUuid = () => uuidV4();

module.exports = getUuid;