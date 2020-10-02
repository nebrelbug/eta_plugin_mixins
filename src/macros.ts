var captureRegEx = /{@|@}/g

export function macros() {
  return {
    processAST: function (buff: Array<any>, config: { varName: string; [index: string]: any }) {
      buff.unshift({
        t: 'e',
        val: `function block(t,n){var i=${config.varName}[t];return i?"function"==typeof i?i(${config.varName}):i:"function"==typeof n?n(${config.varName}):n}function layout(t,n){if(n)return E.includeFile(t,n);tR.l=t}`
      })
      for (var i = 0; i < buff.length; i++) {
        let currItem = buff[i]
        if (captureRegEx.test(currItem.val)) {
          currItem.val = currItem.val.replace(captureRegEx, function (m: string) {
            if (m === '{@') {
              return `function(${config.varName}){var tR="";`
            }
            // Otherwise, m === '@}'
            return 'return tR}'
          })
        }
      }

      buff.push({
        t: 'e',
        val: 'if(tR.l)tR=E.includeFile(tR.l,tR)'
      })

      return buff
    }
  }
}

/*
Here's the code for the block() and layout() functions
(before they are minified and `it` is replaced with config.varName)
=========================
function block(name, fallback) {
  // Content passed to the block
  var blockContent = it[name]
  if (blockContent) {
    if (typeof blockContent === "function") {
      return blockContent(it)
    } else {
      return blockContent
    }
  } else if (typeof fallback === "function") {
    return fallback(it)
  } else {
    return fallback
  }
}

function layout(path, content) {
  if (content) {
    return E.includeFile(path, content)
  } else {
    tR.l = path
  }
}

*/
