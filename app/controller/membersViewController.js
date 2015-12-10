'use strict';

var React = require('react-native');

var {
    ListView,
    Text,
    View,
    TouchableHighlight
} = React;

var styles = require('../styles/general');
import Api_Teams from '../components/api/teams';

var MembersView = React.createClass({
    getInitialState: function()
    {
        return {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          loaded: false,
          members: []
        };
    },
    componentDidMount: function()
    {
        this.fetchData(null);
    },
    fetchData: function(page)
    {
        var api = new Api_Teams();
        api.members(this.props.route.team.name, page, (json) =>
        {
            this.setState({members: this.state.members.concat(json.members)});

            if (null !== json.next_page)
            {
                this.fetchData(json.next_page);
            } else
            {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.state.members),
                    loaded: true
                });
            }

        }, (error) =>
        {
            console.warn(error);
        });
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
    renderLoadingView: function()
    {
        return (<View style={styles.container}><Text>Loading...</Text></View>);
    },
    render: function()
    {
        if (!this.state.loaded)
        {
            return this.renderLoadingView();
        }

        return (<ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />);
    }
});

module.exports = MembersView;
