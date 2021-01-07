import React from 'react'

import { Button } from '@whale-labs/want'
import '@whale-labs/want/es/index.css'

const App = () => {
  const handleClick = () => {
    // @ts-ignore
    const modifyVars = window.less.modifyVars
    const vars = require('./theme.json')
    modifyVars(vars)
      .then(() => {
        console.log(`Theme updated successfully`)
      })
      .catch(() => {
        console.error(`Failed to update theme`)
      })
  }

  return (
    <div>
      <Button
        type='default'
        style={{ margin: '100px' }}
        onClick={() => handleClick()}
      >
        Default
      </Button>
      <Button type='primary' danger style={{ margin: '100px' }}>
        Dark
      </Button>
      <Button type='primary' style={{ margin: '100px' }}>
        Light
      </Button>
    </div>
  )
}

export default App
