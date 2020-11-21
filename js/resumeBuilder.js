var contactlinecolor = "orange";
var counter = 0;

var life_story = {
    "born": "",
    "after-born": "",
    "beginning": "",
    "growing": "",
    "still-growing": "",
    "almost": "",
}


var communication = {
    "email": "mevlanaayas@gmail.com",
    "github": "github.com/mevlanaayas",
    "twitter": "twitter.com/alimetifarika",
    "location": "Istanbul/TURKEY",
    "school": "Marmara University"
}


var bio = {
    "name": "Mevlana Ayas",
    "role": "Computer Science Engineer",
    "hometown": "Kosk/Aydin",
    "language": "English",
    "image": "pp.jpg",
    "driverlicense": "B2 soon...",
    "welcomeMessage": "Welcome, here I am! All jobs are listed below thats were done by Mevlana. If you want help, please dont hesitate to ask me!",
    "skills": {
        "Reliability": 10,
        "Algorithm/Data Structures": 7,
        "Web Applications": 7,
        "Java": 7,
        "Python": 5,
        "Docker": 6,
        "C#": 4,
        "Game Development": 4,
        "Golang": 5,
        "C": 3
    }
};


var educations = {
    "schools": [{
        "name": "Marmara University",
        "city": "Istanbul",
        "degree": "Bachelor",
        "major": "CSE-Computer Science Engineering",
        "entryyear": 2013,
        "finished": 2018,
        "website": "marmarauniversity.com",
        "location": "Kadikoy/Istanbul",
        "curriculum": "http://dosya.marmara.edu.tr/eng/cse/2013/belgeler/mufredat/CSE_Curriculum_2013_and_later.pdf"

    }

    ],
    "onlinecourses": [
        {
            "title": "Pluralsight Unity & C# Paths",
            "author": "Mixed (Pluralsight)",
            "dates": "Oct 2019 - Present",
            "skills": "Unity, C#, Game Development",
            "url": "https://app.pluralsight.com/paths",
            "learnings": "Learn and advance on C# Programming and Unity game engine.",
            "certificate": "none"
        }, {
            "title": "Become a Game Designer the Complete Series Coding to Design",
            "author": "[ School of Game Design ]",
            "dates": "June 2019",
            "skills": "Unity, C#",
            "url": "https://www.udemy.com/course/become-a-game-designer/",
            "learnings": "Build Unity games from scratch by using best practices",
            "certificate": "none"
        }, {
            "title": "Complete C# Unity Developer 2D: Learn to Code Making Games",
            "author": "Ben Tristem, GameDev.tv by Ben Tristem, Rick Davidson",
            "dates": "Feb 2019",
            "skills": "Unity, C#",
            "url": "https://www.udemy.com/course/unitycourse/",
            "learnings": "Build Unity games from scratch by using best practices",
            "certificate": "none"
        }, {
            "title": "Docker Mastery: The Complete Toolset From a Docker Captain",
            "author": "Bret Fisher",
            "dates": "Dec 2018",
            "skills": "Docker, Docker Compose, Swarm",
            "url": "https://www.udemy.com/docker-mastery/",
            "learnings": "Build, compose, deploy, and manage Docker containers from development to DevOps based Swarm clusters",
            "certificate": "none"
        }, {
            "title": "none",
            "author": "Udacity",
            "dates": "2017",
            "skills": "none",
            "url": "udacity.com",
            "learnings": "none"
        }
    ],
    "seminars": [{
        "title": "Bilişim Erişilebilirliği",
        "place": "Marmara University",
        "guest": "Hasan ÖZDEMİR",
        "dates": "20.10.2017",
        "guesttitle": "Software Development Lead & Accessibility Consultant at Microsoft",
        "learnings": "There is always a way to help people by using computer science." +
            " The important thing is to find out where it is."

    }, {
        "title": "Yazılım Geliştirme Süreçlerinde Sürdürülebilirlik",
        "place": "Marmara University",
        "guest": "Doç. Dr. Borahan Tümer",
        "dates": "17.11.2017",
        "guesttitle": "Academician at Marmara University",
        "learnings": ""
    }, {
        "title": "Sürdürülebilir Kalkınma İçin Bilişim",
        "place": "Marmara University",
        "guest": "Dursun Baş",
        "dates": "24.11.2017",
        "guesttitle": "Bölgesel Çevre Merkezi",
        "learnings": "There are lots of example for applying computer science to environment. " +
            "It gives us opportunity about ease of use, reusability and maintainability"
    }, {
        "title": "Blokzincir ve Uygulamaları",
        "place": "Marmara University",
        "guest": "Özer Koray Akdemir",
        "dates": "23.02.2018",
        "guesttitle": "TÜBİTAK BİLGEM, Blokzincir Araştırma Laboratuvarında Baş Araştırmacı",
        "learnings": "In my opinion, blockchain gives us an opportunity about safe or stable data" +
            "but the space requirement is too high. You need to place data to all computer around the world."
    }, {
        "title": "5G ve Dikey Teknolojiler",
        "place": "Marmara University",
        "guest": "Doç Dr. Müjdat Soytürk",
        "dates": "02.03.2018",
        "guesttitle": "Marmara Üniversitesi Öğretim Üyesi",
        "learnings": "There are so much learnings. Comming soon."


    }, {
        "title": "none",
        "place": "none",
        "guest": "none",
        "dates": "none",
        "guesttitle": "none",
        "learnings": "none"


    }],
    "activities": [
        /*{
        "title": "Web programming with Python/Django",
        "place": "Bolu/Turkey",
        "dates": "5-20 August 2016",
        "hours": "120 hours",
        "skills": ["Django", " Python", " Git", " HTML/CSS"],
        "learnings": "none",
        "image": "http://pasteboard.co/2AivNsm5k.jpg",
        "link": "https://github.com/lyk2016-python/velespi"

    }, {
        "title": "Blockcircus Blockchain Hackhathon",
        "place": "Kolektif House/Istanbul",
        "dates": "June 29th - July 1st",
        "hours": "72 hours",
        "skills": ["Blockchain", "Solidity", " VueJS", "Web3js"],
        "learnings": "none",
        "certificate": "true",
        "files": "none",
        "links": "https://github.com/Unichain-turkey"
    }, */{
            "title": "none",
            "place": "none",
            "dates": "none",
            "days": "none",
            "skills": "none",
            "learnings": "none",
            "certificate": "true",
            "files": "none",
            "links": "none"
        }
    ]

};

