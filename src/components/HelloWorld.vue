<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="test">测试钉钉</button>
    <button @click ="getToken">获取Access_Token</button>
    <button @click ="getCode">获取免登授权码</button>
  </div>
</template>

<script>
  /*const testFun = function (fn) {
    return fn;
  }*/
  import axios from 'axios';
  import $ from 'jquery';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    test(){
      alert("1111");
      dd.ready(function(){
        dd.device.notification.confirm({
          message: "你爱我吗",
          title: "提示",
          buttonLabels: ['爱', '不爱'],
          onSuccess : function(result) {
            //onSuccess将在点击button之后回调
            /*
            {
                buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
            }
            */
          },
          onFail : function(err) {}
        });
      });
    },
    getToken(){
      $.getJSON("https://oapi.dingtalk.com/gettoken?corpid=ding1bab1fa0d668917835c2f4657eb6378f&corpsecret=H1u9Reh7ySi9G6-eakZyGEHrwBP8VD4P8wPIjJMkrdSZ_46xoXW-fTgt8isQovuF&jsoncallback=?",function(json){
        console.log(json);
      });
      /*$.ajax({
        type:'get',
        url: 'https://oapi.dingtalk.com/gettoken',
        data: {
          corpid: 'ding1bab1fa0d668917835c2f4657eb6378f',
          corpsecret: 'H1u9Reh7ySi9G6-eakZyGEHrwBP8VD4P8wPIjJMkrdSZ_46xoXW-fTgt8isQovuF'
        },
        crossDomain: true,
        dataType:'jsonp',
        success: function (data, textStatus) {
          console.log(data);
          console.log(textStatus);
        },
        error: function (err) {
          console.log("没找到");
          console.log(err);
        }
      })*/
      /*axios.get('https://oapi.dingtalk.com/gettoken',
        {
          params: {
            corpid: 'ding1bab1fa0d668917835c2f4657eb6378f',
            corpsecret: 'H1u9Reh7ySi9G6-eakZyGEHrwBP8VD4P8wPIjJMkrdSZ_46xoXW-fTgt8isQovuF'
          },
        })
        .then((response) => {
          alert('success');
          console.log(response);
        })
        .catch((error) => {
          alert('failed');
          console.log(error);
        })*/
    },
    getCode(){
      alert('2222');
      dd.ready(function() {
        dd.runtime.permission.requestAuthCode({
          corpId: "ding1bab1fa0d668917835c2f4657eb6378f",
          onSuccess: function(result) {
            alert('success');
            alert(result);
          },
          onFail : function(err) {
            alert('failed');
            alert(err.toString());
          }

        });
      });
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
