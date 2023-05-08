var itemComponent = React.createClass({

  displayName: 'itemComponent',

  propTypes: {
        title: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        URL: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
  },

  select(){
    this.props.cbSelect(this.props.code);
  },

  delete(eo){
    eo.stopPropagation();
    this.props.cbDelete(this.props.code);
  },

  render: function () {
    return ( //интересный момент, нужно взять все в скобки иначе выдает ошибку, что он не понимает, что возвращать
      React.DOM.tr({className: 'Row',
                    style: {backgroundColor: this.props.selectCode === this.props.code ? '#F9C941' : 'white'},
                    onClick: this.select},
        React.DOM.td({className: 'Title'}, this.props.title),
        React.DOM.td({className: 'Price'}, this.props.price + 'р.'),
        React.DOM.td({className: 'IMG'}, React.DOM.img({src: this.props.URL, alt: 'Product image'})),
        React.DOM.td({className: 'Count'}, this.props.count + 'шт.'),
        React.DOM.td(null, React.DOM.input({type: 'button', value: 'delete', onClick: this.delete}))
      )
    )
  },

});