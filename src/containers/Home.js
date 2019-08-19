import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      binary: '11110000',
      decimal: '240'
    };
  
    this.handleBinChange = this.handleBinChange.bind(this);
    this.handleDecChange = this.handleDecChange.bind(this);
  }

  handleBinChange(e) {
    var i;
    var decimalValue = 0;
    var j = 0;
    //Check for ones and zeros, if true, then start adding)
    //console.log("----------------------------------------");
    //console.log("Binary field length: " + e.target.value.length);
    for(i = e.target.value.length-1; i >= 0; i--) {  
      //console.log("Current value: [" + i + "]=" + e.target.value[i]);
      if(e.target.value[i]==="1")
      {
	decimalValue+=(2)**j;
	//console.log("decimalValue + 2^" + j + "=" + decimalValue);
	j++;
      }
      else if(e.target.value[i]==="0"){
	//console.log("decimalValue: " + decimalValue);
	j++;
      }
      else{
        decimalValue = "Not a valid binary number!"
        break;
      }
    }
    this.setState({
      binary: e.target.value,
      decimal: decimalValue 
    });
  }

  handleDecChange(e) {
    var binaryValue = [];
    var i = 0;
    var remainder = parseInt(e.target.value, 10);
    //Check for ones and zeros, if true, then start adding)
    //console.log("----------------------------------------");
    //console.log("Decimal value: " + e.target.value);
    if(typeof remainder == 'number'){
    	while(remainder > 0){
		binaryValue[i] = remainder % 2;
        	remainder = parseInt((remainder / 2));
		i++;
		//console.log("[" +i+ "]" + remainder);
    	}
    	binaryValue = binaryValue.reverse();
    	binaryValue = binaryValue.join('');
    }
    else{
        binaryValue = "Not a valid decimal number!";
    }
    this.setState({
      binary: binaryValue,
      decimal: e.target.value
    });
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Bin2Dec</h1>
	  <p>A simple binary to decimal converter using ReactJS</p>
          <div>
	    <div>Enter Binary:</div> 
            <input type="text" name="binary" value={this.state.binary} onChange={this.handleBinChange} />
          </div>
	  <div>
	    <div>Enter Decimal:</div>
            <input type="text" name="decimal" value={this.state.decimal} onChange={this.handleDecChange} />
	  </div>
        </div>
      </div>
    );
  }
}

