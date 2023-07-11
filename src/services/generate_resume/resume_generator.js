
const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");
const OUTPUT = "./outputs/generatedResume.pdf";
const AppSecrets=require("../../constants/secrets");
const AppConstants=require("../../constants/app_constants");

const appConstants=new AppConstants();
const appSecrets=new AppSecrets();

class ResumeGenerator {
  credentials;

  constructor() {
    // Set up our credentials object.
    this.credentials =
      PDFServicesSdk.Credentials.servicePrincipalCredentialsBuilder()
        .withClientId(appSecrets.CLIENT_ID)
        .withClientSecret(appSecrets.CLIENT_SECRET)
        .build();

    if (fs.existsSync(OUTPUT)) fs.unlinkSync(OUTPUT);
  }

  getTemplateDoc(template){
    if(template==="3")
    return appConstants.RESUME_LINKED_TEMPLATE;
    else if(template==="2")
    return appConstants.RESUME_IMAGE_TEMPLATE;
    else
    return appConstants.RESUME_BASIC_TEMPLATE;
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
      logger.info(error.message);
      throw error;
    }
  }
}

module.exports = ResumeGenerator;
