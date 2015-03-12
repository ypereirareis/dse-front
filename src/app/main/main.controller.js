'use strict';

angular.module('databaseSchemaExplorer')
  .controller('MainCtrl', function ($scope, Repository) {

    Repository.findAll().then(function(tables){
      $scope.tables = tables;
    });

    var executeQuery = function (query) {
      Repository.execute(query).then(function(results) {
        $scope.results = results ? results : {};
      });
    };

    $scope.selectQueryString = "";

    $scope.selectTable = function (tableName, index) {
      Repository.find(tableName).then(function(t){
        $scope.table = t;
        $scope.selectedIndex = index;
        $scope.selectSection('primary');
      });
    };

    $scope.selectSection = function(section) {
      $scope.section = section;
    };

    $scope.$watch('table', function (n, o){
      if (n) {
        $scope.selectQueryString = "SELECT * FROM "+ n.name+" LIMIT 50";
        executeQuery($scope.selectQueryString);
      }
    });


  });