var work = {
    "jobs": [
        {
            "employer": "Skyz Tech (a.k.a SEKOM Yazılım)",
            "location": "Istanbul/Turkey",
            "title": "Software Engineer",
            "dates": "June 2017  - Nov 2018",
            "description": "",
            "detail": "I worked as a backend/middleware developer with tools of" +
                " java and spring, python and django.",
            "skills": "Django/Python/Java/Spring",
            "points": "4/5",
            "jobdone": "Maintained web services with high availability and reliability. Developed new services on existing codebase.",
            "website": "http://www.skyz.tech/",
            "source": "Private!"
        },
        {
            "employer": "Finartz",
            "location": "Istanbul/Turkey",
            "title": "Software Engineer",
            "dates": "Nov 2018 - Present",
            "description": "",
            "detail": "I worked as a backend developer with tools of" +
                " java, spring, webflux and golang.",
            "skills": "Payment Systems/Go/Java/Spring",
            "points": "4/5",
            "jobdone": "Developed web services with high availability and reliability from scratch.",
            "website": "https://finartz.com",
            "source": "Private!"
        }
    ]
}

var projects = {
    "myprojects": [
        {
            "title": "Swingo - P2P Cargo Delivery",
            "dates": "Jun 2018 - Jul 2019",
            "describtion": "Marketplace application to match carriers and senders.",
            "skills": "VueJS / Golang / Django / Docker / Aws",
            "members": 2,
            "files": "none",
            "links": "https://www.goswingo.com/",
            "type": "Startup",
            "img": "none"
        },
        {
            "title": "Bookia",
            "dates": "Aug 2019 - Oct 2019",
            "describtion": "Web application project to save unknown words and their usages from books.",
            "skills": "VueJS / Golang / Docker / Aws",
            "members": 1,
            "files": "none",
            "links": "http://18.188.233.166/",
            "type": "Personal/Demonstration",
            "img": "none"
        },
        {
            "title": "Ether Registration",
            "dates": "May 2018 - June 2018",
            "describtion": "See details on github (please check the link below)",
            "skills": "VueJS / Solidity / Web3js",
            "members": 2,
            "files": "none",
            "links": "https://github.com/Unichain-turkey/ether-registration",
            "type": "Community",
            "img": "none"
        },
        {
            "title": "Adhereum",
            "dates": "May 2018 - June 2018",
            "describtion": "See details on github (please check the link below)",
            "skills": "ueJS / Solidity / Web3js",
            "members": 2,
            "files": "none",
            "links": "https://github.com/Unichain-turkey/adhereum",
            "type": "Community",
            "img": "none"
        },
        {
            "title": "Miye",
            "dates": "February 2018 - May 2018",
            "describtion": "Website to show data that is collected from behance.com",
            "skills": "Javascript / Python / Web Crawling",
            "members": 1,
            "files": "https://github.com/mevlanaayas/miye-ui",
            "links": "https://github.com/mevlanaayas/miye-ui",
            "type": "Personal Work",
            "img": "none"
        },
        {
            "title": "Django Heroku Documents",
            "dates": "March 2018 - Still in Development",
            "describtion": "I try to explain requirements which ara required to install and" +
                " run your django application on heroku. Inside several repository there" +
                " are some settings these are specific to heroku.",
            "skills": "Django / Python / Heroku",
            "members": 1,
            "files": "https://github.com/mevlanaayas",
            "links": "https://github.com/mevlanaayas",
            "type": "Open Source - Documentation",
            "img": "none"
        },
        {
            "title": "Portfolio Website",
            "dates": "March 2017 - Still in Development",
            "describtion": "Portfolio Website to show job done by Mevlana.",
            "skills": "Javascript / SemanticUI / CSS / HTML",
            "members": 1,
            "files": "https://github.com/mevlanaayas/mevlanaayas.github.io",
            "links": "https://mevlanaayas.github.io",
            "type": "Personal Development - Portfolio Website",
            "img": "none"
        },
        {
            "title": "Bricker Puzzle Game",
            "dates": "September 2016 - October 2016",
            "describtion": "Implementation of Bricker game tha is playing on command line in our project. Project is typpe of OOP software and it was written with Java programming language ",
            "skills": "Java Programming, Object Oriented Programming",
            "members": 1,
            "files": "none",
            "links": "none",
            "type": "Term Project",
            "img": "none"
        },
        {
            "title": "The Green Hornet",
            "dates": "September 2016 - December 2016",
            "describtion": "Implementation of Sample database and MicrosoftSQL for the chosen company. The database was created and Some advanced SQL properties were used.",
            "skills": "Microsoft SQL, Java Programming",
            "members": 2,
            "files": "none",
            "links": "none",
            "type": "Term Project",
            "img": "none"
        },
        {
            "title": "Data Structures Term Projects",
            "dates": "November 2015 - October 2015",
            "describtion": "<b>Binary Multiplication:</b> Multiplication of binary numbers by using data structure of linked list." +
                " <b>4D Tree:</b> Storing lots of personals data by using data structure of Multi dimension trees." +
                " <b>Priority Queue:</b> Priority queue implementation by using data structure of binomial heap." +
                " Projects extend some sorting algorithm and they were written with C programming language.",
            "skills": "C Programming, Data Structures",
            "members": 1,
            "files": "none",
            "links": "none",
            "type": "Term Project",
            "img": "none"

        },
        {
            "title": "Linux Bash Replication",
            "dates": "October 2015 - November 2015",
            "describtion": "Implementation of Linux bash that do exactly same operations like original bash. Project was written by using C programming language and icnlude some advanced data structure",
            "skills": "C Programming, Shell Programming, Programming on UNIX",
            "members": 1,
            "files": "none",
            "links": "none",
            "type": "Term Project",
            "img": "none"
        },
        {
            "title": "CPU Design",
            "dates": "September 2016 - December 2016",
            "describtion": "It has also Verilog part. CPU and Storage design with Logism. " +
                "CPU that do eleven operations and produce signals. Storage stores data. Interrupts added",
            "skills": "Logism, Logic Design",
            "members": 3,
            "files": "none",
            "links": "none",
            "type": "Term Project",
            "img": "none"
        },
        {
            "title": "Hare And Hound Strategy Game",
            "dates": "February 2016 - May 2016",
            "describtion": "Implementation of Hare and Hounds game tha is playing on command line in our project. Project was developed with Assembly programming language",
            "skills": "Assembly Programming",
            "members": 1,
            "files": "none",
            "links": "none",
            "type": "Term Project",
            "img": "none"
        }
    ]
};

