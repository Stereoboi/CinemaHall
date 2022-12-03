import PropTypes from 'prop-types'
import { ScalableWrapper } from './ScalableWrapper.styled'

const ScalableContainer = ({ children }) => {
  return <ScalableWrapper>{children}</ScalableWrapper>
}

ScalableContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScalableContainer