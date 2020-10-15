import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import PDFDisplay from "./PDFDisplay.js";
// import MyPdfViewer from "./MyPdfViewer.js";
// import MyPdfViewer2 from "./MyPdfViewer2.js";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      pdfPanelHeight: 0
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30,
    };
  }

  componentDidMount(){
      const height = document.getElementById("pdfPanel").clientHeight
      this.setState({pdfPanelHeight: height})
  }

  componentDidUpdate(){
    const height = document.getElementById("pdfPanel").clientHeight
    this.setState({pdfPanelHeight: height})
}

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          <div
            key="1"
            id="pdfPanel"
            style={{ border: "solid 1px black", backgroundColor: "lawngreen" }}
            data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}
          >
            <PDFDisplay pdfPanelHeight={this.state.pdfPanelHeight}/>
            {/* <span className="text">1</span> */}
          </div>
          <div
            key="2"
            style={{ border: "solid 1px black", backgroundColor: "white" }}
            data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}
          >
            <span className="text">2</span>
          </div>
          <div
            key="3"
            style={{ border: "solid 1px black", backgroundColor: "white" }}
            data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}
          >
            {/* <MyPdfViewer2 /> */}
            <span className="text">3</span>
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}
