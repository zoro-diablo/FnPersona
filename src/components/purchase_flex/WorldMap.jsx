import { useEffect } from 'react'

const WorldMap = () => {
  useEffect(() => {
    if (window.simplemaps_countrymap) {
      window.simplemaps_countrymap.load()
    }
  }, [])

  return <div id='map'></div>
}

export default WorldMap
