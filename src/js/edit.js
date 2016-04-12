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
getCon(){
  let { id } = this.props.params
  let conInfo = data.find(function(x){
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
dataHandler(editCon, con){
  data.splice(data.indexOf(con), 1);
  data.push(editCon);
  hashHistory.push(`/contacts/${con.id}`)

}

  render() {
    let { preview } = this.state;
    let con = this.getCon
    console.log(this.getCon)
    return (
      <div>
        <DZ onDrop={::this.dropHandler}>
          <img src={ preview }/>
        </DZ>
        <SSF onData={::this.dataHandler}>
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
