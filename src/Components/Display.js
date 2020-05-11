import React from 'react';

class Display extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h2>This sounds is from {this.props.display}</h2>
			</div>
		);
	}
}

export default Display