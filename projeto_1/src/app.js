'use strict'

var React = require('react');
var CreateReactClass = require('create-react-class');

var Title = CreateReactClass({
    render: function () {
        return React.createElement('h1', null, 'Título');
    }
});

module.exports = Title;