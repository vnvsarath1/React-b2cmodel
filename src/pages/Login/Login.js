import React, { Component } from 'react';
import './Login.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataRecord: null,
      userName: null,
      passwordval: null,
      authenticated: 'false',
      authenticatedVal: 0,
      collapse: false,
      menucollapse: false,
      menucollapseActiveFlag: false
    };

    this.toggle = this.toggle.bind(this);
    this.togglemenu = this.togglemenu.bind(this);
    this.menucollapseActive = this.menucollapseActive.bind(this);
    /*	this.handleTitleChange = this.handleTitleChange.bind(this);
      this.OrderStatusChange = this.OrderStatusChange.bind(this);
      this.OrderTypeChange = this.OrderTypeChange.bind(this);
      this.clearAllRefines = this.clearAllRefines.bind(this);*/



  }

  componentWillMount() {


  }

  goHome = (event: any) => {
    const {
      history
    } = this.props;
    history.push({ pathname: '/home' });
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
    if (this.state.menucollapse) {
      this.setState({ menucollapse: !this.state.menucollapse });
    }
    if (this.state.menucollapseActiveFlag) {
      this.setState({ menucollapseActiveFlag: !this.state.menucollapseActiveFlag });
    }
  }
  togglemenu() {
    this.setState({ menucollapse: !this.state.menucollapse });
    if (this.state.collapse) {
      this.setState({ collapse: !this.state.collapse });
    }
    if (this.state.menucollapseActiveFlag) {
      this.setState({ menucollapseActiveFlag: !this.state.menucollapseActiveFlag });
    }
  }
  menucollapseActive() {
    this.setState({ menucollapseActiveFlag: !this.state.menucollapseActiveFlag });
    if (this.state.collapse) {
      this.setState({ collapse: !this.state.collapse });
    }
    if (this.state.menucollapse) {
      this.setState({ menucollapse: !this.state.menucollapse });
    }
  }
  render() {
    return (
      <div class="container-fluid">

        <div class="row">
          <div class="col-3 a3m3v1" >
            <div class="d-flex flex-row">

              <div class="p-1"><i class="fa fa-home  iconhome" aria-hidden="true" onClick={this.goHome}></i></div>
              <div class="p-1"><i class="fa fa-bars  icondetails" aria-hidden="true" onClick={this.togglemenu} /></div>

            </div>

          </div>
          <div class="col-6 a2WJvM">

            <div class='row'>
              <div class="icondropdown">
                <a class="btn" onClick={this.toggle}>
                  <i class="fa fa-caret-down fa-1x icondropdown1" aria-hidden="true"></i></a></div>
              <div class="col">
                <div><input type="text" class="searchtext" aria-label="Search" id="global-search-input" placeholder="Search" /></div>


              </div>


              <div class="icondropdownSearch"><i class="fa fa-search fa-1x icondropdown1" aria-hidden="true"></i></div>
            </div>
            <div class='row'>
              {this.state.collapse ?
                <div class="collapse1 bg-white searchdepart" id="collapseExample" >
                  <div class='row searchdepartspan'><span>Search in ..</span></div>
                  <br></br>
                  <div class='row'>
                    <div class="col-4">
                      <div class='row searchdepartval'><span>All Depatments</span></div>
                      <div class='row searchdepartval'><span>Auto</span></div>
                      <div class='row searchdepartval'><span>Baby</span></div>
                      <div class='row searchdepartval'><span>Heath</span></div>
                      <div class='row searchdepartval'><span>Auto</span></div>
                      <div class='row searchdepartval'><span>Baby</span></div>
                      <div class='row searchdepartval'><span>Home</span></div>
                      <div class='row searchdepartval'><span>Auto</span></div>
                    </div>
                    <div class="col-4">
                      <div class='row searchdepartval'><span>Hospital</span></div>
                      <div class='row searchdepartval'><span>Auto</span></div>
                      <div class='row searchdepartval'><span>Baby</span></div>
                      <div class='row searchdepartval'><span>Technology</span></div>
                      <div class='row searchdepartval'><span>Auto</span></div>
                      <div class='row searchdepartval'><span>Baby</span></div>
                      <div class='row searchdepartval'><span>Medical</span></div>
                      <div class='row searchdepartval'><span>Auto</span></div>
                    </div>
                    <div class="col-4">
                      <div class='row searchdepartval'><span>Grocessry</span></div>
                      <div class='row searchdepartval'><span>Auto</span></div>
                      <div class='row searchdepartval'><span>Baby</span></div>
                      <div class='row searchdepartval'><span>Hisotry</span></div>
                      <div class='row searchdepartval'><span>Auto</span></div>
                      <div class='row searchdepartval'><span>Baby</span></div>
                      <div class='row searchdepartval'><span>Education</span></div>
                      <div class='row searchdepartval'><span>Auto</span></div>
                    </div>
                  </div>


                </div> : ''
              }</div>

          </div>

          <div class="col-3 a3m3v1" >
            <div class="d-flex flex-row-reverse">

              <div class="p-1"><i class="fa fa-shopping-cart icondetails1" aria-hidden="true"></i></div>
              <div class="p-1"><i class="fa fa-user icondetails1" aria-hidden="true"></i></div>
              <div class="p-1 shopicon"><i class="fa fa-shopping-cart icondetails1" aria-hidden="true"></i></div>
              <div class="p-1 homeicon"><i class="fa fa-home icondetails1" aria-hidden="true"></i></div>
            </div>

          </div>
        </div>
        <div class="row">
          <div class="container1">
            <Carousel autoPlay showThumbs={false}>
              <div class="demo-carousel" onClick={this.goHome}>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                <p className="legend">Legend 3</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img src="http://lorempixel.com/900/500/sports/2/" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src="http://lorempixel.com/900/500/sports/3/" />
                <p className="legend">Legend 3</p>
              </div>

              <div>
                <img src="http://lorempixel.com/900/500/sports/5/" />
                <p className="legend">Legend 5</p>
              </div>
              <div>
                <img src="http://lorempixel.com/900/500/sports/6/" />
                <p className="legend">Legend 6</p>
              </div>
            </Carousel> </div>
          {this.state.menucollapse ?
            <div class="menubar col-10 col-md-4" id="menubar1" >
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#" onClick={this.menucollapseActive}>Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>

              </ul>


            </div> : ''
          }{this.state.menucollapseActiveFlag ?
            <div class="menubar col-10 col-md-4" id="menubar1" >
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active bg-primary solid" onClick={this.togglemenu}>Back ..</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>

              </ul>


            </div> : ''
          }
        </div>
        <div class="row ">

          <div class="card col-12 col-md-4 card-lay">
            <div class="card-body">
              This is some text within a card body.
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" class="img-thumbnail rounded float-left imagesize" />
    <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" class="img-thumbnail rounded float-right imagesize" />
            </div>
          </div>
          <div class="card col-12 col-md-4 card-lay">
            <div class="card-body">
              This is some text within a card body.
  </div>
          </div>
          <div class="card col-12 col-md-4 card-lay">
            <div class="card-body">
              This is some text within a card body.
  </div>
          </div>
          

        </div>

        <div class="row ">

<div class="card col-12 col-md-4 card-lay">
  <div class="card-body">
    This is some text within a card body.
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

  </div>
</div>
<div class="card col-12 col-md-4 card-lay">
  <div class="card-body">
    This is some text within a card body.
   
</div>
</div>
<div class="card col-12 col-md-4 card-lay">
  <div class="card-body">
    This is some text within a card body.
</div>
</div>

</div>


      </div>

    );
  }


}

export default App;
