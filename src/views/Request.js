import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../Redux/actions/index";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// import { event } from "jquery";

// const sign = {
//   height: "300px",
//   width: "400px",
// };

const mapStateToProps = (state) => {
  return {
    state: state.State,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, Actions), dispatch),
  };
}

class Login extends Component {
  constructor(props) {
    super(props);
  }

  state={
   accepted:false,
   rejected:false,
  } 

  componentDidMount(){
    const  payload={};
    //alert("exec")
     this.props.actions.getOrganizations(payload);
   }
   handleAcceptRequest=(o)=>{
       console.log(o);
       this.props.actions.acceptRequest({orgId:o._id,userId:o.user.id,package:o.package,name:o.user.name,email:o.user.email});
   }
   handleRejectRequest=(o)=>{
    this.props.actions.rejectRequest({orgId:o._id,userId:o.user.id,package:o.package});
    }

  render() {
    const tableHeader=["User Name","Email","Organization Name","Organization Id","Package","Actions"]
    const tableBody = [];
    
      if(this.props.state.organization){
        this.props.state.organization.map((o)=>{
          tableBody.push(            
          [ o.user.name?o.user.name:"--",
            o.user.email? o.user.email:"--",
            o.organization.name?o.organization.name:"--",
            o.organization.id?o.organization.id:"--",
            o.package?o.package:"--",  
            <>       
                <Button variant="contained" color="primary"  onClick={(e)=>{this.handleAcceptRequest(o)}}
                style={{marginRight:10}}
                >{o.accept?"Accepted":"Accept"}
                </Button>
             <Button variant="contained" onClick={(e)=>{this.handleRejectRequest(o)}}>{o.reject?"Rejected":"Reject"}</Button>
             </>
                     ] );
        })  
    }

      
  
    
    return (
      <>
        <div style={{ margin: "5%" }}>
        <TableContainer component={Paper}>
                    <Table  aria-label="simple table">                    
                        <TableHead>
                        <TableRow>
                            {tableHeader.map((head , i)=>(
                                <TableCell style={{fontWeight:'bold', verticalAlign:'top',fontSize:"18px"}} align="center" key={i}>{head}</TableCell>
                            ))}
                        </TableRow>                        
                        </TableHead>
                        <TableBody>
                            {tableBody.map((row, i) => (
                                <TableRow key={i}>
                                {row.map((data, index)=> <TableCell align="center"  key={index}>{data}</TableCell>)} 
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
