/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    ListView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
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

import Api_Teams from './app/components/api/teams';

var esa = React.createClass({
    getInitialState: function()
    {
        return {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          loaded: false,
        };
    },
    componentDidMount: function()
    {
        this.fetchData();
    },
    fetchData: function()
    {
        var api = new Api_Teams();
        api.list((json) =>
        {
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(json.teams),
              loaded: true,
            });
        }, (error) =>
        {
            console.warn(error);
        });
    },
    render: function()
    {
        if (!this.state.loaded)
        {
            return this.renderLoadingView();
        }

        return (<ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />);
    },
    renderLoadingView: function()
    {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>);
    },
    renderRow: function(row)
    {
        return (
            <TouchableHighlight onPress={() => this.onTappedRow(row)}>
                <View style={styles.row}>
                    <Image source={{uri: row.icon}} />
                    <Text style={styles.rowText}>{row.name}</Text>
                </View>
            </TouchableHighlight>
        );
    },
    onTappedRow: function(row)
    {
        console.log("tapped!!", row);
    }
});

AppRegistry.registerComponent('esa', () => esa);
