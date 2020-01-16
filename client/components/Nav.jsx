import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props);

    this.state = {finder: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({[name]: value});
  }

  handleSubmit(event){
    const { finder } = this.state;
    const { finderCB } = this.props;
    finderCB(finder);
    event.preventDefault();
  }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Historical Events Finder</a>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" type="search" name="finder" onChange={this.handleChange} value={this.state.event}placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    );
  }
}

export default Nav;
