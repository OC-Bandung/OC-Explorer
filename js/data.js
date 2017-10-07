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


function getPartyByID(data, id) {
    return data.filter(
        function(data) { return data.id == id }
    );
}


function load_data(data) {

    var stage;
    release = data.releases[0];
    planning = release.planning;
    tender = release.tender;
    parties = release.parties;
    awards = release.awards;
    contract = release.contract;

    // award = release.award;

   if (release.hasOwnProperty('contract')) {
        stage = "Contract";
        $(".tender-stage").removeClass("hidden");
        $(".awards-stage").removeClass("hidden");
        $(".contract-stage").removeClass("hidden");
        if (release.contract[0].hasOwnProperty('implementation')) {
            stage="Implementation";
             $(".implementation-stage").removeClass("hidden");
        }

    } else if (release.hasOwnProperty('awards')) {
        stage = "Award"
        $(".tender-stage").removeClass("hidden");
        $(".awards-stage").removeClass("hidden");
    } else if (release.hasOwnProperty('tender')) {
        stage = "Tender"
        $(".tender-stage").removeClass("hidden");
    } else if (release.hasOwnProperty('planning')) {
        stage = "Planning"
    }


    parties = release.parties;
    //loop in parties, get the role

    $("#ocid").text(release.ocid);
    $(".contracting-stage").text(stage);

    $("#planning-rationale").text(planning.rationale);
    $("#planning-budget-description").text(planning.budget.description);
    $("#planning-budget-amount-amount").text(release.planning.budget.amount.amount);
    $("#planning-budget-project-id").text(planning.budget.projectID);
    $("#planning-budget-project-name").text(planning.budget.project);

    $("#tender-title").text(tender.title);
    $(".tender-tenderPeriod-startDate").text(tender.tenderPeriod.startDate);
    $(".tender-tenderPeriod-endDate").text(tender.tenderPeriod.endDate);

    $("#tender-mainProcurementCategory").text(tender.mainProcurementCategory + " (" + tender.additionalProcurementCategories + ")");

    $(".tender-procurementMethod").text(tender.procurementMethod + " (" + tender.procurementMethodDetails + ")");

    var party = [];

    for (i = 0; i < parties.length; i++) {
        party[parties[i].roles] = parties[i].name
    }


    $("#parties-name-procuringEntity").text(party["procuringEntity"]);
    $("#parties-name-implementationUnit").text(party["implementationUnit"]);



    $("#planning-budget-id").text(planning.budget.id);

    var d = new Date(tender.tenderPeriod.startDate);

    $("#planning-budget-year").text(d.getFullYear());


    // progress
    var month_data = [];
    var mn;

    for (i = 0; i < planning.forecasts.length; i++) {


        for (j = 0; j < planning.forecasts[i].observations.length; j++) {
            mn = planning.forecasts[i].observations[j].period.startDate.substr(5, 2);
            month_data[mn] = planning.forecasts[i].observations[j].measure;
            if (planning.forecasts[i].id == "physicalProgress") {
                $(".planning-physicalProgress[mn='" + mn + "']").text(month_data[mn] + "%");
                $(".planning-physicalProgress[mn='" + mn + "']").prev().removeClass("hidden");
                $(".planning-physicalProgress[mn='" + mn + "']").parent().prev().addClass("active");
            } else if (planning.forecasts[i].id == "financialProgress") {

                $(".planning-financialProgress[mn='" + mn + "']").text(month_data[mn] + "M IDR");
                $(".planning-financialProgress[mn='" + mn + "']").prev().removeClass("hidden");

            }

        }

    }

    $("#tender-status").text(tender.status);
    $("#tender-amount-value").text(tender.value.amount);
    $("#tender-awardCriteria").text(tender.awardCriteriaDetails);

    var html = "";
    for (i = 0; i < tender.milestones.length; i++) {

        html = "<li>";
        html += "<span class='mdc-typography--body2 border-right padding-right-small'>" + tender.milestones[i].dueDate.substring(0, 10) + "</span>";
        html += "<span class='mdc-typography--body2 padding-left-small'>" + tender.milestones[i].title + "</span>";
        html += "</li>";

        $("ul#tender-milestones").append(html);

    }

    
    $("#awards-supplier-name").text(awards[0].suppliers[0].name);
    $("#awards-value-amount").text(awards[0].value.amount);

    $("#tender-numberOfTenderers").text(tender.numberOfTenderers);


    winningSupplier = getPartyByID(parties, awards[0].suppliers[0].id);

    

    $("#awards-supplier-taxid").text(winningSupplier[0].taxid);
    $("#awards-supplier-address").text(winningSupplier[0].address.streetAddress);

    html = "";
    delete winningSupplier[0].roles;
    var details = JSON.stringify(winningSupplier[0], null, 4);
    details = details.replace(/["'{]/g, "");
    details = details.replace(/[},]/g, "<br>");
    html += "<br>";
    html += details;

    $("#awards-winner-info").html(html);

 
    var html = "";
    for (i = 0; i < tender.tenderers.length; i++) {

        html = "<div>";
        html += tender.tenderers[i].name;
        supplierDetails = getPartyByID(parties, tender.tenderers[i].id);

        for (j = 0; j < supplierDetails.length; j++) {

            delete supplierDetails[j].roles;

            var details = JSON.stringify(supplierDetails[j], null, 4);
            details = details.replace(/["'{]/g, "");
            details = details.replace(/[},]/g, "<br>");
            html += "<br>";
            html += details;
        }


        html += "<br> ";
        html += "</div>";


        $("div#awards-bidders-info").append(html);

    }

    console.log(contract[0].dateSigned);

    $("#contract-dateSigned").text(contract[0].dateSigned);
    $("#contract-value-amount").text(contract[0].value.amount);
    $("#contract-period-endDate").text(contract[0].period.endDate);
    $("#contract-period-startDate").text(contract[0].period.startDate);

    $("#contract-id").text(contract[0].id);

}