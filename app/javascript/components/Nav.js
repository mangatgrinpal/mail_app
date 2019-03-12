import React from "react"

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	

	



	render() {
		var aboutButtonStyle, homeButtonStyle;
		let currentPage = window.location.pathname
		if (currentPage == "/about") {
			aboutButtonStyle = "nav-item active"
		} else {
			aboutButtonStyle = "nav-item"
		}
		if (currentPage == "/") {
			homeButtonStyle = "nav-item active"
		} else {
			homeButtonStyle = "nav-item"
		}


		return (
			<nav className="navbar navbar-expand-lg navbar-toggler navbar-light bg-light">
				<a className="navbar-brand" href="/">Snail Mail Now</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
				
				<div className="collapse navbar-collapse" id="navbarToggler">
				  <ul className="navbar-nav ml-auto">
				  	{/*<li className="nav-item">
				  		<button className="btn btn-outline-primary">Demo</button>
				  	</li>*/}
				  	<li className={homeButtonStyle}>
				  		<a className="nav-link" href="/">Home</a>
						</li>
						<li className={aboutButtonStyle}>
							<a className="nav-link" href="/about">About</a>
						</li>
				  </ul>
				</div>
			</nav>
		)
	}
}

export default Nav