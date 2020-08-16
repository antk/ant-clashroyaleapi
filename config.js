if(process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV !== 'production') require('dotenv').config();
module.exports = {
  PORT: process.env.PORT,
};
