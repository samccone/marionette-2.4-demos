"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AuthorView = (function (_Mn$ItemView) {
  function AuthorView(opts) {
    _classCallCheck(this, AuthorView);

    this.tagName = "li";
    _get(Object.getPrototypeOf(AuthorView.prototype), "constructor", this).call(this, opts);
  }

  _inherits(AuthorView, _Mn$ItemView);

  _prototypeProperties(AuthorView, null, {
    template: {
      value: function template(data) {
        return "<p>" + data.name + "</p>";
      },
      writable: true,
      configurable: true
    }
  });

  return AuthorView;
})(Mn.ItemView);

;

var FilterView = (function (_Mn$ItemView2) {
  function FilterView(opts) {
    var _this = this;

    _classCallCheck(this, FilterView);

    this.ui = {
      input: "input"
    };

    this.events = {
      "keyup @ui.input": function () {
        _this.model.set("filter", _this.ui.input.val());
      }
    };
    _get(Object.getPrototypeOf(FilterView.prototype), "constructor", this).call(this, opts);
  }

  _inherits(FilterView, _Mn$ItemView2);

  _prototypeProperties(FilterView, null, {
    template: {
      value: function template(data) {
        return "<input placeholder=\"containing\" value=\"" + data.filter + "\"></input>";
      },
      writable: true,
      configurable: true
    }
  });

  return FilterView;
})(Mn.ItemView);

var MyFilteredList = (function (_Mn$CollectionView) {
  function MyFilteredList(opts) {
    _classCallCheck(this, MyFilteredList);

    this.tagName = "ul";
    this.childView = AuthorView;
    this.filterModel = opts.filterModel;
    _get(Object.getPrototypeOf(MyFilteredList.prototype), "constructor", this).call(this, opts);

    this.listenTo(this.filterModel, "change:filter", this.render);
  }

  _inherits(MyFilteredList, _Mn$CollectionView);

  _prototypeProperties(MyFilteredList, null, {
    filter: {
      value: function filter(model, index, collection) {
        return ~model.get("name").indexOf(this.filterModel.get("filter"));
      },
      writable: true,
      configurable: true
    }
  });

  return MyFilteredList;
})(Mn.CollectionView);

;

var myFilter = new Backbone.Model({ filter: "Andrew" });
var myList = new Backbone.Collection(Authors);

var FilterLayout = (function (_Mn$LayoutView) {
  function FilterLayout(opts) {
    _classCallCheck(this, FilterLayout);

    this.regions = {
      filter: "#filter",
      list: "#list"
    };

    _get(Object.getPrototypeOf(FilterLayout.prototype), "constructor", this).call(this, opts);
  }

  _inherits(FilterLayout, _Mn$LayoutView);

  _prototypeProperties(FilterLayout, null, {
    onRender: {
      value: function onRender() {
        this.showChildView("list", new MyFilteredList({
          collection: myList,
          filterModel: myFilter
        }));

        this.showChildView("filter", new FilterView({
          model: myFilter
        }));
      },
      writable: true,
      configurable: true
    },
    template: {
      value: function template() {
        return "<div id='filter'></div><div id='list'></div>";
      },
      writable: true,
      configurable: true
    }
  });

  return FilterLayout;
})(Mn.LayoutView);

new FilterLayout({ el: "#app" }).render();