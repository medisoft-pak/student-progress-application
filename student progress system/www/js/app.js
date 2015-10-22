// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

/*
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
*/

  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider

      // setup an abstract state for the tabs directive
      .state('home', {
        url: '/home',

        templateUrl: 'views/home/home.html'
      })

      .state('studentRegistration', {
        url: '/studentRegistration',
        templateUrl: 'views/studentRegistration/studentRegistration.html'
        //controller : "CtrlChngeValue"
      })

      .state('createUser', {
        url: '/createUser',
        templateUrl: 'views/createUser/createUser.html'
        //controller : "CtrlChngeValue"
      })
      .state('schoolSetup', {
        url: '/schoolSetup',
        templateUrl: 'views/schoolSetup/schoolSetup.html',
        controller : "FileOpenerController"
      })
      .state('logIn', {
        url: '/logIn',
        templateUrl: 'views/logIn/logIn.html'
        //controller : "CtrlChngeValue"
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/dashboard.html'
        //controller : "CtrlChngeValue"
      })
    $urlRouterProvider.otherwise("/dashboard");

  })

.controller('FileOpenerController', function($scope, $cordovaFileOpener2, $ionicPlatform) {


  $scope.openfiles = function () {
    $cordovaFileOpener2.open(
    /*  '/sdcard/Download/starwars.pdf',
      'application/pdf'*/
       '/Phone storage/Download/Index.pdf',
       'application/pdf'

    ).then(function () {
        // file opened successfully, $ionicPlatform
        alert("sfsfsfsss");

      }, function (err) {
        //console.log('Error status: ' + err.status + ' - Error message: ' + err.message);
        console.log('An error occurred: ' + JSON.stringify(err));
      });
  }
});
