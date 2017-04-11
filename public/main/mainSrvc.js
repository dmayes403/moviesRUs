angular.module('moviesRUs')
    .service('mainSrvc', function($http){
        this.getMovies = function(){
            return $http.get(`https://api.themoviedb.org/3/list/10?api_key=${API_key}&language=en-US`).then((response) => {
              return response.data.items;
            })
        }
    })
