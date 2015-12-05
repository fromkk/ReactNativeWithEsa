'use strict';

var React = require('react-native');
var {
    StyleSheet
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowText: {
        textAlign: 'left'
    }
});

module.exports = styles;
