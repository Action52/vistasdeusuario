import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import classes from './App.css';
import Business from './Business/Business';
import AddIcon from './AddIcon/AddIcon';
import MainIcon from './AddIcon/AddIcon';
import ConfigIcon from './AddIcon/AddIcon';
import SearchBar from './SearchBar/SearchBar';
import { Grid, Row, Col } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state = {
    businesses: [
      { id: 0,  name : 'Cinemex', image: ""  },
      { id: 1,  name : 'Cinepolis', image: ""  },
      { id: 2,  name : 'Starbucks', image: ""  },
      { id: 3,  name : 'Costco', image: ""  },
      { id: 4,  name : 'Liverpool', image: ""  },
    ],
    otherState: 'Some other value',
    showBusinesses: true,
    searchValue: '',
    currentBusinessInfo: {

    }
  }


  businessesFilterHandler = (event) => { //Despliega las apps de acuerdo al criterio de búsqueda
    this.setState({
      searchValue : event.target.value
    });
  }

  displayBusinessHandler = (event, id) => {
    axios.get('https://jsonplaceholder.typicode.com/')
      .then(res => {
        const businessInfo = res.data;
        this.setState({
          currentBusinessInfo : businessInfo
        });
    })
  }

  render() {
    return (
      <div className="App">
        <br />
        <div className = {bootstrap['container-fluid']}>
          <div className={bootstrap['row']}>
            <div className={bootstrap['col-md-12']}>
              <SearchBar filter = {(event) => this.businessesFilterHandler(event, this.state.searchValue)} value ={this.state.searchValue}/>
            </div>
          </div>
          <div className={bootstrap['row']}>
            {this.state.businesses.map((business, index) => {
              if (business.name.includes(this.state.searchValue)){
                return (
                    <div className = {bootstrap['col-md-4']}>
                      <Business name = {business.name}
                        image = {business.image}
                        clicked = {(event) => this.nameChangedHandler(event, business.id)}
                      />
                    </div>
                )
              }

            })}
          </div>

          <div className={bootstrap['row']}>
            <div className={bootstrap['col-md-4']}>
              <center><ConfigIcon /></center>
            </div>
            <div className={bootstrap['col-md-4']}>
              <center><MainIcon /></center>
            </div>
            <div className={bootstrap['col-md-4']}>
              <center><AddIcon /></center>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
