import React from 'react'
import MediaContent from './MediaContent';

class Home extends React.Component {
	render() {
		const homeBody = {
			width: "100%",
		}

		const container = {
			width: "100%",
			maxWidth: "1000px",
			margin: "3% auto",
		}

		const mediaContentStyle = {
			width: "300px",
		}

		// http://www.cospa.com/images/items/pc/201812/KkLzOJK04JsW.jpg
		return (
			<div style={homeBody}>
				<div style={container}>
					<MediaContent style={mediaContentStyle} location={'left'}></MediaContent>
					<MediaContent style={mediaContentStyle} location={'center'}></MediaContent>
					<MediaContent style={mediaContentStyle} location={'right'}></MediaContent>
				</div>
			</div>
		)
	}
}

export default Home