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

let myList = new Backbone.Collection(Array.prototype.slice.call(Commits, 0, 100));

class SortLayout extends Mn.LayoutView {
  constructor(opts) {
    this.regions = {
      list: '#list',
      list2: '#list-two',
      list3: '#list-three'
    };

    super(opts)
  }
  onRender() {
    this.showChildView('list', new MySortedList({
      collection: myList
    }));
    this.showChildView('list2', new MySortedList({
      collection: myList,
      viewComparator: (model) => {
        return -1 * model.get('msg').length
      }
    }));
    this.showChildView('list3', new MySortedList({
      collection: myList,
      viewComparator: (model) => {
        return Math.random()
      }
    }));

  }
  template() {
    return `
      <div id='list'></div>
      <div id='list-two'></div>
      <div id='list-three'></div>
    `
  }
}

new SortLayout({el: '#app'}).render()
