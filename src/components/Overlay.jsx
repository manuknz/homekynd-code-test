import { useEffect, useState } from 'react'
import { Html } from '@react-three/drei'

import ApiService from '../services/api.service'

const Overlay = ({ whatToFetch }) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (whatToFetch === "people") {
      ApiService.fetchPeople().then((data) => {
        setData(data.results);
      });
    } else {
      ApiService.fetchPlanets().then((data) => {
        setData(data.results);
      });
    }
  }, [whatToFetch]);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <Html>
      <p className='fetchTitle'>Star Wars {whatToFetch.toUpperCase()}</p>
      {data.length > 0 && (
        <div className='container' onClick={handleClick}>
          <p>{data[currentIndex].name}</p>
        </div>
      )}
    </Html>
  )
}

export default Overlay