# Overview

## Backend
The backend is made using **NodeJs** and **Express**. It is hosted with the help of railway. The backend follows the **S.O.L.I.D** architecture of software development which is well tested and is used extensively.\
It has 2 endpoints:
* **/resume** - A POST request to generate resume by providing appropriate body and headers.
* **/health** - A GET request to do healthcheck of the server.

To make request on **/request** endpoint we need to a send a valid request body in JSON format and the following headers:
* Content-type - application/json
* Accept - application/pdf

The request body json is expected to follow a particular guideline for each of the fields as specified below:
* ***template_id***: It only accepts one of "1", "2", "3".
* ***personal_information***: A valid object containing:
    * ***name***: Non empty string
    * ***last_name***: Non-empty string
    * ***email_address***: A valid email address like "someone@adobe.com"
    * ***phone_number***: It should of the format *+91 9876543213* or *+123 9876543210*. In short the first the plus sign then either 2 or 3 digits then a blankspace and then 10 digits.
    * ***linkedin_url***: Should be a valid linkedin profile url like "https://www.linkedin.com/in/aashish-ranjan-singh-9848091b9/". It should have "https://www.linkedin.com" at the beginning followed by either "/in/" or "/pub/" or "/profile/ " then the some random part.
* ***job_title***: Non-empty string
* ***career_objective***: Non-empty string
* ***skills***: A non-empty array of strings.
* ***education***: A non-empty array of objects where each object follows:
    * ***school_name***: Non-empty string
    * ***passing_year***: Non-empty string
    * ***description***: Non-empty string
* ***experience***: Non empty array of objects where each object follows:
    * ***company_name***: Non-empty string
    * ***passing_year***: Non-empty string
    * ***responsibilities***: Non-empty string   
* ***achievements***: Non empty array of objects where each object follows:
    * ***field***: Non-empty string
    * ***awards***: Non-empty string

One can enter urls in one of the 2 formats in the strings:
* https://valid.url[anchor tag text] - Url enter in this form will be parsed into ***<a href=\"https://valid.url\">anchor tag text</ a>***
* https://valid.url - Url enter in this form will be parsed into ***<a href=\"https://valid.url\">https://valid.url</ a>***

**NOTE** - This parsing of urls is not applicable to *name*, *last_name*, *email_address*, *phone_number* and *linkedin_url*. These are personal_inforamtion and they should not ideally be anchor tags


## Frontend
It is seperate project and is not included in the github repo of the backend. This is done to follow the best practices of production to keep frontend and backend seperate.\
I have created 2 frontends:
* ***Android app*** - [apk](https://drive.google.com/file/d/18CPpiHc_gEpt-I6ELXEVwzRpZK5lMN_a/view?usp=sharing)
* ***Web app*** - [website](https://aashish2604.github.io/resume_builder_web/#/)
<!-- * ***Windows app*** -->

The frontend is created with the help of **Flutter**.The repo can be found here [Github](https://github.com/aashish2604/resume_builder_ui).

# Testing Backend locally
The scripts of the project is as follows

```javascript
"scripts": {
    "test": "jest",
    "start": "node src/app.js"
},
```
After cloning the repo in your local machine you can run the server by changing your directory to the root of the project in your terminal and entering the following command 

```javascrpt
npm start
```
The project is well tested with over **40** unit tests. To run the tests go the root of project in the terminal and run

```javascript
npm test
```

The server configuration of the project is:
```javascript
{
    "host":"0.0.0.0",
    "port":4000
}
```
So in order to make request to your server running locally you can use either of the 2 base urls:

```javascript
"http://localhost:4000"
```
Or
```javascript
"http://0.0.0.0:4000"
```
# Testing Hosted backend
The backend is also hosted as a REST Api on railway so you can run direct api request from Postman web or from the browser (run the health check request first because the default behavior of browser is to only make GET request)\
The base url of the hosted backend is:
```javascript
"https://adoberesumebuilder-production.up.railway.app"
```
To test the server health click the below

[https://adoberesumebuilder-production.up.railway.app/health](https://adoberesumebuilder-production.up.railway.app/health)

It should ideally display ***"Server is healthy"***

You can then use the following endpoint to make the POST request via some client.
```javascript 
"/resume"
```
# Tesing the Frontend
Before you proceed with testing the frontend, you should know what to expect from it. The frontend of all the three platforms have the following flow of pages:\
* **1st page** - It will give you the option to choose one of the 3 resume templates. You will also be able to preview each of them before proceeding.
* **2nd page** - It will contain a set of 5 seperate forms:
    * *Personal Details*
    * *Education Details*
    * *Experience Details*
    * *Acheivements Details*
    * *Other Details*

    **NOTE:** The data of each of the details follows the guidelines of the request body JSON defined in first section (Overview of backend) of this document.
* **3rd page** - It will show a loading indicator while the request is processing. Upon receiving the response it will save the file appropriately

To test the website follow the link to the [website](https://aashish2604.github.io/resume_builder_web/#/)

To test the mobile app download the **apk** from this [link](https://drive.google.com/file/d/18CPpiHc_gEpt-I6ELXEVwzRpZK5lMN_a/view?usp=sharing) and run it in your device

<!-- To test the windows app download the **.exe** setup from the link below and run it on your Windows machine -->






