'use strict';

var React = require('react-native');

var {
    View,
    ListView,
    Text
} = React;
var Button = require('../views/button');
var styles = require('../styles/general');

var TeamDetailView = React.createClass({
    render: function()
    {
        return (
            <View style={styles.container}>
                <Button onPress={() => {
                    this.props.navigator.push({
                        id: 'membersView'
                    });
                }}>メンバー</Button>
            </View>
        );
    }
});

module.exports = TeamDetailView;
