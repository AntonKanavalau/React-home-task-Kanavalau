import React from "react";
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

class itemComponent extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    URL: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  };

  select = () => {
    this.props.cbSelect(this.props.code);
  };

  delete = (eo) => {
    eo.stopPropagation();
    this.props.cbDelete(this.props.code);
  };

  render() {
    return (
    DOM.tr({
        className: 'Row',
        style: {backgroundColor: this.props.selectCode === this.props.code ? '#F9C941' : 'white'},
        onClick: this.select
      },
      DOM.td({className: 'Title'}, this.props.title),
      DOM.td({className: 'Price'}, this.props.price + 'р.'),
      DOM.td({className: 'IMG'}, DOM.img({src: this.props.URL, alt: 'Product image'})),
      DOM.td({className: 'Count'}, this.props.count + 'шт.'),
      DOM.td(null, DOM.input({type: 'button', value: 'delete', onClick: this.delete}))
    )
  )
  };

}

export default itemComponent;