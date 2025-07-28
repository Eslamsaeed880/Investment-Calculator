import { calculateInvestmentResults, formatter } from "../util/investment"


function calculateTotalInterest(results) {
  for(let i = 0; i < results.length; i++) {
    results[i].totalInterest = results[i].interest + (i > 0 ? results[i - 1].totalInterest : 0);
    results[i].totalInvestment = results[i].annualInvestment + (i > 0 ? results[i - 1].totalInvestment : 0);
  }
}

function calculateTotalInvestment(results, initialInvestment) {
  results[0].totalInvestment = initialInvestment + results[0].annualInvestment;
  for(let i = 1; i < results.length; i++) {
    results[i].totalInvestment = results[i - 1].totalInvestment + results[i].annualInvestment;
  }

}

export default function Results({ userInputs }) {
  console.log(userInputs);
    const results = calculateInvestmentResults(userInputs);
    calculateTotalInterest(results);
    calculateTotalInvestment(results, userInputs.initialInvestment);
    const renderRows = results.map((res) => {
      return (
        <tr key={res.year}>
          <td>{res.year}</td>
          <td>{formatter.format(res.valueEndOfYear)}</td>
          <td>{formatter.format(res.interest)}</td>
          <td>{formatter.format(res.totalInterest)}</td>
          <td>{formatter.format(res.totalInvestment)}</td>
        </tr>
      );
    })

    return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {renderRows}
        </tbody>
      </table>
    )
}