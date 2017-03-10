
/*
This is empty on purpose! Your code to build the resume will go here.
 */
var contactlinecolor = "purple";
var counter = 0;

var communication = {
	"email" : "mevlanaayas@gmail.com",
	"github" : "github.com/mevlanaayas",
	"twitter" : "twitter.com/alimetifarika",
	"location" : "Kadikoy/Istanbul",
	"school": "Marmara University"
}

 var bio= {
	"name": "Mevlana Ayas",
	"role": "Computer Engineer",
	"hometown": "Kosk/Aydin",
	"language": "English",
	"image": "images/img.jpg",
	"welcomeMessage": "Welcome, here I am! All jobs are listed below thats were done by Mevlana. If you want help, please dont hesitate to ask me!",
	"skills": {
		"C": 4,
		"Java": 3,
		"JavaScript": 4,
		"HTML/CSS": 4,
		"Python": 2,
		"Reliability": 5,
		"MicrosoftSQL": 3
	}
};


var educations = {
	"schools": [{
			"name": "Marmara University",
			"city": "Istanbul",
			"degree": "Bachelor",
			"major": "CSE-Computer Science Engineering",
			"entryyear": 2013,
			"website": "marmarauniversity.com",
			"location": "Kadikoy/Istanbul",
			"curriculum": "http://dosya.marmara.edu.tr/eng/cse/2013/belgeler/mufredat/CSE_Curriculum_2013_and_later.pdf"

		}, {
			"name": "Kasustu CPL",
			"city": "Trabzon",
			"degree": "Highschool",
			"major": "Math Science",
			"entryyear": 2009,
			"website": "kasustucpl.com",
			"location": "Yomra/Trabzon",
			"curriculum": "None"
		}

	],
	"onlinecourses": [{
		"title": "none 1",
		"author": "Udacity",
		"dates": "2017",
		"skills": "none",
		"url": "udacity.com",
		"learnings": "none"
	}],
	"seminars": [{
		"title": "none 1",
		"place": "none",
		"guest": "none",
		"dates": "none",
		"guesttitle": "none",
		"learnings": "none"

	}, {
		"title": "none 2",
		"place": "none",
		"guest": "none",
		"dates": "none",
		"guesttitle": "none",
		"learnings": "none"


	}],
	"activities": [{
		"title": "none 1",
		"place": "none",
		"dates": "none",
		"days": "none",
		"skills": "none",
		"learnings": "none",
		"certificate": "true",
		"files": "none",
		"links": "none"

	}, {
		"title": "none 2",
		"place": "none",
		"dates": "none",
		"days": "none",
		"skills": "none",
		"learnings": "none",
		"certificate": "true",
		"files": "none",
		"links": "none"
	}]

};

var work = {
	"jobs" : [
	{
		"employer":"VB-AP",
		"location":"Bursa",
		"title":"Intern",
		"dates":"06/2016-08/2016",
		"describtion":"I had an internship at VB-AP that works on ERP and SAP.",
		"detail" : "Here, there is no detail about my Internship adventure.",
		"skills" : "HTML/CSS-JavaScript",
		"points" : 4.7,
		"jobdone" : "Have Worked on Official Web Site",
		"website" : "http://www.v-bap.com/vbap2/"
	}
	]
} 

