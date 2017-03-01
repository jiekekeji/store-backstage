import md5 from 'js-md5'

var utils = {
  //设置页面标题
  setDocumentTitle: function (title) {
    "use strict";
    //以下代码可以解决以上问题，不依赖jq
    setTimeout(function () {
      //利用iframe的onload事件刷新页面
      document.title = title;
      var iframe = document.createElement('iframe');
      //打包时
      iframe.src = '/fsb-web/h5/static/public/logo.png'; // 必须
      // iframe.src = '../../static/public/logo.png'; // 必须
      iframe.style.visibility = 'hidden';
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      iframe.onload = function () {
        setTimeout(function () {
          document.body.removeChild(iframe);
        }, 0);
      };
      document.body.appendChild(iframe);
    }, 0);
  },

  //设置body元素的背景颜色
  setBodyBgColor: function (color) {
    $("body").css("background-color", color);
  },
  /**
   * 生成一个 0 - 1000 之间的随机整数
   * @returns {Number}
   */
  getRandom: function () {
    return parseInt(1000 * Math.random());
  }
  ,

  /**
   *
   * @param userid
   * @param random
   * @param userkey
   * @param userid
   * @param random
   * @param userkey
   */
  getRandomkey: function (userid, random, userkey) {
    var content = userid + random + userkey + userid + random + userkey;
    console.log('content=' + content)
    return md5(content);
  }
  ,

  /**
   * 保存登陆成功后返回的userid
   * @param userid
   */
  setUserid: function (userid) {
    sessionStorage.setItem('userid', userid);
  }
  ,

  /**
   * 返回保存的userid
   */
  getUserid: function () {
    return sessionStorage.getItem('userid');
  }
  ,

  /**
   *保存登陆成功后返回的userkey
   * @param userkey
   */
  setUserkey: function (userkey) {
    sessionStorage.setItem('userkey', userkey);
  }
  ,

  /**
   * 返回保存的userkey
   */
  getUserkey: function () {
    return sessionStorage.getItem('userkey');
  }
  ,

  /**
   * 用户是否已登陆，如果已经存在userid和userkey
   * 说明用户已登陆，否则未登陆
   */
  isUserLogin: function () {
    if (isEmpty(getUserid()) || isEmpty(getUserkey())) {
      return false;
    }
    return true;
  }
  ,

  /**
   * 判断是否为空
   * @param text
   * @returns {boolean}
   */
  isEmpty: function (text) {
    if (typeof(text) === 'undefined' || null === text || '' === text) {
      return true;
    }
    return false;
  }
  ,

//正则校验手机号
  isPhoneNum: function (phoneNum) {
    var reg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    if (reg.test(phoneNum)) {
      return true
    } else {
      return false;
    }
  }
  ,
//判断是否是微信
  isWeixin: function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  }
  ,

//判断是在android还是Ios端
  isAndroidOrIos: function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
      return true;
    }
    if (isiOS) {
      return false;
    }
  }
  ,
//保存页面滚动的位置
  saveScrollTop: function (key) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    sessionStorage.setItem(key, scrollTop);
  }
  ,
//滚动到页面之前的位置
  recoveryScrollTop: function (key) {
    var scrollTop = sessionStorage.getItem(key);
    if (0 !== scrollTop) {
      $(window).scrollTop(scrollTop);
    }
  }
  ,
//滚动到页面顶部
  scrollTop: function () {
    $(window).scrollTop(0);
  },

  //会话级别存对象
  saveSessionObj: function (key, obj) {
    var str = JSON.stringify(obj);
    localStorage.setItem(key, str);
  },
  //会话级别取对象
  getSessionObj: function (key) {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
  }

}

export {utils};
