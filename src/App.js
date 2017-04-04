import React, { Component } from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export class NavigationApp extends Component {
  constructor(props) {
    super(props);
    this.state={items: this.props.items};
  }
  render() {
    return (
      <Navbar>
        <Nav>
        {this.state.items.map((item, index) =>
          <NavItem key={index}><Navlink name={item}/></NavItem>
         )}
        </Nav>
      </Navbar>
    );
  }
}

class Navlink extends Component {
  render() {
    return (
      <Link to={"/" + this.props.name}>{this.props.name}</Link>
      );
  }
}


class Home extends Component {
  render(){
    return (<h1>Home Page</h1>);
  }
}

// More components
class Contact extends Component {
  render(){
    return (<h1>Contact page</h1>);
  }
}

class About extends Component {
  render(){
    return (<h1>About page</h1>);
  }
}

class MainLayout extends Component {
  render() {
    return (
      <div className="app">
        <NavigationApp items={['home', 'contact', 'about']}/>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default (
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
);