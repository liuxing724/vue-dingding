import axios from 'axios';

export default {
  getCounter(callback, failCallback){
    axios.get('http://open.tuniu.com/resource/departCity',
      {
        params: {
          id: 210055608
        }
      })
      .then((response) => {
        console.log('success');
        console.log(response);
        callback && callback();
      })
      .catch((error) => {
        console.log('failed');
        console.log(error);
        failCallback && failCallback();
      })
  }
}
