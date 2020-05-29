import React, { Component } from 'react';
 
class Info extends Component {
  makeLink(link) {
    return (
      <li key={link._id}>
      <a href={link.url} target="_blank">{link.title}</a>
      </li>
  );
 }
 
 render() {
    const links = this.props.links.map(
    link => this.makeLink(link)
 );
 
 return (
  <div>
    <h2>Learn Meteor!</h2>
    <ul>{ links }</ul>
  </div>
 );
 }
}
 
export default Info;