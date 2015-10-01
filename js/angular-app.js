// Egyedi azonosító.
var az = "user_86867135";

// Létrehozunk egy új angular modult.
var testModule = angular.module("testModule", []);

// Űrlap controller létrehozása.
testModule.controller("formController", function ($scope, $http) {

    // User objektum.
    $scope.user = {};

    // Meglévő adatok lekérése.
    $http.get("http://37.139.16.100:3000/" + az)
        .success(function (data) {
            $scope.user = data;
        })
        .error(function (error) {
            console.error("Hiba a lekérés során: ", error);
        });

    // Adatok mentése.
    $scope.processForm = function () {

        // Objektum amit elküldünk a szerverre.
        var serverObj = {
            "user": az,
            "data": $scope.user
        };

        // Adatok küldése a szerverre.
        $http.post("http://37.139.16.100:3000", serverObj)
            .success(function (data) {
                console.log("A szerver válasza: ", data);
            })
            .error(function (error) {
                console.error("Hiba a lekérés során: ", error);
            });

    };


});