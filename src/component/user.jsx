import React, {Component} from 'react';
import {connect} from 'react-redux';
import {users} from '../redux/action/index';
class Userlist extends Component {
       constructor(props) {
           super(props);
       };

      async componentDidMount() {
          await this.props.users(this.props.userId);
       };
   render(){
    if(!this.props.user){return null}
    return(
        <div className="container">
            <h2>UserList</h2>
            Name: {this.props.user.name}
        </div>
    )
   }
}

const mapStateToDispatch = (state,ownprops) => {
    console.log('ggg',state);
    return { user: state.user.find(data => data.id === ownprops.userId)};
}
export default connect(mapStateToDispatch, {users})(Userlist);
