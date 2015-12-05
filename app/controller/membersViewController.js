'use strict';

var React = require('react-native');

var {
    ListView,
    Text
} = React;

var styles = require('../styles/general');

var MembersView = React.createClass({
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
        
    },
    renderRow: function(row)
    {
        return (
            <TouchableHighlight>
                <View style={styles.row}>
                    <Text style={styles.rowText}>{row.name}</Text>
                </View>
            </TouchableHighlight>
        );
    },
    render: function()
    {
        return (<ListView styles={styles.container} dataSource={this.state.dateSource} renderRow={this.renderRow} />);
    }
});

module.exports = MembersView;
