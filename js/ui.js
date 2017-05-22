$(".mdc-tab").click(function() {
	$(this).parent().find('a.mdc-tab').removeClass("mdc-tab--active");
	$(this).addClass("mdc-tab--active");

	var link = $(this).attr("href");

	$("#panels-award").find('.panel').hide();
	$("#panels-award").find(link).show();


});



$(function () { 
    var myChart = Highcharts.chart('chart-tender', {
        chart: {
            type: 'column'
        },
        title: {
        	text: ''
        },
        xAxis: {
            categories: ['Estimated Cost', 'Budget Amount']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
        	enabled: false
    	},
    	credits: {
		      enabled: false
		},
		colors: ['#0bb586', '#008459'],
        series: [{
            name: 'tender',
            data: [19.16, 25],
            colorByPoint: true
        } ]
    });

    myChart.setSize(250, 250);

});