var React = require("react");
var ListContainer = require('./ListContainer');
var AddList = require('./AddList');





var App = React.createClass({
  getInitialState: function() {
    return {
      lists: []
    }
  },
  handleRemoveList: function(index) {
    // this.state.lists = [1,2,3];
    var newLists = this.state.lists.splice();
    newLists.splice(index, 1);
    this.setState({ lists: newLists });
  },

  addNewList: function(newTitle) {
    var list = {
      title: newTitle,
      index: this.state.lists.length
    };

    this.setState({
      lists: this.state.lists.concat([list])
    });
  },
  render: function() {
    var componentList = this.state.lists.map( function(list, index) {
      return <ListContainer
        key={index}
        index={index}
        title={list.title}
        remove={this.handleRemoveList}
      />
    }.bind(this));

    return (
      <div className="container">
        <AddList add={this.addNewList}/>
        <div className="row">
          {componentList}
        </div>
      </div>
    );
  }
});


React.render( <App/>, document.getElementById("app") );
