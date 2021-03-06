function load_tender(tender) {

	console.log("tender");
	
    $("#tender-title").text(tender.title);
    $("#tender-status").text(tender.status);
    if(tender.hasOwnProperty('value')) {
        $("#tender-amount-value").text(tender.value.amount);
        $("#stage-amount").text(tender.value.amount);
    }
    
     $(".tender-stage").removeClass("hidden");
     $("#process-status").text(tender.status);


    if(tender.hasOwnProperty('items') && tender.items.length>0) {
        deliveryAddress = tender.items[0].deliveryAddress.streetAddress;
        $("#tender-deliveryAddress").text(deliveryAddress).attr('deliveryAddress', deliveryAddress);
    }



    $("#tender-awardCriteria").text(tender.awardCriteriaDetails);
    $("#tender-mainProcurementCategory").text(tender.mainProcurementCategory + " (" + tender.additionalProcurementCategories + ")");
    $(".tender-procurementMethod").text(tender.procurementMethod + " (" + tender.procurementMethodDetails + ")");



    $("#tender-numberOfTenderers").text(tender.numberOfTenderers);


    $(".tender-tenderPeriod-startDate").text(moment(tender.tenderPeriod.startDate).format('ll'));
    $(".tender-tenderPeriod-endDate").text(moment(tender.tenderPeriod.endDate).format('ll'));

    $("#tender-contractPeriod-startDate").text(moment(tender.contractPeriod.startDate).format('ll'));
    $("#tender-contractPeriod-endDate").text(moment(tender.contractPeriod.endDate).format('ll'));


 
    var html = "";
    for (i = 0; i < tender.milestones.length; i++) {

        html = "<li>";
        html += "<span class='mdc-typography--body2 border-right padding-right-small'>" + tender.milestones[i].dueDate.substring(0, 10) + "</span>";
        html += "<span class='mdc-typography--body2 padding-left-small'>" + tender.milestones[i].title + "</span>";
        html += "</li>";

        $("ul#tender-milestones").append(html);

    }

 

}