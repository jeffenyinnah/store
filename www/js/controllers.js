angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    /*onsole.log('Doing login', $scope.loginData);*/
    $scope.loginData = "";
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Boots', img: 'img/boots/boot1.jpg', id: 1, obj: 'Men Sneakers High Tech Damping Flyknit ' },
    { title: 'Casual Footwears', img: 'img/casual/casual1.jpg', id: 2, obj: 'Men Casual Shoes'},
    { title: 'Jordan', img: 'img/jordan/jordan1.png', id: 3, obj: 'The Jordan Retro 10' }
  ];
})
.controller('PlaylistCtrl', function($scope, $stateParams) {

  
})

.controller('HomeCtrl', function($scope) {
  $scope.brands = [
    {title: 'Boots',  img: 'img/boots/boot1.jpg'},
    {title: 'Casual',  img: 'img/casual/casual1.jpg'},
    {title: 'Jordan',  img: 'img/jordan/jordan1.png'},
    {title: 'Formal',  img: 'img/formal/formal1.jpg'}
  ]
  
})

.controller('BootsCtrl', function($scope) {
  $scope.boots = [
    {title: 'Classy Boots',  img: 'img/boots/boot1.jpg'},
    {title: 'Chelsea Boots',  img: 'img/boots/boot2.jpg'},
    {title: 'Grey Color boots',  img: 'img/boots/boot3.jpg'},
    {title: 'Big boy leather',  img: 'img/boots/boot4.jpg'}
  ]
  
});
