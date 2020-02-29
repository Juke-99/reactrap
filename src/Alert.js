import PropTypes from 'prop-types'
import React from 'react'

const alertStyle = {
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem"
}

const alertPromaryStyle = {
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  color: "#073984",
  backgroundColor: "#cfe2ff",
  borderColor: "#bbd6fe"
}

const alertSecondaryStyle = {
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  color: "#383d41",
  backgroundColor: "#e2e3e5",
  borderColor: "#d6d8db"
}

const alertSuccessStyle = {
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  color: "#155724",
  backgroundColor: "#d4edda",
  borderColor: "#c3e6cb"
}

const alertDangerStyle = {
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  color: "#721c24",
  backgroundColor: "#f8d7da",
  borderColor: "#f5c6cb"
}

const alertWarningStyle = {
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  color: "#856404",
  backgroundColor: "#fff3cd",
  borderColor: "#ffeeba"
}

const alertInfoStyle = {
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  color: "#0c5460",
  backgroundColor: "#d1ecf1",
  borderColor: "#fdfdfe"
}

const alertLightStyle = {
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  color: "#818182",
  backgroundColor: "#fefefe",
  borderColor: "#d6d8db"
}

const alertDarkStyle = {
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  color: "#1b1e21",
  backgroundColor: "#d6d8d9",
  borderColor: "#c6c8ca"
}

class Alert extends React.Component {
  constructor(props) {
    super(props)

    this.variant = this.variant.bind(this)
  }

  variant() {
    switch(this.props.variant) {
      case "primary":
        return alertPromaryStyle

      case "secondary":
        return alertSecondaryStyle

      case "success":
        return alertSuccessStyle

      case "danger":
        return alertDangerStyle

      case "warning":
        return alertWarningStyle

      case "info":
        return alertInfoStyle

      case "light":
        return alertLightStyle

      case "dark":
        return alertDarkStyle

      default:
        return alertStyle
    } 
  }

  render() {
    return(
      <div role="alert" style={this.variant()}>{this.props.children}</div>
    )
  }
}

Alert.propTypes = {
  variant: PropTypes.string
}

export default Alert