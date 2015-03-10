'use strict';

angular.module('databaseSchemaExplorer')
  .controller('MainCtrl', function ($scope, Repository) {

    Repository.findAll().then(function(tables){
      $scope.tables = tables;
    });


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

  });
