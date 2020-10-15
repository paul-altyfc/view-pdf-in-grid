import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import PDFDisplay from './components/PDFDisplay';
import ResponsiveLocalStorageLayout from './components/ResponsiveGrid'

function App() {
  return (
    <div className="App">
      <h1>PDF Display</h1>
      <div>
        <ResponsiveLocalStorageLayout />
        {/* <PDFDisplay /> */}
      </div>
    </div>
  );
}

export default App;




// import React, { Component } from "react";
// import { Document, Page } from "react-pdf";

// import certtest from "../components/certtest.pdf";

// export default class App extends Component {

  
//   state = { numPages: null, pageNumber: 1 };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   goToPrevPage = () =>
//     this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
//   goToNextPage = () =>
//     this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

//   render() {
//     const { pageNumber, numPages } = this.state;

//     console.log(certtest)

//     return (
//       <div>
//         <nav>
//           <button onClick={this.goToPrevPage}>Prev</button>
//           <button onClick={this.goToNextPage}>Next</button>
//         </nav>

//         <div style={{ width: 600 }}>
//           <Document
//             file={certtest}
//             onLoadSuccess={this.onDocumentLoadSuccess}
//           >
//             <Page pageNumber={pageNumber} width={600} />
//           </Document>
//         </div>

//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }

