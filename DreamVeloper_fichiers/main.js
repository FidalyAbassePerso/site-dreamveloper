$(document).ready(function() {
			$('a').on('click', function() { // Au clic sur un élément
				var anchor = $(this).attr('href'); // Page cible
				if (anchor == '#'){
					$('html, body').animate( { scrollTop: 0 }, 700 ); // Go
				}

				$('html, body').animate( { scrollTop: $(anchor).offset().top }, 700 ); // Go
				return false;
			});
});