import React from "react";
import { useState } from "react";


export default function UserInputs() {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualContribution, setAnnualContribution] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    return (
        <div id="user-input">

          <div className="input-group">
            <p>
              <label htmlFor="initial-investment">Initial Investment</label>
              <input type="number" id="initial-investment" required/>
            </p>
            <p>
              <label htmlFor="annual-contribution">Annual Contribution</label>
              <input type="number" id="annual-contribution" required/>  
            </p>
          </div>  
          <div className="input-group">
            <p>
              <label htmlFor="expected-return">Expected Return (%)</label>
              <input type="number" id="expected-return" required/>
            </p>
            <p>
              <label htmlFor="duration">Duration (years)</label>
              <input type="number" id="duration" required/>
            </p>
          </div>
      </div>
    )
}