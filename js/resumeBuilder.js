
var contactlinecolor = "purple";
var counter = 0;

var life_story = {
	"born" : "",
	"after-born" : "",
	"beginning" : "",
	"growing" : "",
	"still-growing" : "",
	"almost" : "",
}


var communication = {
	"email" : "mevlanaayas@gmail.com",
	"github" : "github.com/mevlanaayas",
	"twitter" : "twitter.com/alimetifarika",
	"location" : "Kadıköy-İstanbul",
	"school": "Marmara University"
}


 var bio= {
	"name": "Mevlana Ayas",
	"role": "Computer Science Engineer",
	"hometown": "Kosk/Aydin",
	"language": "English",
	"image": "https://cdn.pbrd.co/images/2B8RmIGl2.jpg",
	"driverlicense" : "B2 soon...",
	"welcomeMessage": "Welcome, here I am! All jobs are listed below thats were done by Mevlana. If you want help, please dont hesitate to ask me!",
	"skills": {
		"C": 3,
		"Java": 4,
		"JavaScript": 5,
		"VueJS": 5,
		"HTML/CSS": 5,
		"Python": 6,
		"Reliability": 10,
		"Django": 6,
		"Spring": 4,
        "Solidity": 4
	}
};


var educations = {
	"schools": [{
			"name": "Marmara University",
			"city": "Istanbul",
			"degree": "Bachelor",
			"major": "CSE-Computer Science Engineering",
			"entryyear": 2013,
			"finished" : 2018,
			"website": "marmarauniversity.com",
			"location": "Kadikoy/Istanbul",
			"curriculum": "http://dosya.marmara.edu.tr/eng/cse/2013/belgeler/mufredat/CSE_Curriculum_2013_and_later.pdf"

		}, {
			"name": "Kasustu MPHS",
			"city": "Trabzon",
			"degree": "Highschool",
			"major": "Math Science",
			"entryyear": 2009,
			"finished" : 2013,
			"website": "kasustucpl.com",
			"location": "Yomra/Trabzon",
			"curriculum": "None"
		}

	],
	"onlinecourses": [{
		"title": "SEO Training Course by Moz",
		"author": "Moz moz.com",
		"dates": "2017",
		"skills": "none",
		"url": "https://www.udemy.com/whiteboard-seo/",
		"learnings": "none",
		"certificate": "https://www.udemy.com/certificate/UC-R0NXNKNF/"
	},{
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
	},{
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
	"activities": [{
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
	},{
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
	"jobs" : [
		{
			"employer":"VB-AP",
			"location":"Bursa/Turkey",
			"title":"Intern",
			"dates":"June 2016 - September 2016",
			"describtion":"I had an internship at VB-AP that works on ERP and SAP.",
			"detail" : "Here, there is no detail about my Internship adventure.",
			"skills" : "HTML/CSS-JavaScript",
			"points" : "4.7 over 5 according to Internship report",
			"jobdone" : "Have Worked on Official Web Site",
			"website" : "http://www.v-bap.com/vbap2/",
			"source" : "Not yet"
		},
		{
			"employer":"SEKOM Yazılım",
			"location":"Istanbul/Turkey",
			"title":"Intern",
			"dates":"June 2017 - July 2017",
			"describtion":"I had an internship at Sekom Yazılım.",
			"detail" : "I worked on application is called Out Of Office Manager that control and manage employee leave date. Come again after little time for more detail.",
			"skills" : "Django/Python/VueJS",
			"points" : "Not Graded, yet",
			"jobdone" : "Personal management Fullstack web application",
			"website" : "https://www.sekom.com.tr/tr/",
			"source" : "Not yet"
		},
		{
			"employer":"SEKOM Yazılım",
			"location":"Istanbul/Turkey",
			"title":"Part Time Software Developer",
			"dates":"October 2017 - June 2018",
			"describtion":"",
			"detail" : "I am working as a backend/middleware developer with tools of" +
			" java and spring, python and django.",
			"skills" : "Django/Python/Java/Spring",
			"points" : "Not Graded, yet",
			"jobdone" : "",
			"website" : "https://www.sekom.com.tr/tr/",
			"source" : "Not yet"
		},
		{
			"employer":"SEKOM Yazılım",
			"location":"Istanbul/Turkey",
			"title":"Software Engineer",
			"dates":"June 2018 - Present",
			"describtion":"",
			"detail" : "I am working as a backend/middleware developer with tools of" +
			" java and spring, python and django.",
			"skills" : "Django/Python/Java/Spring",
			"points" : "Not Graded, yet",
			"jobdone" : "",
			"website" : "https://www.sekom.com.tr/tr/",
			"source" : "Not yet"
		}
	]
}

var projects = {
	"myprojects" : [
        {
            "title":"Ether Registration",
            "dates":"May 2018 - June 2018",
            "describtion":"See details on github (please check the link below)",
            "skills" : "VueJS / Solidity / Web3js",
            "members" : 2,
            "files" : "none",
            "links" : "https://github.com/Unichain-turkey/ether-registration",
            "type" : "Community",
            "img" : "none"
        },
        {
            "title":"Adhereum",
            "dates":"May 2018 - June 2018",
            "describtion":"See details on github (please check the link below)",
            "skills" : "ueJS / Solidity / Web3js",
            "members" : 2,
            "files" : "none",
            "links" : "https://github.com/Unichain-turkey/adhereum",
            "type" : "Community",
            "img" : "none"
        },
        {
            "title":"Miye",
            "dates":"February 2018 - May 2018",
            "describtion":"Website to show data that is collected from behance.com",
            "skills" : "Javascript / Python / Web Crawling",
            "members" : 1,
            "files" : "https://github.com/mevlanaayas/miye-ui",
            "links" : "https://github.com/mevlanaayas/miye-ui",
            "type" : "Personal Work",
            "img" : "none"
        },
		{
			"title":"Django Teams",
			"dates":"July 2017 - Still in Development",
			"describtion":"Django-teams is simple implementation of user-role-team-permission network.",
			"skills" : "Django / Python / Pip",
			"members" : 1,
			"files" : "https://github.com/mevlanaayas/django-teams",
			"links" : "https://github.com/mevlanaayas/django-teams",
			"type" : "Open Source - Python Library",
			"img" : "none"
		},
		{
			"title":"Django Heroku Documents",
			"dates":"March 2018 - Still in Development",
			"describtion":"I try to explain requirements which ara required to install and" +
			" run your django application on heroku. Inside several repository there" +
			" are some settings these are specific to heroku.",
			"skills" : "Django / Python / Heroku",
			"members" : 1,
			"files" : "https://github.com/mevlanaayas",
			"links" : "https://github.com/mevlanaayas",
			"type" : "Open Source - Documentation",
			"img" : "none"
		},
		{
			"title":"Django Base",
			"dates":"July 2017 - Still in Development",
			"describtion":"Django creation tool for Models, Views, Rest particles and basic contents. Front-end support with VueJS",
			"skills" : "Django / Python / VueJS",
			"members" : 1,
			"files" : "none",
			"links" : "none",
			"type" : "Open Source - Django Project basic content creation Tools",
			"img" : "none"
		},
		{
			"title":"Portfolio Website",
			"dates":"March 2017 - Still in Development",
			"describtion":"Portfolio Website to show job done by Mevlana.",
			"skills" : "Javascript / SemanticUI / CSS / HTML",
			"members" : 1,
			"files" : "https://github.com/mevlanaayas/mevlanaayas.github.io",
			"links" : "https://mevlanaayas.github.io",
			"type" : "Personal Development - Portfolio Website",
			"img" : "none"
		},
		{
			"title":"Bricker Puzzle Game",
			"dates":"September 2016 - October 2016",
			"describtion":"Implementation of Bricker game tha is playing on command line in our project. Project is typpe of OOP software and it was written with Java programming language ",
			"skills" : "Java Programming, Object Oriented Programming",
			"members" : 1,
			"files" : "none",
			"links" : "none",
			"type" : "Term Project",
			"img" : "none"
		},
		{
			"title":"The Green Hornet",
			"dates":"September 2016 - December 2016",
			"describtion":"Implementation of Sample database and MicrosoftSQL for the chosen company. The database was created and Some advanced SQL properties were used.",
			"skills" : "Microsoft SQL, Java Programming",
			"members" : 2,
			"files" : "none",
			"links" : "none",
			"type" : "Term Project",
			"img" : "none"
		},
		{
			"title":"Data Structures Term Projects",
			"dates":"November 2015 - October 2015",
			"describtion": "<b>Binary Multiplication:</b> Multiplication of binary numbers by using data structure of linked list." +
			" <b>4D Tree:</b> Storing lots of personals data by using data structure of Multi dimension trees." +
			" <b>Priority Queue:</b> Priority queue implementation by using data structure of binomial heap." +
			" Projects extend some sorting algorithm and they were written with C programming language.",
			"skills" : "C Programming, Data Structures",
			"members" : 1,
			"files" : "none",
			"links" : "none",
			"type" : "Term Project",
			"img" : "none"

		},
		{
			"title":"Linux Bash Replication",
			"dates":"October 2015 - November 2015",
			"describtion":"Implementation of Linux bash that do exactly same operations like original bash. Project was written by using C programming language and icnlude some advanced data structure",
			"skills" : "C Programming, Shell Programming, Programming on UNIX",
			"members" : 1,
			"files" : "none",
			"links" : "none",
			"type" : "Term Project",
			"img" : "none"
		},
		{
			"title":"CPU Design",
			"dates":"September 2016 - December 2016",
			"describtion":"It has also Verilog part. CPU and Storage design with Logism. " +
			"CPU that do eleven operations and produce signals. Storage stores data. Interrupts added",
			"skills" : "Logism, Logic Design",
			"members" : 3,
			"files" : "none",
			"links" : "none",
			"type" : "Term Project",
			"img" : "none"
		},
        {
            "title":"Hare And Hound Strategy Game",
            "dates":"February 2016 - May 2016",
            "describtion":"Implementation of Hare and Hounds game tha is playing on command line in our project. Project was developed with Assembly programming language",
            "skills" : "Assembly Programming",
            "members" : 1,
            "files" : "none",
            "links" : "none",
            "type" : "Term Project",
            "img" : "none"
        }
	]
}


$("#creationsection").append(HTMLunderCreation);

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
	for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%",skill);
		$("#skillsdiv").append(formattedSkill);
		for(var i = 0; i<bio.skills[skill];i++){
			$("#skillsdiv").append('<i class="star yellow icon"></i>');
		}
	}
}

function locationizer(work_obj) {
	var locationArray = [];

	for(job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
var workLocations = [];
workLocations = locationizer(work);


work.display = function() {
	for (job in work.jobs) {
		//create a new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//cpncat employer and title
		var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formatedEmployer + " - " + formattedTitle;

		if(counter > 0){
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
}

projects.display = function() {
	for (project in projects.myprojects){
		//create a new div for projects
		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.myprojects[project].title);
		var formattedprojectDate = HTMLprojectDates.replace("%data%", projects.myprojects[project].dates);
		var formattedprojectDesc = HTMLprojectDescription.replace("%data%", projects.myprojects[project].describtion);
		var formattedprojectSkills = HTMLprojectSkills.replace("%data%", projects.myprojects[project].skills);

		if(projects.myprojects[project].members > 1){
			var formattedprojectMember = HTMLprojectMembers.replace("%data%", projects.myprojects[project].members);
		}else{
			var formattedprojectMember = HTMLprojectMember.replace("%data%", projects.myprojects[project].members);
		}
		if(projects.myprojects[project].files==="none"){
			HTMLprojectFiles = '<p>Files: %data%</p>';
		}
		if(projects.myprojects[project].links==="none"){
			HTMLprojectLinks = '<p>Links: %data%</p>';
		}
		var formattedprojectFiles = HTMLprojectFiles.replace("%data%", projects.myprojects[project].files);
		var formattedprojectLinks = HTMLprojectLinks.replace("%data%", projects.myprojects[project].links);
		var formattedprojectType = HTMLprojectType.replace("%data%", projects.myprojects[project].type);
		var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.myprojects[project].img);

		if(counter > 0){
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
}
counter = 0;
educations.display = function() {

	$("#education").append(HTMLDropdown);
	$("#accordiontop").append(HTMLSchools);
	$("#accordiontop").append(HTMLschoolContent);

	for (school in educations.schools){
		//create a new div for projects
		$("#schoolcontent").append(HTMLschoolStart);
	    var formattededucationTitle = HTMLschoolName.replace("%data%", educations.schools[school].name);
		var formattededucationMajor = HTMLschoolMajor.replace("%data%", educations.schools[school].major);
		var formattededucationDegree = HTMLschoolDegree.replace("%data%", educations.schools[school].degree);
		var formattededucationLocation = HTMLschoolLocation.replace("%data%", educations.schools[school].city);
		var formattededucationstartDate = HTMLschoolstartDate.replace("%data%", educations.schools[school].entryyear);
		var formattededucationfinishDate = HTMLschoolfinishDate.replace("%data%", educations.schools[school].finished);
		var formattedCurriculum = 	HTMLschoolCurriculum.replace("%data%", educations.schools[school].curriculum);

		if(counter > 0){
			$(".education-entry:last").append("<hr>");
		}else{

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

	for (onlinecourse in educations.onlinecourses){

		if(educations.onlinecourses[onlinecourse].title != 'none'){
			//create a new div for projects
			$("#onlinecontent").append(HTMLonlineStart);


			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", educations.onlinecourses[onlinecourse].title);
			var formattedonlineAuthor = HTMLonlineAuthor.replace("%data%", educations.onlinecourses[onlinecourse].author);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", educations.onlinecourses[onlinecourse].date);
			var formattedonlineSkills = HTMLonlineSkills.replace("%data%", educations.onlinecourses[onlinecourse].skills);
			var formattedonlineUrl = HTMLonlineURL.replace("%data%", educations.onlinecourses[onlinecourse].url);
			var formattedonlineLearning = 	HTMLonlineLearning.replace("%data%", educations.onlinecourses[onlinecourse].learnings);

			if(counter > 0){
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
	if(counter !=0){
		$(".education-entry:last").append("<br><br><br>");
	}

	counter = 0;

	$("#education").append(HTMLDropdown);
	$("#accordiontop").append(HTMLSeminars);
	$("#accordiontop").append(HTMLseminarContent);

	for (seminar in educations.seminars){
		//create a new div for projects
		if(educations.seminars[seminar].title != 'none'){
			$("#seminarcontent").append(HTMLseminarStart);

			var formattedseminarTitle = HTMLseminarTitle.replace("%data%", educations.seminars[seminar].title);
			var formattedseminarAuthor = HTMLseminarGuest.replace("%data%", educations.seminars[seminar].guest);
			var formattedseminarDates = HTMLseminarDates.replace("%data%", educations.seminars[seminar].dates);
			var formattedseminarGTitle = HTMLseminarGTitle.replace("%data%", educations.seminars[seminar].guesttitle);
			var formattedseminareLearning = HTMLseminarLearning.replace("%data%", educations.seminars[seminar].learnings);
			var formattedseminarPlaces = HTMLseminarPlaces.replace("%data%", educations.seminars[seminar].place);

			if(counter > 0){
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
	if(counter !=0){
			$(".education-entry:last").append("<br><br><br>");
	}

	counter = 0;

	$("#education").append(HTMLDropdown);
	$("#accordiontop").append(HTMLActivity);
	$("#accordiontop").append(HTMLactivityContent);

	for (activity in educations.activities){
		//create a new div for projects
		if(educations.activities[activity].title != 'none'){
			$("#activitycontent").append(HTMLactivityStart);

			var formattedactivityTitle = HTMLactivityTitle.replace("%data%", educations.activities[activity].title);
			var formattedactivityDates = HTMLactivityDates.replace("%data%", educations.activities[activity].dates);
			var formattedactivityHours = HTMLactivityHours.replace("%data%", educations.activities[activity].hours);
			var formattedactivityLearning = HTMLactivityLearnings.replace("%data%", educations.activities[activity].learnings);
			var formattedactivityCertificate = HTMLactivityCertificate.replace("%data%", educations.activities[activity].image);
			var formattedactivityLinks = HTMLactivityLinks.replace("%data%", educations.activities[activity].link);
			var formattedactivityPlace = HTMLactivityPlace.replace("%data%", educations.activities[activity].place);

			if(counter > 0){
				$(".education-entry:last").append("<hr>");
			}

			$(".education-entry:last").append(formattedactivityTitle);

			$(".education-entry:last").append(formattedactivityDates + " - " + formattedactivityHours);

			$(".education-entry:last").append(HTMLactivityskillsStart);

			for(skill in educations.activities[activity].skills){
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

	var formattedemail =  HTMLemail.replace("%color%", contactlinecolor);
	var formattedtwitter = HTMLtwitter.replace("%color%", contactlinecolor);
	var formattedgithub = HTMLgithub.replace("%color%", contactlinecolor);
	var formattedlocation = HTMLlocation.replace("%color%", contactlinecolor);

	var formattedemail =  formattedemail.replace("%data%", communication.email);
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
displayBio();
counter = 0;
communication.display();
counter = 0;
work.display();
counter = 0;
educations.display();
