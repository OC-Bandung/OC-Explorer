function load_awards(awards) {

    $(".tender-stage").removeClass("hidden");
    $(".awards-stage").removeClass("hidden");
    $("#process-status").text(release.awards[0].status);
    $("#stage-amount").text(awards[0].value.amount);

    $("#awards-supplier-name").text(awards[0].suppliers[0].name);
    $("#awards-value-amount").text(awards[0].value.amount);


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



}