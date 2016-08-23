import React, {PropTypes} from 'react'

const Image = ({image}) => (
  <img src={image} />
)

Image.propTypes = {
  image: PropTypes.string.isRequired
}

export default Image
