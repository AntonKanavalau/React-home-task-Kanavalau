var myComponent = React.createClass({

  displayName: 'myComponent',

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
    )
  },

  render: function () {



    var products = this.props.productList.map( char =>
    React.DOM.tr({key:char.code, className: 'Row'},
      React.DOM.td({className: 'Title'}, char.title),
      React.DOM.td({className: 'Price'}, char.price + 'р.'),
      React.DOM.td({className: 'IMG'}, React.DOM.img({src: char.URL, alt: 'Product image'})),
      React.DOM.td({className: 'Count'}, char.count + 'шт.'),
      )
    );

    return React.DOM.div( null,
      React.DOM.h1({className: 'headerTitle'}, this.props.headerTitle),
      React.DOM.table({className: 'myComponentBlock'}, React.DOM.tbody(null, products))
    );
  }

});