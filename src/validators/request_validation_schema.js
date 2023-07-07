const Joi = require('joi');

const resumeRequestSchema = Joi.object({
  template_id: Joi.string().valid('1', '2', '3').required(),
  personal_information: Joi.object({
    name: Joi.string().required(),
    last_name: Joi.string().required(),
    email_address: Joi.string().email().required(),
    phone_number: Joi.string().required(),
    linkedin_url: Joi.string().uri().required(),
  }).required(),
  job_title: Joi.string().required(),
  career_objective: Joi.string().required(),
  skills: Joi.array().items(Joi.string()).required(),
  education: Joi.array().items(
    Joi.object({
      school_name: Joi.string().required(),
      passing_year: Joi.string().required(),
      description: Joi.string().required(),
    })
  ).required(),
  experience: Joi.array().items(
    Joi.object({
      company_name: Joi.string().required(),
      passing_year: Joi.string().required(),
      responsibilities: Joi.string().required(),
    })
  ).required(),
  achievements: Joi.array().items(
    Joi.object({
      field: Joi.string().required(),
      awards: Joi.string().required(),
    })
  ).required(),
});

module.exports = {
  resumeRequestSchema
}

