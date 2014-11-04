//Initial declaration of our app. angularjs.org for more details.
var asigApp = angular.module('asigApp', ['ngAnimate', 'ui.router', 'google-maps'.ns()]);



    asigApp.config(['GoogleMapApiProvider'.ns(), function (GoogleMapApi) {
        GoogleMapApi.configure({
            key: 'AIzaSyCl_7Y7qoaHFuySSIwxl6yMm0ZbwPCzlxU',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }])

//This is our state manager. https://github.com/angular-ui/ui-router for more info.
// Basically, add state with 'ui-sref', the url(that will be displayed at top), and the templateUrl (The actual file to be injected)
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
		})

		.state('events', {
			url: '/events',
			templateUrl: 'events-part.html'
		})



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

asigApp.controller('mapCntrl', ['$scope', 'GoogleMapApi'.ns(), function($scope, GoogleMapApi){

//42.719619, -73.668824
    GoogleMapApi.then(function(maps) {
    	$scope.map = {
    		center:{
    			latitude: 42.719619,
    			longitude: -73.668824
    		},
    		zoom: 15,
    		zoomControl: false
    	};
    	$scope.options = {
    		scrollwheel: false,
    		disableDefaultUI: true

    	};

    	$scope.marker = {
    		id: 0,
    		coords: {
    			latitude: 42.719619,
    			longitude: -73.668824    			
    		}
    	};
    });

}]);


asigApp.controller('navbarCntrl', ['$scope', function($scope){
	$scope.about = ["Local", "National"];
	$scope.home = ["Home", "Map", "Join"];
	$scope.events = ["Rush"];
	$scope.active = $scope.home;

	$scope.activate = function(name){
		if(name == "about"){
			$scope.active = $scope.about;
			alert("haha");
		}
	}

}]);
