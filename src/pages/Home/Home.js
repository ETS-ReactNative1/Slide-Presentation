import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import './Home.css';

class Home extends Component {


  state = {
    rawCardsData: [],
    cardsData: [],
    filterList: ['All', 'D3.js', 'Tableau', 'Machine Learning', 'Airflow'],
  };

  componentWillMount() {
    this.initData();
  }

  initData = () => {
    const cardsData = [
      {
        id: 1,
        link: '/DataInfra',
        image: "Data%20Infra.PNG",
        title: 'DATA INFRASTRUCTURE',
        subtitle: '02/28/2018',
        text: 'Quick Overview for Data Infrastructure',
        info: 'Slide',
      },
      {
        id: 2,
        link: '/DataETL',
        image: 'ETL workflow.jpg',
        title: 'BASIC ETL PROCESSING',
        subtitle: '03/14/2018',
        text: 'Quick Overview for ETL',
        info: 'Slide',
        style: {
          marginTop: '2px'
        }
      }
    ];
    this.setState({
      rawCardsData: cardsData,
      cardsData,
    });
  }

  render() {
    return (
      <div className='homeWrapper'>
        <Header />
        <div className='filterWrapper' />
        <div className="cardsWrapper">
          <Cards data={this.state.cardsData} />
        </div>
      </div>
    );
  }
}

export default Home;
