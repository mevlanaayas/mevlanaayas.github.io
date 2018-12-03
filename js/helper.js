/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Created by Cameron Pittman, Mostly Changed by Mevlana Ayas
*/

var HTMLunderCreation = '<div class="ui progress yellow large"><div class="bar green" style="transition-duration: 300ms; width: 80%;"><div class="progress" style="color:white">80%</div></div><div class="label">On the Creation Phase <i class="smile icon"></i> Check Demo</div></div><br>'



var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLconnectStart = '<div class="connect-entry ui segments"></div>';
var HTMLemail = '<p class=" ui segment %color%"><i class="mail icon"></i> %data%</p>';
var HTMLtwitter = '<p class=" ui segment %color%"><i class="twitter icon"></i> %data%</p>';
var HTMLgithub = '<p class=" ui segment %color%"><i class="github alternate icon"></i> %data% </p>';
var HTMLlocation = '<p class=" ui segment %color%"><i class="marker icon"></i>%data%</p>';

var HTMLBiosDropdown = '<div id = "biotop" class= "ui basic accordion"></div>';
var HTMLBios = '<div class= "title" style = "font-size: 20px;"><i class="dropdown icon"></i> Information </div>';
var HTMLbioContent = '<div id = "biocontent" class= "content"></div>';
var HTMLbioStart = '<div class="bio-entry"></div>';
var HTMLbioHome = '<p>Hometown: %data%</p>';
var HTMLbioLiving = '<hp>Living In: %data%</p>';
var HTMLbioForeign = '<hp>Foreign Language(s): %data%</p>';
var HTMLbioPic = '<img src="%data%">';
var HTMLwelcomeMsg = '<span>%data%</span>';


var HTMLskillsStart = '<h4>Skills at a Glance: (Over Ten Stars)</h4>';
var HTMLskills = '<div style = "margin-top: 14px">%data%</div>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div class = "top-title">%data%';
var HTMLworkTitle = '   %data%</div>';
var HTMLworkDates = '<p class="date-text"><i>%data%</i></p>';
var HTMLworkLocation = '<p class="location-text">Location :<ul>%data%</ul></p>';
var HTMLworkDescription = '<p>Description:<ul>%data%</ul></p>';
var HTMLworkDetail = '<p>Some Detail:<ul>%data%</ul></p>';
var HTMLworkSkill = '<p>Worked On:<ul>%data%</ul></p>';
var HTMLworkPoints = '<p>Overall: %data%</p>';
var HTMLworkJob = '<p>JobDone:<ul>%data%</ul></p>';
var HTMLworkWeb = '<p>Official web site: <a href="%data%" target="_blank"><i>Link to open on new tab</i></a>';
var HTMLworkSource = '<p>Source Code: <a href="%data%" target="_blank"><i>Link to open on new tab</i></a>';

var HTMLprojectStart = '<div class="project-entry eight wide column"></div>';
var HTMLprojectTitle = '<div class = "top-title">%data%</div>';
var HTMLprojectDates = '<p>Dates: %data%</p>';
var HTMLprojectDescription = '<p>Description: %data%</p>';
var HTMLprojectSkills = '<p>Skill(s): %data%</p>';
var HTMLprojectMember = '<p>Member: %data% <i class="user icon"></i></p>';
var HTMLprojectMembers = '<p>Members: %data% <i class="users icon"></i></p>';
var HTMLprojectFiles = '<p>Files: <a href="%data%" target="_blank"><i>Link to open on new tab</i></a></p>';
var HTMLprojectLinks = '<p>Links: <a href="%data%" target="_blank"><i>Link to open on new tab</i></a></p>';
var HTMLprojectType = '<p>Type: %data%</p>';
var HTMLprojectImage = '<p>Image: %data%</p><br>';

var HTMLDropdown = '<div id = "accordiontop" class= "ui basic accordion"></div>';