var books = {
    "mybooks": [
        {
            "title": "Programming C# 5.0",
            "author": "Ian Griffiths",
            "date": "August 2019",
            "describtion": "C# Book",
            "skills": "C# / Programming",
            "link": "link to book",
            "examples": "not yet"
        },
        {
            "title": "Go in Action",
            "author": "William Kennedy with Brian Ketelsen and Erik St. Martin",
            "date": "October 2019",
            "describtion": "Golang book",
            "skills": "Golang / Programming",
            "link": "https://www.manning.com/books/go-in-action",
            "examples": "not yet"
        },
        {
            "title": "Introducing Go",
            "author": "Caleb Doxsey",
            "date": "Nov 2018",
            "describtion": "Golang book",
            "skills": "Golang / Programming",
            "link": "https://www.oreilly.com/library/view/introducing-go/9781491941997/",
            "examples": "https://github.com/mevlanaayas/gogo"
        },
        {
            "title": "Docker Up and Running",
            "author": "Karl Matthias & Sean P. Kane",
            "date": "Nov 2018",
            "describtion": "Docker book",
            "skills": "Docker / Unix & Linux",
            "link": "link to book",
            "examples": "https://github.com/mevlanaayas/dupl"
        },
        {
            "title": "Kubernetes Up and Running",
            "author": "Kelsey Hightower, Brendan Burns, Joe Beda",
            "date": "Jan 2019",
            "describtion": "Kubernetes book",
            "skills": "Kubernetes, Docker / Unix, Linux",
            "link": "link to book",
            "examples": "none"
        }
    ]
};


