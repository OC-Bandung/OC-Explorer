$(".mdc-tab").click(function() {

    $(this).parent().find('a.mdc-tab').removeClass("mdc-tab--active");
    $(this).addClass("mdc-tab--active");

});

$("#add-to-csv").click(function() {

    $(this).html('<i class="material-icons">playlist_add_check</i>');
    $(this).removeClass('active');
    $(this).addClass('added');
    $("#add-to-csv-text").text("contract was added");
    $("#add-to-csv-text").css("color", "darkgray");
    var cnt = $(".checkout").attr("data-count");
    cnt = parseInt(cnt);
    $(".checkout").attr("data-count", cnt + 1);

});

$("#planning-schedule").click(function(e) {
    e.preventDefault();
    $("#planning-schedule-inner").removeClass("hidden");
    $("#planning-details-inner").addClass("hidden");

});

$("#planning-details").click(function(e) {
    e.preventDefault();
    $("#planning-schedule-inner").addClass("hidden");
    $("#planning-details-inner").removeClass("hidden");

});



$("#tender-schedule").click(function(e) {
    e.preventDefault();
    $("#tender-schedule-inner").removeClass("hidden");
    $("#tender-details-inner").addClass("hidden");

});

$("#tender-details").click(function(e) {
    e.preventDefault();
    console.log("sced");
    $("#tender-schedule-inner").addClass("hidden");
    $("#tender-details-inner").removeClass("hidden");

});

$("#awards-details").click(function(e) {
    e.preventDefault();
    $("#awards-winner-inner").addClass("hidden");
    $("#awards-bidders-inner").addClass("hidden");
    $("#awards-details-inner").removeClass("hidden");

});

$("#awards-winner").click(function(e) {
    e.preventDefault();
    $("#awards-details-inner").addClass("hidden");
    $("#awards-bidders-inner").addClass("hidden");
    $("#awards-winner-inner").removeClass("hidden");

});

$("#awards-bidders").click(function(e) {
    e.preventDefault();
    $("#awards-winner-inner").addClass("hidden");
    $("#awards-details-inner").addClass("hidden");
    $("#awards-bidders-inner").removeClass("hidden");

});






(function() {
    [].slice.call(document.querySelectorAll('.checkout')).forEach(function(el) {
        var openCtrl = el.querySelector('.checkout__button'),
            closeCtrls = el.querySelectorAll('.checkout__cancel');

        openCtrl.addEventListener('click', function(ev) {
            ev.preventDefault();
            classie.add(el, 'checkout--active');
        });

        [].slice.call(closeCtrls).forEach(function(ctrl) {
            ctrl.addEventListener('click', function() {
                classie.remove(el, 'checkout--active');
            });
        });
    });
})();

 