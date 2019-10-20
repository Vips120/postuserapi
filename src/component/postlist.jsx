import React , {Component} from 'react';
import {connect} from 'react-redux';
import {userpost} from '../redux/action/index';
import Userlist from './user';
class Postlist extends Component {
   async componentDidMount(){
       await this.props.userpost();
    }
    render(){
        return(
            <div className="container">
<div className="row">
    { 
          this.props.posts.slice(0,10).map(data => (
              <div className="col-md-8" key={data.id}>
          <h3>{data.title}</h3>
         <p>{data.body}</p>
         <Userlist userId={data.id}/>
              </div>
       
          ))
    }
</div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
   return {posts:state.post};
}
export default connect(mapStateToProps, {userpost})(Postlist);