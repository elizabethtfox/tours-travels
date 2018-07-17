import React, { Component } from 'react';
import './App.css';
import {Carousel} from 'react-materialize';

class App extends Component {
  render() {
    return (
     <div> 
  
      <div>
      <Carousel options={{ fullWidth: false }} images={[
        'https://images.unsplash.com/photo-1495442358998-961b69f45703?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88ec7de7aa5e3e74217e5ddf03e28086&auto=format&fit=crop&w=2448&q=80',
        'https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e5f7a670b5cd3ff8bbc7b21ef4e4461&auto=format&fit=crop&w=800&q=60',
        'https://images.pexels.com/photos/130159/pexels-photo-130159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
        'https://images.unsplash.com/photo-1503971090465-19d3c80f81f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b90203c424ce20c853f028a7110ae9e&auto=format&fit=crop&w=1745&q=80',
        'https://images.unsplash.com/photo-1511371241697-fbcaef9dd576?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ed2a21f5df4012664c88d55cca5ace6&auto=format&fit=crop&w=1655&q=80'
      ]} />

    </div>
    
    </div> 
    
    );
  }
}

export default App;


