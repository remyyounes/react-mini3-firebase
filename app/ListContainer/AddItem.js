var React = require("react");

var AddItem = React.createClass({
  getInitialState: function() {
    return {
      newItem: ' '
    };
  },
  handleChange: function(e) {
    this.setState({
      newItem: e.target.value
    });
  },
  handleSubmit: function(e) {
    if(e.key === "Enter") {
      this.props.add(this.state.newItem);
    }
  },
  render: function() {
    return (
      <div>
        <input typpe="text"
          className="form-control"
          value={this.state.newItem}
          placeholder={"New Item"}
          onKeyDown={this.handleSubmit}
          onChange={this.handleChange} />
      </div>
    )
  }
});


module.exports = AddItem;
