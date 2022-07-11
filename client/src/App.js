import './App.css';
import trust from "./styles/icons8-trust-50.png"
import burger from "./styles/icons8-menu-80.png"

function App() {
  return (
    <div className="App">
      <body>
          <div class="nav-bar">
              <div class="nav-center">
                  <h1 class="logo">ResourceUkraine</h1>
                  <img src={trust} alt="hand with heart"/>
              </div>
              <div class="dropdown">
                  <div class="dropbtn"><img src={burger} alt="hamburger menu"/>
                  </div>
                  <div class="dropdown-content">
                      <a href="/">Schools</a>
                      <a href="/">Housing</a>
                      <a href="/">Food</a>
                      <div class="login-reg">
                          <a href="/">Login</a>
                          <a href="/">Register</a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="header">
              <div class="header-left">
              </div>
              <div class="header-right">
                  <h2 class="heading-text">Our mission</h2>
                  <p class="header-text">Our team wanted to find an optimal way to help social issues in Ukraine. Although it is common to find websites with resources to housing, schooling and food access at this time. We believe finding help should be easy. That is why we created a space where all these resources can come together in a categorized space.</p>
              </div>
          </div>
      </body>
    </div>
  );
}

export default App;