// $("#creationsection").append(HTMLunderCreation);

function displayBio(argument) {
    var formattedforeign = HTMLbioForeign.replace("%data%", bio.language);
    var formattedHome = HTMLbioHome.replace("%data%", bio.hometown);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#nameid").append(formattedName);
    $("#role").append(formattedRole);
    $("#welcomeMssg").append(formattedWelcome);

    /*
    $("#welcomeMssg").append(HTMLBiosDropdown);
    $("#biotop").append(HTMLBios);
    $("#biotop").append(HTMLbioContent);

    $("#biocontent").append(formattedHome);
    $("#biocontent").append(formattedforeign);
    */

    var formattedimg = HTMLbioPic.replace("%data%", bio.image);
    $("#pp").append(formattedimg);

    $("#skillsgeneric").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skillsdiv").append(formattedSkill);
        for (var i = 0; i < bio.skills[skill]; i++) {
            $("#skillsdiv").append('<i class="nes-icon is-small star"></i>');
        }
    }
}

function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

var workLocations = [];
workLocations = locationizer(work);


work.display = function () {
    for (job in work.jobs) {
        //create a new div for work experience
        $("#workExperience").append(HTMLworkStart);
        //cpncat employer and title
        var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formatedEmployer + " - " + formattedTitle;

        if (counter > 0) {
            $(".work-entry:last").append("<hr>");
        }

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].describtion);

        //$(".work-entry:last").append(formattedDescription); // burada olursa üstte gözükerek
        //görüntüyü değiştiriyor.

        var formattedLocation = HTMLworkLocation.replace("%data%", workLocations[job]);

        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);

        var formatteddetail = HTMLworkDetail.replace("%data%", work.jobs[job].detail);
        var formattedworkskill = HTMLworkSkill.replace("%data%", work.jobs[job].skills);
        var formattedpoints = HTMLworkPoints.replace("%data%", work.jobs[job].points);
        var formattedjobdone = HTMLworkJob.replace("%data%", work.jobs[job].jobdone);
        var formattedworkWeb = HTMLworkWeb.replace("%data%", work.jobs[job].website);
        var formattedworkSource = HTMLworkSource.replace("%data%", work.jobs[job].source);

        $(".work-entry:last").append(formatteddetail);
        $(".work-entry:last").append(formattedworkskill);
        $(".work-entry:last").append(formattedpoints);
        $(".work-entry:last").append(formattedjobdone);
        $(".work-entry:last").append(formattedworkWeb);
        $(".work-entry:last").append(formattedworkSource);

        counter++;
    }
};

