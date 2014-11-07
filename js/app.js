var app = angular.module("app", ["ngMaterial"]);
app.controller('AppCtrl', function ($scope) {

  console.log('メインコントローラー初期化');

  $scope.onClickBtn = function(evt) {
    console.log("onClickBtn()");
  }

});
