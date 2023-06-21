import * as Joi from 'joi';

const configSchema = Joi.object({
  APP_NAME: Joi.string().required(),
  APP_PORT: Joi.number().required(),
  APP_TAG: Joi.string().required(),
  APP_DESC: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_HOST: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
});

export default configSchema;
