// Run w/ Node

import * as eta from 'eta'

import { macros } from './src/macros'

let template = `
<% let body = {@ %>
This is the template body
<% @} %>`

eta.configure({
  plugins: [macros()]
})

console.log(eta.compileToString(template, eta.config))
