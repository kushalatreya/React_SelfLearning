import React, { Component } from "react";
import PreviewComponent from "./components/PreviewComponent";

import "./App.css";

class App extends Component {
  state = {
    AppStatePosts: [
      {
        Name: "kushal",
        Ingridents: "Ingridents here",
        Description: "Description here",
        Type: "Type here",
        Process: "Process here"
      }
    ]
  };
  addPost = obj => {
    const tempPosts = this.state.AppStatePosts.slice();
    tempPosts.push(obj);
    this.setState({ AppStatePosts: tempPosts });
  };
  render() {
    return (
      <div className="App">
        <PreviewComponent addPost={this.addPost} />
      </div>
    );
  }
}

export default App;
