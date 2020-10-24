import React, {Component} from 'react';

class Resume extends Component {

  render() {

    if (this.props.data) {
      var probleme = this.props.data.probleme.map(function (probleme) {
        return <div key={probleme.titre}>
          <h3>Contexte</h3>
          <p>{probleme.description}</p></div>
      })
      var solution = this.props.data.solution.map(function (solution) {
        return <div key={solution.titre}>
          <h3>{solution.titre}</h3>
          <p>{solution.description}</p></div>
      })

    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Un besoin</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {probleme}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Une solution</span></h1>
          </div>

          <div className="nine columns main-col">
            {solution}
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
