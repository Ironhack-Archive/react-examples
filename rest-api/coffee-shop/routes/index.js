const express = require('express');
const router = express.Router();

const Coffee = require('../models/coffee');

/* GET Coffees listing. */
router.get('/coffees', (req, res, next) => {
  Coffee.find()
  .then(coffeeList => {
    res.json(coffeeList);
  })
  .catch(error => next(error))
});

router.post('/coffees', (req, res, next) => {
  const theCoffee = new Coffee({
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.specs,
    description: req.body.description,
    origin: req.body.origin
  });

  theCoffee.save()
  .then(theCoffee => {
    res.json({
      message: 'New Coffee created!',
      id: theCoffee._id
    });
  })
  .catch(error => next(error))
});

router.get('/coffees/:id', (req, res, next) => {
  Coffee.findById(req.params.id)
  .then(coffee => {
    res.json(coffee);
  })
  .catch(error => next(error))
});

module.exports = router;
