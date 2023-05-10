import React from "react";

import itemComponent from './item';

const shopComponent = React.createClass({

  displayName: 'shopComponent',

  propTypes: {
    headerTitle: React.PropTypes.string.isRequired,
    productList: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        URL: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
        code: React.PropTypes.number.isRequired,
      })
    ),
    tableHeader: React.PropTypes.array.isRequired,
  },

  getInitialState: function () {
    return {
      selectCode: null,
      stateList: [...this.props.productList]
    }
  },

  select(code) {
    this.setState({selectCode: code});
  },

  delete(code){
    this.setState({stateList: this.state.stateList.filter(item=>item.code !== code)});
  },

  render: function () {
    var tableHeader = this.props.tableHeader.map(char =>
      React.DOM.th({key: char.code, className: 'headTitle'}, char.title),
    );

    var productList = this.state.stateList.map(char =>
      React.createElement(itemComponent, {
        key: char.code,
        code: char.code,
        title: char.title,
        price: char.price,
        URL: char.URL,
        count: char.count,
        selectCode: this.state.selectCode,
        cbSelect: this.select,
        cbDelete: this.delete
      })
    );

    return React.DOM.div(null,
      React.DOM.h1({className: 'headerTitle'}, this.props.headerTitle),
      React.DOM.table({className: 'itemComponent'},
        React.DOM.thead(null, React.DOM.tr({className: 'header'}, tableHeader)),
        React.DOM.tbody({className: 'tableBody'}, productList))
    );
  }
});

export default shopComponent;