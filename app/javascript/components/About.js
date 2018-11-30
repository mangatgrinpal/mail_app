import React from 'react'

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				
				<div className="row">
					<div className="col-md-12 about-background"/>
					<div className="col-md-12 about-section-wrapper">
						<div className="col-md-6 offset-md-3 about-section-description center">
							<h2>About Snail Mail Now</h2>
							<br/>
							<p>In today's digital day and age, almost anything can be attainable at the press of a few buttons.</p>
							<p>What about the option to send a normal letter via snail mail?</p>
							<p>With Snail Mail Now you can send a letter anywhere in the U.S. without the hassle of requiring
							the appropriate stationary.</p>
							<p>That means you can send letters to your older loved ones who aren't so tech savvy, 
							or use our services for other business related purposes.</p>
							<p>Your messages will be printed, enveloped, stamped, and on their way with just a few clicks.</p>
						</div>
						<br/>
						<div className="row the-team">
							<div className="col-md-6 offset-md-3 about-section-founder">
								<h2 className="center">The Team</h2>
									<br/>
									<div className="row ginny-section">
										<div className="col-md-6 founder-pic center">
											<img src="https://s3-us-west-1.amazonaws.com/ginnysbucket/dev-images/g_headshot.JPG"/>
											<br/>
										</div>

										<div className="col-md-6 founder-desc">
											<h4>Ginny Mangat</h4>
											<h6>Founder/CTO</h6>
											<br/>
											<p>Ginny is a former chemist turned web developer who takes great interest in building
											quality products and solving problems to make our every day lives easier.</p>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About