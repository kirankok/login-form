import React, { useState } from 'react';
import './LoginForm.css'

export const LoginForm = () => {

  return (
    <form className="main-form">
      <div className="form-heading">
        <h3 className="form-title">Get started today!</h3>
      </div>
      <div className="form-container">
        <div className="row">
          <div className="column">
            <label className="form-label">First name</label>
            <input type="text" className="text-field" />
          </div>
          <div className="column">
            <label className="form-label">Last name</label>
            <input type="text" className="text-field" />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label className="form-label">Email address</label>
            <input type="email" className="text-field" />
          </div>
          <div className="column">
            <label className="form-label">Password</label>
            <input type="password" className="text-field" />
          </div>
        </div>

        <div className="row">
          <button className="trail-button">Claim Your Free Trail</button>
        </div>

        <div className="row">
          <p className="terms">You are agreeing to our <a href="#" className="terms-conditions">Terms and Services</a></p>
        </div>
      </div>
    </form>
  )
}
