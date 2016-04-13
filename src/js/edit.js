import React, {Component} from 'react';
import data from './data';
import { hashHistory } from 'react-router';
import SSF from 'react-simple-serial-form';
import DZ from 'react-dropzone';
export default class EditView extends Component {
constructor(...args){
  super(...args);
    this.state = {
      preview: ''
    }
}
componentDidMount(){
  let { id } = this.props.params
  let con = data.find(function(x){
    if (x.id === id){
      return x
    }
  })
  this.setState({
    preview: con.pic
  })
}
dropHandler([file]){
  this.setState({
    preview: file.preview
  })

}
dataHandler(editCon){
  let { id } = this.props.params
  let con = data.find(function(x){
    if (x.id === id){
      return x
    }
  })
  data.splice(data.indexOf(con), 1);
  data.push(editCon);
  editCon.pic = this.state.preview
  hashHistory.push(`/contacts/${con.id}`)

}

  render() {
    let { preview } = this.state;
    let { id } = this.props.params
    let con = data.find(function(x){
      if (x.id === id){
        return x
      }
    })
    return (
      <div className='form-wrapper editing'>
        <DZ className='drop' onDrop={::this.dropHandler}>
          <img src={ preview }/>
        </DZ>
        <SSF className='ssf' onData={::this.dataHandler}>
          <input type='text' name='fullName' defaultValue={con.fullName}/>
          <input type='phone' name='phone' defaultValue={con.phone}/>
          <input type='email' name='email' defaultValue={con.email}/>
          <input type='text' name='address' defaultValue={con.address}/>
          <input type='hidden' name='pic' defaultValue={preview}/>
          <input type='hidden' name='id' defaultValue={con.id}/>
          <button>Save</button>
        </SSF>
      </div>
    );
  }
}
