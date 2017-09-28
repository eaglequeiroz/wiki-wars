import React from 'react';

const parameter = '?search=';

export default class SearchField extends React.Component {

  constructor(props) {
     super(props);
     this.handleSearchClick = this.handleSearchClick.bind(this);
     this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
   }

handleSearchClick(){
  var query = '';
  if( this.props.inputSearch === ''){
    query = this.props.fullURL
  } else {
    query = this.props.fullURL + parameter + this.props.inputSearch;
  }
  this.props.onClickSearch(query);
}

handleSearchInputChange(e){
  this.props.onInputSearchChange(e.target.value);
}

  render() {
    return (
      <div>
          <div className="ui input">
            <input type="text" placeholder="Search for your character here..." className="inputSearch" value={this.props.inputSearch} onChange={this.handleSearchInputChange}/>
          </div>
            <button className="ui button" onClick={this.handleSearchClick}>Search</button>
      </div>
    );
  }
}
