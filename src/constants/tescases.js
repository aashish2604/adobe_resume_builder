// class to contain all the testcase which is used in the test

class ObjectTransformerTestcase {
  validInput = {
    "template_id" : "1",
    "personal_information" : {
      "name": "Lorem",
      "last_name": "ipsum",
      "email_address": "ipsum@adobe.com",
      "phone_number": "+91 99xx14xx99",
      "linkedin_url": "https://www.linkedin.com"
    },
    "job_title": "Software Development Engineer",
    "career_objective" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    "skills": [
      "Strong interpersonal",
      "communication skills", 
      "Leadership",
      "Poised under pressure"
    ],
    "education": [
      {
        "school_name": "School",
        "passing_year": "201X-201Y",
        "description" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'\''t look even slightly believable."
      },
      {
        "school_name": "College",
        "passing_year": "203X-203Y",
        "description" : "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
      }
    ],
    "experience": [
      {
        "company_name": "Adobe",
        "passing_year": "201X-201Y",
        "responsibilities" : "It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"
      }
    ],
    "achievements": [
      {
        "field" : "Academics",
        "awards" : "Lorem ipsum dolor sit amet"
      },
      {
        "field" : "Sports",
        "awards" : "consectetuer adipiscing elit"
      }
    ]
  };
  validOutput = {
    Name: "Lorem",
    LastName: "ipsum",
    EmailAddress: "ipsum@adobe.com",
    PhoneNumber: "+91 99xx14xx99",
    LinkedIn: '<a href="https://www.linkedin.com">linkedIn</a>',
    JobTitle: "Software Development Engineer",
    Summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    Skills: [
      "Strong interpersonal",
      "communication skills",
      "Leadership",
      "Poised under pressure",
    ],
    Education: [
      {
        SchoolName: "School",
        Year: "201X-201Y",
        Description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'''t look even slightly believable.",
      },
      {
        SchoolName: "College",
        Year: "203X-203Y",
        Description:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
      },
    ],
    Experience: [
      {
        CompanyName: "Adobe",
        Year: "201X-201Y",
        Description:
          "It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      },
    ],
    Achievements: [
      { Type: "Academics", Description: "Lorem ipsum dolor sit amet" },
      { Type: "Sports", Description: "consectetuer adipiscing elit" },
    ],
  };
  educationTransformerEmptyInput={
    "template_id" : "1",
    "personal_information" : {
      "name": "Lorem",
      "last_name": "ipsum",
      "email_address": "ipsum@adobe.com",
      "phone_number": "+91 99xx14xx99",
      "linkedin_url": "https://www.linkedin.com"
    },
    "job_title": "Software Development Engineer",
    "career_objective" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    "skills": [
      "Strong interpersonal",
      "communication skills", 
      "Leadership",
      "Poised under pressure"
    ],
    "education": [],
    "experience": [
      {
        "company_name": "Adobe",
        "passing_year": "201X-201Y",
        "responsibilities" : "It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"
      }
    ],
    "achievements": [
      {
        "field" : "Academics",
        "awards" : "Lorem ipsum dolor sit amet"
      },
      {
        "field" : "Sports",
        "awards" : "consectetuer adipiscing elit"
      }
    ]
  };
  educationTransformerEmptyOutput={
    Name: "Lorem",
    LastName: "ipsum",
    EmailAddress: "ipsum@adobe.com",
    PhoneNumber: "+91 99xx14xx99",
    LinkedIn: '<a href="https://www.linkedin.com">linkedIn</a>',
    JobTitle: "Software Development Engineer",
    Summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    Skills: [
      "Strong interpersonal",
      "communication skills",
      "Leadership",
      "Poised under pressure",
    ],
    Education: [],
    Experience: [
      {
        CompanyName: "Adobe",
        Year: "201X-201Y",
        Description:
          "It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      },
    ],
    Achievements: [
      { Type: "Academics", Description: "Lorem ipsum dolor sit amet" },
      { Type: "Sports", Description: "consectetuer adipiscing elit" },
    ],
  };
  experienceTransformerEmptyInput = {
    "template_id" : "1",
    "personal_information" : {
      "name": "Lorem",
      "last_name": "ipsum",
      "email_address": "ipsum@adobe.com",
      "phone_number": "+91 99xx14xx99",
      "linkedin_url": "https://www.linkedin.com"
    },
    "job_title": "Software Development Engineer",
    "career_objective" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    "skills": [
      "Strong interpersonal",
      "communication skills", 
      "Leadership",
      "Poised under pressure"
    ],
    "education": [
      {
        "school_name": "School",
        "passing_year": "201X-201Y",
        "description" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'\''t look even slightly believable."
      },
      {
        "school_name": "College",
        "passing_year": "203X-203Y",
        "description" : "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
      }
    ],
    "experience": [],
    "achievements": [
      {
        "field" : "Academics",
        "awards" : "Lorem ipsum dolor sit amet"
      },
      {
        "field" : "Sports",
        "awards" : "consectetuer adipiscing elit"
      }
    ]
  };
  experienceTransformerEmptyOutput = {
    Name: "Lorem",
    LastName: "ipsum",
    EmailAddress: "ipsum@adobe.com",
    PhoneNumber: "+91 99xx14xx99",
    LinkedIn: '<a href="https://www.linkedin.com">linkedIn</a>',
    JobTitle: "Software Development Engineer",
    Summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    Skills: [
      "Strong interpersonal",
      "communication skills",
      "Leadership",
      "Poised under pressure",
    ],
    Education: [
      {
        SchoolName: "School",
        Year: "201X-201Y",
        Description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'''t look even slightly believable.",
      },
      {
        SchoolName: "College",
        Year: "203X-203Y",
        Description:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
      },
    ],
    Experience: [],
    Achievements: [
      { Type: "Academics", Description: "Lorem ipsum dolor sit amet" },
      { Type: "Sports", Description: "consectetuer adipiscing elit" },
    ],
  };
  achievementsTransformerEmptyInput = {
    "template_id" : "1",
    "personal_information" : {
      "name": "Lorem",
      "last_name": "ipsum",
      "email_address": "ipsum@adobe.com",
      "phone_number": "+91 99xx14xx99",
      "linkedin_url": "https://www.linkedin.com"
    },
    "job_title": "Software Development Engineer",
    "career_objective" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    "skills": [
      "Strong interpersonal",
      "communication skills", 
      "Leadership",
      "Poised under pressure"
    ],
    "education": [
      {
        "school_name": "School",
        "passing_year": "201X-201Y",
        "description" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'\''t look even slightly believable."
      },
      {
        "school_name": "College",
        "passing_year": "203X-203Y",
        "description" : "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
      }
    ],
    "experience": [
      {
        "company_name": "Adobe",
        "passing_year": "201X-201Y",
        "responsibilities" : "It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"
      }
    ],
    "achievements": []
  };
  achievementsTransformerEmptyOutput = {
    Name: "Lorem",
    LastName: "ipsum",
    EmailAddress: "ipsum@adobe.com",
    PhoneNumber: "+91 99xx14xx99",
    LinkedIn: '<a href="https://www.linkedin.com">linkedIn</a>',
    JobTitle: "Software Development Engineer",
    Summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    Skills: [
      "Strong interpersonal",
      "communication skills",
      "Leadership",
      "Poised under pressure",
    ],
    Education: [
      {
        SchoolName: "School",
        Year: "201X-201Y",
        Description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'''t look even slightly believable.",
      },
      {
        SchoolName: "College",
        Year: "203X-203Y",
        Description:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
      },
    ],
    Experience: [
      {
        CompanyName: "Adobe",
        Year: "201X-201Y",
        Description:
          "It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      },
    ],
    Achievements: [],
  };
}

class ResumeGeneratorTestcase{
  validInput = {
    Name: "Lorem",
    LastName: "ipsum",
    EmailAddress: "ipsum@adobe.com",
    PhoneNumber: "+91 99xx14xx99",
    LinkedIn: '<a href="https://www.linkedin.com">linkedIn</a>',
    JobTitle: "Software Development Engineer",
    Summary:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    Skills: [
      "Strong interpersonal",
      "communication skills",
      "Leadership",
      "Poised under pressure",
    ],
    Education: [
      {
        SchoolName: "School",
        Year: "201X-201Y",
        Description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'''t look even slightly believable.",
      },
      {
        SchoolName: "College",
        Year: "203X-203Y",
        Description:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
      },
    ],
    Experience: [
      {
        CompanyName: "Adobe",
        Year: "201X-201Y",
        Description:
          "It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
      },
    ],
    Achievements: [
      { Type: "Academics", Description: "Lorem ipsum dolor sit amet" },
      { Type: "Sports", Description: "consectetuer adipiscing elit" },
    ],
  };
}

class ResumeTestcase{
  validInput = {
    "template_id" : "1",
    "personal_information" : {
      "name": "Lorem",
      "last_name": "ipsum",
      "email_address": "ipsum@adobe.com",
      "phone_number": "+91 99xx14xx99",
      "linkedin_url": "https://www.linkedin.com"
    },
    "job_title": "Software Development Engineer",
    "career_objective" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    "skills": [
      "Strong interpersonal",
      "communication skills", 
      "Leadership",
      "Poised under pressure"
    ],
    "education": [
      {
        "school_name": "School",
        "passing_year": "201X-201Y",
        "description" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'\''t look even slightly believable."
      },
      {
        "school_name": "College",
        "passing_year": "203X-203Y",
        "description" : "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
      }
    ],
    "experience": [
      {
        "company_name": "Adobe",
        "passing_year": "201X-201Y",
        "responsibilities" : "It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod"
      }
    ],
    "achievements": [
      {
        "field" : "Academics",
        "awards" : "Lorem ipsum dolor sit amet"
      },
      {
        "field" : "Sports",
        "awards" : "consectetuer adipiscing elit"
      }
    ]
  };
}

module.exports = {  
    ObjectTransformerTestcase,
    ResumeGeneratorTestcase,
    ResumeTestcase
};
