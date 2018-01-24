app.controller('pageList', function ($scope, $http) {
    $scope.Init = function () {
        $scope.LoadData();
    };
    $scope.LoadData = function () {
        window.StartLoader();
        $http.post('/Admin/PageList_Get').success(function (d) {
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
    $scope.delete = function (d) {
        if (confirm('是否删除：' + d.title)) {
            window.StartLoader();
            $http.post('/Admin/Page_Delete', {
                id: d.id
            }).success(function (d) {
                if (d == true) {
                    alert('删除成功');
                    ///
                    $http.post('/Admin/PageList_Get').success(function (d) {
                        $scope.data = d;
                        
                    }).error(function (e) {
                        console.log('http错误');
                    });
                    ///
                    window.StopLoader();
                } else {
                    alert('删除失败');
                }
            }).error(function (e) {
                console.log('http错误');
            });
        }
    };
    $scope.Init();
});
app.controller('pageAdd', function ($scope, $http) {
    var ue = UE.getEditor('container');
    ue.ready(function () {
        $scope.Init();
    });
    $scope.Init = function () {
        $scope.id = parseInt(window.GetUrlParam('id'));
        if ($scope.id == 0) {
            $scope.pageModel = {
                id: $scope.id,
                title: '',
                content: ''
            };
        } else {
            window.StartLoader();
            $http.post('/Admin/Page_Get', {
                id: $scope.id
            }).success(function (d) {
                $scope.pageModel = {
                    id: d.id,
                    title: d.title,
                    content: d.content
                };
                ue.setContent(d.content);
                window.StopLoader();
            }).error(function (e) {
                console.log('http错误');
            });
        }
    };
    $scope.save = function () {
        window.StartLoader();
        $scope.pageModel.content = ue.getContent();
        $http.post('/Admin/Page_Add_Edit', {
            id: $scope.pageModel.id,
            title: $scope.pageModel.title,
            content: $scope.pageModel.content
        }).success(function (d) {
            if (d == true) {
                alert('保存成功');
                window.StopLoader();
            } else {
                alert('保存失败');
            }
        }).error(function (e) {
            console.log('http错误');
        });
    };
});