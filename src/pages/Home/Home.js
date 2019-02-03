import React, { Component } from 'react';
import './Home.scss';

class App extends Component {
  render() {
    return (
     <div>

<div class="container-fluid">
  <div class="row">
    <div class="van1 col-md-8 col-xs-12 bg-danger">
      One of three columns
    </div>
    <div class="van2  col-xs-12 col-md-4 bg-warning">
      One of three columns
    </div>
    
  </div>
  <div class="row">
  <div class="van3  col-md-8 col-xs-12 bg-success">
      One of three columns
    </div></div>
  </div>

  <div class="row">
    <div class="van1 col">Column</div>
    <div class="col van2">Column</div>
    <div class="w-100"></div>
    <div class="col van3">Column</div>
    <div class="col van1">Column</div>
  </div>

  <div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>



     </div>


    );
  }
}

export default App;
