(function(global, factory) {

  (global.Vue = factory());
} (this, function() {

  function set() {}    // 12 - 37

  function del() {}

  function hasOwn() {}

  function isLiteral() {}

  function isReserved() {}  // 103 -106 判断是否是保留字符: $ OR _

  function _toString() {}   //

  function toNumber() {}

  function toBoolean() {}

  function stripQuotes() {}

  function camelize() {}

  function toUpper() {}

  function hyphenate() {}

  function classify() {}

  function bind() {}

  function toArray() {}

  function extend() {}

  function isObject() {}

  function isPlainObject() {}

  function def() {}     //  304 - 311 将属性添加到对象，或修改现有属性的特性。def: 可延伸的

  function _debounce() {}

  function indexOf() {}

  function cancellable() {}

  function looseEqual() {}

  var nextTick = (function() {})()

  var _Set = E6 set()

  function Cache() {}                         // 504 - 509 issues 2 vue 的双向链表缓存

  var p = Cache.prototype;
  p.put()                                     // 524 - 548
  p.shift()                                   // 556 - 566
  p.get()                                     // 507 - 603

  var cache$1 = new Cache(1000);

  function pushFilter() {}

  function processFilterArg() {}

  function parseDirective() {}

  function escapeRegex() {}

  function compileRegex() {}

  function parseText() {}

  function tokensToExp() {}

  function formatToken() {}

  function inlineFilters() {}

  var text = Object.freeze({
    compileRegex: compileRegex,
    parseText: parseText,
    tokensToExp: tokensToExp
  });

  var config = Object.defineProperties({},{},{})

  function appendWithTransition() {}

  function beforeWithTransition() {}

  function removeWithTransition() {}

  function applyTransition() {}

  function query() {}     // 1124 - 1133 如果 DOM 还未生成，那么给予提示。

  function inDoc() {}

  function getAttr() {}

  function getBindAttr() {}

  function hasBindAttr() {}

  function before() {}

  function after() {}

  function remove() {}

  function prepend() {}

  function replace() {}

  function on() {}

  function off() {}

  function getClass() {}

  function setClass() {}

  function addClass() {}

  function removeClass() {}

  function extractContent() {}

  function trimNode() {}

  function isTrimmable() {}

  function isTemplate() {}

  function createAnchor() {}

  function findRef() {}

  function mapNodeRange() {}

  function removeNodeRange() {}

  function isFragment() {}

  function getOuterHTML() {}

  var isUnknownElement = function() {}

  function checkComponentAttr() {}

  function getIsBinding() {}

  var strats = Object.create(null);

  function mergeData() {}

  strats.data
  strats.el
  strats.init
  strats.watch
  strats.props

  function mergeAssets() {}

  function defaultStrat() {}

  function guardComponents() {}

  function guardProps() {}

  function guardArrayAssets() {}

  function mergeOptions() {}

  function resolveAsset() {}

  function Dep() {}          // 1985 - 1961     A dep is an observable
  Dep.target
  Dep.prototype.addSub
  Dep.prototype.removeSub
  Dep.prototype.depend
  Dep.prototype.notify       // 2000 - 2006     Notify all subscribers of a new value.

  var arrayKeys = Object.getOwnPropertyNames();

  function withoutConversion() {}

  function Observer() {}  // 2108 -2119
  Observer.prototype.walk         // 2131 - 2136 object 对象中的 key-value 都走 convert() 即: setter getter
  Observer.prototype.observeArray
  Observer.prototype.convert(key, value)   // 2158 - 2160 走 defineReactive()
  Observer.prototype.addVm
  Observer.prototype.removeVm

  function protoAugment() {}

  function copyAugment() {}

  function observe() {}

  function defineReactive() {}    // 2252 - 2298  定义一个动态属性的对象。 即: setter getter

  var util = Object.freeze({
    defineReactive: defineReactive,
    set: set,
    del: del,
    hasOwn: hasOwn,
    isLiteral: isLiteral,
    isReserved: isReserved,
    _toString: _toString,
    toNumber: toNumber,
    toBoolean: toBoolean,
    stripQuotes: stripQuotes,
    camelize: camelize,
    hyphenate: hyphenate,
    classify: classify,
    bind: bind,
    toArray: toArray,
    extend: extend,
    isObject: isObject,
    isPlainObject: isPlainObject,
    def: def,
    debounce: _debounce,
    indexOf: indexOf,
    cancellable: cancellable,
    looseEqual: looseEqual,
    isArray: isArray,
    hasProto: hasProto,
    inBrowser: inBrowser,
    devtools: devtools,
    isIE: isIE,
    isIE9: isIE9,
    isAndroid: isAndroid,
    isIos: isIos,
    iosVersionMatch: iosVersionMatch,
    iosVersion: iosVersion,
    hasMutationObserverBug: hasMutationObserverBug,
    get transitionProp () { return transitionProp; },
    get transitionEndEvent () { return transitionEndEvent; },
    get animationProp () { return animationProp; },
    get animationEndEvent () { return animationEndEvent; },
    nextTick: nextTick,
    get _Set () { return _Set; },
    query: query,
    inDoc: inDoc,
    getAttr: getAttr,
    getBindAttr: getBindAttr,
    hasBindAttr: hasBindAttr,
    before: before,
    after: after,
    remove: remove,
    prepend: prepend,
    replace: replace,
    on: on,
    off: off,
    setClass: setClass,
    addClass: addClass,
    removeClass: removeClass,
    extractContent: extractContent,
    trimNode: trimNode,
    isTemplate: isTemplate,
    createAnchor: createAnchor,
    findRef: findRef,
    mapNodeRange: mapNodeRange,
    removeNodeRange: removeNodeRange,
    isFragment: isFragment,
    getOuterHTML: getOuterHTML,
    mergeOptions: mergeOptions,
    resolveAsset: resolveAsset,
    checkComponentAttr: checkComponentAttr,
    commonTagRE: commonTagRE,
    reservedTagRE: reservedTagRE,
    get warn () { return warn; }
  });

  function initMixin() {
    Vue.prototype._init    // 2389 - 2475
  }

  var pathCache = new Cache(1000);

  var pathStateMachine = [];

  function getPathCharType() {}

  function formatSubPath() {}

  function parse() {}

  function parsePath() {}

  function getPath() {}

  function setPath() {}

  var path = Object.freeze({
    parsePath: parsePath,
    getPath: getPath,
    setPath: setPath
  });

  function noop() {}

  function save() {}

  function rewrite() {}

  function restore() {}

  function compileGetter() {}

  function makeGetterFn() {}

  function compileSetter() {}

  function parseExpression() {}    // 2967 - 2988

  function isSimplePath() {}

  var expression = Object.freeze({
    parseExpression: parseExpression,
    isSimplePath: isSimplePath
  });

  function resetBatcherState() {}

  function flushBatcherQueue() {}

  function runBatcherQueue() {}

  function pushWatcher() {}    // 3099 - 3112

  function Watcher() {}
  Watcher.prototype.get
  Watcher.prototype.set
  Watcher.prototype.beforeGet
  Watcher.prototype.addDep
  Watcher.prototype.afterGet
  Watcher.prototype.update        // 3292 - 3309
  Watcher.prototype.run
  Watcher.prototype.evaluate
  Watcher.prototype.depend
  Watcher.prototype.teardown

  var seenObjects = new _Set();

  function traverse() {}

  var text$1 = {

    bind: function bind() {},

    update: function update(value) {}
  };

  var templateCache = new Cache(1000);
  var idSelectorCache = new Cache(1000);

  var map = {
    efault: [0, '', ''],
    legend: [1, '<fieldset>', '</fieldset>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
  };
  map.td
  map.option
  map.thead
  map.g

  function isRealTemplate() {}

  function stringToFragment() {}

  function nodeToFragment() {}

  var hasBrokenTemplate = (function() {})()

  var hasTextareaCloneBug = (function() {})()

  function cloneNode() {}

  function parseTemplate() {}

  var template = Object.freeze({
    cloneNode: cloneNode,
    parseTemplate: parseTemplate
  });

  var html = {
    bind: function () {},
    update: function () {},
    swap: function () {}
  }

  function Fragment() {}
  Fragment.prototype.callHook
  Fragment.prototype.beforeRemove
  Fragment.prototype.destroy

  function singleBefore() {}

  function singleRemove() {}

  function multiBefore() {}

  function multiRemove() {}

  function attach() {}

  function detach() {}

  var linkerCache = new Cache(5000);

  function FragmentFactory() {}
  FragmentFactory.prototype.create

  var vFor = {
    priority: FOR,
    terminal: true,

    params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

    bind: function() {},
    update: function() {},
    diff: function() {},
    create: function() {},
    updateRef: function() {},
    updateModel: function() {},
    insert: function() {},
    remove: function() {},
    move: function() {},
    cacheFrag: function() {},
    getCachedFrag: function() {},
    deleteCachedFrag: function() {},
    getStagger: function() {},
    _preProcess: function() {},
    _postProcess: function() {},
    unbind: function() {}
  }

  function findPrevFrag() {}

  function findVmFromFrag() {}

  function range() {}

  function getTrackByKey() {}

  var vIf = {

    priority: IF,
    terminal: true,
    bind: function() {},
    update: function() {},
    insert: function() {},
    remove: function() {},
    unbind: function() {}
  }

  var show = {
    bind: function() {},
    update: function() {},
    apply: function() {}
  }

  var text$2 = {
    bind: function() {},
    update: function() {},
    unbind: function() {}
  }

  var radio = {
    bind: function() {},
    update: function() {}
  }

  var select = {
    bind: function() {},
    update: function() {},
    unbind: function() {}
  }

  var checkbox = {
    bind: function() {},
    update: function() {}
  }

  function getValue() {}

  function indexOf$1() {}

  var handlers = {}

  var model = {}

  var keyCodes = {}

  function keyFilter() {}

  function stopFilter() {}

  function preventFilter() {}

  function selfFilter() {}

  var on$1 = {}

  var style = {}

  function normalize() {}

  function prefix() {}

  var modelProps = {}

  var bind$1 = {}

  var el = {}

  var ref = {}

  var cloak = {}

  var directives = {}

  var vClass = {}

  function normalize$1() {}

  function apply() {}

  var component = {}

  function callActivateHooks() {}

  function compileProps() {}

  function makePropsLinkFn() {}

  function processPropValue() {}

  function initProp() {}

  function updateProp() {}

  function getPropDefaultValue() {}

  function assertProp() {}

  function coerceProp() {}

  function assertType() {}

  function formatType() {}

  function formatValue() {}

  var propDef = {}

  function pushJob() {}

  function flush() {}

  function Transition() {}

  var p$1 = Transition.prototype;
  p$1.enter
  p$1.enterNextTick
  p$1.enterDone
  p$1.leave
  p$1.leaveNextTick
  p$1.leaveDone
  p$1.cancelPending
  p$1.callHook
  p$1.callHookWithCb
  p$1.getCssTransitionType
  p$1.setupCssCb

  function isHidden() {}

  var transition$1 = {}

  var internalDirectives = {}

  function compile() {}

  function linkAndCapture() {}

  function directiveComparator() {}

  function makeUnlinkFn() {}

  function teardownDirs() {}

  function compileAndLinkProps() {}

  function compileRoot() {}

  function compileNode() {}

  function compileElement() {}

  function compileTextNode() {}

  function removeText() {}

  function processTextToken() {}

  function makeTextNodeLinkFn() {}

  function compileNodeList() {}

  function makeChildLinkFn() {}

  function checkElementDirectives() {}

  function checkComponent() {}

  function checkTerminalDirectives() {}

  function makeTerminalNodeLinkFn() {}

  function compileDirectives() {}

  function parseModifiers() {}

  function makeNodeLinkFn() {}

  function hasOneTime() {}

  function isScript() {}

  function transclude() {}    // 7636 - 7667 return {Element|DocumentFragment}

  function transcludeTemplate() {}

  function extractAttrs() {}

  function mergeAttrs() {}

  function resolveSlots() {}

  function extractFragment() {}

  var compiler = Object.freeze({})

  function stateMixin() {
    makeComputedGetter // 8026 - 8039
  }

  function eventsMixin() {
    Vue.prototype._callHook  // 8227 - 8236 触发所有处理程序一个钩子
  }

  function noop$1() {}

  function Directive() {}
  Directive.prototype._bind
  Directive.prototype._setupParams
  Directive.prototype._setupParamWatcher
  Directive.prototype._checkStatement
  Directive.prototype.set
  Directive.prototype._withLock
  Directive.prototype.on
  Directive.prototype._teardown

  function lifecycleMixin() {}

  function miscMixin() {}

  function dataAPI(Vue) {
    Vue.prototype.$get        // 8882 - 8899
    Vue.prototype.$set
    Vue.prototype.$delete
    Vue.prototype.$watch
    Vue.prototype.$eval
    Vue.prototype.$interpolate
    Vue.prototype.$log
  }

  function domAPI() {
    Vue.prototype.$nextTick
    Vue.prototype.$nextTick
    Vue.prototype.$nextTick
    Vue.prototype.$before
    Vue.prototype.$after
    Vue.prototype.$remove
  }

  function eventsAPI() {
    Vue.prototype.$on
    Vue.prototype.$once
    Vue.prototype.$off
    Vue.prototype.$emit       // 9319 - 9346  return {Boolean} shouldPropagate(Propagate: 传播)
    Vue.prototype.$broadcast
    Vue.prototype.$dispatch
  }

  function lifecycleAPI() {
    Vue.prototype.$mount
    Vue.prototype.ready()
    Vue.prototype.$destroy
    Vue.prototype.$compile
  }

  function Vue() {}
  Vue.prototype._initState      // 组织实例的 scope, 包括: data, computed, methods, properties
  Vue.prototype._initProps      //7868 - 7880
  Vue.prototype._initData
  Vue.prototype._setData
  Vue.prototype._proxy          // 7957 - 7975
  Vue.prototype._unproxy
  Vue.prototype._digest         // 7993 - 7996
  Vue.prototype._initComputed
  Vue.prototype._initMethods    // 8047 - 8054  将 methods 中的方法添加到全局 vue（this）上
  Vue.prototype._initMeta

  var slot = {}

  var partial = {}

  var elementDirectives = {}

  var convertArray = vFor._postProcess;

  function limitBy() {}

  function filterBy() {}

  function orderBy() {}

  function contains() {}

  var filters = {}

  function installGlobalAPI() {}

  return Vue;
}));
