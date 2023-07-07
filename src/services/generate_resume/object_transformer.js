class ObjectTransformer{

  #educationTransformer(data){
    let responseData=[];
    data.forEach(element => {
      responseData.push({
        SchoolName: element.school_name,
        Year: element.passing_year,
        Description: element.description
      })
    });
    return responseData;
  }

  #experienceTransformer(data){
    let responseData=[];
    data.forEach(element => {
      responseData.push({
        CompanyName: element.company_name,
        Year: element.passing_year,
        Description: element.responsibilities
      })
    });
    return responseData;
  }

  #achievementsTransformer(data){
    let responseData=[];
    data.forEach(element => {
      responseData.push({
        Type: element.field,
        Description: element.awards
      })
    });
    return responseData;
  }

  transform(input){
    let response;
    response={
      Name: input.personal_information.name,
      LastName: input.personal_information.last_name,
      EmailAddress: input.personal_information.email_address,
      PhoneNumber: input.personal_information.phone_number,
      LinkedIn: `<a href="${input.personal_information.linkedin_url}">linkedIn</a>`,
      JobTitle: input.job_title,
      Summary: input.career_objective,
      Skills: input.skills,
      Education: this.#educationTransformer(input.education),
      Experience: this.#experienceTransformer(input.experience),
      Achievements: this.#achievementsTransformer(input.achievements)
    }
    return response;
  }

  
}

module.exports=ObjectTransformer;

