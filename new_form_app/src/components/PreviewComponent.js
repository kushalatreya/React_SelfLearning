import React, { Component } from "react";

export default class PreviewComponent extends Component {
  state = {
    Name: "",
    Ingridents: "",
    Description: "",
    Type: "",
    Process: ""
  };
  saveSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state);
  };
  onNameChangeHandaler = e => {
    this.setState({ Name: e.target.value });
    console.log(e);
  };
  onIngridentsChangeHandaler = e => {
    this.setState({ Ingridents: e.target.value });
    console.log(e);
  };
  onDescriptionChangeHandaler = e => {
    this.setState({
      Description: e.target.value
    });
    console.log(e);
  };
  onTypeChangeHandaler = e => {
    this.setState({ Type: e.target.value });
    console.log(e);
  };
  onProcessChangeHandaler = e => {
    this.setState({ Process: e.target.value });
    console.log(e);
  };

  render() {
    return (
      <form className="m-5" onSubmit={this.saveSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Name of the dish"
              onChange={this.onNameChangeHandaler}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="Indrignts">Ingridents</label>
            <input
              type="text"
              className="form-control"
              id="Indrignts"
              placeholder="tomatoes sauce, garlic paste"
              onChange={this.onIngridentsChangeHandaler}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Description</label>
            <input
              type="text"
              className="form-control"
              id="Desc"
              placeholder="Description here "
              onChange={this.onDescriptionChangeHandaler}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputState">Type</label>
            <select
              id="inputState"
              className="form-control"
              onChange={this.onTypeChangeHandaler}
            >
              <option selected>Choose...</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Supper</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="Desc">Process</label>
          <textarea
            rows="4"
            cols="50"
            type="text"
            className="form-control"
            id="Process"
            placeholder="Please explain the process "
            onChange={this.onProcessChangeHandaler}
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Accept Terms and Condition
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
        <button type="button" className="btn btn-outline-warning m-1">
          Cancel
        </button>
      </form>
    );
  }
}
