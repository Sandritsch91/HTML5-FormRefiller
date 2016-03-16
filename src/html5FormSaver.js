/*
TODO:

- Callbacks
- README
 */


(function ( $ ) {
 
	$.fn.formSaver = function( options ) {
		
		// Get Settings
		var settings = $.extend({
			saveAttribute	 	: "save",
			storageName			: "myFormData"
		}, options );

		// Instance
		var instance = this;

		
		/**
		 * Function gets the data from localStorage and puts it 
		 * in the form
		 * @return {[type]} [description]
		 */
		this.getDataFromLocalStorage = function() {
			
			// get the Data
			var data = localStorage.getItem(settings.storageName);
			data = $.parseJSON(data);
			
			$.each( data, function() {
				var item = this;
				var element = $("[name='"+this.name+"']");

				// checkbox
				if ( element.attr("type") === "checkbox" ) {
					element.prop("checked", true);
				}
				// radio - buttons
				else if ( element.attr("type") === "radio" ) {
					//element.
					var radio = element = $("[value='"+this.value+"']");
					radio.prop("checked", true)
				}
				// select / select multiple
				else if ( element.is("select")  ) {
					var option = element.find("option[value='"+this.value+"']");
					option.prop("selected", true);
				}
				// input / texteara
				else {
					element.val(item.value);					
				}
			});
		}


		/**
		 * Function gets the data from the form and puts it
		 * in localStorage
		 */
		this.setDataInLocalStorage = function() {

			// Create JSON-Format
			var toSave = $("["+settings.saveAttribute+"]").serializeArray();
			toSave = JSON.stringify(toSave);

			// Save to localStorage
			localStorage.setItem(settings.storageName, toSave);
		}


		// Bind onSubmit-Event
		this.submit(function() {
			instance.setDataInLocalStorage();
			return true;
		});


		// get data from localStorage
		this.getDataFromLocalStorage();
		
		return this;
		
	};
 
}( jQuery ));