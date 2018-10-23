import React from 'react'

class AppDescription extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$(window).scroll(()=> {
			if ($(window).scrollTop() > 470) {
				$('#google-maps').fadeIn(500).animate({
					left: '100px',
					height: '300px'
				},800);

			}
			if ($(window).scrollTop() > 600) {
				$('.google-maps-desc').fadeIn(1500)
			}
			if ($(window).scrollTop() > 1050) {
				$('#envelope-pic').fadeIn(500).animate({
					left: '200px',
					fontSize:'10rem'

				},800);
			}
			if ($(window).scrollTop() > 1100) {
				$('.envelope-desc').fadeIn(1300);
			}
			if ($(window).scrollTop() > 1600) {
				$('#stripe-logo').fadeIn(500).animate({
					left: '100px'
				},1000);
			}
			if ($(window).scrollTop() > 1680) {
				$('.stripe-desc').fadeIn(1500);
			}
			if ($(window).scrollTop() > 2200) {
				$('#paper-plane').fadeIn(500).animate({
					left: '200px',
					fontSize: '10rem'
				},1000);
			}
			if ($(window).scrollTop() > 2130) {
				$('.plane-desc').fadeIn(1500);
			}
			if ($(window).scrollTop() > 2350) {
				$('.btn').fadeIn(1000)
			}
		})
	}

	render() {
		return(
			<div className="section2 col-md-12">
				<div className="row step1">
					<div className="col-md-6">
						<img id="google-maps" src="https://i2.wp.com/www.henleyshappytrails.com/wp-content/uploads/2017/03/Google-Maps.png?resize=640%2C445"/>
					</div>
					<div className="col-md-6 center google-maps-desc">
						<p>Enter your destination and return address accurately with address search powered by Google maps.</p>
					</div>
				</div>
				<div className="row step2">
					<div className="col-md-6">
						<i id="envelope-pic" className="far fa-7x fa-envelope"/>
					</div>
					<div className="col-md-6 center envelope-desc">
						<p>Compose your message, you'll get a chance to review it before submitting.</p>
					</div>
				</div>
				<div className="row step3">
					<div className="col-md-6">
						<img id="stripe-logo" src="https://s3-us-west-1.amazonaws.com/ginnysbucket/dev-images/Stripe-Logo-(blue).png"/>
					</div>
					<div className="col-md-6 center stripe-desc">
						<p>When it looks just right, proceed to checkout with Stripe to securely pay for your order.</p>
					</div>
				</div>
				<div className="row step4">
					<div className="col-md-6">
						<i id="paper-plane" className="far fa-7x fa-paper-plane"/>
					</div>
					<div className="col-md-6 center plane-desc">
						<p>That's it, your order is complete! You'll get an email confirmation and your letter will be mailed out within 24 hours.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 center">
						<h3>What are you waiting for?</h3>
						<button className="btn btn-primary btn-lg">Get Started Now</button>
					</div>
				</div>
				<br/>
				<br/>
			</div>
		)
	}
}

export default AppDescription