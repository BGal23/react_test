import PropTypes from "prop-types";
import form from "./form.module.css";
import { Component } from "react";

const data = {
  login: "",
  email: "",
  password: "",
};

class Form extends Component {
  state = { ...data };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...data });
  };

  render() {
    const { login, email, password } = this.state;
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
        <button type="submit">Sing In {login}</button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};
