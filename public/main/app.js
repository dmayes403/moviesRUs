angular.module('moviesRUs', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
          .state('index', {
          url: '/',
          templateUrl: '../index.html',
          controller: 'mainCtrl',
          })

    })
