const { resumeRequestSchema } = require("../../src/validators/request_validation_schema"); 
const Testcases = require("../../src/constants/tescases");

const RequestValidatorTestcase = Testcases.RequestValidatorTestcase;
const testcases=new RequestValidatorTestcase();

describe('resumeRequestSchema', () => {
  it('should validate a valid resume request object', () => {
    const { error } = resumeRequestSchema.validate(testcases.validResumeRequest);

    expect(error).toBeUndefined();
  });

  it('should return an error for an invalid resume request object', () => {
    const { error } = resumeRequestSchema.validate(testcases.invalidResumeRequest);

    expect(error).toBeDefined();
  });

  it('should not validate a valid resume request object if everything is valid and education is empty', () => {
    const { error } = resumeRequestSchema.validate(testcases.emptyEducation);

    expect(error).toBeDefined();
  });
  it('should not validate a valid resume request object if everything is valid and experience is empty', () => {
    const { error } = resumeRequestSchema.validate(testcases.emptyExperience);

    expect(error).toBeDefined();
  });
  it('should not validate a valid resume request object if everything is valid and achievements is empty', () => {
    const { error } = resumeRequestSchema.validate(testcases.emptyAchievements);

    expect(error).toBeDefined();
  });
  it('should not validate a valid resume request object if everything is valid and skills is empty', () => {
    const { error } = resumeRequestSchema.validate(testcases.emptySkills);

    expect(error).toBeDefined();
  });

});
