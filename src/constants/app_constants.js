class AppConstants{
    ANCHOR_TAG_REGEX=/https?:\/\/[^\s\[\]]+\[([^\[\]]+)\]/g;
    PHONE_NUMBER_REGEX=/^[+]\d{1,3}\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    LINKEDIN_PROFILE_REGEX=/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*$/;
    RESUME_LINKED_TEMPLATE="LinkTemplate.docx";
    RESUME_IMAGE_TEMPLATE="ImageTemplate.docx";
    RESUME_BASIC_TEMPLATE="BasicTemplate.docx";
}

module.exports=AppConstants;


