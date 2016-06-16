$(document).ready(function() {
	  $('#summernote').summernote();
});

var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
	  $scope.count = 0;
});
