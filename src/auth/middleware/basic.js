'use strict';

const base64 = require('base-64');
const { users } = require('../models')

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return authError(); }

  let basic = req.headers.authorization.split(" ");
  let encodeString =basic.pop();

  let decodeString = base64.decode(encodeString);
  let [username, pass] = decodeString.split(":");

  try {
    req.user = await users.authenticateBasic(username, pass)
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }

}