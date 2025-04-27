//Sun Apr 27 2025 10:17:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("华润万象系列"),
  axios = require("axios");
var crypto = require("crypto");
let request = require("request");
request = request.defaults({
  "jar": true
});
const {
    log
  } = console,
  Notify = 1,
  debug = 0;
let hrthd = ($.isNode() ? process.env.hrthd : $.getdata("hrthd")) || "",
  hrthdArr = [],
  ydwxhd = ($.isNode() ? process.env.ydwxhd : $.getdata("ydwxhd")) || "",
  ydwxhdArr = [],
  olehd = ($.isNode() ? process.env.olehd : $.getdata("olehd")) || "",
  olehdArr = [],
  szwhd = ($.isNode() ? process.env.szwhd : $.getdata("szwhd")) || "",
  szwhdArr = [],
  data = "",
  msg = "";
!(async () => {
  if (typeof $request !== "undefined") await GetRewrite();else {
    if (!(await Envs())) return;else {
      log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " \n=============================================\n");
      log("\n============ 微信小程序：柠檬玩机 ============");
      log("\n=================== 共找到 " + hrthdArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + hrthdArr);
      for (let _0x191275 = 0; _0x191275 < hrthdArr.length; _0x191275++) {
        let _0x216db8 = _0x191275 + 1;
        addNotifyStr("\n==== 开始华润通【第 " + _0x216db8 + " 个账号】====", true);
        hrthd = hrthdArr[_0x191275];
        await questionget();
        await getInvitationCode();
        await saveQuestionSignin(nos);
        await queryInvitedToDraw();
      }
      for (let _0x4f50d9 = 0; _0x4f50d9 < ydwxhdArr.length; _0x4f50d9++) {
        let _0x3d643e = _0x4f50d9 + 1;
        addNotifyStr("\n==== 开始一点万象【第 " + _0x3d643e + " 个账号】====", true);
        ydwxhd = ydwxhdArr[_0x4f50d9];
        await checkin();
      }
      for (let _0xf0cc50 = 0; _0xf0cc50 < szwhdArr.length; _0xf0cc50++) {
        let _0x3a4438 = _0xf0cc50 + 1;
        addNotifyStr("\n==== 开始深圳湾【第 " + _0x3a4438 + " 个账号】====", true);
        szwhd = szwhdArr[_0xf0cc50];
        await szwsign();
      }
      for (let _0x509301 = 0; _0x509301 < olehdArr.length; _0x509301++) {
        let _0x461329 = _0x509301 + 1;
        addNotifyStr("\n==== 开始Ole【第 " + _0x461329 + " 个账号】====", true);
        olehd = olehdArr[_0x509301];
        olehds = olehd.split("&");
        await oleloign();
        await oleinfo();
      }
      await SendMsg(msg);
    }
  }
})().catch(_0x596242 => log(_0x596242)).finally(() => $.done());
async function questionget() {
  return new Promise(_0x405d84 => {
    uudi = create_guid();
    var _0x11deaf = {
        "auth": (n = "API_AUTH_H5", a = new Date().getTime(), s = uudi, c = [n, "1c6120fd-5ad3-4c2d-8cb7-b87a707f416d", a, s].sort().join(""), {
          "appid": n,
          "nonce": s,
          "timestamp": a,
          "signature": md5(c)
        }),
        "num": 1
      },
      _0x514c81 = {
        "method": "POST",
        "url": "https://mid.huaruntong.cn/api/question/get",
        "headers": {
          "Content-Type": "application/json;charset=UTF-8",
          "Host": "mid.huaruntong.cn",
          "Origin": "https://cloud.huaruntong.cn",
          "Referer": "https://cloud.huaruntong.cn/",
          "sec-ch-ua": "\"\"",
          "sec-ch-ua-mobile": "?1",
          "sec-ch-ua-platform": "\"\"",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36/ hrtbrowser/5.3.5 grayscale/0",
          "x-Hrt-Mid-Appid": "API_AUTH_WEB"
        },
        "data": _0x11deaf
      };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x514c81)));
    axios.request(_0x514c81).then(async function (_0x519aa0) {
      try {
        data = _0x519aa0.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x519aa0.data)));
        if (data.code == "S0A00000") {
          log(data.msg);
          ansid = data.data[0].id;
          nos = data.data[0].no;
          answers = data.data[0].keywords;
          console.log(ansid, nos, answers);
          await questioncount(ansid);
        } else log(data.msg);
      } catch (_0x358684) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x402324) {
      console.error(_0x402324);
    }).then(_0x454d98 => {
      _0x405d84();
    });
  });
}
async function questioncount(_0x27c621) {
  return new Promise(_0x3fcbda => {
    var _0x47029e = {
        "auth": (n = "API_AUTH_H5", a = new Date().getTime(), s = uudi, c = [n, "1c6120fd-5ad3-4c2d-8cb7-b87a707f416d", a, s].sort().join(""), {
          "appid": n,
          "nonce": s,
          "timestamp": a,
          "signature": md5(c)
        }),
        "id": _0x27c621,
        "status": 1
      },
      _0x46bb1b = {
        "method": "POST",
        "url": "https://mid.huaruntong.cn/api/question/count",
        "headers": {
          "Content-Type": "application/json;charset=UTF-8",
          "Host": "mid.huaruntong.cn",
          "Origin": "https://cloud.huaruntong.cn",
          "Referer": "https://cloud.huaruntong.cn/",
          "sec-ch-ua": "\"\"",
          "sec-ch-ua-mobile": "?1",
          "sec-ch-ua-platform": "\"\"",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36/ hrtbrowser/5.3.5 grayscale/0",
          "x-Hrt-Mid-Appid": "API_AUTH_WEB"
        },
        "data": _0x47029e
      };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x46bb1b)));
    axios.request(_0x46bb1b).then(async function (_0x2ab095) {
      try {
        data = _0x2ab095.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x2ab095.data)));
        if (data.code == "S0A00000") log(data.msg);else log(data.msg);
      } catch (_0x23e907) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x5e5e45) {
      console.error(_0x5e5e45);
    }).then(_0x4d2b0c => {
      _0x3fcbda();
    });
  });
}
async function saveQuestionSignin(_0x1d5266) {
  return new Promise(_0x302cec => {
    body = {
      "answerResult": 1,
      "questionId": _0x1d5266,
      "channelId": "APP",
      "merchantCode": "1641000001532",
      "storeCode": "qiandaosonjifen",
      "sysId": "T0000001",
      "transactionUuid": uudi,
      "inviteCode": ints,
      "token": hrthd,
      "apiPath": "%2Fapi%2Fpoints%2FsaveQuestionSignin",
      "appId": "API_AUTH_WEB",
      "timestamp": new Date().getTime()
    };
    var _0x3e34d2 = {
      "method": "POST",
      "url": "https://mid.huaruntong.cn/api/points/saveQuestionSignin",
      "headers": {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "mid.huaruntong.cn",
        "Origin": "https://cloud.huaruntong.cn",
        "Referer": "https://cloud.huaruntong.cn/",
        "sec-ch-ua": "\"\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"\"",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36/ hrtbrowser/5.3.5 grayscale/0",
        "x-Hrt-Mid-Appid": "API_AUTH_WEB"
      },
      "data": signs(body)
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x3e34d2)));
    axios.request(_0x3e34d2).then(async function (_0x4b7a8d) {
      try {
        data = _0x4b7a8d.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4b7a8d.data)));
        if (data.code == "S0A00000") {
          if (Object.keys(data.data).length > 0) log("签到获得：" + data.data.point), msg += "\n签到获得：" + data.data.point;else log(data.msg);
          msg += "\n" + data.msg;
        } else log(data.msg);
        msg += "\n" + data.msg;
      } catch (_0x52945f) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x477574) {
      console.error(_0x477574);
    }).then(_0x544486 => {
      _0x302cec();
    });
  });
}
async function drawInvitePoint() {
  return new Promise(_0x36d027 => {
    body = {
      "apiPath": "%2Fapi%2Fpoints%2FdrawInvitePoint",
      "timestamp": new Date().getTime(),
      "appId": "API_AUTH_WEB",
      "token": hrthd
    };
    var _0x22290d = {
      "method": "POST",
      "url": "https://mid.huaruntong.cn/api/points/drawInvitePoint",
      "headers": {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "mid.huaruntong.cn",
        "Origin": "https://cloud.huaruntong.cn",
        "Referer": "https://cloud.huaruntong.cn/",
        "sec-ch-ua": "\"\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"\"",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36/ hrtbrowser/5.3.5 grayscale/0",
        "x-Hrt-Mid-Appid": "API_AUTH_WEB"
      },
      "data": signs(body)
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x22290d)));
    axios.request(_0x22290d).then(async function (_0x10a09d) {
      try {
        data = _0x10a09d.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x10a09d.data)));
        log(JSON.stringify(_0x10a09d.data));
        if (data.code == "S0A00000") {
          log(data);
        } else log(data);
      } catch (_0x357781) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x42f3d4) {
      console.error(_0x42f3d4);
    }).then(_0x2b6e3d => {
      _0x36d027();
    });
  });
}
async function queryInvitedToDraw() {
  return new Promise(_0x56f008 => {
    body = {
      "apiPath": "%2Fapi%2Fpoints%2FqueryInvitedToDraw",
      "timestamp": new Date().getTime(),
      "appId": "API_AUTH_WEB",
      "token": hrthd
    };
    var _0x242fb9 = {
      "method": "POST",
      "url": "https://mid.huaruntong.cn/api/points/queryInvitedToDraw",
      "headers": {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "mid.huaruntong.cn",
        "Origin": "https://cloud.huaruntong.cn",
        "Referer": "https://cloud.huaruntong.cn/",
        "sec-ch-ua": "\"\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"\"",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36/ hrtbrowser/5.3.5 grayscale/0",
        "x-Hrt-Mid-Appid": "API_AUTH_WEB"
      },
      "data": signs(body)
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x242fb9)));
    axios.request(_0x242fb9).then(async function (_0x1b451a) {
      try {
        data = _0x1b451a.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1b451a.data)));
        if (data.code == "S0A00000") Object.keys(data.data).length > 0 && (await drawInvitePoint());else log(data);
      } catch (_0x8437a9) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x29a71a) {
      console.error(_0x29a71a);
    }).then(_0x47aa6c => {
      _0x56f008();
    });
  });
}
async function getInvitationCode() {
  return new Promise(_0x1d39bd => {
    body = {
      "apiPath": "%2Fapi%2Fpoints%2FgetInvitationCode",
      "timestamp": new Date().getTime(),
      "appId": "API_AUTH_WEB",
      "token": "2b1bc009f7c1ee1288cf3ba819c907883"
    };
    var _0x252f2c = {
      "method": "POST",
      "url": "https://mid.huaruntong.cn/api/points/getInvitationCode",
      "headers": {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "mid.huaruntong.cn",
        "Origin": "https://cloud.huaruntong.cn",
        "Referer": "https://cloud.huaruntong.cn/",
        "sec-ch-ua": "\"\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"\"",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36/ hrtbrowser/5.3.5 grayscale/0",
        "x-Hrt-Mid-Appid": "API_AUTH_WEB"
      },
      "data": signs(body)
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x252f2c)));
    axios.request(_0x252f2c).then(async function (_0x275466) {
      try {
        data = _0x275466.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x275466.data)));
        if (data.code == "S0A00000") ints = data.data.data.invitationCode;else log(data.msg);
      } catch (_0x35d14d) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x4149d7) {
      console.error(_0x4149d7);
    }).then(_0x6ac710 => {
      _0x1d39bd();
    });
  });
}
async function checkin() {
  return new Promise(_0x49b26a => {
    t = new Date().getTime();
    devece = randomnum(170);
    sings = MD5("action=mixc.app.memberSign.sign&apiVersion=1.0&appId=68a91a5bac6a4f3e91bf4b42856785c6&appVersion=3.32.0&deviceParams=" + devece + "&imei=2333&mallNo=20014&osVersion=12.0.1&params=eyJtYWxsTm8iOiIyMDAxNCJ9&platform=h5&timestamp=" + t + "&token=" + ydwxhd + "&P@Gkbu0shTNHjhM!7F");
    var _0x226620 = {
      "method": "POST",
      "url": "https://app.mixcapp.com/mixc/gateway",
      "headers": {
        "Host": "app.mixcapp.com",
        "Origin": "https://app.mixcapp.com",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; PCAM00 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36/MIXCAPP/3.42.2/AnalysysAgent/Hybrid",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "com.crland.mixc",
        "Referer": "https://app.mixcapp.com/m/m-20014/signIn?showWebNavigation=true&timestamp=1676906528979&appVersion=3.42.2&mallNo=20014",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      "data": "mallNo=20014&appId=68a91a5bac6a4f3e91bf4b42856785c6&platform=h5&imei=2333&appVersion=3.32.0&osVersion=12.0.1&action=mixc.app.memberSign.sign&apiVersion=1.0&timestamp=" + t + "&deviceParams=" + devece + "&token=" + ydwxhd + "&params=eyJtYWxsTm8iOiIyMDAxNCJ9&sign=" + sings
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x226620)));
    axios.request(_0x226620).then(async function (_0x169835) {
      try {
        data = _0x169835.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x169835.data)));
        if (data.code = 0) log("point:" + data.data.point), log("point:" + data.data.userPoints), msg + "\n" + data.message;else log(data.message);
        msg += "\n" + data.message;
      } catch (_0x2946d9) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x152fec) {
      console.error(_0x152fec);
    }).then(_0x4747f0 => {
      _0x49b26a();
    });
  });
}
async function oleloign() {
  return new Promise(_0xf4899e => {
    t = new Date().getTime();
    sings = sha256("token=&appKey=PYT_APPKEY&timestamp=" + t + "&v=1.0&resouce=OleApp");
    passwords = oleencrypt(olehds[1]);
    var _0x54ce56 = {
      "method": "POST",
      "url": "https://ole-app.crvole.com.cn/vgdt_app_api/v1/vgdt-fea-app-member/front_api/member_auths_login/password",
      "headers": {
        "User-Agent": "okhttp-okgo/jeasonlzy",
        "appkey": "PYT_APPKEY",
        "timestamp": t,
        "V": "1.0",
        "token": "",
        "resouce": "OleApp",
        "channel": "android",
        "Tenant": "VGDT",
        "Tenant-Channel": "OLE",
        "sign": sings,
        "shopCode": "206743",
        "Host": "ole-app.crvole.com.cn"
      },
      "data": {
        "password": passwords,
        "mobile": olehds[0]
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x54ce56)));
    axios.request(_0x54ce56).then(async function (_0x183bce) {
      try {
        data = _0x183bce.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x183bce.data)));
        if (data.state_code == 200) log(data.message), sessionIds = data.data.user_session, await olesign();else log(data.message);
      } catch (_0x4989ae) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x44f1eb) {
      console.error(_0x44f1eb);
    }).then(_0x14dc1d => {
      _0xf4899e();
    });
  });
}
async function olesign() {
  return new Promise(_0x124ff4 => {
    t = new Date().getTime();
    sings = sha256("token=&appKey=PYT_APPKEY&timestamp=" + t + "&v=1.0&resouce=OleApp");
    var _0x5dedae = {
      "method": "POST",
      "url": "https://ole-app.crvole.com.cn/vgdt_app_api/v1/vgdt-fea-app-member/front_api/member_sign",
      "headers": {
        "Accept-Language": "zh-CN,zh;q=0.8",
        "User-Agent": "okhttp-okgo/jeasonlzy",
        "appkey": "PYT_APPKEY",
        "timestamp": t,
        "V": "1.0",
        "token": "",
        "resouce": "OleApp",
        "channel": "android",
        "Tenant": "VGDT",
        "Tenant-Channel": "OLE",
        "sign": sings,
        "shopCode": "206743",
        "sessionId": sessionIds,
        "Content-Type": "application/json;charset=utf-8",
        "Content-Length": "28",
        "Host": "ole-app.crvole.com.cn",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip"
      },
      "data": {
        "enter_shop_code": "206743"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5dedae)));
    axios.request(_0x5dedae).then(async function (_0x59cbb5) {
      try {
        data = _0x59cbb5.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x59cbb5.data)));
        if (data.state_code == 200) log("签到获得：" + data.data.integral), msg += "\n签到获得：" + data.data.integral;else log(data.message);
        msg += "\n" + data.message;
      } catch (_0x2e7679) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x597b45) {
      console.error(_0x597b45);
    }).then(_0x1bece2 => {
      _0x124ff4();
    });
  });
}
async function oleinfo() {
  return new Promise(_0x52ecc8 => {
    t = new Date().getTime();
    sings = sha256("token=&appKey=PYT_APPKEY&timestamp=" + t + "&v=1.0&resouce=OleApp");
    var _0x3e6b2d = {
      "method": "GET",
      "url": "https://ole-app.crvole.com.cn/vgdt_app_api/v1/vgdt-fea-app-member/front_api/member_sign",
      "headers": {
        "User-Agent": "okhttp-okgo/jeasonlzy",
        "appkey": "PYT_APPKEY",
        "timestamp": t,
        "V": "1.0",
        "token": "",
        "resouce": "OleApp",
        "channel": "android",
        "Tenant": "VGDT",
        "Tenant-Channel": "OLE",
        "sign": sings,
        "shopCode": "206743",
        "sessionId": sessionIds,
        "Host": "ole-app.crvole.com.cn"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x3e6b2d)));
    axios.request(_0x3e6b2d).then(async function (_0x20f064) {
      try {
        data = _0x20f064.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x20f064.data)));
        if (data.state_code == 200) log("积分:" + data.data.total_integral), msg += "\n====积分====" + data.data.total_integral;else log(data.message);
      } catch (_0x3a3135) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x596fc7) {
      console.error(_0x596fc7);
    }).then(_0x866976 => {
      _0x52ecc8();
    });
  });
}
async function szwsign() {
  return new Promise(_0x450a67 => {
    const _0x5bdd76 = {
      "method": "POST",
      "url": "https://program.springcocoon.com/szbay/api/services/app/SignInRecord/SignInAsync",
      "headers": {
        "Host": "program.springcocoon.com",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6938",
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer": "https://program.springcocoon.com/szbay/AppInteract/SignIn/Index",
        "Cookie": szwhd
      },
      "data": "id=6c3a00f6-b9f0-44a3-b8a0-d5d709de627d&webApiUniqueID=78da9041-d541-7f39-caae-fc6fa55854df"
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x5bdd76)));
    axios.request(_0x5bdd76).then(async function (_0xa575bc) {
      try {
        data = _0xa575bc.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0xa575bc.data)));
        if (data.success == true) log("签到获得：" + data.result.listSignInRuleData[0].point), msg += "\n签到获得：" + data.result.listSignInRuleData[0].point;else log(data.error.message);
        msg += "\n" + data.error.message;
      } catch (_0x3531ab) {
        log("异常：" + data + "，原因：" + data.error.message);
      }
    }).catch(function (_0x28e17c) {}).then(_0x13caca => {
      _0x450a67();
    });
  });
}
function create_guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x35e5f2) {
    var _0x2471ef = 16 * Math.random() | 0;
    return ("x" == _0x35e5f2 ? _0x2471ef : _0x2471ef & 3 | 8).toString(16);
  });
}
function encrypt(_0x51be68, _0x2b0a46, _0x40971d) {
  const _0x5280cd = crypto.createCipheriv("aes-128-cbc", _0x2b0a46, _0x40971d);
  let _0x3406bb = _0x5280cd.update(_0x51be68);
  return _0x3406bb = Buffer.concat([_0x3406bb, _0x5280cd.final()]), _0x3406bb.toString("base64");
}
function rsa(_0x5a0120) {
  const _0x7259b6 = crypto.publicEncrypt({
    "key": "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDuAiqDmvn9Rf15o21qkDxN0rUf\nZsX6rVBrtfgY6tamN2Yn+1D3eHZJuKNlucyqeBr6nmfN2srYAX+oyCXr5vWwFclj\nPuWh8aSASqyk7MfbAv5Q4VqYS7lsYUQRdw4plZG0NASDeBvHWi3lsHjGfNb7iUvg\nrk312EDfBHtRgDvB0QIDAQAB\n-----END PUBLIC KEY-----",
    "padding": crypto.constants.RSA_PKCS1_OAEP_PADDING
  }, Buffer.from(_0x5a0120));
  return _0x7259b6.toString("base64");
}
function signs(_0x2a2ade) {
  eee = {
    "secret": "c274fc67-19f9-47ba-bb84-585a2e3a1f6a",
    "pubKey": "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDuAiqDmvn9Rf15o21qkDxN0rUfZsX6rVBrtfgY6tamN2Yn+1D3eHZJuKNlucyqeBr6nmfN2srYAX+oyCXr5vWwFcljPuWh8aSASqyk7MfbAv5Q4VqYS7lsYUQRdw4plZG0NASDeBvHWi3lsHjGfNb7iUvgrk312EDfBHtRgDvB0QIDAQAB-----END PUBLIC KEY-----"
  };
  var _0x2a2ade = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (_0x2a2ade.apiPath) {
    _0x2a2ade.appId = _0x2a2ade.appId;
    _0x2a2ade.timestamp = _0x2a2ade.timestamp || Date.now();
    var _0xc1be35 = [];
    for (var _0x7dcaf0 in _0x2a2ade) {
      var _0x5a69c0 = _0x2a2ade[_0x7dcaf0];
      void 0 !== _0x5a69c0 && (_0x5a69c0 instanceof Date ? _0x5a69c0 = JSON.stringify(_0x5a69c0).replace(/"/g, "") : "object" === (void 0 === _0x5a69c0 ? "undefined" : "number") && (_0x5a69c0 = JSON.stringify(_0x5a69c0)), _0xc1be35.push(_0x7dcaf0 + "=" + _0x5a69c0));
    }
    const _0x481ea7 = crypto.createHmac("md5", eee.secret);
    _0x481ea7.update(encodeUtf8(_0xc1be35.sort().join("&")));
    const _0x553417 = _0x481ea7.digest("hex");
    _0x2a2ade.signature = _0x553417;
    var _0x4a8f99 = i(),
      _0x126aaf = encrypt(JSON.stringify(_0x2a2ade), Buffer.alloc(16, _0x4a8f99), Buffer.alloc(16, ""));
    return {
      "key": rsa(_0x4a8f99),
      "data": _0x126aaf
    };
  }
}
function i() {
  for (var _0x17b806 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], _0x36642d = _0x17b806.length, _0x337607 = "", _0x1acad2 = 0; _0x1acad2 < 16; _0x1acad2++) _0x337607 += _0x17b806[Math.floor(Math.random() * _0x36642d)];
  return _0x337607;
}
encodeUtf8 = function (_0x25ce23) {
  return unescape(encodeURIComponent(_0x25ce23));
};
function md5(_0x588d8b) {
  const _0x1e9fd6 = crypto.createHash("md5");
  _0x1e9fd6.update(_0x588d8b);
  const _0xd2507a = _0x1e9fd6.digest("hex");
  return _0xd2507a;
}
function oleencrypt(_0x343d90) {
  const _0x56effb = Buffer.from(_0x343d90, "utf8");
  var _0x5a0aa6 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbSCYMupAFFYE5vs1Zxu+77NB0\n3lDoeKvsqLgGQndwdGSj5NppiDguoyTN0dHANlsG7zvhyauyueGx32LvcvfKuzfp\nGxMazwt91ivI+uL3ZbHkbOi74NUS8ob7Teol0iQO8ZAMmRL2fSPeDL0RHFUf4CN1\n85lxlZ0egiM3kTarJQIDAQAB\n-----END PUBLIC KEY-----";
  const _0x2061b5 = crypto.publicEncrypt({
    "key": _0x5a0aa6,
    "padding": crypto.constants.RSA_PKCS1_PADDING
  }, _0x56effb);
  return _0x2061b5.toString("base64");
}
async function Envs() {
  if (hrthd) {
    if (hrthd.indexOf("@") != -1) {
      hrthd.split("@").forEach(item => {
        hrthdArr.push(item);
      });
    } else if (hrthd.indexOf("\n") != -1) {
      hrthd.split("\n").forEach(item => {
        hrthdArr.push(item);
      });
    } else {
      hrthdArr.push(hrthd);
    }
  } else {
    log(`\n 【${$.name}】：未填写变量 hrthd`);
    return;
  }
  if (ydwxhd) {
    if (ydwxhd.indexOf("@") != -1) {
      ydwxhd.split("@").forEach(item => {
        ydwxhdArr.push(item);
      });
    } else if (ydwxhd.indexOf("\n") != -1) {
      ydwxhd.split("\n").forEach(item => {
        ydwxhdArr.push(item);
      });
    } else {
      ydwxhdArr.push(ydwxhd);
    }
  } else {
    log(`\n 【${$.name}】：未填写变量 ydwxhd`);
  }
  if (olehd) {
    if (olehd.indexOf("@") != -1) {
      olehd.split("@").forEach(item => {
        olehdArr.push(item);
      });
    } else if (olehd.indexOf("\n") != -1) {
      olehd.split("\n").forEach(item => {
        olehdArr.push(item);
      });
    } else {
      olehdArr.push(olehd);
    }
  } else {
    log(`\n 【${$.name}】：未填写变量 olehd`);
  }
  if (szwhd) {
    if (szwhd.indexOf("@") != -1) {
      szwhd.split("@").forEach(item => {
        szwhdArr.push(item);
      });
    } else if (szwhd.indexOf("\n") != -1) {
      szwhd.split("\n").forEach(item => {
        szwhdArr.push(item);
      });
    } else {
      szwhdArr.push(szwhd);
    }
  } else {
    log(`\n 【${$.name}】：未填写变量 szwhd`);
  }
  return true;
}
function addNotifyStr(str, is_log = true) {
  if (is_log) {
    log(`${str}\n`);
  }
  msg += `${str}\n`;
}
async function SendMsg(message) {
  if (!message) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var notify = require("./sendNotify");
      await notify.sendNotify($.name, message);
    } else {
      $.msg(message);
    }
  } else {
    log(message);
  }
}
var MD5 = function (string) {
  function RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }
  function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 2147483648;
    lY8 = lY & 2147483648;
    lX4 = lX & 1073741824;
    lY4 = lY & 1073741824;
    lResult = (lX & 1073741823) + (lY & 1073741823);
    if (lX4 & lY4) {
      return lResult ^ 2147483648 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 1073741824) {
        return lResult ^ 3221225472 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 1073741824 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }
  function F(x, y, z) {
    return x & y | ~x & z;
  }
  function G(x, y, z) {
    return x & z | y & ~z;
  }
  function H(x, y, z) {
    return x ^ y ^ z;
  }
  function I(x, y, z) {
    return y ^ (x | ~z);
  }
  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }
  function WordToHex(lValue) {
    var WordToHexValue = "",
      WordToHexValue_temp = "",
      lByte,
      lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }
  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }
    return utftext;
  }
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22;
  var S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20;
  var S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23;
  var S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;
  string = Utf8Encode(string);
  x = ConvertToWordArray(string);
  a = 1732584193;
  b = 4023233417;
  c = 2562383102;
  d = 271733878;
  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
    d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
    c = FF(c, d, a, b, x[k + 2], S13, 606105819);
    b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
    a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
    d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
    c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
    b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
    a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
    d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
    c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
    b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
    a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
    d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
    c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
    b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
    a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
    d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
    c = GG(c, d, a, b, x[k + 11], S23, 643717713);
    b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
    a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
    d = GG(d, a, b, c, x[k + 10], S22, 38016083);
    c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
    b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
    a = GG(a, b, c, d, x[k + 9], S21, 568446438);
    d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
    c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
    b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
    a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
    d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
    c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
    b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
    a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
    d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
    c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
    b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
    a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
    d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
    c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
    b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
    a = HH(a, b, c, d, x[k + 13], S31, 681279174);
    d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
    c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
    b = HH(b, c, d, a, x[k + 6], S34, 76029189);
    a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
    d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
    c = HH(c, d, a, b, x[k + 15], S33, 530742520);
    b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
    a = II(a, b, c, d, x[k + 0], S41, 4096336452);
    d = II(d, a, b, c, x[k + 7], S42, 1126891415);
    c = II(c, d, a, b, x[k + 14], S43, 2878612391);
    b = II(b, c, d, a, x[k + 5], S44, 4237533241);
    a = II(a, b, c, d, x[k + 12], S41, 1700485571);
    d = II(d, a, b, c, x[k + 3], S42, 2399980690);
    c = II(c, d, a, b, x[k + 10], S43, 4293915773);
    b = II(b, c, d, a, x[k + 1], S44, 2240044497);
    a = II(a, b, c, d, x[k + 8], S41, 1873313359);
    d = II(d, a, b, c, x[k + 15], S42, 4264355552);
    c = II(c, d, a, b, x[k + 6], S43, 2734768916);
    b = II(b, c, d, a, x[k + 13], S44, 1309151649);
    a = II(a, b, c, d, x[k + 4], S41, 4149444226);
    d = II(d, a, b, c, x[k + 11], S42, 3174756917);
    c = II(c, d, a, b, x[k + 2], S43, 718787259);
    b = II(b, c, d, a, x[k + 9], S44, 3951481745);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }
  var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  return temp.toLowerCase();
};
class SHA256 {
  constructor(data) {
    this.K256 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    this.sha256_hex_digits = "0123456789abcdef";
    this.ihash = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    this.count = [0, 0];
    this.buffer = new Array(64);
    this.sha256_update(data, data.length);
    this.sha256_final();
  }
  rotateRight(n, x) {
    return x >>> n | x << 32 - n;
  }
  choice(x, y, z) {
    return x & y ^ ~x & z;
  }
  majority(x, y, z) {
    return x & y ^ x & z ^ y & z;
  }
  sha256_Sigma0(x) {
    return this.rotateRight(2, x) ^ this.rotateRight(13, x) ^ this.rotateRight(22, x);
  }
  sha256_Sigma1(x) {
    return this.rotateRight(6, x) ^ this.rotateRight(11, x) ^ this.rotateRight(25, x);
  }
  sha256_sigma0(x) {
    return this.rotateRight(7, x) ^ this.rotateRight(18, x) ^ x >>> 3;
  }
  sha256_sigma1(x) {
    return this.rotateRight(17, x) ^ this.rotateRight(19, x) ^ x >>> 10;
  }
  sha256_expand(W, j) {
    return W[j & 15] += this.sha256_sigma1(W[j + 14 & 15]) + W[j + 9 & 15] + this.sha256_sigma0(W[j + 1 & 15]);
  }
  safe_add(x, y) {
    let lsw = (x & 65535) + (y & 65535);
    let msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  sha256_transform() {
    let a, b, c, d, e, f, g, h, T1, T2;
    let W = new Array(16);
    a = this.ihash[0];
    b = this.ihash[1];
    c = this.ihash[2];
    d = this.ihash[3];
    e = this.ihash[4];
    f = this.ihash[5];
    g = this.ihash[6];
    h = this.ihash[7];
    for (let i = 0; i < 16; i++) W[i] = this.buffer[(i << 2) + 3] | this.buffer[(i << 2) + 2] << 8 | this.buffer[(i << 2) + 1] << 16 | this.buffer[i << 2] << 24;
    for (let j = 0; j < 64; j++) {
      T1 = h + this.sha256_Sigma1(e) + this.choice(e, f, g) + this.K256[j];
      if (j < 16) T1 += W[j];else T1 += this.sha256_expand(W, j);
      T2 = this.sha256_Sigma0(a) + this.majority(a, b, c);
      h = g;
      g = f;
      f = e;
      e = this.safe_add(d, T1);
      d = c;
      c = b;
      b = a;
      a = this.safe_add(T1, T2);
    }
    this.ihash[0] += a;
    this.ihash[1] += b;
    this.ihash[2] += c;
    this.ihash[3] += d;
    this.ihash[4] += e;
    this.ihash[5] += f;
    this.ihash[6] += g;
    this.ihash[7] += h;
  }
  sha256_update(data, inputLen) {
    let i,
      index,
      curpos = 0;
    index = this.count[0] >> 3 & 63;
    let remainder = inputLen & 63;
    if ((this.count[0] += inputLen << 3) < inputLen << 3) this.count[1]++;
    this.count[1] += inputLen >> 29;
    for (i = 0; i + 63 < inputLen; i += 64) {
      for (let j = index; j < 64; j++) this.buffer[j] = data.charCodeAt(curpos++);
      this.sha256_transform();
      index = 0;
    }
    for (let j = 0; j < remainder; j++) {
      this.buffer[j] = data.charCodeAt(curpos++);
    }
  }
  sha256_final() {
    let index = this.count[0] >> 3 & 63;
    this.buffer[index++] = 128;
    if (index <= 56) {
      for (let i = index; i < 56; i++) this.buffer[i] = 0;
    } else {
      for (let i = index; i < 64; i++) this.buffer[i] = 0;
      this.sha256_transform();
      for (let i = 0; i < 56; i++) this.buffer[i] = 0;
    }
    this.buffer[56] = this.count[1] >>> 24 & 255;
    this.buffer[57] = this.count[1] >>> 16 & 255;
    this.buffer[58] = this.count[1] >>> 8 & 255;
    this.buffer[59] = this.count[1] & 255;
    this.buffer[60] = this.count[0] >>> 24 & 255;
    this.buffer[61] = this.count[0] >>> 16 & 255;
    this.buffer[62] = this.count[0] >>> 8 & 255;
    this.buffer[63] = this.count[0] & 255;
    this.sha256_transform();
  }
  sha256_encode_bytes() {
    let j = 0;
    let output = new Array(32);
    for (let i = 0; i < 8; i++) {
      output[j++] = this.ihash[i] >>> 24 & 255;
      output[j++] = this.ihash[i] >>> 16 & 255;
      output[j++] = this.ihash[i] >>> 8 & 255;
      output[j++] = this.ihash[i] & 255;
    }
    return output;
  }
  toHex() {
    let output = new String();
    for (let i = 0; i < 8; i++) {
      for (let j = 28; j >= 0; j -= 4) output += this.sha256_hex_digits.charAt(this.ihash[i] >>> j & 15);
    }
    return output;
  }
}
function sha256(str) {
  return new SHA256(str).toHex().toUpperCase();
}
function randomString(m) {
  for (var e = m > 0 && void 0 !== m ? m : 21, t = ""; t.length < e;) t += Math.random().toString(36).slice(2);
  return t.slice(0, e);
}
function randomnum(e) {
  e = e || 32;
  var t = "1234567890",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `??${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============??系统通知??=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `??${this.name}, 错误!`, t.stack) : this.log("", `??${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `??${this.name}, 结束! ?? ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}