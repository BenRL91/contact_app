import React, { Component } from 'react';
import { Link } from 'react-router'
import data from './data';
import $ from 'jquery';

export default class ContactView extends Component {
  componentDidMount(){
     $('.edit-link').removeClass('hidden')
  }
  componentWillUnmount(){
     $('.edit-link').addClass('hidden')
  }
  render() {
    let { id } = this.props.params
    let con = data.find(function(x){
      if (x.id === id){
        return x
      }
    })
    return (
      <div className='single'>
        <img src={con.pic} alt={con.fullName}/>
        <span>{con.fullName}</span>
        <span>{con.phone}</span>
        <span>{con.email}</span>
        <span>{con.address}</span>
      </div>
    );
  }
}
