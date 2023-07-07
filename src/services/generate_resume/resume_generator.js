const jsonData = {
  Name: "Lorem",
  LastName: "ipsum",
  EmailAddress: "ipsum@abc.com",
  PhoneNumber: "+91 99xx14xx99",
  LinkedIn: '<a href="https://www.linkedin.com">linkedIn</a>',
  JobTitle: "Software Development Engineer",
  Summary:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  Skills: ["Java", "Data Structure", "ReactJs"],
  Education: [
    {
      SchoolName: "School",
      Year: "201X-201Y",
      Description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      SchoolName: "College",
      Year: "203X-203Y",
      Description:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
  ],
  Experience: [
    {
      CompanyName: "Adobe",
      Year: "201X-201Y",
      Description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ],
  Achievements: [
    {
      Type: "Academics",
      Description: "Lorem ipsum dolor sit amet",
    },
    {
      Type: "Sports",
      Description: "consectetuer adipiscing elit",
    },
  ],
};

const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");
const INPUT = "./assets/resume_templates/LinkTemplate.docx";
const OUTPUT = "./outputs/generatedResume.pdf";

class ResumeGenerator {
  credentials;

  constructor() {
    // Set up our credentials object.
    this.credentials =
      PDFServicesSdk.Credentials.servicePrincipalCredentialsBuilder()
        .withClientId("eaa0b5d4f67b492b82ba816f774525f2")
        .withClientSecret("p8e-JcC5gLXhSNWw9q8anCLx9ysjoe48qx2y")
        .build();

    if (fs.existsSync(OUTPUT)) fs.unlinkSync(OUTPUT);
  }

  async generate() {
    try {
      // Create an ExecutionContext using credentials
      const executionContext = PDFServicesSdk.ExecutionContext.create(
        this.credentials
      );

      // This creates an instance of the Export operation we're using, as well as specifying output type (DOCX)
      const documentMerge = PDFServicesSdk.DocumentMerge,
        documentMergeOptions = documentMerge.options,
        options = new documentMergeOptions.DocumentMergeOptions(
          jsonData,
          documentMergeOptions.OutputFormat.PDF
        );

      // Create a new operation instance using the options instance.
      const documentMergeOperation = documentMerge.Operation.createNew(options);

      // Set operation input document template from a source file.
      const input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT);
      documentMergeOperation.setInput(input);

      // Execute the operation and Save the result to the specified location.
      const response = await documentMergeOperation.execute(executionContext);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = ResumeGenerator;
