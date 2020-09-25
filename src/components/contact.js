import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={5}>
            <h2>Karan Karamchandani</h2>
            <img
              src={require('./image.png')}
              alt="avatar"
              style={{height: '60%'},{width: '60%'}}
               />
            
          </Cell>
          <Cell col={7}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                  <Grid>
                  <Cell col={3} style={{textAlign: 'left'}}>
                    <i className="fa fa-phone-square" style={{textAlign: 'right'}} aria-hidden="true"/>
                    </Cell>
                    <Cell col={9} style={{textAlign:'right'}}> 
                    +91 9926523723
                  </Cell>
                  </Grid>
                  </ListItemContent>
                  
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                  <Grid>
                  <Cell col={3} style={{textAlign: 'left'}}>
                  <i className="fa fa-fax" style={{textAlign: 'right'}} aria-hidden="true"/>
                    </Cell>
                    <Cell col={9} style={{textAlign:'right'}}>
                    0731-4041882
                   </Cell>
                  </Grid>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                  <Grid>
                  <Cell col={3} style={{textAlign: 'left'}}>
                  <i className="fa fa-envelope" style={{textAlign: 'right'}} aria-hidden="true"/>
                    </Cell>
                    <Cell col={9} style={{textAlign:'right'}}>
                    karankaramchandani5@gmail.com
                   </Cell>
                  </Grid>
                  
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                  <Grid>
                  <Cell col={3} style={{textAlign: 'left'}}>
                  <i className="fa fa-linkedin" style={{textAlign: 'right'}} aria-hidden="true"/>
                    </Cell>
                    <Cell col={9} style={{textAlign:'right'}}>
                    in/karankc27
                   </Cell>
                  </Grid>
                  
                  </ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                  <Grid>
                  <Cell col={3} style={{textAlign: 'left'}}>
                  <i className="fa fa-github" style={{textAlign: 'right'}} aria-hidden="true"/>
                    </Cell>
                    <Cell col={9} style={{textAlign:'right'}}>
                    github.com/karankc27
                   </Cell>
                  </Grid>
                  
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
