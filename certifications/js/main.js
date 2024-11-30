;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("<i></i>Phone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	
	

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-close-offcanvas");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('#fh5co-offcanvas').hasClass('animated fadeInLeft') ) {

    			$('#fh5co-offcanvas').addClass('animated fadeOutLeft');
				setTimeout(function(){
					$('#fh5co-offcanvas').css('display', 'none');	
					$('#fh5co-offcanvas').removeClass('animated fadeOutLeft fadeInLeft');
				}, 1000);
				$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

		$('body').on('click', '.js-fh5co-close-offcanvas', function(event){
		

	  		$('#fh5co-offcanvas').addClass('animated fadeOutLeft');
			setTimeout(function(){
				$('#fh5co-offcanvas').css('display', 'none');	
				$('#fh5co-offcanvas').removeClass('animated fadeOutLeft fadeInLeft');
			}, 1000);
			$('.js-fh5co-nav-toggle').removeClass('active');

	    	event.preventDefault();

		});

	};

	

	

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			var $this = $(this);

			$('#fh5co-offcanvas').css('display', 'block');
			setTimeout(function(){
				$('#fh5co-offcanvas').addClass('animated fadeInLeft');
			}, 100);
			
			// $('body').toggleClass('fh5co-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

	};

	var scrolledWindow = function() {

		$(window).scroll(function(){

			var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();


		   $('#fh5co-home .flexslider .fh5co-overlay').css({
				'opacity' : (.5)+(scrlTop/2000)
		   });

		   if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		 
		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});
		
	};


	

	// Page Nav
	var clickMenu = function() {
		var topVal = ( $(window).width() < 769 ) ? 0 : 58;

		$(window).resize(function(){
			topVal = ( $(window).width() < 769 ) ? 0 : 58;		
		});

		if ( $(this).attr('href') != "#") {
			$('#fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"])').click(function(event){
				var section = $(this).data('nav-section');


				if ( $('div[data-section="' + section + '"]').length ) {

					$('html, body').animate({
			        	scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
			    	}, 500);	
			    	
			   }
			   event.preventDefault();

			});
		}

		


	};


	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );


	};


    // Function to generate HTML content dynamically
	function loadCertificates() {
		const container = document.querySelector('.fh5co-post-entry');
		
		certificates.forEach((cert, index) => {
			const article = document.createElement('article');
			article.className = 'col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box';
			
			article.innerHTML = `
				<figure>
					<img src="${cert.thumb}" alt="${cert.altText}" class="img-responsive cert-thumbnail" draggable="false">
				</figure>
				<span class="fh5co-meta"><a href="${cert.providerLink}" target="_blank">${cert.provider}</a></span>
				<h2 class="fh5co-article-title">${cert.title}</a></h2>
				<span class="fh5co-meta fh5co-date">${cert.date}</span>
			`;
			
			// Add click event listener to show popup
			article.querySelector('.cert-thumbnail').addEventListener('click', () => showPopup(cert));
			
			container.appendChild(article);
			
			if ((index + 1) % 4 === 0) {
				const clearfixDiv = document.createElement('div');
				clearfixDiv.className = 'clearfix visible-lg-block visible-md-block visible-sm-block visible-xs-block';
				container.appendChild(clearfixDiv);
			}
		});
	}
	
	function showPopup(cert) {
		const popupOverlay = document.getElementById('popup-overlay');
		const popupImage = document.getElementById('popup-image');
		const downloadBtn = document.getElementById('download-btn');
		const verifyLink = document.getElementById('verify-link');
		
		// Set image, verify, and download links
		popupImage.src = cert.image;
		verifyLink.href = cert.verification;
		downloadBtn.onclick = () => {
			const a = document.createElement('a');
			a.href = cert.image;
			a.download = cert.altText || 'certificate.jpg'; 
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		};
		// Display the popup
		popupOverlay.style.display = 'flex';
	}

	document.getElementById('popup-overlay').addEventListener('click', (e) => {
		if (e.target === document.getElementById('popup-overlay') || e.target.id === 'popup-close') {
			document.getElementById('popup-overlay').style.display = 'none';
		}
	});
	
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			document.getElementById('popup-overlay').style.display = 'none';
		}
	});
	
	
	// Document on load.
	$(function(){

		mobileMenuOutsideClick();
		burgerMenu();
		scrolledWindow();
		loadCertificates();
		contentWayPoint();

	});
	
	
}());