projects.display = function () {
    for (project in projects.myprojects) {
        //create a new div for projects
        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.myprojects[project].title);
        var formattedprojectDate = HTMLprojectDates.replace("%data%", projects.myprojects[project].dates);
        var formattedprojectDesc = HTMLprojectDescription.replace("%data%", projects.myprojects[project].describtion);
        var formattedprojectSkills = HTMLprojectSkills.replace("%data%", projects.myprojects[project].skills);

        if (projects.myprojects[project].members > 1) {
            var formattedprojectMember = HTMLprojectMembers.replace("%data%", projects.myprojects[project].members);
        } else {
            var formattedprojectMember = HTMLprojectMember.replace("%data%", projects.myprojects[project].members);
        }
        if (projects.myprojects[project].files === "none") {
            HTMLprojectFiles = '<p>Files: %data%</p>';
        }
        if (projects.myprojects[project].links === "none") {
            HTMLprojectLinks = '<p>Links: %data%</p>';
        }
        var formattedprojectFiles = HTMLprojectFiles.replace("%data%", projects.myprojects[project].files);
        var formattedprojectLinks = HTMLprojectLinks.replace("%data%", projects.myprojects[project].links);
        var formattedprojectType = HTMLprojectType.replace("%data%", projects.myprojects[project].type);
        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.myprojects[project].img);

        if (counter > 0) {
            $(".project-entry:last").append("<hr>");
        }

        $(".project-entry:last").append(formattedprojectTitle);

        $(".project-entry:last").append(formattedprojectDate);

        $(".project-entry:last").append(formattedprojectDesc);

        $(".project-entry:last").append(formattedprojectSkills);

        $(".project-entry:last").append(formattedprojectMember);

        $(".project-entry:last").append(formattedprojectFiles);

        $(".project-entry:last").append(formattedprojectLinks);

        $(".project-entry:last").append(formattedprojectType);

        $(".project-entry:last").append(formattedprojectImage);

        counter++;
    }
};
counter = 0;

books.display = function () {
    for (book in books.mybooks) {
        //create a new div for projects
        $("#books").append(HTMLbookStart);

        var formattedbookTitle = HTMLbookTitleAuthor.replace("%data%", books.mybooks[book].title);
        var formattedbookAuthorTitle = formattedbookTitle.replace("%author%", books.mybooks[book].author);
        var formattedbookDate = HTMLbookDate.replace("%data%", books.mybooks[book].dates);
        var formattedbookDesc = HTMLbookDescription.replace("%data%", books.mybooks[book].describtion);
        var formattedbookSkills = HTMLbookSkills.replace("%data%", books.mybooks[book].skills);


        if (books.mybooks[book].links === "none") {
            HTMLbookLinks = '<p>Links: %data%</p>';
        }
        var formattedbookLink = HTMLbookLink.replace("%data%", books.mybooks[book].link);
        var formattedbookExamples = HTMLbookExamples.replace("%data%", books.mybooks[book].examples);

        if (counter > 0) {
            $(".book-entry:last").append("<hr>");
        }

        $(".book-entry:last").append(formattedbookAuthorTitle);

        $(".book-entry:last").append(formattedbookDate);

        $(".book-entry:last").append(formattedbookDesc);

        $(".book-entry:last").append(formattedbookSkills);

        $(".book-entry:last").append(formattedbookLink);

        $(".book-entry:last").append(formattedbookExamples);

        counter++;
    }
};
counter = 0;

