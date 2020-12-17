import React from 'react'

import { Button } from 'want'
import 'want/dest/index.css'

const App = () => {

  const handleClick = (type: string) => {
    // @ts-ignore
    const modifyVars = window.less.modifyVars
    if (type === 'dark') {
      const vars = require('./dark.json')
      modifyVars(vars)
        .then(() => {
          console.log(`Theme updated successfully`)
        })
        .catch(() => {
          console.error(`Failed to update theme`)
        })
    } else if (type === 'light') {
      const vars = require('./light.json')
      modifyVars(vars)
        .then(() => {
          console.log(`Theme updated successfully`)
        })
        .catch(() => {
          console.error(`Failed to update theme`)
        })
    } else {
      const vars = require('./theme.json')
      modifyVars(vars)
        .then(() => {
          console.log(`Theme updated successfully`)
        })
        .catch(() => {
          console.error(`Failed to update theme`)
        })
    }
  }

  return (
    <div>
      <Button
        type='default'
        style={{ margin: '100px' }}
        onClick={() => handleClick('theme')}
      >
        Default
      </Button>
      <Button
        type='primary'
        danger
        style={{ margin: '100px' }}
        onClick={() => handleClick('dark')}
      >
        Dark
      </Button>
      <Button
        type='primary'
        style={{ margin: '100px' }}
        onClick={() => handleClick('light')}
      >
        Light
      </Button>
    </div>
  )
}

export default App
