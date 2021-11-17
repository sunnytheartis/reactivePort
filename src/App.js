import calc from "./pictures/calculator-1470.jpg"
import down from "./pictures/download.jpg"
import half from "./pictures/halfwaythere.png"
import magi from "./pictures/magical wait times.png"
import ocea from "./pictures/ocean.jpg"
// import img from "./pictures/puzzle.jpg"
// import img from "./pictures/runner.jpg"

function App() {
  return (
    <div className="App">
    

    

  <div className="container">
    <header className="row">
      <h1>DeShayna</h1>
      <nav>
        <a href="#aboutMe">About Me</a>
        <a href="#aboutMe">Work</a>
        <a href="#aboutMe">Contact Me</a>
        <a href="#aboutMe">Resume</a>
      </nav>
    </header>
    <section className="aboutMe row">
      <h2 className>About me</h2>
      <p>
        My name is DeShayna Denham. I am studying web development with Georgia Tech.
      </p>
      <h2>Work</h2>
    </section>
    <section className="projectContent row" id="projects">
      <div className="col-3">
        <h3>
          <a href="https://donk1557.github.io/halfway-there/" className="project1">
            <h3>Halfway There</h3>
          </a>
        </h3>
        <img src={half} alt />
        <h3>
          <a href="https://magical-wait-times.herokuapp.com/" className="project2">
            <h3>Magical Wait Times</h3>
          </a>
        </h3>
        <img src={magi} alt />
      </div>
      <div className="col-3">
        <h3>
          <a href="#" className="project3">
            <h3>Project3</h3>
          </a>
        </h3>
        <img src={down} alt />
        <h3>
          <a href="#" className="project4">
            <h3>Project4</h3>
          </a>
        </h3>
        <img src={ocea} alt />
      </div>
      <div className="col-3">
        <h3>
          <a href="#" className="project5">
            <h3>Project5</h3>
          </a>
        </h3>
        <img src={calc} alt />
      </div>
    </section>
  </div>
  <footer className="contactSection" id="contact">
    <h1>Contact Me!</h1>
    <p>
      <a href={6789146992}>6789146992</a>
      <a href="deshaynadenham@gmail.com">deshaynadenham@gmail.com</a>
      <a href="github.com/sunnytheartis">github.com/sunnytheartis</a>
      <a href="twitter.com">Twitter</a>
      <a href="spotify.com">Spotify</a>
    </p>
  </footer>
</div>





  );
}

export default App;
