# HTML5-FormRefiller

Saves the data from a HTML5-Form into the local storage on submit, and refills the form on the next visit.

## How to use

- Include jQuery `<script src="../external/jquery-2.2.1.min.js"></script>`
- include html5FormRefiller.js `<script src="../src/html5FormRefiller.js"></script>`
- Add an attribute to every input, select etc you want to save `<select name="select" class="form-control" save>`
- call the plugin on your form

``` html
<form id="myForm" action="#" method="POST">
			
	<div class="form-group">
		<label for="exampleInputPassword1">Input</label>
		<input type="text" name="input" class="form-control" id="exampleInputPassword1" placeholder="Password" save>
	</div>
	
	<button type="submit" class="btn btn-default">Submit</button>
</form>
```

``` javascript
$(function() {
	saver = $("#myForm").formRefiller({
		saveAttribute: "save"
	});
});
```

## Options

- saveAttribute [String]: Elements with this attribute will be saved. Default: "save"
- storagename [String]: Key of the Key/Value-Pair which will be stored in the local storage.

## Methods

- saveData: Saves the data in the local storage.
- refillData: Gets the data from the local storage and puts it back into the form.

## Callbacks

- beforeSave: Function will be executed before the data is saved.
- afterSave: Function will be executed after the data is saved.
- beforeRefill: Function will be executed before the form will be refilled.
- afterRefill: Function will be executed after the form is refilled.
