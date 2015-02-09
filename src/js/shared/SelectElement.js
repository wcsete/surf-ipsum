'use strict';

var $               = require('../../../lib/jquery/jquery');

var proto;

// Markup for generated select element:
// 
// <div class="select-element">
//   <span class="select-value">paragraphs</span>
//   <ul class="select-list">
//     <li class="select-option selected">paragraphs</li>
//     <li class="select-option">titles</li>
//     <li class="select-option">lists</li>
//     <li class="select-option">words</li>
//   </ul>
// </div>

var SelectElement = function( ) {
	this.$element = $('<div class="select-element"></div>');
	this.$selectValue = $('<span class="select-value">paragraphs</span>');
	this.$optionsList = $('<ul class="select-list" tabindex="0"></ul>');
	this.selectOptions = [ 'paragraphs', 'titles', 'lists', 'words' ];

	this._init();

	return this.$element;
};

proto = SelectElement.prototype;



proto._init = function( ) {
	this._buildSelectElement();

	this._attachEvents();
};



proto._attachEvents = function( ) {
	this.$selectValue.on( 'click', this._openOptions.bind(this) );
};



proto._openOptions = function( evt ) {
	this.$element.addClass('focused');
	console.log('open up!');
};



proto._buildSelectElement = function( ) {
	// add span for the currently selected item
	this.$element.append(this.$selectValue);

	// add an option to the list for each item in this.selectOptions
	for (var i = 0; i < this.selectOptions.length; i++) {
		this.$optionsList.append($('<li class="select-option">' + this.selectOptions[i] + '</li>'));
	};

	// make the first li in the options list selected
	$('li:first', this.$optionsList).addClass('selected');

	// add the list of options to the select element
	this.$element.append(this.$optionsList);
};



module.exports = SelectElement;
