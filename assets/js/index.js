var active_slide = false;
var scale = 1;
$(function(){
	var s = skrollr.init({
		smoothScrolling: true,
		smoothScrollingDuration: 1000,
		scale: scale,
		easing: {
			sin: function(p) {
				return (Math.sin(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
			},
			cos: function(p) {
				return (Math.cos(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
			},
			random: Math.random,
        	inverted: function(p) {
            	return 1 - p;
        	},
        	tree: function(p) {
            	return p/1.2+Math.pow(p *2,2)+Math.pow(p *2,6)+Math.pow(p *2,10);
            	//return p+Math.pow(p *2,10);
        	}
		},
		render: function(data) {
			// set active nav
			var top = $(window).scrollTop();
			if(top < 400)
				top = 1;
			else if(top < 900)
				top = 5;
			else if(top < 1400)
				top = 4;
			else if(top < 1900)
				top = 3;
			else top = 2;
			if($('#topbar a:nth-child('+top+')').hasClass('active'))
				return;

			$('#topbar a').removeClass('active');
			if(top)
				$('#topbar a:nth-child('+top+')').addClass('active');
		}
	});
	$(window).resize(function(){
		set_content_bottom();
		s.refresh();
	});
	setTimeout(function(){
		set_content_bottom();
		s.refresh();
	},1000);
});

function skrollTo(identifier)
{
	if(identifier==='#home')
		scrollToTop(0);
	if(identifier==='#bio')
		scrollToTop(400);
	if(identifier==='#media')
		scrollToTop(900);
	if(identifier==='#resume')
		scrollToTop(1400);
	if(identifier==='#contact')
		scrollToTop(1900);
}

function set_content_bottom()
{
	$('#index-wrap').css('margin-top',(window.innerHeight));
	var margin = ($('#index-wrap').height() - window.innerHeight);
	var topmedia = $('#media').position().top;
	var topbio = $('#bio').position().top;
	var topresume = $('#resume').position().top;
	var topcontact = $('#contact').position().top;
	var topcontact = Math.min(topcontact,margin+74);

	$('#index-wrap').attr('data-0',"top:"+window.innerHeight+"px;left:0px;margin-top:0px");
	$('#index-wrap').attr('data-400','top:-'+topbio+'px;margin-top:74px');
	$('#index-wrap').attr('data-500','top:-'+topbio+'px;margin-top:74px');
	$('#index-wrap').attr('data-900','top:-'+topmedia+'px;margin-top:74px');
	$('#index-wrap').attr('data-1000','top:-'+topmedia+'px;margin-top:74px');
	$('#index-wrap').attr('data-1400','top:-'+topresume+'px;margin-top:74px');
	$('#index-wrap').attr('data-1500','top:-'+topresume+'px;margin-top:74px');
	$('#index-wrap').attr('data-1900','top:-'+topcontact+'px;margin-top:74px');
	$('#index-wrap').attr('data-2000','top:-'+topcontact+'px;margin-top:74px');
	$('#index-wrap').attr('data-2400','top:-'+margin+'px;margin-top:0px');
	$('#index-wrap').attr('data-2500','top:-'+margin+'px;margin-top:0px');
}

function to_slide(i)
{
	slide = i*2-1;

	if(slide == 1)
	{
		scroll_top = 50 * scale;
		time = 500;
	}
	else
	{ 
		scroll_top = (50  + i * 300) * scale; 
		time = 500 * Math.sqrt(Math.abs(slide-active_slide));
	}

	scrollToTop(scroll_top, time);
}