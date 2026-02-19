import { BrowserRouter } from "react-router-dom";

import { Contact, Experience, Feedbacks, Hero, Navbar, TechArsenal, Works, StarsCanvas, Education } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        {/* Removed About/Overview Section */}

        <Education />
        <Experience />
        <TechArsenal />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
