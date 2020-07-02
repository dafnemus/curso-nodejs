/* eslint-disable no-console */
const bcrypt = require('bcrypt');
const Users = require('../../mongo/models/users');

const createUser = async (req, res) => {
  try {
    const {
      username, email, password, data,
    } = req.body;

    const hash = await bcrypt.hash(password, 15);
    // forma 1 de guardar un usuario en Mongo
    // await Users.create({
    //   username, // username: username,
    //   email,
    //   data,
    //   password: hash,
    // });

    // forma 2 de guardar un usuario en Mongo
    const user = new Users();
    user.username = username;
    user.email = email;
    user.data = data;
    user.password = hash;

    await user.save(); // guarda la info que se le paso anteriormente

    res.send({ status: 'OK', message: 'user created' });
  } catch (error) {
    if (error.code && error.code === 11000) {
      res.status(400).send({ status: 'DUPLICATED_VALUES', message: error.keyValue });
      return;
    }
    // console.log('error', error);
    res.status(500).send({ status: 'ERROR', message: error.message });
  }
};

const deleteUser = (req, res) => {
  res.send({ status: 'OK', message: 'user deleted' });
};

const getUsers = (req, res) => {
  res.send({ status: 'OK', data: [] });
};

const updateUser = (req, res) => {
  res.send({ status: 'OK', message: 'user updated' });
};

module.exports = {
  createUser, deleteUser, getUsers, updateUser,
};
