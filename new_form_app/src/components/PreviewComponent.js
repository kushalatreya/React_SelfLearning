import React from "react";

export default function PreviewComponent() {
  return (
    <form className="m-5">
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="Name">Name</label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Name of the dish"
          />
        </div>
        <div className="form-group col-md-6">
          <label for="Indrignts">Ingridents</label>
          <input
            type="text"
            className="form-control"
            id="Indrignts"
            placeholder="tomatoes sauce, garlic paste"
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
          />
        </div>
        <div className="form-group col-md-6">
          <label for="inputState">Type</label>
          <select id="inputState" className="form-control">
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
        />
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Accept Terms and Condition
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-outline-success">
        Submit
      </button>
      <button type="submit" className="btn btn-outline-warning m-1">
        Cancel
      </button>
    </form>
  );
}
