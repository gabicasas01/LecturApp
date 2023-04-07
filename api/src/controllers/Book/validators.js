import Joi from 'joi';

export const searchBooksSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.base': 'El título debe ser una cadena',
    'string.empty': 'El título no debe estar vacío',
    'any.required': 'El título es un campo requerido',
  }),
  author: Joi.string().messages({
    'string.base': 'El autor debe ser una cadena',
  }),
});