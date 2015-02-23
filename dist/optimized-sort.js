"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var CommitView = (function (_Mn$ItemView) {
  function CommitView(opts) {
    _classCallCheck(this, CommitView);

    this.tagName = "li";
    _get(Object.getPrototypeOf(CommitView.prototype), "constructor", this).call(this, opts);
  }

  _inherits(CommitView, _Mn$ItemView);

  _prototypeProperties(CommitView, null, {
    template: {
      value: function template(data) {
        return "<p>" + data.msg + "</p>";
      },
      writable: true,
      configurable: true
    }
  });

  return CommitView;
})(Mn.ItemView);

;

var MySortedList = (function (_Mn$CollectionView) {
  function MySortedList(opts) {
    _classCallCheck(this, MySortedList);

    this.tagName = "ul";
    this.childView = CommitView;
    this.invert = false;
    _get(Object.getPrototypeOf(MySortedList.prototype), "constructor", this).call(this, opts);
  }

  _inherits(MySortedList, _Mn$CollectionView);

  _prototypeProperties(MySortedList, null, {
    invertSort: {
      value: function invertSort(fast) {
        this.reorderOnSort = fast;
        this.invert = !this.invert;
        this.resortView();
      },
      writable: true,
      configurable: true
    },
    viewComparator: {
      value: function viewComparator(model) {
        return (this.invert ? -1 : 1) * model.get("msg").length;
      },
      writable: true,
      configurable: true
    }
  });

  return MySortedList;
})(Mn.CollectionView);

;

var myList = new Backbone.Collection(Array.prototype.slice.call(Commits, 0, 500));

var SortLayout = (function (_Mn$LayoutView) {
  function SortLayout(opts) {
    _classCallCheck(this, SortLayout);

    this.regions = {
      list: "#list"
    };

    _get(Object.getPrototypeOf(SortLayout.prototype), "constructor", this).call(this, opts);
  }

  _inherits(SortLayout, _Mn$LayoutView);

  _prototypeProperties(SortLayout, null, {
    onRender: {
      value: function onRender() {
        var _this = this;

        this.showChildView("list", new MySortedList({
          collection: myList
        }));

        $("#old").on("click", function () {
          _this.getChildView("list").invertSort(false);
        });
        $("#new").on("click", function () {
          _this.getChildView("list").invertSort(true);
        });
      },
      writable: true,
      configurable: true
    },
    template: {
      value: function template() {
        return "<div id='list'></div>";
      },
      writable: true,
      configurable: true
    }
  });

  return SortLayout;
})(Mn.LayoutView);

new SortLayout({ el: "#app" }).render();