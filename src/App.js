import logo from './logo.svg';
import './App.css';
//import Gmail from './components/Gmail'
//import SignIn from './components/SignIn'

import LinkComponent from './components/LinkComponent'


import BodyComponent from './BodyComponent';
// import Image from './components/Images'
function App() {
  return (
    <div
    style={{
      // "border": "solid",
      height: "100vh",
      display: "flex",
      "flex-direction": 'column'
  }}
    >
      <div style={{
          "text-align": "right",
         }}
      >

         <LinkComponent
            url="https://www.gmail.com"
            link="Gmail"
         />
         <LinkComponent 
              url="https://www.gmailImages.com"
              link="Images"
          />
          <LinkComponent 
              url="https://www.gmailsignin.com"
              link="SignIn"
          />
      </div>
      <div style={{
         display: "flex",
          flex: 1,
          alignItems: 'center',
                  justifyContent: 'center',
          // border: "solid"
        }}
        >
          <BodyComponent />
      </div>
    </div>
    );
}

export default App;
