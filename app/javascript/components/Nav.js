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
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <a className="navbar-brand" href="/">Snail Mail Now</a>
			  <ul className="navbar-nav ml-auto">
			  	<li className={homeButtonStyle}>
			  		<a className="nav-link" href="/">Home</a>
						
					</li>
					<li className={aboutButtonStyle}>
						<a className="nav-link" href="/about">About</a>
					</li>
			  </ul>
			</nav>
		)
	}
}

export default Nav