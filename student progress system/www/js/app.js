// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'ngCordova'])

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
  /*.service("myCustomService", function(){
    var studentsArray = [];
    var indxid=1;
    this._saveStudentInService = function(studentObj){
      //console.log(studentObj);
      studentsArray.push(studentObj);
      console.log(studentsArray);
    };

    this.getAllStudents = function(){
      return studentsArray;
    }


    this.setId = function(parmid){
      indxid=parmid;
    }

    this.getId = function(){
      return indxid;
    }

   })*/

  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider

      // setup an abstract state for the tabs directive
      .state('home', {
        url: '/home',

        templateUrl: 'views/home/home.html'
      })

      .state('studentRegistration', {
        url: '/studentRegistration',
        templateUrl: 'views/studentRegistration/studentRegistration.html',
        controller: "StudentRegistrationController"
      })

      .state('createUser', {
        url: '/createUser',
        templateUrl: 'views/createUser/createUser.html',
        controller: "createUserController"
      })
      .state('schoolSetup', {
        url: '/schoolSetup',
        templateUrl: 'views/schoolSetup/schoolSetup.html',
        controller: "schoolSetupController"
      })
      .state('logIn', {
        url: '/logIn',
        templateUrl: 'views/logIn/logIn.html',
        controller : "logInController"
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/dashboard.html'
        //controller : "CtrlChngeValue"
      });
    $urlRouterProvider.otherwise("/logIn");

  })
  .controller('MainController', function($scope,$firebaseObject) {


   var ref = new Firebase("https://boiling-inferno-2413.firebaseio.com/studentsprogress");

     alanRef = ref.child("users").child("alanisawesome");

    var alan={

      id: "345" ,
      name:"kamran2424"

    };

    $scope.savestudent = function() {



      alanRef.set(alan);

     // var usersRef = ref.child("StudentRegistration")

  /*  var obj=

    {
      studentid: $scope.studentid,
      grno: $scope.grno,
      studentname: $scope.studentname,
      fathername: $scope.fathername,
      address: $scope.address

      };*/

    /*  var newusersRef =ref.push({

        "studentid": $scope.studentid,
        "grno": $scope.grno,
        "studentname": $scope.studentname,
        "fathername": $scope.fathername,
        "address": $scope.address

      });*/
     // newusersRef.set(obj);

     /* if(newusersRef) {
        alert('saved successfully');
      } else {
        alert('something went wrong');
      }*/
  }
  })

.controller('FileOpenerController', function($scope, $cordovaFileOpener2, $ionicPlatform) {

    $scope.file_changed = function(element) {

      var photofile = element.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        $scope.$apply(function() {
          $scope.prev_img = e.target.result;
        });
      };
      reader.readAsDataURL(photofile);
    };
  /*$scope.openfiles = function () {
    $cordovaFileOpener2.open(
    /!*  '/sdcard/Download/starwars.pdf',
      'application/pdf'*!/
       '/Phone storage/Download/Index.pdf',
       'application/pdf'

    ).then(function () {
        // file opened successfully, $ionicPlatform
        alert("sfsfsfsss");

      }, function (err) {
        //console.log('Error status: ' + err.status + ' - Error message: ' + err.message);
        console.log('An error occurred: ' + JSON.stringify(err));
      });
  }*/
});
