var ejs_loader = function (_0x12a842) {
  var _0x28595d = {};
  function _0x556b3e(_0x265013) {
    var _0x4ad0b2 = a0_0x1a8a;
    if (_0x28595d[_0x265013]) return _0x28595d[_0x265013]['exports'];
    var _0x407f93 = _0x28595d[_0x265013] = {i: _0x265013, l: false, exports: {}};
    return _0x12a842[_0x265013]['call'](_0x407f93['exports'], _0x407f93, _0x407f93['exports'], _0x556b3e), _0x407f93.l = true, _0x407f93['exports'];
  }
  return _0x556b3e.m = _0x12a842, _0x556b3e.c = _0x28595d, _0x556b3e.d = function (_0x119b2c, _0xb7a4ea, _0x22abd1) {
    var _0x236f1a = a0_0x1a8a;
    _0x556b3e.o(_0x119b2c, _0xb7a4ea) || Object['defineProperty'](_0x119b2c, _0xb7a4ea, {enumerable: true, get: _0x22abd1});
  }, _0x556b3e.r = function (_0x1c3add) {
    var _0x54674c = a0_0x1a8a;
    "undefined" != typeof Symbol && Symbol['toStringTag'] && Object.defineProperty(_0x1c3add, Symbol['toStringTag'], {value: 'Module'}), Object.defineProperty(_0x1c3add, '__esModule', {value: true});
  }, _0x556b3e.t = function (_0xcfc52b, _0x22d07f) {
    var _0x1c58da = a0_0x1a8a;
    if (1 & _0x22d07f && (_0xcfc52b = _0x556b3e(_0xcfc52b)), 8 & _0x22d07f) return _0xcfc52b;
    if (4 & _0x22d07f && 'object' == typeof _0xcfc52b && _0xcfc52b && _0xcfc52b.__esModule) return _0xcfc52b;
    var _0x905a79 = Object['create'](null);
    if (_0x556b3e.r(_0x905a79), Object['defineProperty'](_0x905a79, 'default', {enumerable: true, value: _0xcfc52b}), 2 & _0x22d07f && 'string' != typeof _0xcfc52b) {
      for (var _0x1b7db0 in _0xcfc52b) _0x556b3e.d(_0x905a79, _0x1b7db0, function (_0x429e8c) {
        return _0xcfc52b[_0x429e8c];
      }.bind(null, _0x1b7db0));
    }
    return _0x905a79;
  }, _0x556b3e.n = function (_0x2831c5) {
    var _0xa9416a = a0_0x1a8a, _0x4510b3 = _0x2831c5 && _0x2831c5['__esModule'] ? function () {
      return _0x2831c5.default;
    } : function () {
      return _0x2831c5;
    };
    return _0x556b3e.d(_0x4510b3, "a", _0x4510b3), _0x4510b3;
  }, _0x556b3e.o = function (_0x2bc18e, _0x408dfe) {
    var _0x5b5d44 = a0_0x1a8a;
    return Object.prototype['hasOwnProperty']['call'](_0x2bc18e, _0x408dfe);
  }, _0x556b3e.p = "", _0x556b3e(_0x556b3e.s = 377);
}({377: function (_0x539ee4, _0x13801a, _0x43a16e) {
  "use strict";
  var _0x5cc429 = a0_0x1a8a;
  _0x43a16e.r(_0x13801a);
  var _0x34ffef = _0x43a16e(56);
  !function (_0x4bd24f, _0x2dddad, _0x70d1ed, _0x367679) {
    var _0x1f4aa2 = a0_0x1a8a, _0x48484a, _0x2d2936 = _0x367679.split("?"), _0x598a98 = _0x2d2936[0], _0x8d30cf = _0x2d2936[1], _0x5dd041 = false;
    try {
      window['localStorage'] && window['localStorage'] instanceof Storage && (_0x5dd041 = true);
    } catch (_0x9619cc) {
      _0x5dd041 = false;
    }
    var _0x580f4a, _0x5124d8 = function (_0x478d6d, _0x552b07, _0xe024c7, _0x2a52db) {
      var _0x20ec88 = _0x1f4aa2, _0x10198c = _0x552b07['createElement'](_0xe024c7), _0x42ae88 = _0x552b07['getElementsByTagName'](_0xe024c7)[0];
      _0x10198c['async'] = 1, _0x10198c['src'] = _0x2a52db, _0x42ae88['parentNode']['insertBefore'](_0x10198c, _0x42ae88), _0x10198c['onload'] = function () {
        var _0x5a4ea9 = _0x20ec88, _0x1232c = {};
        _0x1232c['gameUrl'] = EJS_gameUrl, 'undefined' != typeof EJS_biosUrl && (_0x1232c.biosUrl = EJS_biosUrl), 'undefined' != typeof EJS_gameID && (_0x1232c['gameId'] = EJS_gameID), 'undefined' != typeof EJS_gameParentUrl && (_0x1232c.gameParentUrl = EJS_gameParentUrl), 'undefined' != typeof EJS_gamePatchUrl && (_0x1232c['gamePatchUrl'] = EJS_gamePatchUrl), _0x1232c['system'] = EJS_core, _0x1232c['onsavestate'] = null, _0x1232c.onloadstate = null, 'undefined' != typeof EJS_onSaveState && (_0x1232c['onsavestate'] = EJS_onSaveState), 'undefined' != typeof EJS_onLoadState && (_0x1232c.onloadstate = EJS_onLoadState), 'undefined' != typeof EJS_lightgun && (_0x1232c.lightgun = EJS_lightgun), 'undefined' != typeof EJS_mouse && (_0x1232c['mouse'] = EJS_mouse), 'undefined' != typeof EJS_multitap && (_0x1232c.multitap = EJS_multitap), 'undefined' != typeof EJS_playerName && (_0x1232c['playerName'] = EJS_playerName), 'undefined' != typeof EJS_cheats && (_0x1232c['cheats'] = EJS_cheats), 'undefined' != typeof EJS_color && (_0x1232c['color'] = EJS_color), window['EJS_emulator'] = new EJS(EJS_player, _0x1232c), "undefined" != typeof EJS_onGameStart && EJS_emulator.on("start-game", EJS_onGameStart);
      };
    };
    _0x5dd041 && ((_0x48484a = localStorage['getItem'](_0x598a98)) && (_0x580f4a = _0x48484a.indexOf("|"), _0x48484a.substring(0, _0x580f4a) == _0x8d30cf ? (_0x367679 = URL['createObjectURL'](new Blob([_0x48484a['substring'](_0x580f4a + 1)], {type: 'text/javascript'})), _0x5124d8(0, _0x2dddad, _0x70d1ed, _0x367679)) : _0x48484a = null));
    if (!_0x48484a) {
      if ("undefined" == typeof fetch) {
        var _0x3e14bb = new XMLHttpRequest;
        'withCredentials' in _0x3e14bb && (_0x3e14bb['addEventListener']('load', function (_0x4fbcdd) {
          var _0x33ef04 = _0x1f4aa2;
          console['log'](_0x4fbcdd);
          var _0x1235e4 = URL['createObjectURL'](new Blob([_0x3e14bb.responseText], {type: 'text/javascript'}));
          try {
            localStorage['setItem'](_0x598a98, _0x8d30cf + "|" + _0x3e14bb['responseText']);
          } catch (_0x394306) {}
          _0x5124d8(0, _0x2dddad, _0x70d1ed, _0x1235e4);
        }), _0x3e14bb['open']("GET", _0x367679, true), _0x3e14bb.responseType = "text", _0x3e14bb['send']());
      } else fetch(_0x367679, {})['then'](function (_0x543a01) {
        var _0x409574 = _0x1f4aa2;
        return _0x543a01['text']();
      })['then'](function (_0x2d72de) {
        var _0x5a1adb = _0x1f4aa2, _0x4f4f5e = URL['createObjectURL'](new Blob([_0x2d72de], {type: 'text/javascript'}));
        try {
          localStorage['setItem'](_0x598a98, _0x8d30cf + "|" + _0x2d72de);
        } catch (_0xef7441) {}
        _0x5124d8(0, _0x2dddad, _0x70d1ed, _0x4f4f5e);
      });
    }
  }(window, document, "script", ['//www.emulatorjs.com/emulator.js?v=', _0x34ffef.a]['join'](""));
}, 56: function (_0x1b9d12, _0x187ab0, _0x50de59) {
  "use strict";
  var _0x1d8770 = a0_0x1a8a;
  _0x187ab0.a = '0.4.82-1';
}})['default'];
