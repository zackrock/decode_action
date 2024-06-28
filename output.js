//Fri Jun 28 2024 10:18:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "i智己";
VALY = ["zhijick"];
CK = "";
LOGS = 0;
usid = 0;
nowhour = Math.round(new Date().getHours()).toString();
Notify = 1;
const fs = require("fs");
dcfkey = process.env.dcfkey;
dcfhost = process.env.dcfhost;
const {
  v4: uuidv4
} = require("uuid");
class Bar {
  constructor(_0x33c101) {
    this._ = ++usid;
    this.f = "账号 [" + this._ + "] ";
    this.token = _0x33c101;
    this.message = "";
    this.logs = true;
  }
  async ["getsign"](_0x554bd3) {
    let _0x1a78bd = $.HmacSHA_Encrypt(0, "HmacSHA256", _0x554bd3, "RPbDm707cdAp414j");
    return _0x1a78bd;
  }
  async ["getsign2"](_0x340cae) {
    let _0x54959d = $.HmacSHA_Encrypt(0, "HmacSHA256", _0x340cae, "jQlejCwKMY8GS4pz");
    return _0x54959d;
  }
  async ["login"]() {
    let _0x293eb8 = $.time(13),
      _0x205939 = _0x293eb8 + "@" + $.SJS(15, 1),
      _0x1f76c0 = encodeURIComponent("GET&/app/capp-csop-unify/v6/v5/info/getCsopPageUserInfo&x-app-key=android&x-nonce=" + _0x205939 + "&x-timestamp=" + _0x293eb8),
      _0x507764 = await this.getsign(_0x1f76c0),
      _0x556063 = {
        "Authorization": this.token,
        "versionNumber": "2.2.7",
        "versionType": "ANDROID",
        "x-app-key": "android",
        "x-nonce": _0x205939,
        "x-timestamp": _0x293eb8,
        "x-signature": _0x507764
      },
      _0x3df34c = await $.task("get", "https://mh.immotors.com/app/capp-csop-unify/v6/v5/info/getCsopPageUserInfo", _0x556063);
    if (_0x3df34c.resultCode == 200) this.name = _0x3df34c.data.userName, console.log("【" + this.name + "】 登陆成功"), this.logs = true;else {
      this.logs = false;
    }
  }
  async ["tasklist"]() {
    let _0x51409c = $.time(13),
      _0x1fadf4 = _0x51409c + "@" + $.SJS(15, 1),
      _0x3efac5 = encodeURIComponent("GET&/app/capp-csop-unify/v6/task/taskList&x-app-key=android&x-nonce=" + _0x1fadf4 + "&x-timestamp=" + _0x51409c + "&source=APP"),
      _0xa89df0 = await this.getsign(_0x3efac5),
      _0x4441f3 = {
        "Authorization": this.token,
        "versionNumber": "2.2.7",
        "versionType": "ANDROID",
        "x-app-key": "android",
        "x-nonce": _0x1fadf4,
        "x-timestamp": _0x51409c,
        "x-signature": _0xa89df0
      },
      _0x3c148f = await $.task("get", "https://mh.immotors.com/app/capp-csop-unify/v6/task/taskList?source=APP", _0x4441f3);
    for (let _0xd58cdc of _0x3c148f.data.items) {
      for (let _0x505173 of _0xd58cdc.subTasks) {
        if (_0x505173.taskName == "分享一篇内容" && _0x505173.finish == "false") {
          let _0x8c9cab = _0x505173.progressValue.split("/")[1] - _0x505173.progressValue.split("/")[0];
          await this.share(_0x8c9cab);
        }
        if (_0x505173.taskName == "点赞一篇随想" && _0x505173.finish == "false") {
          let _0x46faea = _0x505173.progressValue.split("/")[1] - _0x505173.progressValue.split("/")[0];
          await this.like(_0x46faea);
        }
        if (_0x505173.taskName == "随机宝箱奖励" && _0x505173.finish == "false") {
          let _0x1451bf = _0x505173.progressValue.split("/")[1] - _0x505173.progressValue.split("/")[0];
          await this.box(_0x1451bf);
        }
      }
    }
  }
  async ["signin"]() {
    let _0x14857d = $.time(13),
      _0x3a7034 = _0x14857d + "@" + $.SJS(15, 1),
      _0x579138 = encodeURIComponent("POST&/app/userProfile/user-sign/sign&x-app-key=android&x-nonce=" + _0x3a7034 + "&x-timestamp=" + _0x14857d),
      _0x26179c = await this.getsign(_0x579138),
      _0x4fb0fa = {
        "Authorization": this.token,
        "versionNumber": "2.2.7",
        "versionType": "ANDROID",
        "x-app-key": "android",
        "x-nonce": _0x3a7034,
        "x-timestamp": _0x14857d,
        "x-signature": _0x26179c
      },
      _0x9297cd = "",
      _0xc009c9 = await $.task("post", "https://mh.immotors.com/app/userProfile/user-sign/sign", _0x4fb0fa, _0x9297cd);
    _0xc009c9.data.genPointsDto.code ? console.log("【" + this.name + "】 签到成功，获得" + _0xc009c9.data.genPointsDto.point + "原石") : console.log("【" + this.name + "】 签到失败，可能今天已经签到");
  }
  async ["sharelist"]() {
    let _0x1e4f1a = $.time(13),
      _0x204e0c = _0x1e4f1a + "@" + $.SJS(15, 1),
      _0xebb6e2 = encodeURIComponent("GET&/app/community-unify/v3/content/c/post/newest&x-app-key=android&x-nonce=" + _0x204e0c + "&x-timestamp=" + _0x1e4f1a + "&count=20"),
      _0x21359c = await this.getsign(_0xebb6e2),
      _0x266bf5 = {
        "Authorization": this.token,
        "versionNumber": "2.2.7",
        "versionType": "ANDROID",
        "x-app-key": "android",
        "x-nonce": _0x204e0c,
        "x-timestamp": _0x1e4f1a,
        "x-signature": _0x21359c
      },
      _0x5b8db5 = await $.task("get", "https://mh.immotors.com/app/community-unify/v3/content/c/post/newest?count=20", _0x266bf5),
      _0x23a893 = _0x5b8db5.data.blocks;
    return _0x23a893;
  }
  async ["share"](_0x5f5c92) {
    let _0x5be8eb = await this.sharelist();
    for (let _0x199c2f = 0; _0x199c2f < _0x5f5c92; _0x199c2f++) {
      let _0x13bb05 = $.RT(0, 19),
        _0x2e537a = _0x5be8eb[_0x13bb05].id,
        _0x205dc5 = _0x5be8eb[_0x13bb05].accountId,
        _0xadd743 = $.time(13),
        _0x30032f = $.SJS(10, 1),
        _0x129501 = encodeURIComponent("POST&https://m.immotors.com/app/planet/api/v1/behavior/share&x-app-key=android-h5&x-encrypt=false&x-nonce=" + _0x30032f + "&x-timestamp=" + _0xadd743 + "&{\"sharedResourceId\":\"" + _0x2e537a + "\",\"sharedAccountId\":\"" + _0x205dc5 + "\"}"),
        _0x57af77 = await this.getsign2(_0x129501),
        _0x2bf81a = {
          "x-signature": _0x57af77,
          "x-app-key": "android-h5",
          "Authorization": this.token,
          "x-timestamp": _0xadd743,
          "x-encrypt": "false",
          "x-original-path": "https://m.immotors.com/app/planet/api/v1/behavior/share",
          "x-nonce": _0x30032f
        },
        _0x5d07ce = "{\"sharedResourceId\":\"" + _0x2e537a + "\",\"sharedAccountId\":\"" + _0x205dc5 + "\"}",
        _0x14c32a = await $.task("post", "https://m.immotors.com/app/planet/api/v1/behavior/share", _0x2bf81a, _0x5d07ce);
      if (_0x14c32a.data.point) {
        console.log("【" + this.name + "】 分享成功，获得" + _0x14c32a.data.point + "原石");
      }
    }
  }
  async ["like"](_0x1ac735) {
    let _0x31ed1b = await this.sharelist();
    for (let _0x54da3b = 0; _0x54da3b < _0x1ac735; _0x54da3b++) {
      let _0x2b45d4 = $.RT(0, 19),
        _0x5262cb = _0x31ed1b[_0x2b45d4].id,
        _0x14484b = _0x31ed1b[_0x2b45d4].accountId,
        _0xda3403 = _0x31ed1b[_0x2b45d4].resourceType,
        _0x3f5f02 = $.time(13),
        _0x18b783 = $.SJS(10, 1),
        _0x332983 = encodeURIComponent("POST&https://m.immotors.com/app/planet/api/v1/behavior/like&x-app-key=android-h5&x-encrypt=false&x-nonce=" + _0x18b783 + "&x-timestamp=" + _0x3f5f02 + "&{\"resourceId\":\"" + _0x5262cb + "\",\"resourceType\":" + _0xda3403 + ",\"accountId\":\"" + _0x14484b + "\",\"nickName\":\"" + this.name + "\",\"action\":33}"),
        _0x2d6249 = await this.getsign2(_0x332983),
        _0x352c6e = {
          "x-signature": _0x2d6249,
          "x-app-key": "android-h5",
          "Authorization": this.token,
          "x-timestamp": _0x3f5f02,
          "x-encrypt": "false",
          "x-original-path": "https://m.immotors.com/app/planet/api/v1/behavior/like",
          "x-nonce": _0x18b783
        },
        _0x4cda18 = "{\"resourceId\":\"" + _0x5262cb + "\",\"resourceType\":" + _0xda3403 + ",\"accountId\":\"" + _0x14484b + "\",\"nickName\":\"" + this.name + "\",\"action\":33}",
        _0x1f6e75 = await $.task("post", "https://m.immotors.com/app/planet/api/v1/behavior/like", _0x352c6e, _0x4cda18);
      _0x1f6e75.data.point && console.log("【" + this.name + "】 点赞成功，获得" + _0x1f6e75.data.point + "原石");
    }
  }
  async ["box"](_0x1f7238) {
    for (let _0x167238 = 0; _0x167238 < _0x1f7238; _0x167238++) {
      let _0x40a7b3 = $.time(13),
        _0x48255c = _0x40a7b3 + "@" + $.SJS(15, 1),
        _0x126176 = encodeURIComponent("POST&/app/capp-csop-unify/v6/point/box&x-app-key=android&x-nonce=" + _0x48255c + "&x-timestamp=" + _0x40a7b3 + "&{\"activityCode\":\"IM_LOY_DRAW_POINTS\",\"sourceCode\":\"APP\",\"traceId\":\"\"}"),
        _0x504786 = await this.getsign(_0x126176),
        _0x42d21e = {
          "Authorization": this.token,
          "versionNumber": "2.2.7",
          "versionType": "ANDROID",
          "x-app-key": "android",
          "x-nonce": _0x48255c,
          "x-timestamp": _0x40a7b3,
          "x-signature": _0x504786
        },
        _0x1e34e5 = "{\"activityCode\":\"IM_LOY_DRAW_POINTS\",\"sourceCode\":\"APP\",\"traceId\":\"\"}",
        _0x348953 = await $.task("post", "https://mh.immotors.com/app/capp-csop-unify/v6/point/box", _0x42d21e, _0x1e34e5);
      _0x348953.data.point && console.log("【" + this.name + "】 领取随机宝箱成功，获得" + _0x348953.data.point + "原石");
    }
  }
  async ["userinfo"]() {
    let _0x332955 = $.time(13),
      _0x55eb33 = _0x332955 + "@" + $.SJS(15, 1),
      _0x4b6216 = encodeURIComponent("GET&/app/unify/v3/userCenter/c/user/info&x-app-key=android&x-nonce=" + _0x55eb33 + "&x-timestamp=" + _0x332955),
      _0x19ccd1 = await this.getsign(_0x4b6216),
      _0x4025f3 = {
        "Authorization": this.token,
        "versionNumber": "2.2.7",
        "versionType": "ANDROID",
        "x-app-key": "android",
        "x-nonce": _0x55eb33,
        "x-timestamp": _0x332955,
        "x-signature": _0x19ccd1
      },
      _0x5bbfc8 = await $.task("get", "https://mh.immotors.com/app/unify/v3/userCenter/c/user/info", _0x4025f3);
    _0x5bbfc8.resultCode == 200 && (console.log("【" + this.name + "】 当前原石：" + _0x5bbfc8.data.points), this.message += "【" + this.name + "】 当前原石：" + _0x5bbfc8.data.points);
  }
}
$ = DD();
!(async () => {
  console.log(NAME);
  let _0x39253f = await $.getkami(),
    _0x3a99b8 = await $.readUUID();
  if (_0x39253f.dcfkey) {
    _0x39253f.Notify != "" && console.log(_0x39253f.Notify);
    TSdata = $.time(13);
    if (_0x39253f.MAC == null) {
      console.log("请提交正确的MAC地址后再运行脚本！");
      return;
    } else {
      if (_0x39253f.MAC != null) {
        if (_0x39253f.MAC != _0x3a99b8) {
          let _0x4736cb = require("path"),
            _0x2a1f97 = _0x4736cb.basename(__filename);
          console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x2a1f97 + "]");
          return;
        }
      }
    }
    if (_0x39253f.Delete == 1) {
      let _0x798aef = require("path"),
        _0x4cfb98 = _0x798aef.basename(__filename);
      console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x4cfb98 + "]");
      fs.unlink(_0x4cfb98, _0x5351cb => {});
      return;
    }
    if (TSdata <= _0x39253f.Data) {
      console.log("尊贵的" + _0x39253f.UserName + "小主,您的卡密有效期到：" + _0x39253f.DataTime);
    } else {
      let _0x4a3bbc = require("path"),
        _0x1a8723 = _0x4a3bbc.basename(__filename);
      console.log("卡密已过期，停止运行文件[" + _0x1a8723 + "]");
      return;
    }
    await $.ExamineCookie();
    if ($.cookie_list.length < 11) {
      await $.Multithreading("login");
      let _0x52659e = $.cookie_list.filter(_0x326c78 => _0x326c78.logs == true);
      if (_0x52659e.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else await $.Multithreading("signin"), await $.Multithreading("tasklist"), await $.Multithreading("userinfo");
    } else console.log("账号数量超过限制，请减少账号数量后重试！");
  } else {
    let _0x1ac016 = require("path"),
      _0x34c1bf = _0x1ac016.basename(__filename);
    console.log("无效卡密，停止运行文件[" + _0x34c1bf + "]");
    return;
  }
  let _0x2576ce = [];
  for (let _0x5dd6d7 of $.cookie_list) {
    if (_0x5dd6d7.message) _0x2576ce.push(_0x5dd6d7.message);
  }
  if (_0x2576ce.length > 0) await $.SendMsg(_0x2576ce.join("\n"));
})().catch(_0x31d126 => {
  console.log(_0x31d126);
}).finally(() => {});
function DD() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x5765ec, _0x654b0a, _0x2514ab) {
      let _0x134f82 = [];
      !_0x2514ab && (_0x2514ab = 1);
      while (_0x2514ab--) {
        for (let _0x63fbc of $.cookie_list) {
          _0x134f82.push(_0x63fbc[_0x5765ec](_0x654b0a));
        }
      }
      await Promise.allSettled(_0x134f82);
    }
    ["ExamineCookie"]() {
      let _0x4b1ec8 = process.env[VALY] || CK,
        _0x2adfee = 0;
      if (_0x4b1ec8) {
        for (let _0x20d1e8 of _0x4b1ec8.split("\n").filter(_0x1591ba => !!_0x1591ba)) {
          $.cookie_list.push(new Bar(_0x20d1e8));
        }
        _0x2adfee = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0x2adfee + "个账号"), $.cookie_list;
    }
    ["task"](_0x58453e, _0x163192, _0x1003a4, _0x4e5d84, _0x56b3d4) {
      return _0x58453e == "delete" ? _0x58453e = _0x58453e.toUpperCase() : _0x58453e = _0x58453e, _0x58453e == "post" && (delete _0x1003a4["content-type"], delete _0x1003a4["Content-type"], delete _0x1003a4["content-Type"], $.safeGet(_0x4e5d84) ? _0x1003a4["Content-Type"] = "application/json;charset=UTF-8" : _0x1003a4["Content-Type"] = "application/x-www-form-urlencoded", _0x4e5d84 && (_0x1003a4["Content-Length"] = $.lengthInUtf8Bytes(_0x4e5d84))), _0x58453e == "get" && (delete _0x1003a4["content-type"], delete _0x1003a4["Content-type"], delete _0x1003a4["content-Type"], delete _0x1003a4["Content-Length"]), _0x1003a4.Host = _0x163192.replace("//", "/").split("/")[1], new Promise(async _0x270be6 => {
        if (_0x58453e.indexOf("T") < 0) var _0x60ff0f = {
          "url": _0x163192,
          "headers": _0x1003a4,
          "body": _0x4e5d84,
          "proxy": "http://" + _0x56b3d4
        };else var _0x60ff0f = {
          "url": _0x163192,
          "headers": _0x1003a4,
          "form": JSON.parse(_0x4e5d84),
          "proxy": "http://" + _0x56b3d4
        };
        !_0x56b3d4 && delete _0x60ff0f.proxy;
        this.request[_0x58453e.toLowerCase()](_0x60ff0f, (_0x5a5094, _0x259a20, _0x4b02dc) => {
          try {
            _0x4b02dc && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x60ff0f), console.log("================ 返回 ================"), $.safeGet(_0x4b02dc) ? console.log(JSON.parse(_0x4b02dc)) : console.log(_0x4b02dc));
          } catch (_0x2dc5b4) {
            console.log(_0x2dc5b4, _0x163192 + "\n" + _0x1003a4);
          } finally {
            let _0x5b8cdf = "";
            if (!_0x5a5094) {
              if ($.safeGet(_0x4b02dc)) _0x5b8cdf = JSON.parse(_0x4b02dc);else _0x4b02dc.indexOf("/") != -1 && _0x4b02dc.indexOf("+") != -1 ? _0x5b8cdf = _0x4b02dc : _0x5b8cdf = _0x4b02dc;
            } else _0x5b8cdf = _0x163192 + "   API请求失败，请检查网络重试\n" + _0x5a5094;
            return _0x270be6(_0x5b8cdf);
          }
        });
      });
    }
    async ["readUUID"]() {
      const _0x1e777e = "uuid.txt";
      await $.generateUUID(_0x1e777e);
      try {
        const _0x26fbc1 = fs.readFileSync(_0x1e777e, "utf8"),
          _0x100c06 = _0x26fbc1.trim();
        return _0x100c06;
      } catch (_0x4ed8f4) {
        return null;
      }
    }
    ["generateUUID"](_0x5bd474) {
      if (fs.existsSync(_0x5bd474)) return;
      const _0x3dea84 = uuidv4();
      fs.writeFile(_0x5bd474, _0x3dea84, "utf8", _0x420d23 => {
        if (_0x420d23) {
          console.error("写入文件出错: " + _0x420d23.message);
          return;
        }
      });
    }
    async ["getkami"]() {
      let _0x14d98d = await $.readUUID(),
        _0x2207b9 = await $.task("get", "http://" + dcfhost + ":5705/query?dcf=" + dcfkey + "&MA=" + _0x14d98d, {});
      return _0x2207b9;
    }
    async ["SendMsg"](_0x1671a2) {
      if (!_0x1671a2) return;
      if (Notify == 1) {
        var _0xec57ee = require("./sendNotify");
        await _0xec57ee.sendNotify(NAME, _0x1671a2);
      } else {}
    }
    ["lengthInUtf8Bytes"](_0x23aaeb) {
      let _0xc30bf8 = encodeURIComponent(_0x23aaeb).match(/%[89ABab]/g);
      return _0x23aaeb.length + (_0xc30bf8 ? _0xc30bf8.length : 0);
    }
    ["randomArr"](_0x347925) {
      return _0x347925[parseInt(Math.random() * _0x347925.length, 10)];
    }
    ["wait"](_0x45cbb3) {
      return new Promise(_0x46aae4 => setTimeout(_0x46aae4, _0x45cbb3));
    }
    ["time"](_0x43fc2d) {
      if (_0x43fc2d == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    ["timenow"](_0x4ac712) {
      let _0x5286d5 = new Date();
      if (_0x4ac712 == undefined) {
        let _0x700033 = new Date(),
          _0x59278b = _0x700033.getFullYear() + "-",
          _0x363ab6 = (_0x700033.getMonth() + 1 < 10 ? "0" + (_0x700033.getMonth() + 1) : _0x700033.getMonth() + 1) + "-",
          _0xc89931 = _0x700033.getDate() + " ",
          _0x305c6c = _0x700033.getHours() + ":",
          _0x556f13 = _0x700033.getMinutes() + ":",
          _0x1efeda = _0x700033.getSeconds() + 1 < 10 ? "0" + _0x700033.getSeconds() : _0x700033.getSeconds();
        return _0x59278b + _0x363ab6 + _0xc89931 + _0x305c6c + _0x556f13 + _0x1efeda;
      } else {
        if (_0x4ac712 == 0) return _0x5286d5.getFullYear();else {
          if (_0x4ac712 == 1) return _0x5286d5.getMonth() + 1 < 10 ? "0" + (_0x5286d5.getMonth() + 1) : _0x5286d5.getMonth() + 1;else {
            if (_0x4ac712 == 2) return _0x5286d5.getDate();else {
              if (_0x4ac712 == 3) {
                return _0x5286d5.getHours();
              } else {
                if (_0x4ac712 == 4) return _0x5286d5.getMinutes();else {
                  if (_0x4ac712 == 5) {
                    return _0x5286d5.getSeconds() + 1 < 10 ? "0" + _0x5286d5.getSeconds() : _0x5286d5.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x14d5bc) {
      try {
        if (typeof JSON.parse(_0x14d5bc) == "object") {
          return true;
        }
      } catch (_0x21e1a5) {
        return false;
      }
    }
    ["SJS"](_0x4b5222, _0x54078d) {
      if (_0x54078d == 0) {
        let _0x4a73f2 = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm01234567890123456789",
          _0x5a69ee = _0x4a73f2.length,
          _0x582128 = "";
        for (let _0x11b93e = 0; _0x11b93e < _0x4b5222; _0x11b93e++) {
          _0x582128 += _0x4a73f2.charAt(Math.floor(Math.random() * _0x5a69ee));
        }
        return _0x582128;
      } else {
        if (_0x54078d == 1) {
          let _0x15949e = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x37545b = _0x15949e.length,
            _0x5cda3e = "";
          for (let _0x3fced5 = 0; _0x3fced5 < _0x4b5222; _0x3fced5++) {
            _0x5cda3e += _0x15949e.charAt(Math.floor(Math.random() * _0x37545b));
          }
          return _0x5cda3e;
        } else {
          let _0x2f0afa = "0123456789",
            _0x54d586 = _0x2f0afa.length,
            _0x549d36 = "";
          for (let _0x25011e = 0; _0x25011e < _0x4b5222; _0x25011e++) {
            _0x549d36 += _0x2f0afa.charAt(Math.floor(Math.random() * _0x54d586));
          }
          return _0x549d36;
        }
      }
    }
    ["udid"](_0x502cb0) {
      function _0x519e5e() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x22d29e = _0x519e5e() + _0x519e5e() + "-" + _0x519e5e() + "-" + _0x519e5e() + "-" + _0x519e5e() + "-" + _0x519e5e() + _0x519e5e() + _0x519e5e();
      return _0x502cb0 == 0 ? _0x22d29e.toUpperCase() : _0x22d29e.toLowerCase();
    }
    ["encodeUnicode"](_0x3a0e0e) {
      var _0x25eb93 = [];
      for (var _0x5b9b38 = 0; _0x5b9b38 < _0x3a0e0e.length; _0x5b9b38++) {
        _0x25eb93[_0x5b9b38] = ("00" + _0x3a0e0e.charCodeAt(_0x5b9b38).toString(16)).slice(-4);
      }
      return "\\u" + _0x25eb93.join("\\u");
    }
    ["decodeUnicode"](_0x2afbfb) {
      return _0x2afbfb = _0x2afbfb.replace(/\\u/g, "%u"), unescape(unescape(_0x2afbfb));
    }
    ["RT"](_0x2750b5, _0x1ae29) {
      return Math.round(Math.random() * (_0x1ae29 - _0x2750b5) + _0x2750b5);
    }
    ["arrNull"](_0x49797d) {
      var _0x4810b2 = _0x49797d.filter(_0x731f4 => {
        return _0x731f4 && _0x731f4.trim();
      });
      return _0x4810b2;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x5d886d = $.nowtime();
      if (JSON.stringify(_0x5d886d).indexOf(" ") >= 0) {
        _0x5d886d = _0x5d886d.replace(" ", "T");
      }
      return new Date(_0x5d886d).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x3bb836, _0x6e55cd, _0xebd58, _0x4b85dd) {
      if (_0x4b85dd == 0) return JSON.stringify(_0x3bb836.split(_0x6e55cd).reduce((_0x46d3d9, _0x299c9c) => {
        let _0x5d2870 = _0x299c9c.split(_0xebd58);
        return _0x46d3d9[_0x5d2870[0].trim()] = _0x5d2870[1].trim(), _0x46d3d9;
      }, {}));else {
        return _0x3bb836.split(_0x6e55cd).reduce((_0xfd6e40, _0x33421a) => {
          let _0x2209f1 = _0x33421a.split(_0xebd58);
          return _0xfd6e40[_0x2209f1[0].trim()] = _0x2209f1[1].trim(), _0xfd6e40;
        }, {});
      }
    }
    ["MD5Encrypt"](_0x564be4, _0x283896) {
      if (_0x564be4 == 0) {
        return this.CryptoJS.MD5(_0x283896).toString().toLowerCase();
      } else {
        if (_0x564be4 == 1) return this.CryptoJS.MD5(_0x283896).toString().toUpperCase();else {
          if (_0x564be4 == 2) {
            return this.CryptoJS.MD5(_0x283896).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x564be4 == 3) {
              return this.CryptoJS.MD5(_0x283896).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x3ee39b, _0x2ad089, _0x487fc1) {
      return _0x3ee39b == 0 ? this.CryptoJS[_0x2ad089](_0x487fc1).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2ad089](_0x487fc1).toString();
    }
    ["HmacSHA_Encrypt"](_0x254b15, _0x2f7e1f, _0x59a956, _0x29da00) {
      if (_0x254b15 == 0) {
        return this.CryptoJS[_0x2f7e1f](_0x59a956, _0x29da00).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x2f7e1f](_0x59a956, _0x29da00).toString();
      }
    }
    ["Base64"](_0x58c7b6, _0x3be2e9) {
      if (_0x58c7b6 == 0) {
        return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x3be2e9));
      } else return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x3be2e9));
    }
    ["DecryptCrypto"](_0x3d3187, _0x2e741d, _0x155e89, _0x512ff6, _0x429c0c, _0x418844, _0x5f319e) {
      if (_0x3d3187 == 0) {
        const _0x3329cb = this.CryptoJS[_0x2e741d].encrypt(this.CryptoJS.enc.Utf8.parse(_0x429c0c), this.CryptoJS.enc.Utf8.parse(_0x418844), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x5f319e),
          "mode": this.CryptoJS.mode[_0x155e89],
          "padding": this.CryptoJS.pad[_0x512ff6]
        });
        return _0x3329cb.toString();
      } else {
        const _0x5c255a = this.CryptoJS[_0x2e741d].decrypt(_0x429c0c, this.CryptoJS.enc.Utf8.parse(_0x418844), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x5f319e),
          "mode": this.CryptoJS.mode[_0x155e89],
          "padding": this.CryptoJS.pad[_0x512ff6]
        });
        return _0x5c255a.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x1aec59, _0x25544c) {
      const _0x297c12 = require("node-rsa");
      let _0x2cc416 = new _0x297c12("-----BEGIN PUBLIC KEY-----\n" + _0x25544c + "\n-----END PUBLIC KEY-----");
      return _0x2cc416.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x2cc416.encrypt(_0x1aec59, "base64", "utf8");
    }
    ["SHA_RSA"](_0x1cb9d4, _0x1f1b6b) {
      let _0xace5af = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x1f1b6b, 76) + "\n-----END PRIVATE KEY-----"),
        _0x17985d = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x17985d.init(_0xace5af);
      _0x17985d.updateString(_0x1cb9d4);
      let _0x58daf5 = _0x17985d.sign(),
        _0x22be32 = this.Sha_Rsa.hextob64u(_0x58daf5);
      return _0x22be32;
    }
  }();
}