/* Copyright (C) 121 Marketing - 121marketing.com */

/* ========================================================================
   1-2-1 Modifications - Master
 ========================================================================== */

jQuery(function($) {  

/* ========================================================================
   Lochmount Specific ADA fixes
 ========================================================================== */	
 
	// Social Icons 

		$('.tm-footer [class^=uk-icon-]').each(function() {
			$this = $(this);
			$className = $this.attr('class');
			$className = $className.replace('uk-icon-','');
			$this.attr('aria-label', $className.charAt(0).toUpperCase() + $className.slice(1));
			$this.html('<span class="uk-hidden">' + $className.charAt(0).toUpperCase() + $className.slice(1) + '</span>');
		});


});