const data = [150, 377, 460, 730, 950, 340, 800, 660, 620, 570, 730, 500];

const colors = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range(['#d768bb', '#111111']);

const title = d3.select('#title')
				.style('font-family', 'Arial, Helvetica, sans-serif')
				.style('font-weight', '700i')
				
const chart = d3.select('#content')
				.append('svg')
				.attr('height', '1000')
				.attr('width', '1000')


chart.selectAll('rect')
	.data(data)
	.enter().append('rect')
			.attr('width',function(d, i) { return d-5; })
			.attr('height','31')
			.attr('y',function(d, i) { return 32*i; })
			.attr('x',function(d, i) { return 1000-(d); })
			.attr('fill', function(d, i) { return colors(d); })
			