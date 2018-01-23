app.controller('pageList', function ($scope, $http) {});
app.controller('pageAdd', function ($scope, $http) {
    var ue = UE.getEditor('container');
    console.log(ue.getOpt('UEDITOR_HOME_URL'));
});