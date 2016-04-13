import React, {Component} from 'react';
import data from './data';
import { hashHistory } from 'react-router';
import SSF from 'react-simple-serial-form';
import DZ from 'react-dropzone';

export default class NewCon extends Component {
  constructor(...args){
    super(...args);
    this.state = {
      preview: '../images/pih.jpg'
    }
  }
  dropHandler([file]){
        this.setState({
      preview: file.preview
    })
  }
  dataHandler(conData){
    conData.pic = this.state.preview
    data.push(conData);
    hashHistory.push('/')
  }
  render() {
    let { preview } = this.state;
    return (
      <div className='form-wrapper'>
        <DZ className='drop' onDrop={::this.dropHandler}>
          <div className='img-wrapper'>
            <img src={preview}/>
          </div>
        </DZ>
          <SSF className='ssf' onData={::this.dataHandler}>
            <label>
              Name:
              <input type='text' name='fullName'  placeholder='Type Name Here'/>
            </label>
            <label>
              Phone:
              <input type='phone' name='phone' placeholder='Type Phone Number Here'/>
            </label>
            <label>
              E-mail:
              <input type='email' name='fullName'  placeholder='Type E-mail Here'/>
            </label>
            <label>
              Address:
              <input type='address' name='fullName'  placeholder='Type Address Here'/>
            </label>
            <input type='hidden' name='pic' defaultValue={ preview }/>
            <input type='hidden' name='id' defaultValue={Math.floor(Math.random()*10000)}/>
            <button>Add Contact</button>
          </SSF>
            <button className='cancel' onClick={()=> hashHistory.push('/')}>Cancel</button>
        </div>
    );
  }
}
