'use strict';

/**
 * @ngdoc function
 * @name bivitfrontSampleApp.controller:ArticlesAddCtrl
 * @description
 * # ArticlesAddCtrl
 * Controller of the bivitfrontSampleApp
 */
angular.module('bivitfrontSampleApp')
  .controller('ArticlesAddCtrl', function ($scope, $http. $route, $routeParams) {
    var article = {};
    $scope.addArticle = function(){
    	$http.post(http://localhost:8080/api/articlces, );
    }
});