educations.display = function () {

    $("#education").append(HTMLDropdown);
    $("#accordiontop").append(HTMLSchools);
    $("#accordiontop").append(HTMLschoolContent);

    for (school in educations.schools) {
        //create a new div for projects
        $("#schoolcontent").append(HTMLschoolStart);
        var formattededucationTitle = HTMLschoolName.replace("%data%", educations.schools[school].name);
        var formattededucationMajor = HTMLschoolMajor.replace("%data%", educations.schools[school].major);
        var formattededucationDegree = HTMLschoolDegree.replace("%data%", educations.schools[school].degree);
        var formattededucationLocation = HTMLschoolLocation.replace("%data%", educations.schools[school].city);
        var formattededucationstartDate = HTMLschoolstartDate.replace("%data%", educations.schools[school].entryyear);
        var formattededucationfinishDate = HTMLschoolfinishDate.replace("%data%", educations.schools[school].finished);
        var formattedCurriculum = HTMLschoolCurriculum.replace("%data%", educations.schools[school].curriculum);

        if (counter > 0) {
            $(".education-entry:last").append("<hr>");
        } else {

        }
        $(".education-entry:last").append(formattededucationTitle + " - " + formattededucationDegree);

        $(".education-entry:last").append(formattededucationstartDate + " - " + formattededucationfinishDate);

        $(".education-entry:last").append(formattededucationMajor);

        $(".education-entry:last").append(formattededucationLocation);

        $(".education-entry:last").append(formattedCurriculum);

        counter++;
    }
    counter = 0;

    $(".education-entry:last").append("<br><br><br>");

    $("#education").append(HTMLDropdown);
    $("#accordiontop").append(HTMLOnlines);
    $("#accordiontop").append(HTMLonlineContent);

    for (onlinecourse in educations.onlinecourses) {

        if (educations.onlinecourses[onlinecourse].title != 'none') {
            //create a new div for projects
            $("#onlinecontent").append(HTMLonlineStart);


            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", educations.onlinecourses[onlinecourse].title);
            var formattedonlineAuthor = HTMLonlineAuthor.replace("%data%", educations.onlinecourses[onlinecourse].author);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", educations.onlinecourses[onlinecourse].date);
            var formattedonlineSkills = HTMLonlineSkills.replace("%data%", educations.onlinecourses[onlinecourse].skills);
            var formattedonlineUrl = HTMLonlineURL.replace("%data%", educations.onlinecourses[onlinecourse].url);
            formattedonlineUrl = formattedonlineUrl.replace("%url%", educations.onlinecourses[onlinecourse].url);
            var formattedonlineLearning = HTMLonlineLearning.replace("%data%", educations.onlinecourses[onlinecourse].learnings);

            if (counter > 0) {
                $(".education-entry:last").append("<hr>");
            }

            $(".education-entry:last").append(formattedonlineTitle + " - " + formattedonlineAuthor);

            $(".education-entry:last").append(formattedonlineDates);

            $(".education-entry:last").append(formattedonlineUrl);

            $(".education-entry:last").append(formattedonlineSkills);

            $(".education-entry:last").append(formattedonlineLearning);

            counter++;
        }

    }
    if (counter != 0) {
        $(".education-entry:last").append("<br><br><br>");
    }

    counter = 0;

    $("#education").append(HTMLDropdown);
    $("#accordiontop").append(HTMLSeminars);
    $("#accordiontop").append(HTMLseminarContent);

    for (seminar in educations.seminars) {
        //create a new div for projects
        if (educations.seminars[seminar].title != 'none') {
            $("#seminarcontent").append(HTMLseminarStart);

            var formattedseminarTitle = HTMLseminarTitle.replace("%data%", educations.seminars[seminar].title);
            var formattedseminarAuthor = HTMLseminarGuest.replace("%data%", educations.seminars[seminar].guest);
            var formattedseminarDates = HTMLseminarDates.replace("%data%", educations.seminars[seminar].dates);
            var formattedseminarGTitle = HTMLseminarGTitle.replace("%data%", educations.seminars[seminar].guesttitle);
            var formattedseminareLearning = HTMLseminarLearning.replace("%data%", educations.seminars[seminar].learnings);
            var formattedseminarPlaces = HTMLseminarPlaces.replace("%data%", educations.seminars[seminar].place);

            if (counter > 0) {
                $(".education-entry:last").append("<hr>");
            }


            $(".education-entry:last").append(formattedseminarAuthor);

            $(".education-entry:last").append(formattedseminarGTitle);

            $(".education-entry:last").append(formattedseminarTitle);

            $(".education-entry:last").append(formattedseminarDates);

            $(".education-entry:last").append(formattedseminarPlaces);

            $(".education-entry:last").append(formattedseminareLearning);

            counter++;
        }

    }
    if (counter != 0) {
        $(".education-entry:last").append("<br><br><br>");
    }

    counter = 0;

    $("#education").append(HTMLDropdown);
    $("#accordiontop").append(HTMLActivity);
    $("#accordiontop").append(HTMLactivityContent);

    for (activity in educations.activities) {
        //create a new div for projects
        if (educations.activities[activity].title != 'none') {
            $("#activitycontent").append(HTMLactivityStart);

            var formattedactivityTitle = HTMLactivityTitle.replace("%data%", educations.activities[activity].title);
            var formattedactivityDates = HTMLactivityDates.replace("%data%", educations.activities[activity].dates);
            var formattedactivityHours = HTMLactivityHours.replace("%data%", educations.activities[activity].hours);
            var formattedactivityLearning = HTMLactivityLearnings.replace("%data%", educations.activities[activity].learnings);
            var formattedactivityCertificate = HTMLactivityCertificate.replace("%data%", educations.activities[activity].image);
            var formattedactivityLinks = HTMLactivityLinks.replace("%data%", educations.activities[activity].link);
            var formattedactivityPlace = HTMLactivityPlace.replace("%data%", educations.activities[activity].place);

            if (counter > 0) {
                $(".education-entry:last").append("<hr>");
            }

            $(".education-entry:last").append(formattedactivityTitle);

            $(".education-entry:last").append(formattedactivityDates + " - " + formattedactivityHours);

            $(".education-entry:last").append(HTMLactivityskillsStart);

            for (skill in educations.activities[activity].skills) {
                var formattedactivitySkills = HTMLactivitySkills.replace("%data%", educations.activities[activity].skills[skill]);
                $(".education-entry:last").append(formattedactivitySkills);
            }

            $(".education-entry:last").append(formattedactivityLearning);

            $(".education-entry:last").append(formattedactivityCertificate);

            $(".education-entry:last").append(formattedactivityLinks);

            $(".education-entry:last").append(formattedactivityPlace);

            counter++;
        }

    }
    counter = 0;

}


communication.display = function () {

    var formattedemail = HTMLemail.replace("%color%", contactlinecolor);
    var formattedtwitter = HTMLtwitter.replace("%color%", contactlinecolor);
    var formattedgithub = HTMLgithub.replace("%color%", contactlinecolor);
    var formattedlocation = HTMLlocation.replace("%color%", contactlinecolor);

    var formattedemail = formattedemail.replace("%data%", communication.email);
    var formattedtwitter = formattedtwitter.replace("%data%", communication.twitter);
    var formattedgithub = formattedgithub.replace("%data%", communication.github);
    var formattedlocation = formattedlocation.replace("%data%", communication.location);

    $("#connect").append(HTMLconnectStart);
    $(".connect-entry:last").append(formattedemail);
    $(".connect-entry:last").append(formattedtwitter);
    $(".connect-entry:last").append(formattedgithub);
    $(".connect-entry:last").append(formattedlocation);
}

counter = 0;
projects.display();
counter = 0;
books.display();
counter = 0;
displayBio();
counter = 0;
communication.display();
counter = 0;
work.display();
counter = 0;
educations.display();
