var myComponent = React.createClass({
  displayName: 'myComponent',

  propTypes: {
    list: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        word: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired
      })
    ),
  },

/*значение state - работаем как с персональным хранилищем*/
  getInitialState: function () {
    return {
      list: this.props.wordList, //ссылка на массив с ОБЪЕКТАМИ, с которыми предстоит работать
      isSort: false,
      filterStr: ""
    }
  },

  sortChanged(eo) {
    this.setState({isSort: eo.target.checked}, this.processList);
  },

  filterChanged(eo) {
    this.setState({filterStr: eo.target.value}, this.processList);
  },

  clear(){
      this.setState({isSort: false}, this.processList);
      this.setState({filterStr: ""},  this.processList);
      /* this.processList() - нельзя вызвать тут отдельно, он срабатывает только по второму клику*/
  },

  /*функция, которая чекает состояния*/
  processList() {
    let list = this.props.wordList.slice();
    if (this.state.filterStr) {
      //не забываем, что работаем с массивом объектов и нужно фильтр применять к словам
      list = list.filter(s => s.word.includes(this.state.filterStr));
    }
    if (this.state.isSort) {
      list.sort((a, b) => a.word > b.word ? 1 : -1);
    }
    this.setState({list: list});
  },

  render: function () {

    /*формируем список*/
    var renderList = this.state.list.map(char =>
      React.DOM.p({key: char.code}, char.word)
    )

    /*рендерим*/
    return React.DOM.div(null,
      React.DOM.input({type: 'checkBox', checked: this.state.isSort /*чекаем изменения*/,
        onChange: this.sortChanged} /*вносим изменения*/),
      React.DOM.input({type: 'text', value: this.state.filterStr, onChange: this.filterChanged}),
      React.DOM.input({type: 'button', value: 'clear', onClick: this.clear}), //не забывать про заглавную букву onClick
      React.DOM.div(null, renderList)
    );
  }
})
