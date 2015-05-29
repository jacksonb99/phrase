'use strict';

var fs = require('fs');

module.exports = {
  url: '/:id',
  controller: ['$scope', 'articles', '$stateParams', controller],
  template: fs.readFileSync(__dirname + '/template.html', 'utf-8')
};

function controller ($scope, articles, $stateParams) {
  articles.get($stateParams.id).then(function(doc) {
    $scope.article = doc;
  });

  $scope.remove = function (id) {
    var passID = $stateParams.id;
    articles.remove(passID).then(function (res) {
      $state.go('articles.list');
    });
  };
}