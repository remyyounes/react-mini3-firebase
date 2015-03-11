var React = require("react");
var AddList = React.createClass({

  getInitialState: function() {
    return {
      listName: ""
    };
  },

  handleChange: function(e) {
    this.setState({
      listName: e.target.value
    });
  },

  handleKey: function(e) {
    if (e.key ==="Enter") this.handleSubmit();
  },
  handleSubmit: function() {
    this.props.add(this.state.listName);
    this.setState({ listName: "" });
  },


  render: function() {
    return (
      <div>
      <h3 className="text-center">Create New List</h3>
        <input
          value={this.state.listName}
          placeholder="List Name"
          onChange={this.handleChange}
          onKeyDown={this.handleKey}
        />
        <button
          className="btn btn-primary"
          onClick={this.handleSubmit}> Submit </button>
      </div>
    );
  }
});

module.exports = AddList;
