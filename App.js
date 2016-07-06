
import React from 'react'
import readme from '../README.md'
import pkg from '../package.json'
import Header from './Header'
import Prose from './Prose'
import Footer from './Footer'
import { breakpoints } from './style'

class App extends React.Component {
  render () {
    const cx = {
      root: {
        fontFamily: '-apple-system, sans-serif',
        lineHeight: 1.5,
        padding: 32,
        maxWidth: 768,
        [breakpoints.md]: {
          paddingLeft: 64,
          paddingRight: 64,
        }
      }
    }

    return (
      <div className={cx.root}>
        <Header {...pkg} />
        <Prose html={readme} />
        <Footer />
      </div>
    )
  }
}

export default App
