const ObjectTransformer=require('../../src/services/generate_resume/object_transformer');
const Testcases=require('../../src/constants/tescases');

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
});
// Replace with the correct file path

describe('urlParser', () => {
  it('should replace URLs with anchor tags including inner text', () => {
    const data = 'Check out this website: https://example.com[Example Website].';
    const expected = 'Check out this website: <a href="https://example.com">Example Website</a>.';

    const result = objectTransformer.urlParser(data);

    expect(result).toBe(expected);
  });

  it('should replace multiple URLs with anchor tags including inner text', () => {
    const data = 'Visit https://google.com[Google] and https://example.com[Example].';
    const expected = 'Visit <a href="https://google.com">Google</a> and <a href="https://example.com">Example</a>.';

    const result = objectTransformer.urlParser(data);

    expect(result).toBe(expected);
  });

  it('should handle URLs without inner text', () => {
    const data = 'Check this out: https://example.com';
    const expected = 'Check this out: <a href="https://example.com">https://example.com</a>';

    const result = objectTransformer.urlParser(data);

    expect(result).toBe(expected);
  });

  it('should handle urls with inner text and without inner text in the same string',()=>{
    const data = `There are many variations of passages of https://www.google.com[Lorem Ipsum] available, https://www.google.com but the https://tiktok.com[tik] and https://tiktok.com majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Another example: https://www.adobe.co.in[Something else].`;
    const expected = `There are many variations of passages of <a href="https://www.google.com">Lorem Ipsum</a> available, <a href="https://www.google.com">https://www.google.com</a> but the <a href="https://tiktok.com">tik</a> and <a href="https://tiktok.com">https://tiktok.com</a> majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Another example: <a href="https://www.adobe.co.in">Something else</a>.`

    const result = objectTransformer.urlParser(data);

    expect(result).toBe(expected);
  })

  it('should not modify the text if there are no URLs', () => {
    const data = 'This is a plain text without any URLs.';
    const expected = 'This is a plain text without any URLs.';

    const result = objectTransformer.urlParser(data);

    expect(result).toBe(expected);
  });
});
