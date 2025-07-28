import React from "react";


export default function UserInputs( { userInputs, onChange } ) {

    

    return (
        <div id="user-input">
          <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    value={userInputs.initialInvestment}
                    onChange={(e) => onChange("initialInvestment", e.target.value)}
                />
            </p>
            <p>
                <label>Annual Contribution</label>
                <input 
                    type="number" 
                    value={userInputs.annualInvestment}
                    onChange={(e) => onChange("annualInvestment", e.target.value)}
                />  
            </p>
          </div>  
          <div className="input-group">
            <p>
                <label>Expected Return (%)</label>
                <input 
                    type="number" 
                    value={userInputs.expectedReturn}
                    onChange={(e) => onChange("expectedReturn", e.target.value)}
                />
            </p>
            <p>
                <label>Duration (years)</label>
                <input 
                    type="number" 
                    value={userInputs.duration}
                    onChange={(e) => onChange("duration", e.target.value)}
                />
            </p>
          </div>
      </div>
    )
}