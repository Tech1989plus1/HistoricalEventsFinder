import React from 'react';
import ReactPaginate from 'react-paginate';
import { ajax } from 'jquery';
import Nav from './Nav.jsx';
import Group from './Group.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data: [],
      perPage: 10
    }

    this.handlePageClick = this.handlePageClick.bind(this);
    this.finder = this.finder.bind(this);
  }

  getRecords(start, end) {
    ajax({
      method: 'GET',
      url: `/events?_start=${start}&_end=${end}`,
      error: (err) => console.error(err),
      success: (data) => {
       this.setState({data: data});
      }
    });
  }

  finder(event){
    console.log(event)
  }

  handlePageClick({ selected }) {
    const start = Math.ceil(selected * this.state.perPage);
    const end = start + this.state.perPage;
    
    this.getRecords(start, end);
  }

  componentDidMount() {
    this.getRecords(0, 10);
  }

  render() {
    return(
      <div className="">
        <Nav finderCB={this.finder}/>
        <Group data={this.state.data}/>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          onPageChange={this.handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          pageCount={this.state.pageCount}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
};

export default App;
