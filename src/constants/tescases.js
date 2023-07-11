// class to contain all the large testcase which is used in the test

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
    LinkedIn: '<a href=\"https://www.linkedin.com\">linkedIn</a>',
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

class RequestValidatorTestcase{
  validResumeRequest = {
    template_id: "1",
    personal_information: {
      name: "John",
      last_name: "Doe",
      email_address: "john.doe@example.com",
      phone_number: "+91 1234567890",
      linkedin_url: "https://www.linkedin.com/in/johndoe/",
    },
    job_title: "Software Developer",
    career_objective: "To contribute to the software development industry",
    skills: ["JavaScript", "Node.js", "React"],
    education: [
      {
        school_name: "ABC University",
        passing_year: "2022",
        description: "Bachelor's Degree in Computer Science",
      },
    ],
    experience: [
      {
        company_name: "XYZ Company",
        passing_year: "2023",
        responsibilities: "Developing and maintaining web applications",
      },
    ],
    achievements: [
      {
        field: "Technology",
        awards: "Best Programmer of the Year",
      },
    ],
  };

  emptyEducation= {
    template_id: "1",
    personal_information: {
      name: "John",
      last_name: "Doe",
      email_address: "john.doe@example.com",
      phone_number: "+91 1234567890",
      linkedin_url: "https://www.linkedin.com/in/johndoe/",
    },
    job_title: "Software Developer",
    career_objective: "To contribute to the software development industry",
    skills: ["JavaScript", "Node.js", "React"],
    education: [],
    experience: [
      {
        company_name: "XYZ Company",
        passing_year: "2023",
        responsibilities: "Developing and maintaining web applications",
      },
    ],
    achievements: [
      {
        field: "Technology",
        awards: "Best Programmer of the Year",
      },
    ],
  };

  emptyExperience = {
    template_id: "1",
    personal_information: {
      name: "John",
      last_name: "Doe",
      email_address: "john.doe@example.com",
      phone_number: "+91 1234567890",
      linkedin_url: "https://www.linkedin.com/in/johndoe/",
    },
    job_title: "Software Developer",
    career_objective: "To contribute to the software development industry",
    skills: ["JavaScript", "Node.js", "React"],
    education: [
      {
        school_name: "ABC University",
        passing_year: "2022",
        description: "Bachelor's Degree in Computer Science",
      },
    ],
    experience: [],
    achievements: [
      {
        field: "Technology",
        awards: "Best Programmer of the Year",
      },
    ],
  };

  emptySkills = {
    template_id: "1",
    personal_information: {
      name: "John",
      last_name: "Doe",
      email_address: "john.doe@example.com",
      phone_number: "+91 1234567890",
      linkedin_url: "https://www.linkedin.com/in/johndoe/",
    },
    job_title: "Software Developer",
    career_objective: "To contribute to the software development industry",
    skills: [],
    education: [
      {
        school_name: "ABC University",
        passing_year: "2022",
        description: "Bachelor's Degree in Computer Science",
      },
    ],
    experience: [
      {
        company_name: "XYZ Company",
        passing_year: "2023",
        responsibilities: "Developing and maintaining web applications",
      },
    ],
    achievements: [
      {
        field: "Technology",
        awards: "Best Programmer of the Year",
      },
    ],
  };
  emptyAchievements = {
    template_id: "1",
    personal_information: {
      name: "John",
      last_name: "Doe",
      email_address: "john.doe@example.com",
      phone_number: "+91 1234567890",
      linkedin_url: "https://www.linkedin.com/in/johndoe/",
    },
    job_title: "Software Developer",
    career_objective: "To contribute to the software development industry",
    skills: ["JavaScript", "Node.js", "React"],
    education: [
      {
        school_name: "ABC University",
        passing_year: "2022",
        description: "Bachelor's Degree in Computer Science",
      },
    ],
    experience: [
      {
        company_name: "XYZ Company",
        passing_year: "2023",
        responsibilities: "Developing and maintaining web applications",
      },
    ],
    achievements: [],
  };

  invalidResumeRequest = {
    template_id: "4",
    personal_information: {
      name: "John",
      last_name: "",
      email_address: "john.doe",
      phone_number: "123",
      linkedin_url: "invalid-linkedin-url",
    },
    job_title: "",
    career_objective: "",
    skills: ["", "Node.js", "React"],
    education: [
      {
        school_name: "",
        passing_year: "2022",
        description: "",
      },
    ],
    experience: [
      {
        company_name: "",
        passing_year: "",
        responsibilities: "",
      },
    ],
    achievements: [
      {
        field: "",
        awards: "",
      },
    ],
  };
}

module.exports = {  
    ObjectTransformerTestcase,
    ResumeGeneratorTestcase,
    ResumeTestcase,
    RequestValidatorTestcase
};
