class AuthorView extends Mn.ItemView {
  constructor(opts) {
    this.tagName = 'li';
    super(opts);
  }
  template(data) {
    return `<p>${data.name}</p>`;
  }
};

class FilterView extends Mn.ItemView {
  constructor(opts) {
    this.ui = {
      "input": "input"
    };

    this.events = {
      "keyup @ui.input": () => {
        this.model.set('filter', this.ui.input.val())
      }
    }
    super(opts)
  }
  template(data) {
    return `<input placeholder="containing" value="${data.filter}"></input>`
  }
}

class MyFilteredList extends Mn.CollectionView {
  constructor(opts) {
    this.tagName = 'ul';
    this.childView = AuthorView;
    this.filterModel = opts.filterModel;
    super(opts);

    this.listenTo(this.filterModel, 'change:filter', this.render);
  }
  filter(model, index, collection) {
    return ~model.get('name').indexOf(
      this.filterModel.get('filter')
    )
  }
};

let myFilter = new Backbone.Model({filter: "Andrew"});
let myList = new Backbone.Collection(Authors);

class FilterLayout extends Mn.LayoutView {
  constructor(opts) {
    this.regions = {
      filter: '#filter',
      list: '#list'
    };

    super(opts)
  }
  onRender() {
    this.showChildView('list', new MyFilteredList({
      collection: myList,
      filterModel: myFilter
    }));

    this.showChildView('filter', new FilterView({
      model: myFilter
    }));
  }
  template() {
    return `<div id='filter'></div><div id='list'></div>`
  }
}

new FilterLayout({el: '#app'}).render()
