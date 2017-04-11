angular.module('moviesRUs')
    .controller('mainCtrl', function($scope, mainSrvc){
        $scope.test = 'test'
        $scope.getMovies = function(){
          console.log('hello');
          mainSrvc.getMovies().then((response) => {
            console.log(response);
          });
        }

        $scope.getMovies();
    })
