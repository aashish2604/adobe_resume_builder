const ObjectTransformer=require('../src/services/generate_resume/object_transformer');
const Testcases=require('../src/constants/tescases');

const objectTransformer=new ObjectTransformer();
const ObjectTransformerTestcase=Testcases.ObjectTransformerTestcase;
const testcases=new ObjectTransformerTestcase();

describe('object transformer tester',()=>{

    test('returns correct output for valid input',()=>{
        const result=objectTransformer.transform(testcases.validInput);
        expect(result).toEqual(testcases.validOutput);
    });

    test('returns empty object for empty input',()=>{
        const result=objectTransformer.transform({});
        expect(result).toEqual({});
    });

    test('#educationTransformer returns [] if given empty input',()=>{
        const result=objectTransformer.transform(testcases.educationTransformerEmptyInput);
        expect(result).toEqual(testcases.educationTransformerEmptyOutput);
    });

    test('#experienceTransformer returns [] if given empty input',()=>{
        const result=objectTransformer.transform(testcases.experienceTransformerEmptyInput);
        expect(result).toEqual(testcases.experienceTransformerEmptyOutput);
    });

    test('#achievementsTransformer returns [] if given empty input',()=>{
        const result=objectTransformer.transform(testcases.achievementsTransformerEmptyInput);
        expect(result).toEqual(testcases.achievementsTransformerEmptyOutput);
    });

    test('Throws error is the input is invalid',()=>{
        expect(()=>objectTransformer.transform()).toThrow();
    });
})