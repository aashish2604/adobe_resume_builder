const ResumeGenerator = require("./generate_resume/resume_generator");
const ObjectTransformer = require("./generate_resume/object_transformer");

const OUTPUT = "./outputs/generatedResume.pdf";

class Resume {
  static async generateResume(jsonInput) {
    try {
      const template = jsonInput.template_id;
      const objectTransformer = new ObjectTransformer();
      let transformedData = objectTransformer.transform(jsonInput);
      const resumeGenerator = new ResumeGenerator();
      const response = await resumeGenerator.generate(
        transformedData,
        template
      );
      await response.saveAsFile(OUTPUT);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = Resume;
