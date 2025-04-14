//Mon Apr 14 2025 14:00:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("阿维塔");
let Notify = 1,
  envSplitor = ["\n", "@"],
  httpResult,
  httpReq,
  httpResp;
const NodeRSA = require("node-rsa"),
  crypto = require("crypto"),
  key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZrdn8zDrN2wk0ey3fOy9Arisr5RbqT6bAda3rwtf8dz1XdjGpCp6BXtJIhgKR1Xj7/0gQwB/nykcR5Dycn5C/agXgxJoiBbYlaiYF70H748nPMzPAPt9vKC4y7lB3oQgst/MOmzdhzWSmH5elU89vzdleULyTvsQAHaS8vG7KLQIDAQAB";
let userCookie = ($.isNode() ? process.env.awt : $.getdata("awt")) || "",
  userList = [],
  userIdx = 0,
  userCount = 0,
  defaultUA = "Mozilla/5.0 (Linux; Android 10; GLK-AL00 Build/HUAWEIGLK-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36/lenovoofficialapp/16868372648618313_10237920341/newversion/versioncode-1000097/";
class UserInfo {
  constructor(_0x2b677a) {
    this.index = ++userIdx;
    this.name = this.index;
    this.valid = false;
    this.accesstoken = false;
    this.param = $.str2json(_0x2b677a);
  }
  async ["newtoken"]() {
    try {
      let _0x4e26fd = "https://appserver-view.avatr.com/v2/auth/getNewToken/" + this.param.token,
        _0x215aeb = "",
        _0x2dfa88 = populateUrlObject(_0x4e26fd, _0x215aeb);
      await httpRequest("get", _0x2dfa88);
      let _0x239185 = httpResult;
      if (!_0x239185) return;
      if (_0x239185.code == 0) {
        this.token = _0x239185.result.loginToken;
      } else {
        $.logAndNotify("账号[" + this.name + "]刷新token失败");
      }
    } catch (_0x42c284) {
      console.log(_0x42c284);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["signin"]() {
    await this.newtoken();
    try {
      let _0x35c40a = "{}",
        _0x56a9c9 = Math.trunc(new Date().getTime() / 1000),
        _0x23b36e = randomString(16),
        _0x5eb5c0 = encryptrsa(_0x23b36e, key),
        _0x2c4f53 = "{\"expire\":" + _0x56a9c9 + ",\"params\":[],\"request\":{\"body\":\"" + _0x35c40a + "\",\"content-type\":\"application/json\"},\"salt\":\"" + _0x23b36e + "\"}",
        _0x553548 = crypto.createHash("sha256").update(_0x2c4f53).digest("hex"),
        _0x3d94dc = "" + this.token,
        _0x57ae1b = "https://m.avatr.com/api/v5/signIn/signInRiskVerify",
        _0x2d93a0 = populateUrlObject(_0x57ae1b, _0x5eb5c0, _0x553548, _0x3d94dc, _0x56a9c9, _0x35c40a);
      await httpRequest("post", _0x2d93a0);
      let _0x5b4674 = httpResult;
      if (!_0x5b4674) return;
      _0x5b4674.code == 0 ? $.logAndNotify("账号[" + this.name + "]签到:" + _0x5b4674.message) : $.logAndNotify("账号[" + this.name + "]签到:" + _0x5b4674.message);
    } catch (_0x181471) {
      console.log(_0x181471);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["userTask"]() {
    $.logAndNotify("\n============= 账号[" + this.index + "] =============");
    await this.signin();
    if (!this.valid) return;
    $.logAndNotify("\n----------- 每日任务 -----------");
    await this.getUserTaskList();
  }
}
!(async () => {
  if (typeof $request !== "undefined") {} else {
    if (!(await checkEnv())) return;
    for (let _0x3b4a28 of userList) {
      await _0x3b4a28.userTask();
    }
    await $.showmsg();
  }
})().catch(_0x30ab7e => console.log(_0x30ab7e)).finally(() => $.done());
async function checkEnv() {
  if (userCookie) {
    let _0x1550a3 = envSplitor[0];
    for (let _0x3293c9 of envSplitor) {
      if (userCookie.indexOf(_0x3293c9) > -1) {
        _0x1550a3 = _0x3293c9;
        break;
      }
    }
    for (let _0xdcf1d6 of userCookie.split(_0x1550a3)) {
      if (_0xdcf1d6) userList.push(new UserInfo(_0xdcf1d6));
    }
    userCount = userList.length;
  } else {
    console.log("\n未找到CK");
    return;
  }
  return console.log("共找到" + userCount + "个账号"), true;
}
function encryptrsa(_0x301108, _0x33bac0) {
  let _0x5e0aba = new NodeRSA("-----BEGIN PUBLIC KEY-----\n" + _0x33bac0 + "\n-----END PUBLIC KEY-----");
  _0x5e0aba.setOptions({
    "encryptionScheme": "pkcs1"
  });
  let _0x36765f = _0x5e0aba.encrypt(_0x301108, "base64", "utf8");
  return _0x36765f;
}
function randomString(_0x320d33) {
  _0x320d33 = _0x320d33 || _0x320d33;
  var _0x22b95c = "qwertyuiopasdfghjklzxcvbnm1234567890",
    _0x504f7d = _0x22b95c.length,
    _0x5ad098 = "";
  for (i = 0; i < _0x320d33; i++) _0x5ad098 += _0x22b95c.charAt(Math.floor(Math.random() * _0x504f7d));
  return _0x5ad098;
}
function encryptrsa(_0xe85ee8, _0x23d20b) {
  let _0x292ef4 = new NodeRSA("-----BEGIN PUBLIC KEY-----\n" + _0x23d20b + "\n-----END PUBLIC KEY-----");
  _0x292ef4.setOptions({
    "encryptionScheme": "pkcs1"
  });
  let _0x410a20 = _0x292ef4.encrypt(_0xe85ee8, "base64", "utf8");
  return _0x410a20;
}
function populateUrlObject(_0x21b7fd, _0x34d1d6, _0x18d0bb, _0x569af7, _0x3e8623, _0x2cfbc6 = "") {
  let _0x1e7140 = _0x21b7fd.replace("//", "/").split("/")[1],
    _0x2bafaa = {
      "url": _0x21b7fd,
      "headers": {
        "Host": _0x1e7140,
        "x-avatr-secret": _0x34d1d6,
        "x-avatr-sign": _0x18d0bb,
        "login-token": _0x569af7,
        "x-avatr-expire": _0x3e8623,
        "User-Agent": defaultUA
      },
      "timeout": 6000
    };
  if (_0x2cfbc6) {
    _0x2bafaa.body = _0x2cfbc6;
    _0x2bafaa.headers["content-type"] = "application/json";
    _0x2bafaa.headers["Content-Length"] = _0x2bafaa.body ? _0x2bafaa.body.length : 0;
  }
  return _0x2bafaa;
}
async function httpRequest(_0x35b744, _0x3242a9) {
  return httpResult = null, httpReq = null, httpResp = null, new Promise(_0x456a34 => {
    $.send(_0x35b744, _0x3242a9, async (_0xb8749b, _0x47de72, _0x3f727e) => {
      try {
        httpReq = _0x47de72;
        httpResp = _0x3f727e;
        if (_0xb8749b) httpResult = JSON.parse(_0x47de72.body);else {
          if (_0x3f727e.body) {
            if (typeof _0x3f727e.body == "object") {
              httpResult = _0x3f727e.body;
            } else try {
              httpResult = JSON.parse(_0x3f727e.body);
            } catch (_0x367c79) {
              httpResult = _0x3f727e.body;
            }
          }
        }
      } catch (_0x3b773e) {} finally {
        _0x456a34();
      }
    });
  });
}
function Env(_0x39055d, _0x24ada9) {
  return "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0), new class {
    constructor(_0x1d8d81, _0x186094) {
      this.name = _0x1d8d81;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x186094);
      console.log(this.name + " 开始运行：");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["getdata"](_0x575059) {
      let _0xfa44a8 = this.getval(_0x575059);
      if (/^@/.test(_0x575059)) {
        const [, _0x48cb80, _0x144f82] = /^@(.*?)\.(.*?)$/.exec(_0x575059),
          _0x166f33 = _0x48cb80 ? this.getval(_0x48cb80) : "";
        if (_0x166f33) try {
          const _0x4d9ca6 = JSON.parse(_0x166f33);
          _0xfa44a8 = _0x4d9ca6 ? this.lodash_get(_0x4d9ca6, _0x144f82, "") : _0xfa44a8;
        } catch (_0x293f62) {
          _0xfa44a8 = "";
        }
      }
      return _0xfa44a8;
    }
    ["setdata"](_0x318929, _0x4eeadf) {
      let _0x5df0aa = false;
      if (/^@/.test(_0x4eeadf)) {
        const [, _0x16ea6b, _0x304c25] = /^@(.*?)\.(.*?)$/.exec(_0x4eeadf),
          _0x182a74 = this.getval(_0x16ea6b),
          _0x4f1364 = _0x16ea6b ? "null" === _0x182a74 ? null : _0x182a74 || "{}" : "{}";
        try {
          const _0x3dfebf = JSON.parse(_0x4f1364);
          this.lodash_set(_0x3dfebf, _0x304c25, _0x318929);
          _0x5df0aa = this.setval(JSON.stringify(_0x3dfebf), _0x16ea6b);
        } catch (_0x6ee782) {
          const _0x58dcce = {};
          this.lodash_set(_0x58dcce, _0x304c25, _0x318929);
          _0x5df0aa = this.setval(JSON.stringify(_0x58dcce), _0x16ea6b);
        }
      } else _0x5df0aa = this.setval(_0x318929, _0x4eeadf);
      return _0x5df0aa;
    }
    ["getval"](_0x8f7a0) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x8f7a0) : this.isQuanX() ? $prefs.valueForKey(_0x8f7a0) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x8f7a0]) : this.data && this.data[_0x8f7a0] || null;
    }
    ["setval"](_0x3d7ba7, _0x1c4e66) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x3d7ba7, _0x1c4e66) : this.isQuanX() ? $prefs.setValueForKey(_0x3d7ba7, _0x1c4e66) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1c4e66] = _0x3d7ba7, this.writedata(), !0) : this.data && this.data[_0x1c4e66] || null;
    }
    ["send"](_0x43d7e8, _0x54e9ff, _0xac8720 = () => {}) {
      if (_0x43d7e8 != "get" && _0x43d7e8 != "post" && _0x43d7e8 != "put" && _0x43d7e8 != "delete") {
        console.log("无效的http方法：" + _0x43d7e8);
        return;
      }
      if (_0x43d7e8 == "get" && _0x54e9ff.headers) delete _0x54e9ff.headers["content-type"], delete _0x54e9ff.headers["Content-Length"];else {
        if (_0x54e9ff.body && _0x54e9ff.headers) {
          if (!_0x54e9ff.headers["content-type"]) _0x54e9ff.headers["content-type"] = "application/json";
        }
      }
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x54e9ff.headers = _0x54e9ff.headers || {}, Object.assign(_0x54e9ff.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        let _0x519041 = {
          "method": _0x43d7e8,
          "url": _0x54e9ff.url,
          "headers": _0x54e9ff.headers,
          "timeout": _0x54e9ff.timeout,
          "data": _0x54e9ff.body
        };
        if (_0x43d7e8 == "get") delete _0x519041.data;
        $axios(_0x519041).then(_0x484994 => {
          const {
            status: _0x2cbfb1,
            request: _0x1ac561,
            headers: _0x70017d,
            data: _0x357572
          } = _0x484994;
          _0xac8720(null, _0x1ac561, {
            "statusCode": _0x2cbfb1,
            "headers": _0x70017d,
            "body": _0x357572
          });
        }).catch(_0xdd1a5e => console.log(_0xdd1a5e));
      } else {
        if (this.isQuanX()) {
          _0x54e9ff.method = _0x43d7e8.toUpperCase();
          this.isNeedRewrite && (_0x54e9ff.opts = _0x54e9ff.opts || {}, Object.assign(_0x54e9ff.opts, {
            "hints": !1
          }));
          $task.fetch(_0x54e9ff).then(_0x39ad50 => {
            const {
              statusCode: _0x2592a5,
              request: _0x4ca7bc,
              headers: _0xaffe15,
              body: _0x44c261
            } = _0x39ad50;
            _0xac8720(null, _0x4ca7bc, {
              "statusCode": _0x2592a5,
              "headers": _0xaffe15,
              "body": _0x44c261
            });
          }, _0x61d5fd => _0xac8720(_0x61d5fd));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
              url: _0x186cbf,
              ..._0x3e2e40
            } = _0x54e9ff;
            this.instance = this.got.extend({
              "followRedirect": false
            });
            this.instance[_0x43d7e8](_0x186cbf, _0x3e2e40).then(_0x1a927c => {
              const {
                statusCode: _0x4d503e,
                request: _0x571e79,
                headers: _0x348147,
                body: _0x1a38b6
              } = _0x1a927c;
              _0xac8720(null, _0x571e79, {
                "statusCode": _0x4d503e,
                "headers": _0x348147,
                "body": _0x1a38b6
              });
            }, _0x349b4b => {
              const {
                message: _0xa11343,
                response: _0x439b8f
              } = _0x349b4b;
              _0xac8720(_0xa11343, _0x439b8f, _0x439b8f && _0x439b8f.body);
            });
          }
        }
      }
    }
    ["time"](_0x5c210a) {
      let _0x10d2bd = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        "S": new Date().getMilliseconds()
      };
      /(y+)/.test(_0x5c210a) && (_0x5c210a = _0x5c210a.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x44a8d6 in _0x10d2bd) new RegExp("(" + _0x44a8d6 + ")").test(_0x5c210a) && (_0x5c210a = _0x5c210a.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x10d2bd[_0x44a8d6] : ("00" + _0x10d2bd[_0x44a8d6]).substr(("" + _0x10d2bd[_0x44a8d6]).length)));
      return _0x5c210a;
    }
    async ["showmsg"]() {
      if (Notify > 0) {
        if (!this.notifyStr) return;
        let _0x4d4c44 = this.name + " 运行通知\n" + this.notifyStr;
        if ($.isNode()) {
          var _0xb611be = require("./sendNotify");
          console.log("\n============== 推送 ==============");
          await _0xb611be.sendNotify(this.name, _0x4d4c44);
        } else this.msg(_0x4d4c44);
      } else console.log("\n============== 推送已关闭 ==============");
    }
    ["logAndNotify"](_0x4c7e23) {
      console.log(_0x4c7e23);
      this.notifyStr += _0x4c7e23;
      this.notifyStr += "\n";
    }
    ["msg"](_0x181760 = t, _0x2ddd37 = "", _0x4a890f = "", _0x4fd5d1) {
      const _0x5c31e7 = _0x2693f8 => {
        if (!_0x2693f8) return _0x2693f8;
        if ("string" == typeof _0x2693f8) return this.isLoon() ? _0x2693f8 : this.isQuanX() ? {
          "open-url": _0x2693f8
        } : this.isSurge() ? {
          "url": _0x2693f8
        } : void 0;
        if ("object" == typeof _0x2693f8) {
          if (this.isLoon()) {
            let _0x323899 = _0x2693f8.openUrl || _0x2693f8.url || _0x2693f8["open-url"],
              _0x4baa45 = _0x2693f8.mediaUrl || _0x2693f8["media-url"];
            return {
              "openUrl": _0x323899,
              "mediaUrl": _0x4baa45
            };
          }
          if (this.isQuanX()) {
            let _0x4556fd = _0x2693f8["open-url"] || _0x2693f8.url || _0x2693f8.openUrl,
              _0x3a120b = _0x2693f8["media-url"] || _0x2693f8.mediaUrl;
            return {
              "open-url": _0x4556fd,
              "media-url": _0x3a120b
            };
          }
          if (this.isSurge()) {
            let _0x4edfa4 = _0x2693f8.url || _0x2693f8.openUrl || _0x2693f8["open-url"];
            return {
              "url": _0x4edfa4
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x181760, _0x2ddd37, _0x4a890f, _0x5c31e7(_0x4fd5d1)) : this.isQuanX() && $notify(_0x181760, _0x2ddd37, _0x4a890f, _0x5c31e7(_0x4fd5d1)));
      let _0x4a44e8 = ["", "============== 系统通知 =============="];
      _0x4a44e8.push(_0x181760);
      _0x2ddd37 && _0x4a44e8.push(_0x2ddd37);
      _0x4a890f && _0x4a44e8.push(_0x4a890f);
      console.log(_0x4a44e8.join("\n"));
    }
    ["getMin"](_0x393c32, _0x5067c4) {
      return _0x393c32 < _0x5067c4 ? _0x393c32 : _0x5067c4;
    }
    ["getMax"](_0x95bffd, _0xf50eba) {
      return _0x95bffd < _0xf50eba ? _0xf50eba : _0x95bffd;
    }
    ["padStr"](_0x2e2b6b, _0x557010, _0x51dcd1 = "0") {
      let _0x45373a = String(_0x2e2b6b),
        _0x2c7795 = _0x557010 > _0x45373a.length ? _0x557010 - _0x45373a.length : 0,
        _0x51b90e = "";
      for (let _0x5c387a = 0; _0x5c387a < _0x2c7795; _0x5c387a++) {
        _0x51b90e += _0x51dcd1;
      }
      return _0x51b90e += _0x45373a, _0x51b90e;
    }
    ["phoneNum"](_0x38eb23) {
      if (_0x38eb23.length == 11) {
        let _0x384a54 = _0x38eb23.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
        return _0x384a54;
      } else {
        return _0x38eb23;
      }
    }
    ["json2str"](_0x41298a, _0x164620, _0x29be47 = false) {
      let _0x2dca95 = [];
      for (let _0x4df54a of Object.keys(_0x41298a).sort()) {
        let _0x506454 = _0x41298a[_0x4df54a];
        if (_0x506454 && _0x29be47) _0x506454 = encodeURIComponent(_0x506454);
        _0x2dca95.push(_0x4df54a + "=" + _0x506454);
      }
      return _0x2dca95.join(_0x164620);
    }
    ["str2json"](_0x3e6134, _0x2a7a64 = false) {
      let _0x4f9874 = {};
      for (let _0x110280 of _0x3e6134.split("&")) {
        if (!_0x110280) continue;
        let _0x360729 = _0x110280.indexOf("=");
        if (_0x360729 == -1) continue;
        let _0x44c08c = _0x110280.substr(0, _0x360729),
          _0x48a9d9 = _0x110280.substr(_0x360729 + 1);
        if (_0x2a7a64) _0x48a9d9 = decodeURIComponent(_0x48a9d9);
        _0x4f9874[_0x44c08c] = _0x48a9d9;
      }
      return _0x4f9874;
    }
    ["randomString"](_0x4dd64c, _0x27b0e0 = "abcdef0123456789") {
      let _0x50451c = "";
      for (let _0xbe171d = 0; _0xbe171d < _0x4dd64c; _0xbe171d++) {
        _0x50451c += _0x27b0e0.charAt(Math.floor(Math.random() * _0x27b0e0.length));
      }
      return _0x50451c;
    }
    ["randomList"](_0x437ccf) {
      let _0x260713 = Math.floor(Math.random() * _0x437ccf.length);
      return _0x437ccf[_0x260713];
    }
    ["wait"](_0x1dd68a) {
      return new Promise(_0x4a7f0e => setTimeout(_0x4a7f0e, _0x1dd68a));
    }
    ["done"](_0x523e29 = {}) {
      const _0xffc1f = new Date().getTime(),
        _0x1320ef = (_0xffc1f - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x1320ef + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(_0x523e29);
    }
  }(_0x39055d, _0x24ada9);
}