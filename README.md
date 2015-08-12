### This plugin provides a way to spell characters from a string and present it to the user. 

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/spellit.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#code").spellIt({
		className: "spellify",//optional class to be added to the table
		target: "result",//id name
		getTabulatedResult: true // appends a table to the specified target
	});
	```
## Guides

Call it on the element which contains the code and that's it. If you have your own way of representing the spellified code. Just set the getTabulatedResult option to false and it will return an array of the spellified code.

	```javascript
	var spellifiedCode = $("#code").spellIt({
							className: "spellify",
							getTabulatedResult: false
						});
	//returns ["Alfa", "Romeo", "Tango"]
	```

Available options: 

	```html
	 	className: "anyClass" ( Use this option to add a class to the table created.)
	
	 	target: "target-ID" (Specify the ID of the element to which the result should be appended to.)
	
	 	getTabulatedResult: true (true by default, returns a HTML table appended to the target
							, if set to false it will give an array of the spellified characters)
    ```							

## Examples

Coming Soon 

## Contributing

Check [CONTRIBUTING.md](https://github.com/sahil290791/spell-It/blob/master/CONTRIBUTING.md) for more information.

## History

 for detailed changelog.

## License

[MIT License](https://github.com/sahil290791/spell-It/blob/master/LICENSE) © Sahil Prajapati

