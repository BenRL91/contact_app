import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render(){
    return(
    <div className='main'>
      <aside className='link-wrapper'>
        <Link to='/'>Contacts</Link>
        <Link to='/new'>New Contact</Link>
      </aside>
      <div className='view-wrapper'>
        {this.props.children}
      </div>
    </div>
    )
  }
}
