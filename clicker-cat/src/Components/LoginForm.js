import React from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import logo from "../Assets/ClickerCat-logos/ClickerCat-logos_transparent.png";

const LoginForm = () => {
    return (
      <div className="container is-max-desktop">
        <section className="section">
            <div className="logoContainer">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            </div>
        </section>
        <section className="section">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-link is-medium"
                type="email"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-link is-medium"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="customCard">
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Login</button>
              </div>
              <div class="control">
                <a class="button is-link is-outlined" href="/register">
                  Register
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default LoginForm;