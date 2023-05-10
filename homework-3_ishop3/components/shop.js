import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import itemComponent from './item';

class shopComponent extends React.Component {

  static propTypes = {
    headerTitle: PropTypes.string.isRequired,
    productList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        URL: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        code: PropTypes.number.isRequired,
      })
    ),
    tableHeader: PropTypes.array,
  };

  state = {
    selectCode: null,
    stateList: [...this.props.productList]
  };

  select = (code) => {
    this.setState({selectCode: code});
  };

  delete = (code) => {
    this.setState({stateList: this.state.stateList.filter(item => item.code !== code)});
  };

  render() {

    let tableHeader = this.props.tableHeader.map(char =>
      DOM.th({key: char.code, className: 'headTitle'}, char.title),
    );

    let productList = this.state.stateList.map(char =>
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

    return (
      DOM.div(null,
        DOM.h1({className: 'headerTitle'}, this.props.headerTitle),
        DOM.table({className: 'itemComponent'},
          DOM.thead(null, React.DOM.tr({className: 'header'}, tableHeader)),
          DOM.tbody({className: 'tableBody'}, productList))
      )
    )

  }
}

export default shopComponent;