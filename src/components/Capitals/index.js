import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onClickedChange = event => {
    this.setState({
      activeId: event.target.value,
    })
  }

  getCountry = () => {
    const {activeId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="counties-and-capitals-heading">
            Countries and Capitals
          </h1>
          <div className="select-container">
            <select
              className="capital-select"
              value={activeId}
              onChange={this.onClickedChange}
            >
              {countryAndCapitalsList.map(eachItemList => (
                <option
                  key={eachItemList.id}
                  value={eachItemList.id}
                  className="option"
                >
                  {eachItemList.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
