const AppConstants=require("../../constants/app_constants");
const Logger=require("../../utils/logger");

const logger=Logger.getLogger();

const appConstants=new AppConstants();

class ObjectTransformer {
  
  urlParser(data) {
    const regex = appConstants.ANCHOR_TAG_REGEX;
    const secondRegex=appConstants.URL_EXCL_ANCHOR_REGEX;
    const output = data.replace(regex, (match, innerText) => `<a href=\"${match.replace(`[${innerText}]`,"")}\">${innerText}</a>`);
    const result = output.replace(secondRegex, '<a href=\"$&\">$&</a>');
    return result;
  }

  #educationTransformer(data) {
    let responseData = [];
    data.forEach((element) => {
      responseData.push({
        SchoolName: this.urlParser(element.school_name),
        Year: this.urlParser(element.passing_year),
        Description: this.urlParser(element.description),
      });
    });
    return responseData;
  }

  #experienceTransformer(data) {
    let responseData = [];
    data.forEach((element) => {
      responseData.push({
        CompanyName: this.urlParser(element.company_name),
        Year: this.urlParser(element.passing_year),
        Description: this.urlParser(element.responsibilities),
      });
    });
    return responseData;
  }

  #achievementsTransformer(data) {
    let responseData = [];
    data.forEach((element) => {
      responseData.push({
        Type: this.urlParser(element.field),
        Description: this.urlParser(element.awards),
      });
    });
    return responseData;
  }

  transform(input) {
    try {
      if (Object.keys(input).length === 0) return {};
      let response;
      response = {
        Name: input.personal_information.name,
        LastName: input.personal_information.last_name,
        EmailAddress: input.personal_information.email_address,
        PhoneNumber: input.personal_information.phone_number,
        LinkedIn: `<a href=\"${input.personal_information.linkedin_url}\">linkedIn</a>`,
        JobTitle: this.urlParser(input.job_title),
        Summary: this.urlParser(input.career_objective),
        Skills: input.skills.map((str)=>this.urlParser(str)),
        Education: this.#educationTransformer(input.education),
        Experience: this.#experienceTransformer(input.experience),
        Achievements: this.#achievementsTransformer(input.achievements),
      };
      return response;
    } catch (error) {
      logger.info(error);
      throw error;
    }
  }
}

module.exports = ObjectTransformer;
