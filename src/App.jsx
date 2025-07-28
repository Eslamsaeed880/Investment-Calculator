import UserInputs from "./components/UserInputs"
import Results from "./components/Result"
import { useState } from "react"

function App() {

  const [userInputs, setUserInputs] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
        setUserInputs({ ...userInputs, [inputIdentifier]: +newValue });
    };
  

  return (
    <>
      <UserInputs 
        userInputs={userInputs} 
        onChange={handleChange} 
      />
      {userInputs.duration < 1 && <p className="center">Duration must be at least 1 year.</p>}
      {userInputs.duration > 0 && <Results userInputs={userInputs} />}
    </>
  )
}


export default App
