import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from "clarifai";
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";

const app = new Clarifai.App({
  apiKey: '43c8acf7890144e7ac9a5f498e1e5468'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      ImageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({ImageUrl: this.state.input});
      app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
        .then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        // do something with response
      },
      function(err) {
        // there was an error
      }
    );
 
  }
 
  render() {
  return (
    <div className="App">
     <Particles className="particles"
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition imageUrl={this.state.ImageUrl}/>
    </div>
  );
}
}


export default App;
