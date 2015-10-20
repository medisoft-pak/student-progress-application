// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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
        templateUrl: 'views/schoolSetup/schoolSetup.html'
        //controller : "CtrlChngeValue"
      })


    $urlRouterProvider.otherwise("/schoolSetup");

  });

