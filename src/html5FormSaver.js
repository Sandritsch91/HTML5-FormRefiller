(function ( $ ) {
 
    $.fn.formSaver = function() {
        
        var settings = $.extend({
            formSelector 		: "#form",
            saveAttribute	 	: "save"
        }, options );
		
		
		function getDataFromLocalStorage() {
			var toSave = $("[save]").serializeArray();

			$.each( toSave, function() {
				var item = localStorage.getItem("SPORT_"+this.name || "" );

				if ( item != "" ) {
					var element = $("[name='"+this.name+"']");
					element.val(item);
				}
			});
		}

		function setDataInLocalStorage() {
			var toSave = $("[save]").serializeArray();

			// Person Data in localstorage setzen
			$.each( toSave, function() {
				localStorage.setItem("SPORT_"+this.name, this.value)
			});
		}
		
		return this;
		
    };
 
}( jQuery ));