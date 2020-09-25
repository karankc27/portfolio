import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: 'auto', height: 'auto', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("./karan-main.jpg")}
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>

            <hr/>

          <p> JavaScript | ReactJS |  NodeJS | Express | MongoDB | AWS | Java | HTML/CSS | Bootstrap |  MySQL</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/karankc27/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/karankc27" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
