import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import samplePDF from "./certtest.pdf";

export default function PDFDisplay(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
//   const [SCALE, setZoom] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  console.log(props);

  return (
    <div className="pdfWrapper" style={{ backgroundColor: "white" }}>
      <>
        <nav style={{paddingTop: 5, paddingBottom: 5}}>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <span style={{ margin: "2px", fontSize: "13px" }}>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </span>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </nav>
        {/* <nav>
          <button disabled={SCALE <= 0.3} onClick={() => setZoom(SCALE - 0.1)}>
            -
          </button>
          <span style={{ fontSize: 13, padding: 5 }}>
            Scale: {SCALE.toFixed(1)}
          </span>
          <button disabled={SCALE >= 4.9} onClick={() => setZoom(SCALE + 0.1)}>
            +
          </button>
        </nav> */}
      </>

      <div className="canvasWrapper" style={{ display: "inline-block", border: "1px solid grey" }}>
        <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            height={props.pdfPanelHeight - 40}
            // width={props.width}
            // scale={SCALE}
          />
        </Document>
      </div>
    </div>
  );
}
