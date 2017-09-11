function DataBinder(object_id) {
  // 创建一个简单的Publish/Subscribe Service对象
  const pubSub = {
    callbacks: {},

    on: function(msg, callback) {
      this.callbacks[msg] = this.callbacks[msg] || [];
      this.callbacks[msg].push(callback);
    },

    publish: function(msg) {
      this.callbacks[msg] = this.callbacks[msg] || [];
      for (let i = 0; i < this.callbacks[msg].length; i++) {
        this.callbacks[msg][i].apply(this, arguments);
      }
    }
  },

  // 设定双向绑定语法规则
  data_attr = "data-bind-" + object_id,
  message = object_id + ":change";
  
  changeHandler = function(evt) {
    const target = evt.target || evt.srcElement,
          prop_name = target.getAttribute(data_attr);
    if (prop_name && prop_name !== "") {
      pubSub.publish(message, prop_name, target.value);
    }
  }

  if (document.addEventListener) {
    document.addEventListener("change", changeHandler);
    document.addEventListener("keyup", changeHandler);
  } else {
    document.attachEvent("onchange", changeHandler);
    document.addEventListener("onkeyup", changeHandler);
  }

  // 页面数据变化导致部分页面的重新渲染
  pubSub.on(message, function(evt, prop_name, new_val) {
    const elements = document.querySelectorAll("[" + data_attr + "=" + prop_name + "]");
    let tag_name;

    for (let i = 0; i < elements.length; i++) {
      tag_name = elements[i].tagName.toLowerCase();

      if (tag_name === "input" || tag_name === "textarea" || tag_name === "select") {
        elements[i].value = new_val;
      } else {
        elements[i].innerHTML = new_val;
      }
    }
  });

  return pubSub;
}

function Scope(uid) {
  const binder = new DataBinder(uid),
        scope = {
          variables: {},
          set: function(variable_name, val) {
            this.variables[variable_name] = val;
            // 变量变化导致部分页面重新渲染
            binder.publish(uid + ":change", variable_name, val, this);
          },
          get: function(variable_name) {
            return this.variables[variable_name];
          },
          _binder: binder
        };

  // 页面数据变化导致的部分变量变化
  binder.on(uid+":change", function(evt, variable_name, new_val, initiator ) {
    if (initiator !== scope) {
      scope.set(variable_name, new_val);

      //~test 变量变化导致其他变量变化
      if (variable_name === "v1") {
        scope.set("v2", (scope.get("v2") + 1));
      }
    }
  });

  return scope;
}

const $scope = new Scope(123);
$scope.set("v1", 999);
$scope.set("v2", 0);

// 双向数据绑定触发场景
// 1. input输入框变化|-> 页面相关元素变化
//                   |-> 相关变量变化      |-> 页面相关元素变化
//                                         |-> 相关变量变化       |-> ...