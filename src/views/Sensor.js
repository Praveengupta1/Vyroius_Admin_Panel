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

 
  componentDidMount(){
    const  payload={};
    //alert("exec")
     this.props.actions.getSensor(payload);
   }
  render() {
    const tableHeader=["Sensor Id","name","ecosystem","hub","Station","Drone","OrderId","Created At"]
    const tableBody = [ ];
      if(this.props.state.sensor){
        this.props.state.sensor.map((s)=>{
          tableBody.push(
          [ s.sensor?s.sensor:"--",
            s.name?s.name:null,
            s.ecosystem?s.ecosystem:"--",
            s.hub?s.hub:"--",
            s.station?s.station:"--",
            s.drone?s.drone:"--",
            s.orderId?s.orderId:"--",
            s.createdAt?s.createdAt:"--"
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
