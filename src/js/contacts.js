import React, {Component} from 'react';
import data from './data';
import{ Link } from 'react-router';

export default class Contacts extends Component {
  makeContact(con){
    return(
    <li key={con.id}>
      <Link to={`/contacts/${con.id}`}>
        <img src={con.pic} alt={con.fullName}/>
        <span>{con.fullName}</span>
      </Link>
      <button>X</button>
    </li>
    )
  }
  render() {
    return (
        <ul className='con_list'>
          {data.map(::this.makeContact)}
        </ul>
    );
  }
}
