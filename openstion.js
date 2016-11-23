initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs     安装实例APIS
dataAPI(Vue);    // $get,$set,$delete,$watch,$eval,$interpolate,$log
domAPI(Vue);     // $nextTick,$appendTo,$prependT,$before$after,$remove
eventsAPI(Vue);  // $on,$once,$off,$emit,$broadcast,$dispatch
lifecycleAPI(Vue);

// 以上方法为 vue protoype 添加各种用法

installGlobalAPI(Vue);
// 解析 js 中的 new Vue() ->function Vue() {};
// function Vue 是一个构造函数，new Vue()会创建一个vue实例

function Vue(options) {
  this._init(options);
}
