const Joi = require("joi");
const AppConstants=require("../constants/app_constants");

const appConstants=new AppConstants();

const resumeRequestSchema = Joi.object({
  template_id: Joi.string().valid("1", "2", "3").required(),
  personal_information: Joi.object({
    name: Joi.string().required().messages({'string.empty': 'The name field is required.'}),
    last_name: Joi.string()
      .required()
      .messages({"string.empty":"Please provide a valid last name"}),
    email_address: Joi.string()
      .email()
      .required()
      .messages({"string.email": "Please provide a valid email id like: ipsum@adobe.com"}),
    phone_number: Joi.string()
      .pattern(appConstants.PHONE_NUMBER_REGEX)
      .required()
      .messages({"string.pattern.base":"Please provide a valid phone number"}),
    linkedin_url: Joi.string()
      .uri({ scheme: ["http", "https"] })
      .regex(appConstants.LINKEDIN_PROFILE_REGEX
      )
      .message(
        "Invalid linkedin_url provided. Provide a valid one like: https://www.linkedin.com/in/aashish-ranjan-singh-9848091b9/"
      )
      .required(),
  }).required(),
  job_title: Joi.string()
    .required()
    .messages({"string.empty":"Please provide a valid job title"}),
  career_objective: Joi.string()
    .required()
    .messages({"string.empty":"Please provide a valid career_objective"}),
  skills: Joi.array()
    .items(Joi.string().required().messages({"string.empty":"Please provide a valid skill"})).min(1)
    .required(),
  education: Joi.array()
    .items(
      Joi.object({
        school_name: Joi.string()
          .required()
          .messages({"string.empty":"Please provide a valid school name"}),
        passing_year: Joi.string()
          .required()
          .messages({"string.empty":"Please provide your valid passing year"}),
        description: Joi.string()
          .required()
          .messages({"string.empty":"Please provide a valid description for your education"}),
      })
    ).min(1)
    .required(),
  experience: Joi.array()
    .items(
      Joi.object({
        company_name: Joi.string()
          .required()
          .messages(
            {"string.empty":"Please provide the valid name of the company you worked in"}
          ),
        passing_year: Joi.string()
          .required()
          .messages({"string.empty":"Please provide a valid tenue in your company"}),
        responsibilities: Joi.string()
          .required()
          .messages(
            {"string.empty":"Please provide your responsibility in your company in valid form"}
          ),
      })
    ).min(1)
    .required(),
  achievements: Joi.array()
    .items(
      Joi.object({
        field: Joi.string()
          .required()
          .messages({"string.empty":"Please provide a valid field of achievements"}),
        awards: Joi.string()
          .required()
          .messages(
            {"string.empty":"Please provide valid information about the awards you have received"}
          ),
      })
    ).min(1)
    .required()
});

module.exports = {
  resumeRequestSchema,
};
