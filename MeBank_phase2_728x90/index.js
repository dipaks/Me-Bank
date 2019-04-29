var boilerplate = {};

boilerplate.loadFunction = function () {
	if (Enabler.isInitialized()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, init)
	}
}

function init() {
	if (Enabler.isPageLoaded()) {
		boilerplate.processAd();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, boilerplate.processAd);
	}
}

boilerplate.processAd = function () {
	document.getElementById("banner").className = "show"; //show banner
	//boilerplate.executeAnimation();
	boilerplate.DynamicContentElements();
}

boilerplate.DynamicContentElements = function () {

	// Dynamic Content variables
	Enabler.setProfileId(10402920);
    var devDynamicContent = {};

    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90 = [{}];
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0]._id = 0;
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].unique_id = 1;
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].ad_name = "216263_ED_Prospecting_generic_300x250";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_logo = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_logo.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/__version__/1/60006370_20181125162307599_logo_black_728x90.svg";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_image = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_image.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/60006370_20190313215600931_squirrelno-nuts-small.png";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_text = "Feeling financially fried?";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_font_size = "L";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_font_style_value = "font-family:\'GothamBlack\', Arial;font-size:30px;line-height:28px;letter-spacing:-2px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_text1 = "Lorem ipsum dolor sit amet, onsectetur.";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_t1_font_style_value = "font-family:\'GothamBold\', Arial;font-size:22px;line-height:22px;letter-spacing:-1px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_bg_text_color = "#fef7ec\/#000000";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_text_transition = "fade in";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_style_align = "centre";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_logo = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_logo.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/__version__/1/60006370_20181125162307599_logo_black_728x90.svg";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_image = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_image.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/60006370_20190313215600931_squirrelno-nuts-small.png";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_text = "Then get money savvy.";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_font_size = "L";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_font_style_value = "font-family:\'GothamBlack\', Arial;font-size:30px;line-height:28px;letter-spacing:-2px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_text1 = "Lorem ipsum dolor sit amet.";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_t1_font_style_value = "font-family:\'GothamBold\', Arial;font-size:22px;line-height:22px;letter-spacing:-1px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_bg_text_color = "#f0f9fa\/#000000";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_text_transition = "slide in from left";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_style_align = "centre";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_status = true;
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_logo = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_logo.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/__version__/2/60006370_20181125162314044_logo_white_728x90.svg";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_image = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_image.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/60006370_20190313215600931_squirrelno-nuts-small.png";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_text = "Crack into ME\u2019s.";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_font_size = "L";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_font_style_value = "font-family:\'GothamBlack\', Arial;font-size:30px;line-height:28px;letter-spacing:-2px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_text1 = "Lorem ipsum";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_t1_font_style_value = "font-family:\'GothamBold\', Arial;font-size:22px;line-height:22px;letter-spacing:-1px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_bg_text_color = "#f4f6ed\/#000000";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_text_transition = "slide in from bottom";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_style_align = "left";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_status = true;
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_logo = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_logo.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/__version__/1/60006370_20181125162307599_logo_black_728x90.svg";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_image = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_image.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_image.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/60006370_20190314170301139_Frank-Card-Suite.png";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_text = "Crack into ME\u2019s school of money.";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_font_size = "L";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_font_style_value = "font-family:\'GothamBlack\', Arial;font-size:30px;line-height:28px;letter-spacing:-2px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_text1 = "";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_t1_font_style_value = "font-family:\'GothamBold\', Arial;font-size:22px;line-height:22px;letter-spacing:-1px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_bg_text_color = "#F8F8F8\/#000000";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_text_transition = "slide in from bottom";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_style_align = "centre";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate = 2.8;
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_text = "for 12 month paid maturity";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_text1 = "Variable rate subject to change. Consider if this advice is right for you. Members Equity pty ltd.";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_logo = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_logo.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/__version__/1/60006370_20181125162307599_logo_black_728x90.svg";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_bg_text_color = "#3a3535\/#ffffff";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].display_at = "f2";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].cta_button_text = "Get learning";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].cta_bg_text_color = "#1B68B5\/#ffffff";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].cta_font_style = "font-family:\'GothamBold\', Arial;font-size:15px;line-height:15px;letter-spacing:0px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].banner_bg_color = "#ffffff";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].frame_timing = "2.0\/2.0\/2.0";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].exitUrl = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].exitUrl.Url = "https://ed.mebank.com.au/?utm_source=Cadreon&utm_medium=banner&utm_campaign=ed&utm_content=ed_prospect";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_status = true;
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_btn = "+ The legal stuff.";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_headline = "Terms & Conditions";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_body_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis mollis neque nec vestibulum. Donec iaculis metus quis diam vulputate rhoncus. Duis tristique at diam in imperdiet. Suspendisse massa felis, eleifend eget faucibus non, ultrices vel purus. Integer id lorem mattis, scelerisque mi et, pharetra libero. Donec eu neque quam. Nulla eget congue erat. In hac habitasse platea dictumst. Nam maximus ac lorem in mattis. Cras dignissim fringilla arcu eget vulputate. Donec eget accumsan erat. Nam vitae eros in velit blandit sagittis ac in ante.";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_bg_color = "#F1F0F0";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_font_style = "font-family:\'GothamBook\', Arial;font-size:10px;line-height:10px;letter-spacing:0px;";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_logo = {};
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_logo.Type = "file";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_logo.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006370/__version__/1/60006370_20181125162307599_logo_black_728x90.svg";
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].isDefault = true;
    devDynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].isActive = true;
    Enabler.setDevDynamicContent(devDynamicContent);
	//End generated code by doubleclick studio
	
	//Start reading elements
	frame1 = document.getElementById('frame1');
	frame2 = document.getElementById('frame2');
	frame3 = document.getElementById('frame3');
	frame3 = document.getElementById('frame3');

	f1_logo = document.getElementById('f1_logo');
	f1_text = document.getElementById('f1_text');
	f1_text1 = document.getElementById('f1_text1');
	f2_logo = document.getElementById('f2_logo');
	f2_text = document.getElementById('f2_text');
	f2_text1 = document.getElementById('f2_text1');
	f3_logo = document.getElementById('f3_logo');
	f3_text = document.getElementById('f3_text');
	f3_text1 = document.getElementById('f3_text1');
	f4_logo = document.getElementById('f4_logo');
	f4_text = document.getElementById('f4_text');
	f4_text1 = document.getElementById('f4_text1');
	f1_image = document.getElementById('f1_image');
	f2_image = document.getElementById('f2_image');
	f3_image = document.getElementById('f3_image');
	f4_image = document.getElementById('f4_image');
	rateWrapper = document.getElementById('rateWrapper');
	rate_logo = document.getElementById('rate_logo');
	rate = document.getElementById('rate');
	rate_text = document.getElementById('rate_text');
	rate_text1 = document.getElementById('rate_text1');
	cta = document.getElementById('cta');
	mebank_logo_tc = document.getElementById('mebank-logo-tc');
	tncs_btn = document.getElementById('tncs-btn');
	tncs_header = document.getElementById('tncs-header');
	tncs_copy = document.getElementById('tncs-copy');
	banner = document.getElementById('banner');

	//Split bg & text color
	f1_bg_text_color = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_bg_text_color;
	f2_bg_text_color = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_bg_text_color;
	f3_bg_text_color = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_bg_text_color;
	f4_bg_text_color = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_bg_text_color;
	rate_bg_text_color = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_bg_text_color;
	cta_bg_text_color = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].cta_bg_text_color;
	frame_timing = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].frame_timing;
	f1_style_color = f1_bg_text_color.split(/[.,\/ -]/) //Array output
	f2_style_color = f2_bg_text_color.split(/[.,\/ -]/)
	f3_style_color = f3_bg_text_color.split(/[.,\/ -]/)
	f4_style_color = f4_bg_text_color.split(/[.,\/ -]/)
	rate_style_color = f4_bg_text_color.split(/[.,\/ -]/)
	cta_style_color = cta_bg_text_color.split(/[.,\/ -]/)
	frameTiming = frame_timing.split(/[,\/ -]/)


	banner.style.cssText = "background-color:" + dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].banner_bg_color;
	frame1.style.cssText = "background-color:" + f1_style_color[0];
	frame2.style.cssText = "background-color:" + f2_style_color[0];
	frame3.style.cssText = "background-color:" + f3_style_color[0];
	frame4.style.cssText = "background-color:" + f4_style_color[0];
	frame1.className += " style" + dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_style_align;
	frame2.className += " style" + dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_style_align;
	frame3.className += " style" + dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_style_align;
	frame4.className += " style" + dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_style_align;
	f1_logo.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_logo.Url;
	f2_logo.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_logo.Url;
	f3_logo.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_logo.Url;
	f4_logo.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_logo.Url;
	f1_text.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_text;
	f1_text.style.cssText = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_font_style_value + "color:" + f1_style_color[1];
	f1_text1.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_text1;
	f1_text1.style.cssText = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_t1_font_style_value + "color:" + f1_style_color[1];
	f1_image.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_image.Url;
	f2_text.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_text;
	f2_text.style.cssText = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_font_style_value + "color:" + f2_style_color[1];
	f2_text1.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_text1;
	f2_text1.style.cssText = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_t1_font_style_value + "color:" + f2_style_color[1];
	f2_image.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_image.Url;
	f3_text.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_text;
	f3_text.style.cssText = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_font_style_value + "color:" + f3_style_color[1];
	f3_text1.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_text1;
	f3_text1.style.cssText = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_t1_font_style_value + "color:" + f3_style_color[1];
	f3_image.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_image.Url;
	f4_text.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_text;
	f4_text.style.cssText = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_font_style_value + "color:" + f4_style_color[1];
	f4_text1.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_text1;
	f4_text1.style.cssText = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_t1_font_style_value + "color:" + f4_style_color[1];
	f4_image.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_image.Url;
	cta.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].cta_button_text;
	rateWrapper.style.cssText = "background-color:" + f4_style_color[0];
	rate_logo.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_logo.Url;
	rate.innerHTML = '<span class="percentage">' + parseFloat(dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate).toFixed(2) + '</span><span class="percent">%</span><span class="per-a">p.a.<sup>(1)</sup></span>';
	rate_text.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_text;
	rate_text1.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].rate_text1;
	cta.style.cssText = "color:" + cta_style_color[1] + "; background-color:" + cta_style_color[0] + ";" + dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].cta_font_style;
	//wrapper.className += "style" + dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].banner_style_align;
	mebank_logo_tc.src = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_logo.Url;
	tncs_btn.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_btn;
	tncs_header.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_headline;
	tncs_copy.innerHTML = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_body_text;
	tncs_header.style.cssText = tncs_copy.style.cssText = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_font_style;

	exitUrl = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].exitUrl.Url;

	//Return frame status, Text transitions & Tncs status
	f3_status = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_status;
	f4_status = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_status;
	f1T = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_text_transition;
	f2T = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_text_transition;
	f3T = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_text_transition;
	f4T = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_text_transition;
	f1_align = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f1_style_align;
	f2_align = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f2_style_align;
	f3_align = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f3_style_align;
	f4_align = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].f4_style_align;
	terms_status = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_status;
	rateStatus = dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].display_at;

	boilerplate.clickTag();
	boilerplate.termsNconditions();

	//Execute Animation
	//Check images loading before proceed animation
	var imgs = document.images,
		len = imgs.length,
		counter = 0;

	[].forEach.call(imgs, function (img) {
		img.addEventListener('load', incrementCounter, false);
	});

	incrementCounter();

	function incrementCounter() {
		counter++;
		if (counter === len) {
			console.log('All images loaded!');
			boilerplate.executeAnimation();
		}
	}
	//End animation function

}

