import "./App.css";
import { useState } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
//import Stock from "./Components/Stock"
//import photo from "./Components/abdurrasheed.JPG";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Main from "./Components/Main";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Layout>
        <Header className="header" scroll>
          <Navigation>
            <Link to="/">Home</Link>

            <Link to="/About">About</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Select">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
          
          <br />

         
          <div className="Social_Links">
            <SocialIcon url="https://mobile.twitter.com/AbdurRasheedSy3" />
            <br />

            <br />
            <SocialIcon url="https://www.instagram.com/asyed512/" />
            <br />
            <SocialIcon url="https://www.linkedin.com/in/abdur-rasheed-syed/" />
            <br />
            <SocialIcon url="https://github.com/Abdur-Rasheed/" />
          </div>
        </Drawer>
        <Content>
          <div className="page-content" />

          <Main />

          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
          <h2 className="text-center">
         
         {/* // <Stock/> */}
            <span className="bold">Today is:</span> {date.toDateString()}
          </h2>
          <hr />
          <div className="text-banner">
            <div className="Social_Links">
              <SocialIcon url="https://mobile.twitter.com/AbdurRasheedSy3" />
              {"               "}
              <SocialIcon url="https://www.instagram.com/asyed512/" />
              {"               "}
              <SocialIcon url="https://www.linkedin.com/in/abdur-rasheed-syed/" />
              {"               "}
              <SocialIcon url="https://github.com/Abdur-Rasheed/" />
            </div>
            <br />
          </div>
        </Content>
      </Layout>

      {/* </header> */}
    </div>
  );
}

export default App;