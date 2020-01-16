import React from 'react';
import ReactPaginate from 'react-paginate';
import { ajax } from 'jquery';

const Record = ({ data }) => {
  return(
    <div>
      {console.log(data)}
      <h1>Hello</h1>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data: [],
      pageData: [],
      perPage: 10
    }

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getRecords(start, end) {
    ajax({
      method: 'GET',
      url: `/events?_start=${start}&_end=${end}`,
      error: (err) => console.error(err),
      success: (data) => {
       console.log(data)
      }
    });
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
        <Record data={this.state.pageData}/>
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
