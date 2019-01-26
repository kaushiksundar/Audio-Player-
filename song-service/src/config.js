const dotenv = require("dotenv");

dotenv.config();

const environmentVariables = [`NODE_ENV`, `PORT`];

environmentVariables.forEach(name => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV
};
