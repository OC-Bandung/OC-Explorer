var jqxhr = $.getJSON("js/sample.json", function(data) {

        load_data(data);

    })
    .done(function() {
        console.log("done")
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });

 

function load_data(data) {

    var stage;
    release = data.releases[0];
    planning = release.planning;
    tender = release.tender;
    // award = release.award;

    if (release.hasOwnProperty('implementation')) {
        stage = "Implementation";
        $("#tender-stage").removeClass("hidden");
        $("#awards-stage").removeClass("hidden");
        $("#contract-stage").removeClass("hidden");
        $("#implementation-stage").removeClass("hidden");
    } else if (release.hasOwnProperty('contract')) {
        stage = "Contract"
        $("#tender-stage").removeClass("hidden");
        $("#awards-stage").removeClass("hidden");
        $("#contract-stage").removeClass("hidden");

    } else if (release.hasOwnProperty('awards')) {
        stage = "Award"
        $("#tender-stage").removeClass("hidden");
        $("#awards-stage").removeClass("hidden");
    } else if (release.hasOwnProperty('tender')) {
        stage = "Tender"
        $("#tender-stage").removeClass("hidden");
    } else if (release.hasOwnProperty('planning')) {
        stage = "Planning"
    }


    parties = release.parties;
    //loop in parties, get the role

    $("#ocid").text(release.ocid);
    $("#contracting-stage").text(stage);

    $("#planning-rationale").text(planning.rationale);
    $("#planning-budget-id").text(planning.budget.id + " (" + planning.budget.description + ")");
    $("#planning-budget-amount-amount").text(release.planning.budget.amount.amount);
    $("#planning-budget-project-id").text(planning.budget.projectID);
    $("#planning-budget-project-name").text(planning.budget.project);

    $("#tender-title").text(tender.title);
    $("#tender-tenderPeriod-startDate").text(tender.tenderPeriod.startDate);
    $("#tender-tenderPeriod-endDate").text(tender.tenderPeriod.endDate);

 
}