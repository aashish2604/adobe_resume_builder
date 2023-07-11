const Resume = require("../../src/services/resume");
const Testcases = require("../../src/constants/tescases");
const ObjectTransformer = require("../../src/services/generate_resume/object_transformer");
const ResumeGenerator = require("../../src/services/generate_resume/resume_generator");

const OUTPUT = "./outputs/generatedResume.pdf";

const ResumeTestcase = Testcases.ResumeTestcase;
const testcases = new ResumeTestcase();
jest.mock("../../src/services/generate_resume/resume_generator");
jest.mock("../../src/services/generate_resume/object_transformer");

const mockJsonInput = testcases.validInput;

describe("generateResume", () => {
    it("should call ObjectTransformer.transform with the provided JSON input", async () => {
      const transformSpy = jest.spyOn(ObjectTransformer.prototype, "transform");
      const saveAsFileSpy = jest.fn();
      const response = {
        saveAsFile: saveAsFileSpy,
      };

      ResumeGenerator.prototype.generate.mockResolvedValue(response);
      await Resume.generateResume(mockJsonInput);

      expect(transformSpy).toHaveBeenCalledWith(mockJsonInput);
    });

    it("should call ResumeGenerator.generate with the transformed data and template", async () => {
      const generateSpy = jest.spyOn(ResumeGenerator.prototype, "generate");
      const transformedData = {}; // Mocked transformed data

      ObjectTransformer.prototype.transform.mockReturnValue(transformedData);

      await Resume.generateResume(mockJsonInput);

      expect(generateSpy).toHaveBeenCalledWith(
        transformedData,
        mockJsonInput.template_id
      );
    });

    it("should call response.saveAsFile with the specified output path", async () => {
      const saveAsFileSpy = jest.fn();
      const response = {
        saveAsFile: saveAsFileSpy,
      };

      ResumeGenerator.prototype.generate.mockResolvedValue(response);

      await Resume.generateResume(mockJsonInput);

      expect(saveAsFileSpy).toHaveBeenCalledWith(OUTPUT);
    });

    it("should throw an error if an error occurs during the process", async () => {
      const mockError = new Error("Test error");

      ResumeGenerator.prototype.generate.mockRejectedValue(mockError);

      await expect(Resume.generateResume(mockJsonInput)).rejects.toThrow(
        mockError
      );
    });
  });
