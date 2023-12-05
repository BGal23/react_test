import PropTypes from "prop-types";
import form from "./form.module.css";
import { Component } from "react";

const data = {
  login: "",
  email: "",
  password: "",
  gender: null,
  Gender: {
    man: "man",
    woman: "woman",
  },
  age: "",
  agree: false,
};

class Form extends Component {
  state = { ...data };

  handleChange = (event) => {
    console.log(event.target);

    const { name, value, type, checked } = event.target;

    console.log({ [name]: type === "checkbox" ? checked : value });

    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { login, email, password, agree, gender, age } = this.state;

    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password},, Gender: ${gender}, Age: ${age} Accept: ${agree}`
    );

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...data });
  };

  render() {
    const { login, email, password, agree, gender, age } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={form.main}>
        <label>
          <span>Login: </span>
          <input
            type="text"
            placeholder="Your login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>Email: </span>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>Password: </span>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div>Choose your gender:</div>
          <br />
          <span>Man </span>
          <input
            type="radio"
            id="1g"
            name="gender"
            checked={gender === data.Gender.man}
            value={data.Gender.man}
            onChange={this.handleChange}
          />
          <span>Woman </span>
          <input
            type="radio"
            id="2g"
            name="gender"
            checked={gender === data.Gender.woman}
            value={data.Gender.woman}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div>Choose your age:</div>
          <br />
          <select name="age" value={age} onChange={this.handleChange}>
            <option id="1a" value="" disabled>
              ...
            </option>
            <option id="2a" value="0-17 years">
              0-17 years
            </option>
            <option id="3g" value="18-64 years">
              18-64 years
            </option>
            <option id="4g" value="65+ years">
              65+ years
            </option>
          </select>
        </label>
        <label>
          <span>Accept regimen </span>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={this.handleChange}
          />
        </label>
        <button className={form.btn} type="submit" disabled={!agree}>
          Sing In {login}
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};
