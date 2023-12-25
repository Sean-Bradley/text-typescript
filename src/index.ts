const scripts = document.getElementsByTagName('script')
for (let i = 0; i < scripts.length; i++) {
  if ('text/typescript' === scripts[i].type) {
    const s = ((window as any).ts as any).transpile(scripts[i].innerHTML)
    const e = document.createElement('script')
    e.type = 'module'
    e.innerHTML = s
    document.body.appendChild(e)
  }
}
