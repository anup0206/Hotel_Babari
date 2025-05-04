import About from "./About"
import Gallery from "./Gallery"
import Service from "./Service"
import Contact from "./Contact"
import Hero from "./Hero"

const Home = ()=>{
    return (
      <div>
          <Hero />
        <Service  />
        <Gallery />
        <About />
        <Contact />
      </div>
    )
}

export default Home;