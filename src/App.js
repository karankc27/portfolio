import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="header-colors" title={<Link style={{textDecoration: 'none', color: '#16222A'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/" onClick={() => this.hideToggle()}>Home</Link>
              <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
              <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
              <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