var projects = {
	"myprojects" : [
	{
		"title":"Binary Multiplication",
		"dates":"09/2015-10/2015",
		"describtion":"Multiplication of binary numbers by using data structure of linked list. Project extends some sorting algorithm and it was written with C programming language.",
		"skills" : "C Programming, Data Structures",
		"members" : 1,
		"files" : "none",
		"links" : "none",
		"type" : "Term Project",
		"img" : "none"

	},
	{
		"title":"4D Tree",
		"dates":"10/2015-11/2015",
		"describtion":"Storing lots of personals data by using data structure of Multi dimension trees. Project extends some sorting algorithm and it was written with C programming language.",
		"skills" : "C Programming, Data Structures",
		"members" : 1,
		"files" : "none",
		"links" : "none",
		"type" : "Term Project",
		"img" : "none"
	},
	{
		"title":"Priority Queue",
		"dates":"11/2015-12/2015",
		"describtion":"Priority queue implementation by using data structure of binomial heap. Project extends some sorting algorithm and it was written with C programming language.",
		"skills" : "C Programming, Data Structures",
		"members" : 1,
		"files" : "none",
		"links" : "none",
		"type" : "Term Project",
		"img" : "none"
	},
	{
		"title":"Hare And Hound Strategy Game",
		"dates":"02/2016-05/2016",
		"describtion":"Implementation of Hare and Hounds game tha is playing on command line in our project. Project was developed with Assembly programming language",
		"skills" : "Assembly Programming",
		"members" : 1,
		"files" : "none",
		"links" : "none",
		"type" : "Term Project",
		"img" : "none"
	},
	{
		"title":"Bricker Puzzle Game",
		"dates":"09/2016-10/2016",
		"describtion":"Implementation of Bricker game tha is playing on command line in our project. Project is typpe of OOP software and it was written with Java programming language ",
		"skills" : "Java Programming, Object Oriented Programming",
		"members" : 1,
		"files" : "none",
		"links" : "none",
		"type" : "Term Project",
		"img" : "none"
	},
	{
		"title":"Linux Bash",
		"dates":"10/2015-11/2015",
		"describtion":"Implementation of Linux bash that do exactly same operations like original bash. Project was written by using C programming language and icnlude some advanced data structure",
		"skills" : "C Programming, Shell Programming, Programming on UNIX",
		"members" : 1,
		"files" : "none",
		"links" : "none",
		"type" : "Term Project",
		"img" : "none"
	},
	{
		"title":"Threads",
		"dates":"11/2015-12/2015",
		"describtion":"Implementation of threads that  are already working in our computers. Project was written on Linux operating system like previous bash project.",
		"skills" : "C Programming, Operating Systems",
		"members" : 1,
		"files" : "none",
		"links" : "none",
		"type" : "Term Project",
		"img" : "none"
	},
	{
		"title":"SQL",
		"dates":"09/2016-12/2016",
		"describtion":"Implementation of Sample database and MicrosoftSQL for the chosen company. The database was created and Some advanced SQL properties were used.",
		"skills" : "Microsoft SQL, Java Programming",
		"members" : 2,
		"files" : "none",
		"links" : "none",
		"type" : "Term Project",
		"img" : "none"
	},
	{
		"title":"CPU",
		"dates":"09/2016-12/2016",
		"describtion":"CPU and Storage design with Logism. CPU that do eleven operations and produce signals. Storage sotres data.",
		"skills" : "Logism, Logic Design",
		"members" : 3,
		"files" : "none",
		"links" : "none",
		"type" : "Term Project",
		"img" : "none"
	}

	]
}


$("#creationsection").append(HTMLunderCreation);

function displayBio(argument) {
	// body...
var formattedforeign = HTMLbioForeign.replace("%data%", bio.language);
var formattedHome = HTMLbioHome.replace("%data%", bio.hometown);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


 $("#nameid").append(formattedName);
 $("#role").append(formattedRole);
 $("#welcomeMssg").append(formattedWelcome);

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
$("#hometown").append(formattedHome);
$("#foreign").append(formattedforeign);


}



function locationizer(work_obj) {
	// body...
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
	// body...
		for (job in work.jobs) {
		//create a new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//cpncat employer and title
		var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formatedEmployer + formattedTitle;


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

		$(".work-entry:last").append(formatteddetail);
		$(".work-entry:last").append(formattedworkskill);
		$(".work-entry:last").append(formattedpoints);
		$(".work-entry:last").append(formattedjobdone);
		$(".work-entry:last").append(formattedworkWeb);

		counter++;
	}   
}

