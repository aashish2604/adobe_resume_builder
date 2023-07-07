const AbstractRouteController = require("./abstract_route_controller");
const HelloWorld = require("../services/hello_world");
const StatusConstants = require("../constants/status_constants");
const Resume = require("../services/resume");

const rootpath=process.cwd();

const jsonInput = {
  template_id: "2",
  personal_information: {
    name: "Lorem",
    last_name: "ipsum",
    email_address: "ipsum@adobe.com",
    phone_number: "+91 99xx14xx99",
    linkedin_url: "https://www.linkedin.com",
  },
  job_title: "Software Development Engineer",
  career_objective:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
  skills: [
    "Strong interpersonal",
    "communication skills",
    "Leadership",
    "Poised under pressure",
  ],
  education: [
    {
      school_name: "School",
      passing_year: "201X-201Y",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'''t look even slightly believable.",
    },
    {
      school_name: "College",
      passing_year: "203X-203Y",
      description:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    },
  ],
  experience: [
    {
      company_name: "Adobe",
      passing_year: "201X-201Y",
      responsibilities:
        "It is a long established fact that a reader will be distracted by the readable content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
    },
  ],
  achievements: [
    {
      field: "Academics",
      awards: "Lorem ipsum dolor sit amet",
    },
    {
      field: "Sports",
      awards: "consectetuer adipiscing elit",
    },
  ],
};

class HelloWorldRouteController extends AbstractRouteController {
  constructor(link) {
    super();
    this.path = "/helloworld";
    this.InitializeController(link);
  }

  async runService(req, resp) {
    let response = await HelloWorld.wishHello();
    resp.status(StatusConstants.code200).send(response);
  }
}

class GenerateResumeRouteController extends AbstractRouteController {
  constructor(link) {
    super();
    this.path = "/resume";
    this.InitializeController(link);
  }

  async runService(req, resp) {
    Resume.generateResume(jsonInput)
      .then(() => {
        console.log("Your file is in the response");
        resp.setHeader('Content-type','application/pdf');
        resp.sendFile(rootpath+"/outputs/generatedResume.pdf");
      })
      .catch((err) => console.log(err));
  }
}

module.exports = GenerateResumeRouteController;
