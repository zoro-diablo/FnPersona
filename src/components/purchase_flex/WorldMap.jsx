import { useEffect } from 'react'



const WorldMap = () => {
  useEffect(() => {
    if (window.simplemaps_usmap) {
      window.simplemaps_usmap.load()
    }
  }, [])

  return <div id='map'></div>
}

export default WorldMap
