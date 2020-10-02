import { assertEquals } from 'https://deno.land/std@0.67.0/testing/asserts.ts'

import plugin_mixins from '../../deno_dist/mod.ts'
import * as eta from 'https://deno.land/x/eta@v1.11.0/mod.ts'

let template = `
<% let body = {@ %>
This is the template body
<% @} %>
<%~ body() %>`

eta.configure({
  plugins: [plugin_mixins()]
})

Deno.test('Compiling to string works as expected', () => {
  var fnStr = eta.compileToString(template, eta.config)

  assertEquals(
    fnStr,
    `var tR='',__l,__lP,include=E.include.bind(E),includeFile=E.includeFile.bind(E)
function layout(p,d){__l=p;__lP=d}
tR+='\\n'
let body = function(it){var tR="";
tR+='This is the template body\\n'
return tR}
tR+=body()
if(__l)tR=includeFile(__l,Object.assign(it,{body:tR},__lP))
if(cb){cb(null,tR)} return tR`
  )
})

Deno.test('Rendering works as expected', () => {
  var res = eta.render(template, {})
  assertEquals(
    res,
    `
This is the template body
`
  )
})
