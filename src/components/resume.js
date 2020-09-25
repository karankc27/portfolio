import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div style={{paddingTop:'2em'}}>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require("./image.png")}
                alt="avatar"
                style={{height: '60%'},{width: '100%'}}
                 />
            </div>

            <h2 style={{paddingTop: '0em'}}>Karan Karamchandani</h2>
            <h4 style={{color: 'grey'}}>MERN Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Pagnis Paga, Indore, Madhya Pradesh, India, 452001</p>
            <h5>Phone</h5>
            <p>+91 9926523723</p>
            <h5>Email</h5>
            <p>karankaramchandani5@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3>Education</h3>


            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Medi-Caps University"
              schoolDescription= "B.Tech in Information Technology(IT)  CGPA - 7.9/10.0 (Upto 5th Sem )"
               />
             <hr style={{borderTop: '0.5px dotted grey'}} />
              
               <Education
                 startYear={2016}
                 endYear={2017}
                 schoolName="St. Paul Higher Secondary School"
                 schoolDescription="XII CBSE Boards             Percentage- 87%"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h3>Experience</h3>

            <Experience
              startYear={"August 2020"}
              endYear={"Present"}
              jobName="HealthRx (Bajaj Finserv Health Limited)"
              jobDescription="Backend Developer Intern"
              />
  
  <hr style={{borderTop: '0.5px dotted grey'}} />
              <Experience
                startYear={"November 2019"}
                endYear={"June 2020"}
                jobName="KSVS Solutions Pvt. Ltd."
                jobDescription="Full Stack Developer Intern to develop websites using MERN."
                />
                
             <hr style={{borderTop: '0.5px dotted grey'}} />
              <Experience
                startYear={"June 2019"}
                endYear={"July 2019"}
                jobName="Systematix Infotech Pvt. Ltd."
                jobDescription="Learned basics of web development, designing web pages, securing
                transactions, git, github and deploying project."
                />
                
             <hr style={{borderTop: '0.5px dotted grey'}} />
              <Experience
                startYear={"June 2018"}
                endYear={"August 2018"}
                jobName="Affimintus Technologies"
                jobDescription="Developed an Ecommerce Web application, customer web portal,
                university management website on MVC pattern."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h3>Skills</h3>
              <Skills
                skill="Java"
                progress={95}
                />
                <Skills
                  skill="AWS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={90}
                    />
                    <Skills
                      skill="ReactJS"
                      progress={75}
                      />
          <Skills
                      skill="MongoDB"
                      progress={70}
                      />
          
          <Skills
                      skill="MySQL"
                      progress={85}
                      />
          <Skills
                      skill="Data Structures"
                      progress={92}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
