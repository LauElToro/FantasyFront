import React, { Component } from 'react';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    const id = Number(this.state.searchTerm);
    if (Number.isInteger(id) && id >= 1 && id <= 10) {
      this.props.onSearch(id);
    } else {
      alert('Ese equipo no esta disponible');
    }
  }

  render() {
    return (
      <form className='Barradebusqueda mt-5' onSubmit={this.handleSearch}>
        <input
        className='Busqueda'
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder='Escribe lo que buscas'
        />
      </form>
    );
  }
}

export default SearchBar;