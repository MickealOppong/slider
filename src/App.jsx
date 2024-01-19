import { useEffect, useState } from "react"
import Img from "./components/Img"
import Info from "./components/Info"
import LeftButton from "./components/LeftButton"
import RightButton from "./components/RightButton"
import { shortList } from './data'


function App() {
  const [item, setItem] = useState(shortList)
  const [curIndex, setCurIndex] = useState(0);

  const next = () => {
    setCurIndex((oldIndex) => {
      const ret = (oldIndex + 1) % item.length;
      return ret;
    })

  }

  const prev = () => {
    setCurIndex((oldIndex) => {
      const ret = (oldIndex - 1 + item.length) % item.length;
      return ret;
    })

  }
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000)
    return () => clearInterval(interval);
  }, [curIndex])

  return <section className="slider">
    {
      item.map((tour, index) => {
        const { id, img, category, price, country, city, description } = tour;
        return <article className='slide' style={{ transform: `translateX(${100 * [index - curIndex]}%)`, opacity: curIndex === index ? 1 : 0, visibility: curIndex === index ? 'visible' : 'hidden' }} key={id} >
          <Img img={img} />
          <Info price={price} country={country} city={city} category={category} description={description} />

        </article>
      })
    }
    <LeftButton onClick={prev} />
    <RightButton onClick={next} />
  </section >
}

export default App
