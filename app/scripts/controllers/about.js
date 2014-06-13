'use strict';

/**
 * @ngdoc function
 * @name angularPracticeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPracticeApp
 */
angular.module('angularPracticeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
