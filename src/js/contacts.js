import React, {Component} from 'react';
import data from './data';
import{ Link, hashHistory } from 'react-router';

export default class Contacts extends Component {
  constructor(...args){
    super(...args);
    this.state = {data}
  }
  alphabetize(a, b) {
  if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) {
    return 1;
  }else if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) {
    return -1;
  } else {
    return 0
  };
};
  componentDidMount(){
    data.sort(this.alphabetize)
    this.setState({data})
  }
  removeCon(con){
      if (confirm('Are you sure you want to remove this contact?')){
      data.splice(data.indexOf(con), 1)
      hashHistory.push('/')
    }
  }
  makeContact(con){
    return(
    <li key={con.id}>
      <Link to={`/contacts/${con.id}`}>
        <img src={con.pic} alt={con.fullName}/>
        <span>{con.fullName}</span>
      </Link>
      <button onClick={()=> ::this.removeCon(con)}>X</button>
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
