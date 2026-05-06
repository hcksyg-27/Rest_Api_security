const Joi = require('joi');

const validatePatientId = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.string().alphanum().length(24).required(),

    });

    const { error } = schema.validate(req.params);

    if (error)
        return res.status(400).json({ message: error.details[0].message });

    next();
};

const validatePatientCreate = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().required(),
    email: Joi.string().email().required(),
    condition: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error)
    return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = { validatePatientId , validatePatientCreate};


