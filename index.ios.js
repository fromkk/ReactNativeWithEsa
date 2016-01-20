/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    View,
    Text
} = React;

var RootView = require('./app/controller/rootViewController');
var MembersView = require('./app/controller/membersViewController');
var TeamDetailView = require('./app/controller/teamDetailViewController');

var esa = React.createClass({
    render: function()
    {
        return (<Navigator initialRoute={{name: 'esa', index: 0}} renderScene={(route, navigator) => {
            switch (route.id)
            {
                case 'teamDetail':
                    return (<TeamDetailView route={route} navigator={navigator} />);
                break;
                case 'membersView':
                    return (<MembersView route={route} navigator={navigator} />);
                break;
                default:
                    return (<RootView name={route.name} route={route} navigator={navigator} />);
                break;
            }
        }}  />);
    }
});

AppRegistry.registerComponent('esa', () => esa);
