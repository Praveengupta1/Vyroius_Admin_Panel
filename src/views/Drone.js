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

  onSubmit = (event) => {
    const payload = {};

    const show = () => {
      console.log("this.props.login_details.isAuth");
    };
    this.props.actions.getDrones(payload);
  };
  componentDidMount(){
    const  payload={};
    //alert("exec")
     this.props.actions.getDrones(payload);
   }
  render() {
    const tableHeader=["DroneId","name","Ecosystem","Hub","Station"]
    const tableBody = [ ];
      if(this.props.state.drones){
        this.props.state.drones.map((drone)=>{
          tableBody.push(
          [ drone.drone?drone.drone:null, drone.name?drone.name:null,drone.ecosystem?drone.ecosystem:null,drone.hub?drone.hub:null,drone.station?drone.station:null,
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
