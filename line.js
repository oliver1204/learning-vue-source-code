Vue.prototype._init = (options) => {
  this.$el = null;
  this.$parent = options.parent;
  this.$root = this.$parent ? this.$parent.$root : this;  // this: Vue
  this.$children = [];
  this.$refs = {};
  this.$els = {};
  this._watchers = []; // all watchers as an array
  this._directives = []; // all directives
  this._uid = uid++;
  this._isVue = true;
  this._events = {}; // registered callbacks
  this._eventsCount = {}; // for $broadcast optimization
  this._isFragment = false;
  this._fragment = // @type {DocumentFragment}
  this._fragmentStart = // @type {Text|Comment}
  this._fragmentEnd = null; // @type {Text|Comment}
  this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
  this._unlinkFn = null;

  this._context = options._context || this.$parent;
  this._scope = options._scope;
  this._frag = options._frag;

  if (this._frag) {
    this._frag.children.push(this);
  }

  // push self into parent / transclusion host
  if (this.$parent) {
    this.$parent.$children.push(this);
  }

  options = this.$options = mergeOptions(this.constructor.options, options, this);
  this._updateRef();
  this._data = {};
  this._callHook('init');
  this._initState = () => {
    this._initProps = () => {
      compileAndLinkProps()
    }
    this._initMeta = () => {
      defineReactive
    }
    this._initMethods();
    this._initData = () => {
      this._proxy(key);
      observe(data, this);
    } ;
    this._initComputed = () => {
      var def = {
        enumerable: true,
        configurable: true
      };
      if ('function') {
        def.get = makeComputedGetter();
        def.set = noop;
      } else {
        
      }
    };
  };
  this._initEvents();
  this._callHook('created');
  if (options.el) {
    this.$mount(options.el);
  }
}
