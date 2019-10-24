import React, { Component } from 'react';
import { MenuCounter } from '../styles/MenStyles';
import {NavLink} from 'react-router-dom'



export default class Landing extends Component {
  state = {
    menuPosition: 0
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ menuPosition: window.scrollY })
  }

  render() {
    
    let {menus} = this.props

  
    return (
      <MenuCounter menu={this.props.menu} onScroll={this.handleScroll}  menu={this.state.menuPosition} >
        <h1> <NavLink to ='/'>PMS </NavLink></h1>
        <ul>
          {
            menus.map((menu, index) => (
              <NavLink key={index} to ={menu.to}>{menu.name}</NavLink>
            ))
          }
        </ul>
      </MenuCounter>
    );
  }
}

















