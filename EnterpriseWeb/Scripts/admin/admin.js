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