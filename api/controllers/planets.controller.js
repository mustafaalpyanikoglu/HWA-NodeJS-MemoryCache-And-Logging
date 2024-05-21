const { get } = require('../routes/planets');

const axios = require('axios');

const getPlanets = async (req, res, next) => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    return res.status(200).json(data);
  } catch ({ response }) {
    return res.sendStatus(response.status);
  }
}

const getPlanetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.status(200).json(data);
  } catch ({ response }) {
    return res.sendStatus(response.status);
  }
}


module.exports = {
  getPlanets,
  getPlanetById
};
