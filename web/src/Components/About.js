import React, {Component} from 'react';

class About extends Component {
  render() {

    if (this.props.data) {
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">

          </div>
          <div className="nine columns main-col">
            <h2>L'équipe : Les Nymbus 2000</h2><p>{bio}</p>
          </div>
          <div className="nine columns main-col">
            <h2>Nous contacter</h2>
            <p className="address">
             <span>{street}<br/>
               {city} {state}
             </span><br/>
              <span>{phone}</span><br/>
              <span>{email}</span>
            </p>
          </div>

        </div>

      </section>
    );
  }
}

export default About;
