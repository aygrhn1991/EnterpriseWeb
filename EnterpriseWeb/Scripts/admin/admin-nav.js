app.controller('navList', function ($scope, $http) {
    $scope.Init = function () {
        $scope.LoadData();
    };
    $scope.LoadData = function () {
        window.StartLoader();
        $http.post('/Admin/NavList_Get').success(function (d) {
            $scope.data = d;
            if (d.length == 0) {
                window.DrawTable('#dt');
            } else {
                $scope.$on('ngRepeatFinished', function (event) {
                    window.DrawTable('#dt');
                });
            }
        }).error(function (e) {
            console.log('http错误');
        });
    };
    $scope.Init();
});