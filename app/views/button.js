'use strict';

var React = require('react-native');
var {
    TouchableOpacity,
    Text
} = React;

var Button = React.createClass({
    onPress: function()
    {
        if (void(0) !== this.props.onPress)
        {
            this.props.onPress();
        }
    },
    render: function()
    {
        return (<TouchableOpacity onPress={() => {this.onPress()}}><Text>{this.props.children}</Text></TouchableOpacity>);
    }
});

module.exports = Button;
