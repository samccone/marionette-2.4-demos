class CommitView extends Mn.ItemView {
  constructor(opts) {
    this.tagName = 'li';
    super(opts);
  }
  template(data) {
    return `<p>${data.msg}</p>`;
  }
};

class MySortedList extends Mn.CollectionView {
  constructor(opts) {
    this.tagName = 'ul';
    this.childView = CommitView;
    super(opts);
  }
  viewComparator(model) {
    return model.get('msg').length;
  }
};

let myList = new Backbone.Collection(Array.prototype.slice.call(Commits, 0, 500));

class SortLayout extends Mn.LayoutView {
  constructor(opts) {
    this.regions = {
      list: '#list'
    };

    super(opts)
  }
  onRender() {
    this.showChildView('list', new MySortedList({
      collection: myList
    }));
  }
  template() {
    return `<div id='list'></div>`
  }
}

new SortLayout({el: '#app'}).render()
