const AbstractRouteController = require("./abstract_route_controller");
const StatusConstants = require("../constants/status_constants");
const Resume = require("../services/resume");
const validationSchema = require("../validators/request_validation_schema");

const rootpath = process.cwd();

class GenerateResumeRouteController extends AbstractRouteController {
  constructor(link) {
    super();
    this.path = "/resume";
    this.InitializeController(link, this.checkHeaders);
  }

  checkHeaders(req, res, next) {
    if (req.headers["content-type"] !== "application/json") {
      return res
        .status(StatusConstants.code400)
        .send({
          message: "The request headers must have Content-type: application/json",
          errorCode: StatusConstants.code400,
          errorMessage: StatusConstants.code400Message
        });
    }
    if (req.headers["accept"] !== "application/pdf") {
      return res
        .status(StatusConstants.code400)
        .send({
          message: "The request headers must have Accept: application/pdf",
          errorCode: StatusConstants.code400,
          errorMessage: StatusConstants.code400Message
        });
    }
    next();
  }

  async runService(req, res) {
    const jsonInput = req.body;
    const { error, value } =
      validationSchema.resumeRequestSchema.validate(jsonInput);
    if (error) {
      res.status(StatusConstants.code400).send({
        message: error.message,
        errorCode: StatusConstants.code400,
        errorMessage: StatusConstants.code400Message
      });
    } else {
      Resume.generateResume(jsonInput)
        .then(() => {
          console.log("Your file is in the response");
          res.setHeader("Content-type", "application/pdf");
          res.sendFile(rootpath + "/outputs/generatedResume.pdf");
        })
        .catch((err) => console.log(err));
    }
  }
}

module.exports = GenerateResumeRouteController;
