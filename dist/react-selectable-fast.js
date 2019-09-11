!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define(['react'], t)
    : 'object' == typeof exports
    ? (exports['React-Selectable-Fast'] = t(require('react')))
    : (e['React-Selectable-Fast'] = t(e.React))
})(window, function(e) {
  return (function(e) {
    var t = {}
    function n(o) {
      if (t[o]) return t[o].exports
      var r = (t[o] = { i: o, l: !1, exports: {} })
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var o = Object.create(null)
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function(t) {
                return e[t]
              }.bind(null, r)
            )
        return o
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 2))
    )
  })([
    function(t, n) {
      t.exports = e
    },
    function(e, t) {},
    function(e, t, n) {
      'use strict'
      n.r(t)
      var o = n(0),
        r = n.n(o),
        i = ['pageX', 'pageY', 'clientX', 'clientY']
      function l(e, t) {
        i.forEach(function(n) {
          void 0 === e[n] && (e[n] = e[t][0][n])
        })
      }
      function c(e) {
        if (e.type.includes('mouse')) return e
        try {
          'touchstart' === e.type
            ? l(e, 'targetTouches')
            : 'touchmove' === e.type && l(e, 'changedTouches')
        } catch (e) {
          alert(e.message)
        }
        return e
      }
      function s(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { scrollTop: 0, scrollLeft: 0 },
          n = t.scrollTop,
          o = t.scrollLeft,
          r = {
            documentScrollTop: Math.max(
              window.pageYOffset,
              document.documentElement.scrollTop,
              document.body.scrollTop
            ),
            documentScrollLeft: Math.max(
              window.pageXOffset,
              document.documentElement.scrollLeft,
              document.body.scrollLeft
            )
          },
          i = r.documentScrollTop,
          l = r.documentScrollLeft,
          c = e.getBoundingClientRect()
        return {
          top: c.top + i + n,
          left: c.left + l + o,
          offsetWidth: e.offsetWidth,
          offsetHeight: e.offsetHeight,
          width: c.width,
          height: c.height
        }
      }
      var a = function(e, t, n) {
        var o = n.tolerance,
          r = void 0 === o ? 0 : o,
          i = n.useOffsetSize,
          l = void 0 !== i && i,
          c = l ? e.offsetHeight : e.height,
          s = l ? t.offsetHeight : t.height,
          a = l ? e.offsetWidth : e.width,
          u = l ? t.offsetWidth : t.width
        return !(
          e.top + c - r < t.top ||
          e.top + r > t.top + s ||
          e.left + a - r < t.left ||
          e.left + r > t.left + u
        )
      }
      function u(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          r = e instanceof HTMLElement ? s(e) : e,
          i = t instanceof HTMLElement ? s(t) : t
        return a(r, i, { tolerance: n, useOffsetSize: 1 === o })
      }
      function f(e, t) {
        for (; e; ) {
          if (e === t) return !0
          e = e.parentNode
        }
        return !1
      }
      var p = function() {},
        d = r.a.createContext({
          selectable: {
            register: function(e) {},
            unregister: function(e) {},
            selectAll: p,
            clearSelection: p,
            getScrolledContainer: function() {
              return null
            }
          }
        })
      function h(e) {
        return (h =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      var S = (function(e) {
        function t() {
          var e, n, o, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++) l[c] = arguments[c]
          return (
            (o = this),
            (r = (e = m(t)).call.apply(e, [this].concat(l))),
            (n = !r || ('object' !== h(r) && 'function' != typeof r) ? b(o) : r),
            g(b(n), 'state', { y: 0, x: 0, width: 0, height: 0, isSelecting: !1 }),
            g(b(n), 'selectbox', null),
            g(b(n), 'getRef', function() {
              return n.selectbox
            }),
            g(b(n), 'getSelectboxRef', function(e) {
              n.selectbox = e
            }),
            n
          )
        }
        var n, i, l
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && v(e, t)
          })(t, o['Component']),
          (n = t),
          (i = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.fixedPosition,
                  n = e.className,
                  o = {
                    left: this.state.x,
                    top: this.state.y,
                    width: this.state.width,
                    height: this.state.height,
                    zIndex: 9e3,
                    position: t ? 'fixed' : 'absolute',
                    cursor: 'default'
                  }
                return r.a.createElement(
                  'div',
                  null,
                  this.state.isSelecting &&
                    r.a.createElement('div', { ref: this.getSelectboxRef, style: o, className: n })
                )
              }
            }
          ]) && y(n.prototype, i),
          l && y(n, l),
          t
        )
      })()
      g(S, 'defaultProps', { className: 'selectable-selectbox' })
      var w = S
      function O(e) {
        return (O =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function x(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function j(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]
              return n
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance')
          })()
        )
      }
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function k(e) {
        return (k = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function L(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function E(e, t) {
        return (E =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function P(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      var I = (function(e) {
        function t() {
          var e, n, o, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var i = arguments.length, l = new Array(i), a = 0; a < i; a++) l[a] = arguments[a]
          return (
            (o = this),
            (r = (e = k(t)).call.apply(e, [this].concat(l))),
            (n = !r || ('object' !== O(r) && 'function' != typeof r) ? L(o) : r),
            P(L(n), 'state', { selectionMode: !1 }),
            P(L(n), 'mouseDownStarted', !1),
            P(L(n), 'mouseMoveStarted', !1),
            P(L(n), 'mouseMoved', !1),
            P(L(n), 'mouseUpStarted', !1),
            P(L(n), 'selectionStarted', !1),
            P(L(n), 'deselectionStarted', !1),
            P(L(n), 'clickedItem', void 0),
            P(L(n), 'mouseDownData', { selectboxY: 0, selectboxX: 0, target: null }),
            P(L(n), 'registry', new Set()),
            P(L(n), 'selectedItems', new Set()),
            P(L(n), 'selectingItems', new Set()),
            P(L(n), 'ignoreCheckCache', new Map()),
            P(
              L(n),
              'ignoreList',
              n.props.ignoreList.concat(['.selectable-select-all', '.selectable-deselect-all'])
            ),
            P(L(n), 'ignoreListNodes', []),
            P(L(n), 'selectbox', null),
            P(L(n), 'selectableGroup', null),
            P(L(n), 'scrollContainer', null),
            P(L(n), 'maxScrollTop', 0),
            P(L(n), 'maxScrollLeft', 0),
            P(L(n), 'scrollBounds', null),
            P(L(n), 'updateRegistry', function() {
              var e = {
                  scrollTop: n.scrollContainer.scrollTop,
                  scrollLeft: n.scrollContainer.scrollLeft
                },
                t = !0,
                o = !1,
                r = void 0
              try {
                for (
                  var i, l = n.registry.values()[Symbol.iterator]();
                  !(t = (i = l.next()).done);
                  t = !0
                ) {
                  i.value.registerSelectable(e)
                }
              } catch (e) {
                ;(o = !0), (r = e)
              } finally {
                try {
                  t || null == l.return || l.return()
                } finally {
                  if (o) throw r
                }
              }
            }),
            P(L(n), 'registerSelectable', function(e) {
              n.registry.add(e), e.state.isSelected && n.selectedItems.add(e)
            }),
            P(L(n), 'unregisterSelectable', function(e) {
              n.registry.delete(e),
                n.selectedItems.delete(e),
                n.selectingItems.delete(e),
                n.props.onSelectionFinish(j(n.selectedItems))
            }),
            P(L(n), 'updateContainerScroll', function(e) {
              var t = n.scrollContainer,
                o = t.scrollTop,
                r = t.scrollLeft
              n.checkScrollTop(e.clientY, o),
                n.checkScrollBottom(e.clientY, o),
                n.checkScrollLeft(e.clientX, r),
                n.checkScrollRight(e.clientX, r)
            }),
            P(L(n), 'getScrollStep', function(e) {
              var t = n.props,
                o = t.minimumSpeedFactor,
                r = t.scrollSpeed
              return Math.max(e, o) * r
            }),
            P(L(n), 'checkScrollTop', function(e, t) {
              var o = n.scrollBounds.top - e
              ;(o > 0 || e < 0) && (n.scrollContainer.scrollTop = t - n.getScrollStep(o))
            }),
            P(L(n), 'checkScrollBottom', function(e, t) {
              var o = e - n.scrollBounds.bottom
              if (o > 0 || e > window.innerHeight) {
                var r = t + n.getScrollStep(o)
                n.scrollContainer.scrollTop = Math.min(r, n.maxScrollTop)
              }
            }),
            P(L(n), 'checkScrollLeft', function(e, t) {
              var o = n.scrollBounds.left - e
              if (o > 0 || e < 0) {
                var r = t - n.getScrollStep(o)
                n.scrollContainer.scrollLeft = r
              }
            }),
            P(L(n), 'checkScrollRight', function(e, t) {
              var o = e - n.scrollBounds.right
              if (o > 0 || e > window.innerWidth) {
                var r = t + n.getScrollStep(o)
                n.scrollContainer.scrollLeft = Math.min(r, n.maxScrollLeft)
              }
            }),
            P(L(n), 'updateSelectBox', function(e) {
              var t = c(e)
              if ((n.updateContainerScroll(t), !n.mouseMoveStarted)) {
                ;(n.mouseMoveStarted = !0), (n.mouseMoved = !0)
                var o = L(n).mouseDownData,
                  r = t.clientX,
                  i = t.clientY,
                  l = n.scrollContainer,
                  s = l.scrollLeft,
                  a = l.scrollTop,
                  u = i - n.scrollBounds.top + a,
                  f = Math.min(u, o.selectboxY),
                  p = r - n.scrollBounds.left + s,
                  d = Math.min(p, o.selectboxX)
                n.selectbox.setState(
                  {
                    x: d,
                    y: f,
                    isSelecting: !0,
                    width: Math.abs(p - o.selectboxX),
                    height: Math.abs(u - o.selectboxY)
                  },
                  function() {
                    n.updateSelecting(),
                      n.props.duringSelection(j(n.selectingItems)),
                      (n.mouseMoveStarted = !1)
                  }
                )
              }
            }),
            P(L(n), 'updateSelecting', function() {
              var e = n.selectbox.getRef()
              if (e) {
                var t = s(e)
                n.selectItems(
                  (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {}
                      t % 2
                        ? x(n, !0).forEach(function(t) {
                            P(e, t, n[t])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : x(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                          })
                    }
                    return e
                  })({}, t, { offsetWidth: t.offsetWidth || 1, offsetHeight: t.offsetHeight || 1 })
                )
              }
            }),
            P(L(n), 'selectItems', function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = n.props,
                r = o.tolerance,
                i = o.enableDeselect,
                l = o.mixedDeselect
              ;(e.top += n.scrollContainer.scrollTop), (e.left += n.scrollContainer.scrollLeft)
              var c = !0,
                s = !1,
                a = void 0
              try {
                for (
                  var u, f = n.registry.values()[Symbol.iterator]();
                  !(c = (u = f.next()).done);
                  c = !0
                ) {
                  var p = u.value
                  n.processItem({
                    item: p,
                    selectboxBounds: e,
                    tolerance: r,
                    mixedDeselect: l,
                    enableDeselect: i,
                    isFromClick: t && t.isFromClick
                  })
                }
              } catch (e) {
                ;(s = !0), (a = e)
              } finally {
                try {
                  c || null == f.return || f.return()
                } finally {
                  if (s) throw a
                }
              }
            }),
            P(L(n), 'clearSelection', function() {
              var e = !0,
                t = !1,
                o = void 0
              try {
                for (
                  var r, i = n.selectedItems.values()[Symbol.iterator]();
                  !(e = (r = i.next()).done);
                  e = !0
                ) {
                  var l = r.value
                  l.setState({ isSelected: !1 }), n.selectedItems.delete(l)
                }
              } catch (e) {
                ;(t = !0), (o = e)
              } finally {
                try {
                  e || null == i.return || i.return()
                } finally {
                  if (t) throw o
                }
              }
              n.setState({ selectionMode: !1 }),
                n.props.onSelectionFinish(j(n.selectedItems)),
                n.props.onSelectionClear()
            }),
            P(L(n), 'selectAll', function() {
              n.updateWhiteListNodes()
              var e = !0,
                t = !1,
                o = void 0
              try {
                for (
                  var r, i = n.registry.values()[Symbol.iterator]();
                  !(e = (r = i.next()).done);
                  e = !0
                ) {
                  var l = r.value
                  n.isInIgnoreList(l.node) ||
                    l.state.isSelected ||
                    (l.setState({ isSelected: !0 }), n.selectedItems.add(l))
                }
              } catch (e) {
                ;(t = !0), (o = e)
              } finally {
                try {
                  e || null == i.return || i.return()
                } finally {
                  if (t) throw o
                }
              }
              n.setState({ selectionMode: !0 }), n.props.onSelectionFinish(j(n.selectedItems))
            }),
            P(L(n), 'mouseDown', function(e) {
              var t =
                !e.type.includes('touch') &&
                !(function(e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  return 'buttons' in e
                    ? e.buttons === t
                    : 'which' in e
                    ? e.which === t
                    : e.button === t - 1
                })(e, 1)
              if (!(n.mouseDownStarted || n.props.disabled || t))
                if ((n.updateWhiteListNodes(), n.isInIgnoreList(e.target))) n.mouseDownStarted = !1
                else {
                  n.props.resetOnStart && n.clearSelection(),
                    (n.mouseDownStarted = !0),
                    (n.mouseUpStarted = !1)
                  var o = c(e)
                  if (!n.props.globalMouse && !f(o.target, n.selectableGroup)) {
                    var r = s(n.selectableGroup)
                    if (
                      !u(
                        {
                          top: r.top,
                          left: r.left,
                          width: 0,
                          height: 0,
                          offsetHeight: r.offsetHeight,
                          offsetWidth: r.offsetWidth
                        },
                        {
                          top: o.pageY,
                          left: o.pageX,
                          width: 0,
                          height: 0,
                          offsetWidth: 0,
                          offsetHeight: 0
                        }
                      )
                    )
                      return
                  }
                  n.updateRootBounds(),
                    n.updateRegistry(),
                    (n.mouseDownData = {
                      target: o.target,
                      selectboxY: o.clientY - n.scrollBounds.top + n.scrollContainer.scrollTop,
                      selectboxX: o.clientX - n.scrollBounds.left + n.scrollContainer.scrollLeft
                    }),
                    o.preventDefault(),
                    document.addEventListener('mousemove', n.updateSelectBox),
                    document.addEventListener('touchmove', n.updateSelectBox),
                    document.addEventListener('mouseup', n.mouseUp),
                    document.addEventListener('touchend', n.mouseUp)
                }
            }),
            P(L(n), 'mouseUp', function(e) {
              if (
                !n.mouseUpStarted &&
                ((n.mouseUpStarted = !0),
                (n.mouseDownStarted = !1),
                n.removeTempEventListeners(),
                n.mouseDownData)
              ) {
                var t = c(e),
                  o = t.pageX,
                  r = t.pageY
                if (!n.mouseMoved && f(t.target, n.selectableGroup)) n.handleClick(t, r, o)
                else {
                  var i = !0,
                    l = !1,
                    s = void 0
                  try {
                    for (
                      var a, u = n.selectingItems.values()[Symbol.iterator]();
                      !(i = (a = u.next()).done);
                      i = !0
                    ) {
                      a.value.setState({ isSelected: !0, isSelecting: !1 })
                    }
                  } catch (e) {
                    ;(l = !0), (s = e)
                  } finally {
                    try {
                      i || null == u.return || u.return()
                    } finally {
                      if (l) throw s
                    }
                  }
                  ;(n.selectedItems = new Set(j(n.selectedItems).concat(j(n.selectingItems)))),
                    n.selectingItems.clear(),
                    1 === t.which &&
                      n.mouseDownData.target === t.target &&
                      n.preventEvent(t.target, 'click'),
                    n.selectbox.setState({ isSelecting: !1, width: 0, height: 0 }),
                    n.props.onSelectionFinish(j(n.selectedItems))
                }
                n.toggleSelectionMode(), n.cleanUp(), (n.mouseMoved = !1)
              }
            }),
            P(L(n), 'keyListener', function(e) {
              27 === e.keyCode && n.clearSelection()
            }),
            P(L(n), 'getGroupRef', function(e) {
              n.selectableGroup = e
            }),
            P(L(n), 'getSelectboxRef', function(e) {
              n.selectbox = e
            }),
            P(L(n), 'defaultContainerStyle', { position: 'relative' }),
            P(L(n), 'contextValue', {
              selectable: {
                register: n.registerSelectable,
                unregister: n.unregisterSelectable,
                selectAll: n.selectAll,
                clearSelection: n.clearSelection,
                getScrolledContainer: function() {
                  return n.scrollContainer
                }
              }
            }),
            n
          )
        }
        var n, i, l
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && E(e, t)
          })(t, o['Component']),
          (n = t),
          (i = [
            {
              key: 'componentDidMount',
              value: function() {
                this.props.scrollContainer
                  ? (this.scrollContainer = document.querySelector(this.props.scrollContainer))
                  : (this.scrollContainer = this.selectableGroup),
                  this.selectableGroup.addEventListener('mousedown', this.mouseDown),
                  this.selectableGroup.addEventListener('touchstart', this.mouseDown),
                  this.props.deselectOnEsc &&
                    (document.addEventListener('keydown', this.keyListener),
                    document.addEventListener('keyup', this.keyListener))
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.selectableGroup.removeEventListener('mousedown', this.mouseDown),
                  this.selectableGroup.removeEventListener('touchstart', this.mouseDown),
                  this.props.deselectOnEsc &&
                    (document.removeEventListener('keydown', this.keyListener),
                    document.removeEventListener('keyup', this.keyListener)),
                  this.removeTempEventListeners()
              }
            },
            {
              key: 'removeTempEventListeners',
              value: function() {
                document.removeEventListener('mousemove', this.updateSelectBox),
                  document.removeEventListener('touchmove', this.updateSelectBox),
                  document.removeEventListener('mouseup', this.mouseUp),
                  document.removeEventListener('touchend', this.mouseUp)
              }
            },
            {
              key: 'updateRootBounds',
              value: function() {
                ;(this.scrollBounds = this.scrollContainer.getBoundingClientRect()),
                  (this.maxScrollTop =
                    this.scrollContainer.scrollHeight - this.scrollContainer.clientHeight),
                  (this.maxScrollLeft =
                    this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth)
              }
            },
            {
              key: 'toggleSelectionMode',
              value: function() {
                var e = this.selectedItems,
                  t = this.state.selectionMode
                e.size && !t && this.setState({ selectionMode: !0 }),
                  !e.size && t && this.setState({ selectionMode: !1 })
              }
            },
            {
              key: 'processItem',
              value: function(e) {
                var t = e.item,
                  n = e.tolerance,
                  o = e.selectboxBounds,
                  r = e.enableDeselect,
                  i = e.mixedDeselect,
                  l = e.isFromClick
                if (this.isInIgnoreList(t.node)) return null
                var c = u(o, t.bounds, n, this.props.delta),
                  s = t.state,
                  a = s.isSelecting,
                  f = s.isSelected
                if (l && c)
                  return (
                    f ? this.selectedItems.delete(t) : this.selectedItems.add(t),
                    t.setState({ isSelected: !f }),
                    (this.clickedItem = t)
                  )
                if (!l && c) {
                  if (f && r && (!this.selectionStarted || i))
                    return (
                      t.setState({ isSelected: !1 }),
                      (t.deselected = !0),
                      (this.deselectionStarted = !0),
                      this.selectedItems.delete(t)
                    )
                  var p = i ? !t.deselected : !this.deselectionStarted
                  if (!a && !f && p)
                    return (
                      t.setState({ isSelecting: !0 }),
                      (this.selectionStarted = !0),
                      this.selectingItems.add(t),
                      { updateSelecting: !0 }
                    )
                }
                return !l && !c && a && this.selectingItems.has(t)
                  ? (t.setState({ isSelecting: !1 }),
                    this.selectingItems.delete(t),
                    { updateSelecting: !0 })
                  : null
              }
            },
            {
              key: 'isInIgnoreList',
              value: function(e) {
                if (e) {
                  if (void 0 !== this.ignoreCheckCache.get(e)) return this.ignoreCheckCache.get(e)
                  var t = this.ignoreListNodes.some(function(t) {
                    return e === t || t.contains(e)
                  })
                  return this.ignoreCheckCache.set(e, t), t
                }
              }
            },
            {
              key: 'updateWhiteListNodes',
              value: function() {
                this.ignoreListNodes = Array.from(
                  document.querySelectorAll(this.ignoreList.join(', '))
                )
              }
            },
            {
              key: 'preventEvent',
              value: function(e, t) {
                e.addEventListener(
                  t,
                  function n(o) {
                    e.removeEventListener(t, n, !0), o.preventDefault(), o.stopPropagation()
                  },
                  !0
                )
              }
            },
            {
              key: 'handleClick',
              value: function(e, t, n) {
                var o = this.props,
                  r = o.clickClassName,
                  i = o.allowClickWithoutSelected,
                  l = o.onSelectionFinish,
                  c = e.target.classList || [],
                  s = Array.from(c).indexOf(r) > -1
                ;(i || this.selectedItems.size || s || e.ctrlKey) &&
                  (this.selectItems(
                    { top: t, left: n, width: 0, height: 0, offsetWidth: 0, offsetHeight: 0 },
                    { isFromClick: !0 }
                  ),
                  l(j(this.selectedItems), this.clickedItem),
                  1 === e.which && this.preventEvent(e.target, 'click'),
                  (2 !== e.which && 3 !== e.which) || this.preventEvent(e.target, 'contextmenu'))
              }
            },
            {
              key: 'cleanUp',
              value: function() {
                if (
                  ((this.deselectionStarted = !1),
                  (this.selectionStarted = !1),
                  this.props.mixedDeselect)
                ) {
                  var e = !0,
                    t = !1,
                    n = void 0
                  try {
                    for (
                      var o, r = this.registry.values()[Symbol.iterator]();
                      !(e = (o = r.next()).done);
                      e = !0
                    ) {
                      o.value.deselected = !1
                    }
                  } catch (e) {
                    ;(t = !0), (n = e)
                  } finally {
                    try {
                      e || null == r.return || r.return()
                    } finally {
                      if (t) throw n
                    }
                  }
                }
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.state.selectionMode,
                  t = this.props,
                  n = t.component,
                  o = void 0 === n ? 'div' : n,
                  i = t.className,
                  l = t.style,
                  c = t.selectionModeClass,
                  s = t.fixedPosition,
                  a = t.selectboxClassName,
                  u = t.children
                return r.a.createElement(
                  d.Provider,
                  { value: this.contextValue },
                  r.a.createElement(
                    o,
                    {
                      ref: this.getGroupRef,
                      style: Object.assign({}, this.defaultContainerStyle, l),
                      className: ''.concat(i, ' ').concat(e ? c : '')
                    },
                    r.a.createElement(w, {
                      ref: this.getSelectboxRef,
                      className: a,
                      fixedPosition: s
                    }),
                    u
                  )
                )
              }
            }
          ]) && C(n.prototype, i),
          l && C(n, l),
          t
        )
      })()
      P(I, 'defaultProps', {
        clickClassName: '',
        tolerance: 0,
        globalMouse: !1,
        ignoreList: [],
        scrollSpeed: 0.25,
        minimumSpeedFactor: 60,
        duringSelection: p,
        onSelectionFinish: p,
        onSelectionClear: p,
        allowClickWithoutSelected: !0,
        selectionModeClass: 'in-selection-mode',
        resetOnStart: !1,
        disabled: !1,
        deselectOnEsc: !0,
        fixedPosition: !1,
        delta: 1
      })
      var _ = I
      function T(e) {
        return (T =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function M() {
        return (M =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          }).apply(this, arguments)
      }
      function D(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function R(e) {
        return (R = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function B(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function N(e, t) {
        return (N =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function A(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      var W = function(e) {
        var t, n
        return (
          (n = t = (function(t) {
            function n() {
              var e, t, o, r
              !(function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, n)
              for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++)
                l[c] = arguments[c]
              return (
                (o = this),
                (r = (e = R(n)).call.apply(e, [this].concat(l))),
                (t = !r || ('object' !== T(r) && 'function' != typeof r) ? B(o) : r),
                A(B(t), 'state', { isSelected: t.props.isSelected, isSelecting: !1 }),
                A(B(t), 'node', null),
                A(B(t), 'bounds', null),
                A(B(t), 'registerSelectable', function(e) {
                  ;(t.bounds = s(t.node, e)), t.context.selectable.register(B(t))
                }),
                A(B(t), 'getSelectableRef', function(e) {
                  t.node = e
                }),
                t
              )
            }
            var i, l, c
            return (
              (function(e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError('Super expression must either be null or a function')
                ;(e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 }
                })),
                  t && N(e, t)
              })(n, o.Component),
              (i = n),
              (l = [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.registerSelectable()
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this.context.selectable.unregister(this)
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    return r.a.createElement(
                      e,
                      M({}, this.props, this.state, { selectableRef: this.getSelectableRef })
                    )
                  }
                }
              ]) && D(i.prototype, l),
              c && D(i, c),
              n
            )
          })()),
          A(t, 'contextType', d),
          A(t, 'defaultProps', { isSelected: !1 }),
          n
        )
      }
      function H(e) {
        return (H =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function F() {
        return (F =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          }).apply(this, arguments)
      }
      function G(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      function U(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function X(e) {
        return (X = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function Y(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function z(e, t) {
        return (z =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function q(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      var V = (function(e) {
        function t() {
          var e, n, o, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++) l[c] = arguments[c]
          return (
            (o = this),
            (r = (e = X(t)).call.apply(e, [this].concat(l))),
            (n = !r || ('object' !== H(r) && 'function' != typeof r) ? Y(o) : r),
            q(Y(n), 'root', null),
            q(Y(n), 'getRootRef', function(e) {
              n.root = e
            }),
            n
          )
        }
        var n, i, l
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && z(e, t)
          })(t, o['Component']),
          (n = t),
          (i = [
            {
              key: 'componentDidMount',
              value: function() {
                this.root.addEventListener('mousedown', function(e) {
                  return e.stopPropagation()
                })
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.component,
                  n = void 0 === t ? 'div' : t,
                  o = e.children,
                  i = e.className,
                  l = void 0 === i ? '' : i,
                  c = G(e, ['component', 'children', 'className'])
                return r.a.createElement(
                  n,
                  F(
                    {
                      ref: this.getRootRef,
                      className: 'selectable-select-all '.concat(l),
                      onClick: this.context.selectable.selectAll
                    },
                    c
                  ),
                  o
                )
              }
            }
          ]) && U(n.prototype, i),
          l && U(n, l),
          t
        )
      })()
      q(V, 'contextType', d)
      var K = V
      function J(e) {
        return (J =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function Q() {
        return (Q =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          }).apply(this, arguments)
      }
      function Z(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      function $(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function ee(e) {
        return (ee = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function te(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function ne(e, t) {
        return (ne =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function oe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      var re = (function(e) {
        function t() {
          var e, n, o, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++) l[c] = arguments[c]
          return (
            (o = this),
            (r = (e = ee(t)).call.apply(e, [this].concat(l))),
            (n = !r || ('object' !== J(r) && 'function' != typeof r) ? te(o) : r),
            oe(te(n), 'root', null),
            oe(te(n), 'getRootRef', function(e) {
              n.root = e
            }),
            n
          )
        }
        var n, i, l
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ne(e, t)
          })(t, o['Component']),
          (n = t),
          (i = [
            {
              key: 'componentDidMount',
              value: function() {
                this.root.addEventListener('mousedown', function(e) {
                  return e.stopPropagation()
                })
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.component,
                  n = void 0 === t ? 'div' : t,
                  o = e.children,
                  i = e.className,
                  l = Z(e, ['component', 'children', 'className'])
                return r.a.createElement(
                  n,
                  Q(
                    {
                      ref: this.getRootRef,
                      className: 'selectable-select-all '.concat(i),
                      onClick: this.context.selectable.clearSelection
                    },
                    l
                  ),
                  o
                )
              }
            }
          ]) && $(n.prototype, i),
          l && $(n, l),
          t
        )
      })()
      oe(re, 'contextType', d)
      var ie = re,
        le = n(1)
      n.d(t, 'TSelectableItemProps', function() {
        return le.TSelectableItemProps
      }),
        n.d(t, 'SelectableGroup', function() {
          return _
        }),
        n.d(t, 'createSelectable', function() {
          return W
        }),
        n.d(t, 'SelectAll', function() {
          return K
        }),
        n.d(t, 'DeselectAll', function() {
          return ie
        })
    }
  ])
})
//# sourceMappingURL=react-selectable-fast.js.map
