import React, { Component } from 'react';
import Dots from 'react-native-dots-pagination';


class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    }
  }
  
  render() {
    return (
       
      <Dots length={3} active={this.state.active} paddingVertical={2} activeColor={'#F76631'}/>
      
    )
  }
}
export default Pagination;