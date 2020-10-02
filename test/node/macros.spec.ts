/* global it, expect, describe */
import * as eta from 'eta'
import plugin_mixins from '../../src/index'

let template = `
<% let body = {@ %>
This is the template body
<% @} %>
<%~ body() %>`

eta.configure({
  plugins: [plugin_mixins()]
})

describe('Simple macros work', () => {
  it('Compiling to string works as expected', () => {
    var fnStr = eta.compileToString(template, eta.config)

    expect(fnStr)
      .toEqual(`var tR='',__l,__lP,include=E.include.bind(E),includeFile=E.includeFile.bind(E)
function layout(p,d){__l=p;__lP=d}
tR+='\\n'
let body = function(it){var tR="";
tR+='This is the template body\\n'
return tR}
tR+=body()
if(__l)tR=includeFile(__l,Object.assign(it,{body:tR},__lP))
if(cb){cb(null,tR)} return tR`)
  })

  it('Rendering works as expected', () => {
    var res = eta.render(template, {})

    expect(res).toEqual(`
This is the template body
`)
  })
})
