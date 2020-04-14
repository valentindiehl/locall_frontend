import React, {Component} from 'react';

import '../../css/footer/socialLinks.css';

const SocialLink = (props) => {
	return (
		<a className="socialLink"
		   href={props.link}
		   target="_blank"
		   rel="noopener noreferrer">
			<img
				src={props.image}
				width="54px"
				height="54px"
				className="d-inline-block align-center"
				alt={props.alt}
			/>
			{props.showText && <span className={"socialLabel"}>{props.alt}</span>}
		</a>)
}

export default class SocialLinks extends Component {

	render() {
		const showText = this.props.with > 1500
		return (
			<>
				<SocialLink
					link={"https://www.youtube.com/channel/UC03F9KBob59KmBNPuQXUfqQ"}
					image={"/assets/icons/icons-social-you-tube.svg"}
					alt={"YouTube"}
					showText={showText}
				/>
				<SocialLink
					link={"https://www.instagram.com/locall_map/"}
					image={"/assets/icons/icons-social-instagram.svg"}
					alt={"Instagram"}
					showText={showText}
				/>
				<SocialLink
					link={"https://www.facebook.com/locall.map/"}
					image={"/assets/icons/icons-social-facebook.svg"}
					alt={"Facebook"}
					showText={showText}
				/>
			</>
		)
	}
}
