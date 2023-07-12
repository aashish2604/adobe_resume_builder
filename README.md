# Overview

## Backend
The backend is made using **NodeJs** and **Express**. It is hosted with the help of railway. The backend follows the **S.O.L.I.D** principles which are 5 main principles of **Object-Oriented Programming (OOP)**. This architecture of software development is well tested and is used extensively in production.\
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
* https://valid.url[anchor tag text] - Url enter in this form will be parsed into ***<a href=\"https://valid.url\">anchor_text</ a>***
* https://valid.url - Url enter in this form will be parsed into ***<a href=\"https://valid.url\">https://valid.url</ a>***

**NOTE** - This parsing of urls is not applicable to *name*, *last_name*, *email_address*, *phone_number* and *linkedin_url*. These are personal_inforamtion and they should not ideally be anchor tags


## Frontend
It is seperate project and is not included in the github repo of the backend. This is done to follow the best practices of production to keep frontend and backend seperate.\
I have created 3 frontends:
* ***Android app*** - [apk](https://drive.google.com/file/d/1N3-uF3D2G8CcPz2snUu1s8tw2Bu8VYMN/view?usp=sharing)
* ***Web app*** - [website](https://aashish2604.github.io/resume_builder_web/#/)
* ***Windows app*** - [setup](https://drive.google.com/file/d/1JvqFr-mEbRV1hcbD3CvNA8x1LYpfbz3c/view?usp=sharing)

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
The project is well tested with over **45** unit tests. To run the tests go the root of project in the terminal and run

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
For example you can make a POST request with suitable parameter defined in previous section using 
```javascript
"http://0.0.0.0:4000/resume"
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
# Testing the Frontend
Before you proceed with testing the frontend, you should know what to expect from it. The frontend of all the three platforms have the following flow of pages:
* **1st page** - It will give you the option to choose one of the 3 resume templates. You will also be able to preview each of them before proceeding.
* **2nd page** - It will contain a set of 5 seperate forms:
    * *Personal Details*
    * *Education Details*
    * *Experience Details*
    * *Acheivements Details*
    * *Other Details*

    **NOTE:** The data of each of the details follows the guidelines of the request body JSON defined in first section (Overview of backend) of this document.
* **3rd page** - It will show a loading indicator while the request is processing. Upon receiving the response it will save the file appropriately according to the platform used.

To test the website follow the link to the [website](https://aashish2604.github.io/resume_builder_web/#/)

To test the mobile app download the **apk** from this [link](https://drive.google.com/file/d/1N3-uF3D2G8CcPz2snUu1s8tw2Bu8VYMN/view?usp=sharing) and run it in your device


To test the windows app download the **.exe** setup from this [link](https://drive.google.com/file/d/1JvqFr-mEbRV1hcbD3CvNA8x1LYpfbz3c/view?usp=sharing) and run it on your Windows machine

While using any of the 3 frontends whenever you wish to add a url you could do so by clicking the button at the end of each TextField. One important thing to note here is that the enter url be shown in the field along with its anchor text like: https://google.com[google].

# Implementation of Api
### Dependencies
* ***@adobe/pdfservices-node-sdk***: For the resume generation
* ***winston***: For logging data in console and app file
* ***joi***: For request body validation
* ***express***: To create server
* ***cors***: To tackle the cors errors
* ***body***-parser: For doing body parsing in middleware

### Dev-dependencies
* ***jest***: For unit testing
* ***supertest***; To test the apis

## Project Structure

The file system used here efficiently seperates the application layer and the business layer. Lets discuss about it one by one:

**assets :-**
It contains all the local files that will be useful. In this case it contains all pdf format document\
**configs :-**
It contains the configuration of the server and the logger\
**logs :-**
It contains all the data logged by the logger using the file configuration\
**node_modules :-**
It contains all the modules installed from npm\
**outputs :-**
Contains the resume pdf received from the Api call.\
**src :-**
All the Code related to project is maintained inside the src folder. It is responsible for the working of the Api\
**tests :-** It contains all the unit tests for the application


## src structure

The Code inside src folder can be distinguished into two categories – Application Layer and Business Layer

### Business Layer

Business Layer resides in the folder *services* and *validators*
In services folder we have all the code pertaining to the actual processes that need to be carried out. These logic keeps changing as per the business requirements.
In the validators folder we have all the request validators. These are designed according to the business requirements.

The folder services contain files which are direct wrapper for the services like **Resume.js** in this case and subfolders containing helpers of the wrapper class like **generate_resume** in this case. The validator in this case contains are request body validation schema.

### Application Layer

core , middleware, routes ,utils and constants are the folders among which the Application Layer Code is distributed.

#### constants folder

In this folder we will be storing constants that will be used throughout the project. The advantage of creating a separate space for the constants is that they can be used repetitively in the entire project and if any rare scenario occurs where the value needs to be changed, you do not need to go to every class that has used it and separately change it.

#### utils folder

Utils folder is where Commonly Used utilities can be placed. Like logger in this case. One more Important thing to note about the Logger Class is that it is Singleton. Because we can use the same instance every time it is called, there is no reason for multiple instances to exist!

#### routes folder

This is the folder where all the routes of our express server are declared. Note that they are just declared here and not initialized. Initialization of this routes is a different responsibility, hence it is placed in a different folder in a new class. Initialization is done in the core folder.

The route declarations basically points an API path to it’s corresponding business activity logic which is placed in the services folder.

Here we have an Abstract Base Class known as **AbstactRouteController**, all the Specific Route Controllers are derived from this Base Class.

#### middleware

As the name of the folder suggests, this is where the middleware components are defined. It contains the classes **CommonMiddleware** and **ErrorHandlingMiddleware**

#### core

Core folder is where everything starts to come together. It is where the most important classes with respect to the starting the application are stored. It contains the code for starting and initializing the server. It has the file server.js which call the initializer which inturn initializes the middlewares and the routes before starting the server.

# Architecture

The architecture of this project follows **S.O.L.I.D** principles which are 5 main principles of Object-Oriented Programming (OOP).

* ***S*** – Single Responsibility
* ***O*** – Open to Extension, Closed to Modification
* ***L*** – Liskov Substitution Principle
* ***I*** – Interface Segregation
* ***D*** – Dependency Inversion

Lets discuss see the examples where it is followed.

### Single Responsibility
The classes inside the services are a perfect example of this 
Their codes have no relation to starting and running the Web-Server or the routes whatsoever. They are concerned of doing their individual work. For example the **ObjectTransformer** class only changes the forms of its input, it has no concern about that input has reached it.

### Open-Closed principle
The **AbstactRouteController** satisfies it very well. It is an abstract class which prevents the creation of its instance so its properties cannot be modified directly. The classes **GenerateResumeRouteController** and **HealthCheckRouteController** inherit it. The code for a new route controller is created by extending an existing abstract base class, without modifying any prevailing code

### Liskov Substitution Principle

The **AbstactRouteController** and its children i.e, **GenerateResumeRouteController** and **HealthCheckRouteController** satisfy the Liskov Substitution principle because the base class and the derived class have the same behavior and can be substituted for each other!

### Interface Segregation

This is the principle that most of the classes of this project follows. For instance take the **Resume** class into consideration. It only depends on the *generate()* function of **ResumeGenerator** and *transform()* function of **ObjectTransformer**. It is not forced to depend on methods it does not use, like the server and routing functions.

### Dependency Inversion

This principle is fairly evident in the behaviour of **InitializeRoutes**. Here details regarding the routes is passed to a Higher Class (Express Module) in the form of an abstraction rc.router where rc is an instance of AbstractRouteController !

# Working mechanism summary

The **app.js** is executed which calls the *server()* function in server.js. This function calls the functions to initialize the middlewares and the routes and finally starts running the server.

Whenever an api request hits the server the route controller are responsible for processing it. When the endpoint **"/resume"** is called then first the header are verified and the request body is checked. If everything is fine then the request is sent to the corresponding service wrapper **Resume** class being the one in this case. If something is wrong in the request then Status code 400 is thrown indicating Bad Request.

Here the json is transformed into desired form using the **ObjectTransformer**. The transformed object is then sent to **ResumeGenerator** where the pdf is obtained by an api call. This pdf is then saved in the outputs folder. The saved pdf is then returned in the response with status code of 200. If any error occurs in between processing the input from response body then a Server error is thrown with a status code of 500.






