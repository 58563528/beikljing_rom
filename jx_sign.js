"use strict";
/**
 * 任务、宝箱
 * TODO 助力
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var CryptoJS = require('crypto-js');
var notify = require('./sendNotify');
var appId = 10028, fingerprint, token, enCryptMethodJD;
var cookie = '', res = '', shareCodes = [];
var UserName, index;
var HELP_HW = process.env.HELP_HW ? process.env.HELP_HW : "true";
console.log('帮助HelloWorld:', HELP_HW);
var HELP_POOL = process.env.HELP_POOL ? process.env.HELP_POOL : "true";
console.log('帮助助力池:', HELP_POOL);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var cookiesArr, i, _a, isLogin, nickName, _i, _b, t, _c, _d, t;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, requestAlgo()];
                case 1:
                    _e.sent();
                    return [4 /*yield*/, TS_USER_AGENTS_1.requireConfig()];
                case 2:
                    cookiesArr = _e.sent();
                    i = 0;
                    _e.label = 3;
                case 3:
                    if (!(i < cookiesArr.length)) return [3 /*break*/, 17];
                    cookie = cookiesArr[i];
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    index = i + 1;
                    return [4 /*yield*/, TS_USER_AGENTS_1.TotalBean(cookie)];
                case 4:
                    _a = _e.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                    if (!isLogin) {
                        notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                        return [3 /*break*/, 16];
                    }
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                    return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: '', type: 1 })];
                case 5:
                    res = _e.sent();
                    _i = 0, _b = res.commontask;
                    _e.label = 6;
                case 6:
                    if (!(_i < _b.length)) return [3 /*break*/, 10];
                    t = _b[_i];
                    if (!(t.browsetime === '0' && t.status === 1)) return [3 /*break*/, 9];
                    console.log(t.browsetime, t.status, t.taskname);
                    return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/dotask?task=" + t.task + "&signhb_source=5&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBKB&g_ty=ls", '')];
                case 7:
                    res = _e.sent();
                    if (res.ret === 0) {
                        console.log('任务完成，获得：', res.sendhb);
                    }
                    else {
                        console.log('任务失败：', res.errmsg);
                    }
                    return [4 /*yield*/, TS_USER_AGENTS_1.wait(2000)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9:
                    _i++;
                    return [3 /*break*/, 6];
                case 10: return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: '', type: 1 })];
                case 11:
                    res = _e.sent();
                    if (!(res.baoxiang_left != 0)) return [3 /*break*/, 16];
                    _c = 0, _d = res.baoxiang_stage;
                    _e.label = 12;
                case 12:
                    if (!(_c < _d.length)) return [3 /*break*/, 16];
                    t = _d[_c];
                    if (!(t.status === 1)) return [3 /*break*/, 15];
                    return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/bxdraw?_=" + Date.now() + "&sceneval=2", '')];
                case 13:
                    res = _e.sent();
                    console.log('开宝箱，获得：', res.sendhb);
                    return [4 /*yield*/, TS_USER_AGENTS_1.wait(2000)];
                case 14:
                    _e.sent();
                    _e.label = 15;
                case 15:
                    _c++;
                    return [3 /*break*/, 12];
                case 16:
                    i++;
                    return [3 /*break*/, 3];
                case 17: return [2 /*return*/];
            }
        });
    });
}
main().then();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/fanxiantask/signhb/" + fn + "?_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBKB&g_ty=ls";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + decrypt(stk, url);
                    if (fn.match(/(dotask|bxdraw)/)) {
                        url = fn;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;',
                                'Referer': 'https://st.jingxi.com/',
                                'X-Requested-With': 'com.jd.pingou',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string') {
                        data = data.replace('try{jsonpCBKB(', '').replace('try{Query(', '').replace('try{BxDraw(', '').split('\n')[0];
                        resolve(JSON.parse(data));
                    }
                    else {
                        resolve(data);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    reject(401);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function requestAlgo() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, generateFp()];
                case 1:
                    fingerprint = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, enCryptMethodJDString;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, axios_1["default"].post('https://cactus.jd.com/request_algo?g_ty=ajax', {
                                            "version": "1.0",
                                            "fp": fingerprint,
                                            "appId": appId,
                                            "timestamp": Date.now(),
                                            "platform": "web",
                                            "expandParams": ""
                                        }, {
                                            "headers": {
                                                'Authority': 'cactus.jd.com',
                                                'Pragma': 'no-cache',
                                                'Cache-Control': 'no-cache',
                                                'Accept': 'application/json',
                                                'User-Agent': TS_USER_AGENTS_1["default"],
                                                'Content-Type': 'application/json',
                                                'Origin': 'https://st.jingxi.com',
                                                'Sec-Fetch-Site': 'cross-site',
                                                'Sec-Fetch-Mode': 'cors',
                                                'Sec-Fetch-Dest': 'empty',
                                                'Referer': 'https://st.jingxi.com/',
                                                'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7'
                                            }
                                        })];
                                    case 1:
                                        data = (_a.sent()).data;
                                        if (data['status'] === 200) {
                                            token = data.data.result.tk;
                                            enCryptMethodJDString = data.data.result.algo;
                                            if (enCryptMethodJDString)
                                                enCryptMethodJD = new Function("return " + enCryptMethodJDString)();
                                        }
                                        else {
                                            console.log("fp: " + fingerprint);
                                            console.log('request_algo 签名参数API请求失败:');
                                        }
                                        resolve(200);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
            }
        });
    });
}
function decrypt(stk, url) {
    var timestamp = (date_fns_1.format(new Date(), 'yyyyMMddhhmmssSSS'));
    var hash1;
    if (fingerprint && token && enCryptMethodJD) {
        hash1 = enCryptMethodJD(token, fingerprint.toString(), timestamp.toString(), appId.toString(), CryptoJS).toString(CryptoJS.enc.Hex);
    }
    else {
        var random = '5gkjB6SpmC9s';
        token = "tk01wcdf61cb3a8nYUtHcmhSUFFCfddDPRvKvYaMjHkxo6Aj7dhzO+GXGFa9nPXfcgT+mULoF1b1YIS1ghvSlbwhE0Xc";
        fingerprint = 9686767825751161;
        // $.fingerprint = 7811850938414161;
        var str = "" + token + fingerprint + timestamp + appId + random;
        hash1 = CryptoJS.SHA512(str, token).toString(CryptoJS.enc.Hex);
    }
    var st = '';
    stk.split(',').map(function (item, index) {
        st += item + ":" + getQueryString(url, item) + (index === stk.split(',').length - 1 ? '' : '&');
    });
    var hash2 = CryptoJS.HmacSHA256(st, hash1.toString()).toString(CryptoJS.enc.Hex);
    return encodeURIComponent(["".concat(timestamp.toString()), "".concat(fingerprint.toString()), "".concat(appId.toString()), "".concat(token), "".concat(hash2)].join(";"));
}
function generateFp() {
    var e = "0123456789";
    var a = 13;
    var i = '';
    for (; a--;)
        i += e[Math.random() * e.length | 0];
    return (i + Date.now()).slice(0, 16);
}
function getQueryString(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.split('?')[1].match(reg);
    if (r != null)
        return unescape(r[2]);
    return '';
}
