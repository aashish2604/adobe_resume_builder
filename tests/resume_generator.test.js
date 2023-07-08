const ResumeGenerator=require("../src/services/generate_resume/resume_generator");
const Testcases=require('../src/constants/tescases');
const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");

const resumeGenerator=new ResumeGenerator();
const ResumeGeneratorTestcase=Testcases.ResumeGeneratorTestcase;
const testcases=new ResumeGeneratorTestcase();

describe('Resume Generator Tester',()=>{

    test('corresponding template value are returned for their ids',()=>{
        const result1=resumeGenerator.getTemplateDoc("1");
        const result2=resumeGenerator.getTemplateDoc("2");
        const result3=resumeGenerator.getTemplateDoc("3");

        expect(result1).toBe("BasicTemplate.docx");
        expect(result2).toBe("ImageTemplate.docx");
        expect(result3).toBe("LinkTemplate.docx");
    });

    test('generate function works fine for valid input',async ()=>{
        try {
            const result=await resumeGenerator.generate(testcases.validInput,"1");
            expect(result).toBeInstanceOf(PDFServicesSdk.FileRef);
        } catch (error) {
            expect(error).toBeDefined();
        }
        
    },15000);

    test('generate function throws error if jsonData is not provided',async ()=>{
        try {
            await resumeGenerator.generate(undefined,"1");
        } catch (error) {
            expect(error).toBeDefined();
        }
        
    });


})