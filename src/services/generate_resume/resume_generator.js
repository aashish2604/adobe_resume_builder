
const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");
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

  getTemplateDoc(template){
    if(template==="3")
    return "LinkTemplate.docx";
    else if(template==="2")
    return "ImageTemplate.docx";
    else
    return "BasicTemplate.docx";
  }

  async generate(jsonData,template) {
    try {
      const INPUT="./assets/resume_templates/"+this.getTemplateDoc(template);
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
