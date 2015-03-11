var React = require('react');
var AddItem = require('./ListContainer/AddItem');
var List = require('./ListContainer/List');

var ListContainer = React.createClass({
    getInitialState: function() {
      return {
        list: []
      };
    },
    handleAddItem: function(newItem) {
      this.setState( {
        list: this.state.list.concat([newItem])
      });
    },
    handleRemoveItem: function(index) {
      var newList = this.state.list;
      newList.splice(index, 1);
      this.setState( { list: newList });
    },
    render: function() {
      var styles = {
        container: {
          border: "1px solid rgb(208, 208, 208)",
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 5
        },
        remove: {
          top: 15,
          color: "rgb(222, 79, 79)",
          float: "left",
          cursor: 'pointer'
        }
      };

      debugger;
      return (
        <div className="col-sm-6">
          <div className="col-sm-12" style={styles.container}>
            <span
              className="glyphicon glyphicon-remove"
              onClick={this.props.remove.bind(null, this.props.index)}
            />
            <h3 className="text-center"> {this.props.title} </h3>
            <AddItem add={this.handleAddItem}/>
            <List items={this.state.list} remove={this.handleRemoveItem}/>
          </div>
        </div>
      );
    }
});

module.exports = ListContainer;
