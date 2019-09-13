import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/Main.stories.js')
  // const req = require.context('../stories', true, /\.stories\.js$/)
  // req.keys().forEach(filename => req(filename))
  // You can require as many stories as you need.
}

configure(loadStories, module)
