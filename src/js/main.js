import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render(){
    let { id } = this.props.params
    return(
    <div className='main'>
      <aside className='link-wrapper'>
        <Link to='/'>Contacts</Link>
        <Link to='/new'>New Contact</Link>
        <Link className='edit-link hidden' to={`/edit/${id}`}>Edit Contact</Link>
      </aside>
      <div className='view-wrapper'>
        {this.props.children}
      </div>
    </div>
    )
  }
}
