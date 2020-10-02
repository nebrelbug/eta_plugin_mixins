var captureRegEx = /{@|@}/g;

export default function macros() {
  return {
    processAST: function (
      buff: Array<any>,
      config: { varName: string; [index: string]: any },
    ) {
      for (var i = 0; i < buff.length; i++) {
        let currItem = buff[i];
        if (captureRegEx.test(currItem.val)) {
          currItem.val = currItem.val.replace(
            captureRegEx,
            function (m: string) {
              if (m === "{@") {
                return `function(${config.varName}){var tR="";`;
              }
              // Otherwise, m === '@}'
              return "return tR}";
            },
          );
        }
      }

      return buff;
    },
  };
}
