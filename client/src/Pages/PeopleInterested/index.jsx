import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import profileimg from '../../assets/picklerick.jpg'
import Header from '../../Components/Header'
import imageOrDefault from '../../imageOrDefault'

class MyCommunity extends Component {
  render() {
    return (
      <div className="columnCentering">
        <Header />
        <div className="marginFromHeader">
          <div className="PeopleInterestedBox">
            <section className="PeopleInterestedBox">
              <Link to={`/Profile/${this.props.profile_id}`}>
                <img
                  className="PeopleInterestedProfileImage"
                  src={imageOrDefault(profileimg)}
                  alt="profile"
                />
              </Link>
              <Link to={`/Profile/${this.props.profile_id}`}>
                <h3 className="PeopleInterested">Pickle Rick</h3>
              </Link>
              <i className="fas fa-ellipsis-v" />
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default MyCommunity