//Animate contents
boilerplate.executeAnimation = function () {
	
	var frames = {
		//Frame 1		
		setFrame1: function() {
			tl.to('#frame1', .50, {opacity: 1},'-=0.5')
			.to('#f1_image', .50, {opacity: 1},'-=0.5')
			if (rateStatus == "f1") {
				rate();
			} else {
				textAnimation(f1T,'#f1_text','#f1_text1',f1_align);
			}
			
		},
		//Frame2
		setFrame2: function() {
			tl.to('#frame2', .50, {opacity: 1}, '+=' + frameTiming[0])
			.to('#f2_logo,#f2_image', .50, {opacity: 1},'-=0.5')
			if (rateStatus == "f2") {
				rate();
			} else {
				textAnimation(f2T,'#f2_text','#f2_text1',f2_align);
			}
			
		},
		//Frame3
		setFrame3: function() {
			tl.to('#frame3', .50, {opacity: 1}, '+=' + frameTiming[1])
			.to('#f3_logo,#f3_image', .50, {opacity: 1},'-=0.5')
			if (rateStatus == "f3") {
				rate();
			} else {
				textAnimation(f3T,'#f3_text','#f3_text1',f3_align);
			}
			
		},
		//Frame4
		setFrame4: function() {
			tl.to('#frame4', .50, {opacity: 1}, '+=' + frameTiming[2])
			.to('#f4_logo,#f4_image', .50, {opacity: 1},'-=0.5')
			if (rateStatus == "f4") {
				rate();
			} else {
				textAnimation(f4T,'#f4_text','#f4_text1',f4_align);
			}
			
		}
	}
	
	//Timeline
	var tl = new TimelineMax({
		repeat: 0,
		repeatDelay: 10
	});

	tl.call(frames.setFrame1)
	.call(frames.setFrame2)
	if (f3_status == true) { tl.call(frames.setFrame3) }
	if (f4_status == true) { tl.call(frames.setFrame4) }
	if (terms_status == true) {TweenMax.to('#tncs-btn', .50, {opacity: 1, bottom: -1, ease: Power2.easeInOut}, '-=0.5'),TweenMax.to('#cta', .0, {})}
	//End Timeline
	
	//Text animation
	function textAnimation(text_animation, t1, t2, ctaFrameAlign) {
		if (text_animation == 'fade in') {
			tl.set(t1+','+t2, {left: 0})
			.to(t1, .50, {opacity:1, left: 0},'-=0.5')
			.to(t2, .50, {opacity:1, left: 0},'-=0.2')
		} else if (text_animation == 'slide in from left') {
			tl.set(t1+','+t2,{left: -40})
			.to(t1, .50, {opacity:1, left: 0, ease: Power2.easeOut},'-=0.0')
			.to(t2, .50, {opacity:1, left: 0, ease: Power2.easeOut},'-=0.2')
		} else if (text_animation == 'slide in from top') {
			tl.set(t1+','+t2,{top: -40})
			.to(t1, .50, {opacity:1, top: 0, ease: Power2.easeOut},'-=0.0')
			.to(t2, .50, {opacity:1, top: 0, ease: Power2.easeOut},'-=0.2')
		} else if (text_animation == 'slide in from right') {
			tl.set(t1+','+t2, {left: 40})
			.to(t1, .50, {opacity:1, left: 0, ease: Power2.easeOut},'-=0.0')
			.to(t2, .50, {opacity:1, left: 0, ease: Power2.easeOut},'-=0.2')
		} else if (text_animation == 'slide in from bottom') {
			tl.set(t1+','+t2, {top: 40})
			.to(t1, .50, {opacity:1, top: 0, ease: Power2.easeOut},'-=0.0')
			.to(t2, .50, {opacity:1, top: 0, ease: Power2.easeOut},'-=0.2')
		}
		
		//Cta alignment
		if (ctaFrameAlign == "left") {
			tl.to('#cta', .50, {opacity: 1, ease: Power2.easeInOut},'-=0.5')
		} else {
			tl.to('#cta', .50, {opacity: 1, ease: Power2.easeInOut},'-=1.0')
		}
	}
	
	//Apply dynamic rate feed to selected frame
	function sortingRate() {
		if (rateStatus == "f1") {
			frame1.innerHTML = "";
			frame1.append(rateWrapper);
			frame1.style.cssText = "padding:0; opacity:1;";
		} else if (rateStatus == "f2") {
			frame2.innerHTML = "";
			frame2.append(rateWrapper);
			frame2.style.cssText = "padding:0; opacity:1;";
		} else if (rateStatus == "f3") {
			frame3.innerHTML = "";
			frame3.append(rateWrapper);
			frame3.style.cssText = "padding:0; opacity:1;";
		} else if (rateStatus == "f4") {
			frame4.innerHTML = "";
			frame4.append(rateWrapper);
			frame4.style.cssText = "padding:0; opacity:1;";
		}
	}
	sortingRate();
	
	//Rate
	function rate() {
		tl.to('#rateWrapper', .50, {opacity: 1}, '-=0.5')
		.to('#rate', .50, {opacity: 1,ease: Power2.easeInOut}, '-=0.5')
		.to('#cta', .50, {opacity: 1, ease: Power2.easeInOut}, '-=0.5')
		.to('#rate_text,#rate_logo', .50, {opacity: 1, ease: Power2.easeInOut}, '-=0.3')
		.to('#rate_text1', .50, {opacity: 1, ease: Power2.easeInOut}, '-=0.3')
	}
	
	function ctaHover() {
		//Cta Button Effect
		document.getElementById('click_through').onmouseover = function () {
		TweenMax.to('#cta', 0.3, {
			padding: "8px 16px 9px 16px",
			backgroundColor: "none",
			borderColor: cta_style_color[0],
			border: "2px",
			borderStyle: "solid",
			color: cta_style_color[0],
			ease: Power3.easeOut
			});
		}
		document.getElementById('click_through').onmouseout = function () {
		TweenMax.to('#cta', 0.3, {
			padding: "10px 18px 11px 18px",
			backgroundColor: cta_style_color[0],
			border: "0px",
			color: cta_style_color[1],
			ease: Power3.easeOut
			});
		}
	}
	ctaHover();
}

//Clicktag
boilerplate.clickTag = function () {
	click_through.onclick = function () {
		Enabler.exitOverride('Background Exit', exitUrl);
	};
};

//T&Cs
boilerplate.termsNconditions = function () {
	var tncs_btn = document.getElementById('tncs-btn');
	var tncs_fullstage = document.getElementById('tncs-fullstage');
	var close_btn = document.getElementById('close-btn');
	tncs_btn.onclick = function () {
		tncs_fullstage.style.cssText = "opacity:1; z-index: 1000000;" + "background-color:" + dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_bg_color + ";";
	}
	close_btn.onclick = function () {
		tncs_fullstage.style.cssText = "opacity:0; z-index: 0;" + "background-color:" + dynamicContent.ME_Bank_dynamic_creative__phase_2_728x90[0].tcs_bg_color + ";";
	}
}

window.onload = function () {
	boilerplate.loadFunction();
}