import { useEffect } from 'react'

let c = true
let tP
let m = true
let e8 = document.getElementById('map')
let ea = false

function tO() {
  if (c) {
    if (location.hostname.match('simplemaps.com')) {
      c = !1
      return
    }
    if (tP) {
      if (Math.random() > 0.05) return
      tP.remove()
    }
    tP = document.createElement('div')
    var e = m ? '20px' : '5px'
    tP.style.cssText =
      'overflow: visible !important; clip-path: none !important; display:inline !important; opacity:1 !important; transform: none !important; visibility: visible !important; z-index: 1 !important; right: 5px !important; bottom:' +
      e +
      ' !important; z-index: 1 !important; position: absolute !important; filter: opacity(1) !important;'
    e8.appendChild(tP)
    tP.innerHTML =
      '<a style="overflow: visible !important; clip-path: none !important; opacity: 1 !important;  filter: opacity(1) !important; transform: none !important; display: block !important; visibility: visible !important; font: 18px Verdana, Arial, Helvetica, sans-serif !important; cursor: pointer !important; font-weight: bold !important; float: right !important; color: #000000 !important; text-decoration: none !important;" href="https://simplemaps.com" title="For evaluation use only.">Simplemaps.com Trial</a>'
    if (!ea && 503 != tP.innerHTML.length) {
      e8.innerHTML = ''
    }
  }
}

const WorldMap = () => {
  useEffect(() => {
    if (window.simplemaps_usmap) {
      window.simplemaps_usmap.load()
    }
  }, [])

  return <div id='map'></div>
}

export default WorldMap
