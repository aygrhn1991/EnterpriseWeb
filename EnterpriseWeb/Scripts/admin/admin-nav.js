app.controller('nav', function ($scope, $http) {
    $scope.LoadData = function () {
        window.StartLoader();
        $http.post('/Admin/NavList_Get').success(function (d) {
            $scope.data = d;
            $scope.$on('ngRepeatFinished', function (event) {
                $('#dt').DataTable({
                    language: { url: '/Plugin/datatable/js/chinese.json' }
                }).on('draw.dt', function () {
                    window.StopLoader();
                });
            });
        }).error(function (e) {
            console.log('http错误');
        });
    };
    $scope.LoadData();
});