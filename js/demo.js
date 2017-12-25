$.ajax({
	type:"get",
	url:"js/city.json",
	async:true,
	success:function(d){
		var str = '';
		var cityName = '';
		$.each(d, function(key,value) {
			console.log(value);
			str += `
				<p>${key}</p>
			`;
			cityName += `
				<h2>${key}</h2>
			`;
			var value = value.match(/[\u4e00-\u9fa5]+/g);
			$.each(value, function(a,b) {
//				console.log(b);
				cityName += `
					<ul class="list">
						<li>${b}</li>
					</ul>
				`;
			});
		});
		$('.box').append(str);
		$('.ordge').append(cityName);
		myIscroll.refresh();
	}
});

var myIscroll = new IScroll('.section',{
	scrollbars:true,
	fadeScrollbars:true
})

$('.box').on('click','p',function(){
	var ind = $(this).index();
	var y = $('.ordge').find('h2').eq(ind).position().top;
	myIscroll.scrollTo(0,-y,10);
})

$('.ordge').on('click','li',function(){
	var html = $(this).text();
	$('.header').html(html);
	localStorage.setItem('cityTime',html);
})
//本地存储
if(localStorage.getItem('cityTime')){
	$('.header').html(localStorage.getItem('cityTime'));
}

