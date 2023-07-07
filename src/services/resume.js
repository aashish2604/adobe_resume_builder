const ResumeGenerator = require("./generate_resume/resume_generator");

const OUTPUT = "./outputs/generatedResume.pdf";

const resumeGenerator=new ResumeGenerator();

resumeGenerator
  .generate()
  .then((res) => {
    res.saveAsFile(OUTPUT);
    console.log("Successful");
  })
  .catch((err) => {
    console.log(err);
  });
