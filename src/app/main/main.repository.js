'use strict';

angular.module('databaseSchemaExplorer')
  .factory('Repository', function (RestClient) {

    var tables = RestClient.all('tables');
    var executor = RestClient.all('execute');

    return {
      findAll : function () {
        return tables.getList();
      },
      find : function (name) {
        return tables.get(name);
      },
      execute : function (query) {
        return executor.get(query);
      }
    }

  });

