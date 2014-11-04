//Initial declaration of our app. angularjs.org for more details.
var asigApp = angular.module('asigApp', ['ngAnimate', 'ui.router']);




//This is our state manager. https://github.com/angular-ui/ui-router for more info.
asigApp.config(function($stateProvider, $urlRouterProvider) {
	//If it's not a state, we're home :)
	$urlRouterProvider.otherwise("/home");
	
	$stateProvider
		//Home state
		.state('home', {
			url: '/home',
			templateUrl: 'home-part.html'

		})

		.state('about', {
			url: '/about',
			templateUrl: 'about-part.html'
		})

		.state('brothers', {
			url: '/brothers',
			templateUrl: 'brother-part.html'
		});



});

//HEY YOU MADE IT TO THE CONTROLLER. GOOD JOB, YOU'RE NOT A FUCKING APE. NOW UPDATE THIS SHIT, YOU SLIGHTLY-MORE-THAN-AN-APE.
asigApp.controller('officerController', function($scope){
	//Literally all you need to do to change officer positions is update this list. HF.
	/*Contingency plan comment if someone manages to fuck this up royally:
		Every person is in the officers array $scope.officers = [];

		Every person object should be EXACTLY like this except for the very last one, which has no comma at the end.

		{
			"name" : "John Doe",
			"positions" : ["Penis CareGiver", "Boob Ogler"]
		},

		Please, please, PLEASE don't fuck with anything outside of quotation marks. I beg of you.

		Unless you know what you're doing. Go ahead in that case.
	*/
	$scope.officers = [
		{
			"name": "Ben Rahjel", 
			"positions" : ["President (HSP)", "House Manager (HHM)", "Risk Manager"] 
		},
		{
			"name": "Anthony Trubiano",
			"positions" : ["Vice President (HJP)"]
		},
		{
			"name" : "Michael Duncan",
			"positions" : ["Treasurer (HE)"]
		},
		{
			"name" : "William Pheloung",
			"positions" : ["Secretary (HS)", "Academic Director (HA)"]
		},
		{
			"name" : "Michael Macarevich",
			"positions" : ["Ritual Master (HM)", "Steward"]
		},
		{
			"name" : "Joe Eduardo",
			"positions" : ["Pledge Educator (HD)", "Alumni Director (HP)"]
		},
		{
			"name" : "Lucas Deyglun",
			"positions" : ["Sergeant at Arms (HC)"]
		},
		{
			"name" : "Christian Tewell",
			"positions" : ["Senior Rush Chair (HSZ)", "Unity Chair/Historian", "Sports Chair"]
		},
		{
			"name" : "Alex Yin",
			"positions" : ["Junior Rush Chair (HJZ)"]
		},
		{
			"name" : "Ryan Sherman",
			"positions" : ["Social Chair"]
		},
		{
			"name" : "James Van Bebber",
			"positions" : ["Philanthropy Chair"]
		}
	];
	//Phew that was obnoxious. Oh well, hope y'all can keep this up to date when I'm being lazy.

});
