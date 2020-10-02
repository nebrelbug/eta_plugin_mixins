/* global it, expect, describe */
import * as eta from 'eta'
import { macros } from '../../src/index'

let template = `
<% let body = {@ %>
This is the template body
<% @} %>
<%~ body() %>`

eta.configure({
  plugins: [macros()]
})

describe('Simple macros work', () => {
  it('Compiling to string works as expected', () => {
    var fnStr = eta.compileToString(template, eta.config)

    expect(fnStr).toEqual(`var tR='',include=E.include.bind(E),includeFile=E.includeFile.bind(E)
function block(t,n){var i=it[t];return i?"function"==typeof i?i(it):i:"function"==typeof n?n(it):n}function layout(t,n){if(n)return E.includeFile(t,n);tR.l=t}
tR+='\\n'
let body = function(it){var tR="";
tR+='This is the template body\\n'
return tR}
tR+=body()
if(tR.l)tR=E.includeFile(tR.l,tR)
if(cb){cb(null,tR)} return tR`)
  })

  it('Rendering works as expected', () => {
    var res = eta.render(template, {})

    expect(res).toEqual(`
This is the template body
`)
  })
})
