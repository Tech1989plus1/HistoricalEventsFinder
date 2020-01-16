import React from 'react';
import ReactPaginate from 'react-paginate';
import { ajax } from 'jquery';

const Record = ({}) => {
  return(
    <div>
      <h1>Recirds</h1>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data: [],
      pageData: [],
      offSet: 0,
      perPage: 10
    }

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getRecords() {
    ajax({
      method: 'GET',
      url: '/events',
      error: (err) => console.error(err),
      success: (data) => {
        this.setState({
          pageCount: data.length,
          data: data
        })
      }
    });
  }

  handlePageClick({ selected }) {
    const offset = Math.ceil(selected * this.state.perPage);

    //this.setState({ offSet: offset});
    console.log(selected, offset) 
  }

  componentDidMount() {
    this.getRecords();
  }

  render() {
    return(
      <div className="">
        <Record/>
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
