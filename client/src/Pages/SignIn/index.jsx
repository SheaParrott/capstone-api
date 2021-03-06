import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

class SignIn extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="columnCentering">
        <h1 className="AppName">Community</h1>
        <main className="show">
          <div className="flex">
            <Link to="/login" className="white">
              <div>LOGIN / SIGN UP</div>
            </Link>
          </div>
          <div className="b-lv" />
        </main>
        <main className="hide columnCentering">
          <div>
            <section className="signUp columnCentering">
              <Link to="/login">
                <button className="signin" onClick={this.signUp}>
                  LOG IN / SIGN UP
                </button>
              </Link>
            </section>
          </div>
          <section className="signInMission">
            <div className="signInMissionStatements">
              <i className="fas fa-hands-helping primary-text" />
              <p className="signInMissionStatements primary-text">HELP</p>
            </div>
            <i className="fas fa-arrow-right primary-text" />
            <div className="signInMissionStatements">
              <i className="fas fa-lightbulb primary-text" />
              <p className="signInMissionStatements primary-text">INSPIRE</p>
            </div>
            <i className="fas fa-arrow-right primary-text" />
            <div className="signInMissionStatementsRight">
              <i className="fab fa-connectdevelop primary-text" />
              <p className="signInMissionStatementsRight primary-text">
                CONNECT
              </p>
            </div>
          </section>
          <section className="mission columnCentering widthSmall">
            <p className="missionStatement">
              Here in the <i>Community</i> our goal is to provide a safe place
              to help one another out and spread good vibes. This is a platform
              to ask questions, seek out assistance, grow community, and maybe
              even pick up a new hobby. Thanks for taking the time to read about
              us. We hope you enjoy the <i>Community</i>.
            </p>
          </section>
        </main>
      </div>
    )
  }
}

export default SignIn
