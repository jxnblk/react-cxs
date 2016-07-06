
import { breakpoints } from './style'

const Heading = (props) => {
  const cx = {
    fontSize: 48,
    margin: 0,
    [breakpoints.md]: {
      fontSize: 96
    },
    [breakpoints.lg]: {
      fontSize: 128
    },
  }

  return <h1 {...props} className={cx} />
}

export default Heading

