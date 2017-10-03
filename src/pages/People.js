import React from 'react';
import SearchField from '../components/SearchField';
import ResultSearch from '../components/ResultSearch';

const fullURL = 'https://swapi.co/api/people/';
const placeHolderText = 'Search for your character here...';

export default class People extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      query: '',
      people: [],
      next: '',
      previous: ''
      };

      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleClickSearch = this.handleClickSearch.bind(this);
    }

handleSearchChange(searchText){
  this.setState({
      searchText: searchText,
    });
}

handleClickSearch(query){
  this.setState({
      query: query,
    });

    fetch(query)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({ next: responseJson.next })
        this.setState({ previous: responseJson.previous })
        this.setState({ people: responseJson.results.map(obj => obj) });
    })
    .catch((error) => {
      console.error(error);
    });
}

  render() {

    return (
      <div>

        <SearchField  inputSearch={this.state.searchText}
                      fullURL={fullURL}
                      onInputSearchChange={this.handleSearchChange}
                      onClickSearch={this.handleClickSearch}
                      placeHolder={placeHolderText}/>
        { console.log(this.state) }
        <ResultSearch result={this.state.people}
                      next={this.state.next}
                      previous={this.state.previous} />

      </div>
    );
  }
}
