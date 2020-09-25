import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import course from './course.png';
import stella from './stella.png';
import sunmart from './sunmart.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    console.log(course)
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Student Portal */}
          <Card shadow={5} style={{height: '450px', width: '29%',margin: 'auto'}}>
            <CardTitle className="myProject"></CardTitle>
            <CardText style={{height:'100%', paddingTop: '0%'}}>
              <h3><b>Student Portal</b></h3>
            A student-teacher portal to register to online courses and automatically
  grade assignments.
  <br></br>Technologies: AWS, NodeJS, ExpressJS, ReactJS, DynamoDB.

</CardText>
            <CardActions border>
              <Button href="https://github.com/karankc27/React-Student-Portal " colored>GitHub</Button>
              <Button href="http://student-portal-react.s3-website.ap-south-1.amazonaws.com/" colored>Live Demo</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{height: '450px', width: '29%',margin: 'auto'}}>
            <CardTitle className="myProject sunmart"></CardTitle>
            <CardText style={{height:'100%', paddingTop: '0%'}}>
              <h4><b>SunMart: An Online Supermarket</b></h4>
            An online grocery store to order products available near the Customers
area and place the order using RazorPay Payment API.
</CardText>
            <CardActions border>
              <Button href="https://github.com/karankc27/Supermarket" colored>GitHub</Button>
              <Button href="https://www.sunmartket.com/" colored>Live Demo</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{height: '450px', width: '29%',margin: 'auto'}}>
            <CardTitle className="myProject stella"></CardTitle>
            <CardText style={{height:'100%', paddingTop: '0%'}}>
              <h4><b>Stella-EMT: A Rating Website</b></h4>
           
            An application to view and rate E-Devices, Movies and TV Shows.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/karankc27/Stella-EMT" colored>GitHub</Button>
              <Button href="https://stella-emt.herokuapp.com/about" colored>Live Demo</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card><br></br>
          <br></br>
          
          {/* Project 4*/}
        
        </div>


      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>PROJECTS</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
