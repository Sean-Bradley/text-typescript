"use strict";
const script = document.getElementsByTagName('script');
for (let i = 0; i < script.length; i++) {
    if ('text/typescript' === script[i].type) {
        const js = window.ts.transpile(script[i].innerHTML);
        eval(js);
    }
}
