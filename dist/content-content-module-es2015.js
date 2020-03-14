(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-content-module"],{

/***/ "./node_modules/clone/clone.js":
/*!*************************************!*\
  !*** ./node_modules/clone/clone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if ( true && module.exports) {
  module.exports = clone;
}


/***/ }),

/***/ "./src/app/content/components/recently-played/recently-played.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/components/recently-played/recently-played.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RecentlyPlayedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyPlayedComponent", function() { return RecentlyPlayedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var Shared_services_recently_played_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/services/recently-played.service */ "./src/app/shared/services/recently-played.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/join-array.pipe */ "./src/app/shared/pipes/join-array.pipe.ts");
/* harmony import */ var _shared_pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/pipes/locale-date.pipe */ "./src/app/shared/pipes/locale-date.pipe.ts");






function RecentlyPlayedComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecentlyPlayedComponent_tr_9_Template_tr_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const track_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onClick(track_r4.uri); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "joinArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "localeDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r4.trackName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, track_r4.artists));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, track_r4.played, "DD/MM/YYYY, hh:mm A"));
} }
class RecentlyPlayedComponent {
    constructor(recentlyPlayedService) {
        this.recentlyPlayedService = recentlyPlayedService;
    }
    /**
     * on click - open spotify uri link
     * @param spotifyUri  - uri link
     */
    onClick(spotifyUri) {
        window.open(spotifyUri, '_blank');
    }
    /**
     * On Init
     */
    ngOnInit() {
        return this.recentlyPlayedService.getRecentlyPlayedSong()
            .then(tracks => this.tracks = tracks);
    }
}
RecentlyPlayedComponent.ɵfac = function RecentlyPlayedComponent_Factory(t) { return new (t || RecentlyPlayedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Shared_services_recently_played_service__WEBPACK_IMPORTED_MODULE_1__["RecentlyPlayedService"])); };
RecentlyPlayedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecentlyPlayedComponent, selectors: [["app-recently-played"]], decls: 10, vars: 1, consts: [[1, "recently-played"], [1, "recently-played__table"], [1, "recently-played__table-header"], ["class", "recently-played__table-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "recently-played__table-row", 3, "click"]], template: function RecentlyPlayedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Artist(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Played At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RecentlyPlayedComponent_tr_9_Template, 9, 8, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tracks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_shared_pipes_join_array_pipe__WEBPACK_IMPORTED_MODULE_3__["JoinArrayPipe"], _shared_pipes_locale_date_pipe__WEBPACK_IMPORTED_MODULE_4__["LocaleDatePipe"]], styles: [".recently-played[_ngcontent-%COMP%] {\n  min-height: 94vh;\n  max-width: 1140px;\n  margin: 66px auto 24px;\n}\n@media (max-width: 767px) {\n  .recently-played[_ngcontent-%COMP%] {\n    margin: 66px 12px 24px;\n  }\n}\n.recently-played__table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-spacing: 0;\n  line-height: 1.35;\n}\n.recently-played__table-header[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.recently-played__table-row[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #b4b4b4;\n  cursor: pointer;\n  border-spacing: 0;\n}\n.recently-played__table-row[_ngcontent-%COMP%]:hover {\n  background: #636363;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVhc2VsZXkvRG9jdW1lbnRzL3dvcmtzcGFjZS9wZXJzb25hbC9teS1zcG90aWZ5LXN0YXRzL3NyYy9hcHAvY29udGVudC9jb21wb25lbnRzL3JlY2VudGx5LXBsYXllZC9yZWNlbnRseS1wbGF5ZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRlbnQvY29tcG9uZW50cy9yZWNlbnRseS1wbGF5ZWQvcmVjZW50bHktcGxheWVkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21pY2hhZWxiZWFzZWxleS9Eb2N1bWVudHMvd29ya3NwYWNlL3BlcnNvbmFsL215LXNwb3RpZnktc3RhdHMvc3JjL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0RGO0FER0U7RUFMRjtJQU1JLHNCQUFBO0VDQUY7QUFDRjtBREVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtBQ0RKO0FESUU7RUFDRSxlQUFBO0VBQ0EsY0VyQkk7RUZzQkosZUFBQTtFQUNBLGlCQUFBO0FDRko7QURJSTtFQUNFLG1CRXhCRTtFRnlCRixXRTVCRTtBRDBCUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29tcG9uZW50cy9yZWNlbnRseS1wbGF5ZWQvcmVjZW50bHktcGxheWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX3ZhcmlhYmxlcyc7XG5cbi5yZWNlbnRseS1wbGF5ZWQge1xuICBtaW4taGVpZ2h0OiA5NHZoO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luOiA2NnB4IGF1dG8gMjRweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsLWJyZWFrcG9pbnQpIHtcbiAgICBtYXJnaW46IDY2cHggMTJweCAyNHB4O1xuICB9XG5cbiAgJl9fdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB9XG5cbiAgJl9fdGFibGUtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAmX190YWJsZS1yb3cge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogJGdyZXkxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItc3BhY2luZzogMDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGdyZXkzO1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cbn0iLCIucmVjZW50bHktcGxheWVkIHtcbiAgbWluLWhlaWdodDogOTR2aDtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbjogNjZweCBhdXRvIDI0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnJlY2VudGx5LXBsYXllZCB7XG4gICAgbWFyZ2luOiA2NnB4IDEycHggMjRweDtcbiAgfVxufVxuLnJlY2VudGx5LXBsYXllZF9fdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xufVxuLnJlY2VudGx5LXBsYXllZF9fdGFibGUtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnJlY2VudGx5LXBsYXllZF9fdGFibGUtcm93IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2I0YjRiNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbi5yZWNlbnRseS1wbGF5ZWRfX3RhYmxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM2MzYzNjM7XG4gIGNvbG9yOiAjZmZmO1xufSIsIi8vIEJsYWNrL3doaXRlIHNjYWxlXG4kd2hpdGU6ICNmZmY7XG4kZ3JleTE6ICNiNGI0YjQ7XG4kZ3JleTI6ICM0MjQyNDI7XG4kZ3JleTM6ICM2MzYzNjM7XG4kZ3JleTQ6ICMxYjFiMWI7XG4kYmxhY2s6ICMwMDA7XG5cbi8vIGNvbG9yc1xuJGdyZWVuOiAjMWRiOTU0O1xuJGxpZ2h0LWdyZWVuOiAjMzhlNzc1OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentlyPlayedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recently-played',
                templateUrl: './recently-played.component.html',
                styleUrls: ['./recently-played.component.scss']
            }]
    }], function () { return [{ type: Shared_services_recently_played_service__WEBPACK_IMPORTED_MODULE_1__["RecentlyPlayedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/content/components/top-artists/top-artists.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/components/top-artists/top-artists.component.ts ***!
  \*************************************************************************/
/*! exports provided: TopArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopArtistsComponent", function() { return TopArtistsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TopArtistsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TopArtistsComponent.ɵfac = function TopArtistsComponent_Factory(t) { return new (t || TopArtistsComponent)(); };
TopArtistsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopArtistsComponent, selectors: [["app-top-artists"]], decls: 2, vars: 0, template: function TopArtistsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "top-artists works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29tcG9uZW50cy90b3AtYXJ0aXN0cy90b3AtYXJ0aXN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopArtistsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-artists',
                templateUrl: './top-artists.component.html',
                styleUrls: ['./top-artists.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/content/components/top-tracks/top-tracks.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/content/components/top-tracks/top-tracks.component.ts ***!
  \***********************************************************************/
/*! exports provided: TopTracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTracksComponent", function() { return TopTracksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TopTracksComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TopTracksComponent.ɵfac = function TopTracksComponent_Factory(t) { return new (t || TopTracksComponent)(); };
TopTracksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopTracksComponent, selectors: [["app-top-tracks"]], decls: 2, vars: 0, template: function TopTracksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "top-tracks works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29tcG9uZW50cy90b3AtdHJhY2tzL3RvcC10cmFja3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopTracksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-tracks',
                templateUrl: './top-tracks.component.html',
                styleUrls: ['./top-tracks.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/content/content.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var Shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_recently_played_recently_played_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/recently-played/recently-played.component */ "./src/app/content/components/recently-played/recently-played.component.ts");
/* harmony import */ var _components_top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/top-tracks/top-tracks.component */ "./src/app/content/components/top-tracks/top-tracks.component.ts");
/* harmony import */ var _components_top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/top-artists/top-artists.component */ "./src/app/content/components/top-artists/top-artists.component.ts");









const routes = [
    { path: 'top-tracks', component: _components_top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_5__["TopTracksComponent"] },
    { path: 'top-artists', component: _components_top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_6__["TopArtistsComponent"] },
    { path: 'recently-played', component: _components_recently_played_recently_played_component__WEBPACK_IMPORTED_MODULE_4__["RecentlyPlayedComponent"] }
];
class ContentModule {
}
ContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentModule });
ContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentModule_Factory(t) { return new (t || ContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            Shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentModule, { declarations: [_components_recently_played_recently_played_component__WEBPACK_IMPORTED_MODULE_4__["RecentlyPlayedComponent"],
        _components_top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_5__["TopTracksComponent"],
        _components_top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_6__["TopArtistsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], Shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_recently_played_recently_played_component__WEBPACK_IMPORTED_MODULE_4__["RecentlyPlayedComponent"],
                    _components_top_tracks_top_tracks_component__WEBPACK_IMPORTED_MODULE_5__["TopTracksComponent"],
                    _components_top_artists_top_artists_component__WEBPACK_IMPORTED_MODULE_6__["TopArtistsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    Shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/classes/artist.ts":
/*!******************************************!*\
  !*** ./src/app/shared/classes/artist.ts ***!
  \******************************************/
/*! exports provided: Artist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Artist", function() { return Artist; });
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);

class Artist {
    constructor() { }
    clone() {
        return clone__WEBPACK_IMPORTED_MODULE_0__(this);
    }
}


/***/ }),

/***/ "./src/app/shared/classes/recently-played-track.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/classes/recently-played-track.ts ***!
  \*********************************************************/
/*! exports provided: RecentlyPlayedTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyPlayedTrack", function() { return RecentlyPlayedTrack; });
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);

class RecentlyPlayedTrack {
    constructor() { }
    clone() {
        return clone__WEBPACK_IMPORTED_MODULE_0__(this);
    }
}


/***/ }),

/***/ "./src/app/shared/models/recently-played-model.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/models/recently-played-model.service.ts ***!
  \****************************************************************/
/*! exports provided: RecentlyPlayedModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyPlayedModelService", function() { return RecentlyPlayedModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var Shared_classes_recently_played_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/classes/recently-played-track */ "./src/app/shared/classes/recently-played-track.ts");
/* harmony import */ var Shared_classes_artist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/classes/artist */ "./src/app/shared/classes/artist.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class RecentlyPlayedModelService {
    constructor(storageService, http) {
        this.storageService = storageService;
        this.http = http;
        this.spotifyUrl = 'https://api.spotify.com/';
    }
    fromPayload(res) {
        const recentlyPlayedTracks = res.items.map(item => {
            const track = new Shared_classes_recently_played_track__WEBPACK_IMPORTED_MODULE_1__["RecentlyPlayedTrack"]();
            track.id = item.track.id;
            track.trackName = item.track.name;
            // Map artist objects
            track.artists = item.track.artists.map(artist => {
                const artistObj = new Shared_classes_artist__WEBPACK_IMPORTED_MODULE_2__["Artist"]();
                artistObj.id = artist.id;
                artistObj.artistName = artist.name;
                artistObj.externalLink = artist.external_urls.spotify;
                return artistObj;
            });
            track.played = dayjs__WEBPACK_IMPORTED_MODULE_3__(item.played_at);
            track.uri = item.track.uri;
            return track;
        });
        return recentlyPlayedTracks;
    }
    getRecentlyPlayedSongs() {
        return this.http.get(`${this.spotifyUrl}v1/me/player/recently-played?type=track&limit=50`, {
            headers: {
                Authorization: `Bearer ` + this.storageService.getLocalStorageItem()
            }
        }).toPromise().then(res => this.fromPayload(res));
    }
}
RecentlyPlayedModelService.ɵfac = function RecentlyPlayedModelService_Factory(t) { return new (t || RecentlyPlayedModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
RecentlyPlayedModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecentlyPlayedModelService, factory: RecentlyPlayedModelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentlyPlayedModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/recently-played.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/recently-played.service.ts ***!
  \************************************************************/
/*! exports provided: RecentlyPlayedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyPlayedService", function() { return RecentlyPlayedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var Shared_models_recently_played_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/models/recently-played-model.service */ "./src/app/shared/models/recently-played-model.service.ts");



class RecentlyPlayedService {
    constructor(recentlyPlayedModel) {
        this.recentlyPlayedModel = recentlyPlayedModel;
    }
    getRecentlyPlayedSong() {
        return this.recentlyPlayedModel.getRecentlyPlayedSongs();
    }
}
RecentlyPlayedService.ɵfac = function RecentlyPlayedService_Factory(t) { return new (t || RecentlyPlayedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Shared_models_recently_played_model_service__WEBPACK_IMPORTED_MODULE_1__["RecentlyPlayedModelService"])); };
RecentlyPlayedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecentlyPlayedService, factory: RecentlyPlayedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentlyPlayedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Shared_models_recently_played_model_service__WEBPACK_IMPORTED_MODULE_1__["RecentlyPlayedModelService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=content-content-module-es2015.js.map