var HTMLSchools = '<div class= "title active" style = "font-size: 20px;"><i class="dropdown icon"></i> Schools </div>';
var HTMLschoolContent = '<div id = "schoolcontent" class= "content active"></div>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div class = "top-title">%data%';
var HTMLschoolDegree = '   %data%</div>';
var HTMLschoolstartDate = '<div class="date-text"><i>%data%';
var HTMLschoolfinishDate = '%data%</i></div>';
var HTMLschoolLocation = '<p>Location: %data%</p>';
var HTMLschoolMajor = '<p> Major: %data%</p>';
var HTMLschoolCurriculum= '<a href="%data%" target="_blank"><i>Curriculum</i></a>';

var HTMLOnlines = '<div class= "title" style = "font-size: 20px;"><i class="dropdown icon"></i> Online Courses </div>';
var HTMLonlineContent = '<div id = "onlinecontent" class= "content"></div>';
var HTMLonlineStart = '<div class="education-entry"></div>';
var HTMLonlineTitle = '<div class = "top-title">%data%';
var HTMLonlineAuthor = '%data%</div>';
var HTMLonlineDates = '<div class="date-text"><i>%data%</i></div>';
var HTMLonlineSkills = '<div>Skills: %data%</div><br>';
var HTMLonlineURL = '<p><a href="#">%data%</a></p>';
var HTMLonlineLearning = '<p style = "margin-bottom : 0">Learnings: %data%</p>';

var HTMLSeminars = '<div class= "title" style = "font-size: 20px;"> <i class="dropdown icon"></i> Seminars </div>';
var HTMLseminarContent = '<div id = "seminarcontent" class= "content"></div>';
var HTMLseminarStart = '<div class="education-entry"></div>';
var HTMLseminarPlaces = '<div class="location-text">Place: %data%</div>';
var HTMLseminarTitle = '<p>Topic: %data%</p>';
var HTMLseminarGuest = '<div class = "top-title">Guest: %data%';
var HTMLseminarDates = '<div class="date-text">Date: %data%</div>';
var HTMLseminarGTitle = '<div class="title-text">Guest title: %data%</div>';
var HTMLseminarLearning = '<p style = "margin-bottom : 0">Learnings: %data%</p>';

var HTMLActivity = '<div class= "title" style = "font-size: 20px;"> <i class="dropdown icon"></i> Activities </div>';
var HTMLactivityContent = '<div id = "activitycontent" class= "content"></div>';
var HTMLactivityStart = '<div class="education-entry"></div>';
var HTMLactivityPlace = '<p class="location-text"> Location: %data%</p>';
var HTMLactivityTitle = '<div class = "top-title">%data%</div>';
var HTMLactivityDates = '<p class = "date-text">%data%';
var HTMLactivityHours = '%data%</p>';
var HTMLactivityskillsStart = '<p>Skills those were used in activity:</p>';
var HTMLactivitySkills = '<ul>%data%</ul>';
var HTMLactivityLearnings = '<p>Learnings: %data%</p>';
var HTMLactivityCertificate = '<p>Certificate: <a href="%data%" target="_blank"><i>Here it is</i></a></p>';
var HTMLactivityLinks ='<p>Job was done in activity: <a href="%data%" target="_blank"><i>Link to open new tab.</i></a></p>';

var HTMLbookStart = '<div class="book-entry eight wide column"></div>';
var HTMLbookTitleAuthor = '<div class = "top-title">%data% - %author%</div>';
var HTMLbookDate = '<p>Read at: %data%</p>';
var HTMLbookDescription = '<p>Description: %data%</p>';
var HTMLbookSkills = '<p>Skill(s): %data%</p>';
var HTMLbookLink = '<p>Link to Book: <a href="%data%" target="_blank"><i>Link to open on new tab</i></a></p>';
var HTMLbookExamples = '<p>Link to Tutorials: <a href="%data%" target="_blank"><i>Link to open on new tab</i></a></p>';

var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
