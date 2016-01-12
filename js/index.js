var app = angular.module("repoSearch", ['ngclipboard']);

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('RepoSearchController',RepoSearchController);