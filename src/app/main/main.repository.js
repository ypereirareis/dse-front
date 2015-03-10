'use strict';

angular.module('databaseSchemaExplorer')
  .factory('Repository', function (RestClient) {

    var tables = RestClient.all('tables');

    return {
      findAll : function () {
        return tables.getList();
      },
      find : function (name) {
        return tables.get(name);
      }
    }

  });

