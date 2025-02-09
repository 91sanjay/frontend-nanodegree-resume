var bio = {
    "name": "Sanjay Rajashekhar",
    "role": "Software Developer",
    "contacts": {
        "email": "91sanjay@gmail.com",
        "mobile": "+1(857)756-3030",
        "github": "91sanjay",
        "location": "Boston, MA"
    },
    "welcomeMessage": "Sanjay's Resume",
    "skills": ["Java", "Python", "HTML5", "CSS3", "Javascript", "JQuery"],
    "bioPic": "images/sanjay.png"
};

var work = {
    "jobs": [{
        "title": "QA Intern",
        "employer": "SunGard",
        "dates": 2015,
        "location": "Salem, NH",
        "description": "As part of the QA team at SunGard, I have written GUI tests using VBscript and Test Complete. I took up this role as I wanted to explore my interests in tesitng. As a member of the team, I take part in monthly scrum planning meets and also stand up meetings twice a week. I have learnt the nuances of testing and how a test engineer looks at the end product. I believe I have gained valuable experience which will help me become a better Developer, given that I now understand the quality of code that is required to make a test engineer's life easy. I have worked on a product called Loanet and I will also be a part of API testing using SOAPUI."
    }, {
        "title": "Backend Developer",
        "employer": "Ahold USA",
        "dates": 2014,
        "location": "Boston, MA",
        "description": "At Ahold, I was a backend developer responsible for developing RESTful webservices to support in store iPhone applications. I used Java, Spring and Hibernate for the three projects that I was a part of. It was a challenging internship as I had a lot of new technologies to learn and had to meet short deadlines while maintaining the quality of the code. I designed databases, coded the backend and also presented my application to the clients. I was also a responsible for the UI design of one of the applications, for which I used Axure RP to create wireframes."
    }]
};

var education = {
    "schools": [{
        "name": "SJBIT",
        "degree": "Bachelor of Engineering",
        "majors": ["Computer Science"],
        "date": 2013,
        "location": "Bangalore, India",
        "url": "#"
    }, {
        "name": "Northeastern University",
        "degree": "Master of Science",
        "majors": ["Computer Science"],
        "date": 2015,
        "location": "Boston, MA",
        "url": "http://www.northeastern.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-end nanodegree",
        "school": "Udacity",
        "date": 2015,
        "url": "https://www.udacity.com"
    }]
};

var projects = {
    "project": [{
        "title": "Portfolio Site",
        "dates": 2015,
        "images": ["images/fry.jpg"],
        "description": "This project was a part of the online nanodegree cirriculum at Udacity. I developed fully responsive website to showcase my skills."
    }, {
        "title": "Search Engine",
        "dates": 2014,
        "images": ["images/neu.png"],
        "description": "This project was part of the information retrieval course at Northeastern University. I developed a simple search engine from scratch using python. I wrote a web crawler to collect webpages for the corpus and processed the documents to remove stop words. I used the stems of the words to createa an inverted index and also wrote a program to fetch the pages based on keywords. Applied various scoring functions like BM-25, TF and TF-IDF to rank the results."
    }]
};

work.display = function() {
    var i;
    var len = work.jobs.length
    for (i = 0; i < len; i++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
        $(".work-entry a").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
}

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#topContacts:last").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts:last").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts:last").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts:last").append(HTMLlocation.replace("%data%", bio.contacts.location));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var i;
        var len = bio.skills.length;
        for (i = 0; i < len - 1; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
};

projects.display = function() {
    var i;
    for (i = 0; i < projects.project.length; i++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[i].description));

        for(image in projects.project[i].images) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[i].images[image]));
        }
    }
};

education.display = function() {
    for(school in education.schools) {
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(HTMLschoolName.replace("%data%",education.schools[school].name));
        $('.education-entry a').append(HTMLschoolDegree.replace("%data%",education.schools[school].degree));
        $('.education-entry:last').append(HTMLschoolDates.replace("%data%",education.schools[school].date));
        $('.education-entry:last').append(HTMLschoolLocation.replace("%data%",education.schools[school].location));

        for(major in education.schools[school].majors) {
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]));
        }
    }

    for(element in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[element].title));
        $("#education a").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[element].school));
        $('.online-class:last').append(HTMLonlineDates.replace("%data%",education.onlineCourses[element].date));
        $('.online-class:last').append(HTMLonlineURL.replace("%data%",education.onlineCourses[element].url));
    }
};

var connect = function() {
    $("#footerContacts:last").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts:last").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts:last").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts:last").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

$("#main").append(internationalizeButton);
$("#map-div").append(googleMap);

work.display();
projects.display();
bio.display();
education.display();
connect();