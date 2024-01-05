const scripts = document.getElementsByTagName('script')
let imports: { [key: string]: string } = {}
let main: HTMLScriptElement | undefined
for (let i = 0; i < scripts.length; i++) {
    if ('text/typescript' === scripts[i].type) {
        const s = ((window as any).ts as any).transpile(scripts[i].innerHTML, { target: ((window as any).ts as any).ModuleKind.ES2015 })
        if (scripts[i].id) {
            imports[scripts[i].id] = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(s)
        } else {
            main = document.createElement('script')
            main.type = 'module'
            main.innerHTML = s
        }
    }
}
if (Object.keys(imports).length) {
    const e = document.createElement('script')
    e.type = 'importmap'
    e.textContent = JSON.stringify({ imports: imports })
    document.head.appendChild(e)
}
main && document.body.appendChild(main)
