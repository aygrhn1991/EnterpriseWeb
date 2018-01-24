window.StartLoader = function () {
    $(".fakeloader").fakeLoader();
};
window.StopLoader = function () {
    $(".fakeloader").fadeOut().html('');
};
window.DrawTable = function (id) {
    $(id).DataTable({
        language: { url: '/Plugin/datatable/js/chinese.json' }
    }).on('draw.dt', function () {
        window.StopLoader();
    });
};
window.GetUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}