projects.display = function() {
	// body...

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
		var formattedprojectFiles = HTMLprojectFiles.replace("%data%", projects.myprojects[project].files);
		var formattedprojectLinks = HTMLprojectLinks.replace("%data%", projects.myprojects[project].links);
		var formattedprojectType = HTMLprojectType.replace("%data%", projects.myprojects[project].type);
		var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.myprojects[project].img);


		if(counter > 1){
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
	// body...


	
	for (school in educations.schools){
		//create a new div for projects
		$("#education").append(HTMLSchoolsDropdown);

		if(counter ==0){
			$("#acordiontop").append(HTMLSchoolsactive);
			$("#acordiontop").append(HTMLschoolStartactive);
		}else{
			$("#acordiontop").append(HTMLSchools);
			$("#acordiontop").append(HTMLschoolStart);
		}
	    


		

		var formattededucationTitle = HTMLschoolName.replace("%data%", educations.schools[school].name);
		var formattededucationMajor = HTMLschoolMajor.replace("%data%", educations.schools[school].major);
		var formattededucationDegree = HTMLschoolDegree.replace("%data%", educations.schools[school].degree);
		var formattededucationLocation = HTMLschoolLocation.replace("%data%", educations.schools[school].city);
		var formattededucationDate = HTMLschoolDates.replace("%data%", educations.schools[school].entryyear);
		var formattedCurriculum = 	HTMLschoolCurriculum.replace("%data%", educations.schools[school].curriculum);

		if(counter > 0){
			$(".education-entry:last").append("<hr>");
		}else{
			
		}
		

		$(".education-entry:last").append(formattededucationTitle + " " + formattededucationDegree);
 		
		$(".education-entry:last").append(formattededucationDate);

		$(".education-entry:last").append(formattededucationMajor);

		$(".education-entry:last").append(formattededucationLocation);

		$(".education-entry:last").append(formattedCurriculum);

		counter++;
	}
	counter = 0;
	/*
	$(".education-entry:last").append("<br><br><br>");

	for (onlinecourse in educations.onlinecourses){
		//create a new div for projects
		$("#education").append(HTMLonlineStart);
		

		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", educations.onlinecourses[onlinecourse].title);
		var formattedonlineAuthor = HTMLonlineAuthor.replace("%data%", educations.onlinecourses[onlinecourse].author);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", educations.onlinecourses[onlinecourse].date);
		var formattedonlineSkills = HTMLonlineSkills.replace("%data%", educations.onlinecourses[onlinecourse].skills);
		var formattedonlineUrl = HTMLonlineURL.replace("%data%", educations.onlinecourses[onlinecourse].url);
		var formattedonlineLearning = 	HTMLonlineLearning.replace("%data%", educations.onlinecourses[onlinecourse].learnings);

		if(counter > 0){
			$(".education-entry:last").append("<hr>");
		}else{
			$(".education-entry:last").append(HTMLonlineClasses);
		}
		

		$(".education-entry:last").append(formattedonlineTitle + " " + formattedonlineAuthor);
 		
		$(".education-entry:last").append(formattedonlineDates);

		$(".education-entry:last").append(formattedonlineSkills);

		$(".education-entry:last").append(formattedonlineUrl);

		$(".education-entry:last").append(formattedonlineLearning);

		counter++;
	}
	counter = 0;

	$(".education-entry:last").append("<br><br><br>");

	for (seminar in educations.seminars){
		//create a new div for projects
		$("#education").append(HTMLseminarStart);
		
		var formattedseminarTitle = HTMLseminarTitle.replace("%data%", educations.seminars[seminar].title);
		var formattedseminarAuthor = HTMLseminarGuest.replace("%data%", educations.seminars[seminar].guest);
		var formattedseminarDates = HTMLseminarDates.replace("%data%", educations.seminars[seminar].dates);
		var formattedseminarGTitle = HTMLseminarGTitle.replace("%data%", educations.seminars[seminar].guesttitle);
		var formattedseminareLearning = HTMLseminarLearning.replace("%data%", educations.seminars[seminar].learnings);
		var formattedseminarPlaces = HTMLseminarPlaces.replace("%data%", educations.seminars[seminar].place);

		if(counter > 0){
			$(".education-entry:last").append("<hr>");
		}else{
			$(".education-entry:last").append(HTMLSeminar);
		}


		$(".education-entry:last").append(formattedseminarAuthor + " " + formattedseminarGTitle);
 		
		$(".education-entry:last").append(formattedseminarTitle);

		$(".education-entry:last").append(formattedseminarDates);

		$(".education-entry:last").append(formattedseminarPlaces);

		$(".education-entry:last").append(formattedseminareLearning);

		counter++;
	}
	counter = 0;

	$(".education-entry:last").append("<br><br><br>");

	for (activity in educations.activities){
		//create a new div for projects
		$("#education").append(HTMLactivityStart);
		
		var formattedactivityTitle = HTMLactivityTitle.replace("%data%", educations.activities[activity].title);
		var formattedactivityDates = HTMLactivityDates.replace("%data%", educations.activities[activity].dates);
		var formattedactivityDays = HTMLactivityDays.replace("%data%", educations.activities[activity].days);
		var formattedactivitySkills = HTMLactivitySkills.replace("%data%", educations.activities[activity].skills);
		var formattedactivityLearning = HTMLactivityLearnings.replace("%data%", educations.activities[activity].learnings);
		var formattedactivityCertificate = HTMLactivityCertificate.replace("%data%", educations.activities[activity].certificate);
		var formattedactivityFiles = HTMLactivityFiles.replace("%data%", educations.activities[activity].files);
		var formattedactivityLinks = HTMLactivityLinks.replace("%data%", educations.activities[activity].links);
		var formattedactivityPlaces = HTMLactivityPlaces.replace("%data%", educations.activities[activity].place);

		if(counter > 0){
			$(".education-entry:last").append("<hr>");
		}else{
			$(".education-entry:last").append(HTMLActivity);
		}


		$(".education-entry:last").append(formattedactivityTitle);
 		
		$(".education-entry:last").append(formattedactivityDates);

		$(".education-entry:last").append(formattedactivityDays);

		$(".education-entry:last").append(formattedactivitySkills);

		$(".education-entry:last").append(formattedactivityLearning);

		$(".education-entry:last").append(formattedactivityCertificate);

		$(".education-entry:last").append(formattedactivityFiles);

		$(".education-entry:last").append(formattedactivityLinks);

		$(".education-entry:last").append(formattedactivityPlaces);




		counter++;
	}
	counter = 0;
	*/	
}



communication.display = function () {
	// body...

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


//$("#mapDiv").append(googleMap);