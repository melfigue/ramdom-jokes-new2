import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';


import './Room.css';

class Room extends Component {
    handleClick = () => {
        Meteor.logout();
        this.props.history.push('/');   
    }

};

export default Room;