<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="test">测试钉钉</button>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  const testFun = function (fn) {
    return dd.ready(fn);
  }
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    test(){
      /*dd.ready(function(){
        dd.device.notification.confirm({
          message: "你爱我吗",
          title: "提示",
          buttonLabels: ['爱', '不爱'],
          onSuccess : function(result) {
            //onSuccess将在点击button之后回调
            /!*
            {
                buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
            }
            *!/
          },
          onFail : function(err) {}
        });
      });*/
      testFun(function () {
        dd.device.notification.confirm({
          message: "你爱我吗",
          title: "提示",
          buttonLabels: ['爱', '不爱'],
          onSuccess : function(result) {
            //onSuccess将在点击button之后回调
          },
          onFail : function(err) {}
        });
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
