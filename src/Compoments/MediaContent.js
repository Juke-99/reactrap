import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography } from '@material-ui/core'

class MediaContent extends React.Component {
    constructor(props) {
        super(props)
    }

    setLocation() {
        const leftMediaStyle = {
			marginLeft: "5%"
		}

		const centerMediaStyle = {
			marginLeft: "5%",
			marginRight: "5%"
		}
		
		const rightMediaStyle = {
			marginRight: "5%"
        }
        
        switch(this.props.location) {
            case 'left':
                return leftMediaStyle
                
            case 'center':
                return centerMediaStyle

            case 'right':
                return rightMediaStyle
        }
    }

    render() {
        const marginLocation = () => this.setLocation()

        const cardStyle = {
            width: "300px",
            marginBottom: "3%",
            float: "left"
		}

		const cardMediaStyle = {
			height: "300px"
        }
        
        return (
            <div style={{...marginLocation}}>
                <Card style={cardStyle}>
                    <CardActionArea>
                        <CardMedia style={cardMediaStyle} image="http://www.cospa.com/images/items/pc/201812/KkLzOJK04JsW.jpg"></CardMedia>

                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Title
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button size="small" color="primary">
                            button1
                        </Button>
                        <Button size="small" color="primary">
                            tag2
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default MediaContent