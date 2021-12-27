import React, { Component } from "react";
import { icons } from "react-icons";
import "../App.css";
import background from "./images/bmw.jpeg"
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      phone: "",
      email: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ Name: e.target.value });

    const fm = e.target.value;
    console.log("/////////////", fm);
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleContact = (e) => {
    this.setState({ Contact: e.target.value });
  };

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();
    console.log(this.state);

    alert(`hey ${this.state.Name} your message was successful sent`);

    this.setState({ Name: "" });
  };

  render() {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
             
       
      <form className="form123">
      

        <div>
          <h2 icon="user">Contact Me</h2>
    
        <br/>
          <label> 
            Name :
            <input
              type="text"
              name="name"
              onChange={this.handleNameChange}
              value={this.state.Name}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Phone :
            <input type="text" name="name" />
          </label>
        </div>
        <br />
        <div>
          <label>
            Email :
            <input type="text" email="email" />
          </label>
        </div>
        <button
          style={{ background: "green", borderRadius: "12px" }}
          onClick={this.onFormSubmit}
        >
          {" "}
          Submit
        </button>
      </form>
      </div>
    );
  }
}

export default Contact;