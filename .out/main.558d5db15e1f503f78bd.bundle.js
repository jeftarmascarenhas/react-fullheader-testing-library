;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    283: function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + 'static/media/demo.ccc218ee.mp4'
    },
    286: function(module, exports, __webpack_require__) {
      __webpack_require__(287),
        __webpack_require__(433),
        (module.exports = __webpack_require__(434))
    },
    351: function(module, exports) {},
    434: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              122,
            ),
            req = __webpack_require__(614)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
            function loadStories() {
              req.keys().forEach(function(filename) {
                return req(filename)
              })
            },
            module,
          )
        }.call(this, __webpack_require__(219)(module))
    },
    61: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        taggedTemplateLiteral = __webpack_require__(68),
        styled_components_browser_esm = __webpack_require__(69)
      function _templateObject5() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  min-width: 100%;\n  min-height: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  transform: translate(-50%, -50%);\n',
        ])
        return (
          (_templateObject5 = function _templateObject5() {
            return data
          }),
          data
        )
      }
      function _templateObject4() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  font-size: 2rem;\n  line-height: 1.5;\n  color: ',
          ';\n',
        ])
        return (
          (_templateObject4 = function _templateObject4() {
            return data
          }),
          data
        )
      }
      function _templateObject3() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  font-size: 5rem;\n  line-height: 1.5;\n  color: ',
          ';\n',
        ])
        return (
          (_templateObject3 = function _templateObject3() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  position: relative;\n  width: 100%;\n  z-index: 2;\n',
        ])
        return (
          (_templateObject2 = function _templateObject2() {
            return data
          }),
          data
        )
      }
      function _templateObject() {
        var data = Object(taggedTemplateLiteral.a)([
          '\n  height: 100vh;\n  width: 100%;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: ',
          ';\n  background-image: url(',
          ');\n',
        ])
        return (
          (_templateObject = function _templateObject() {
            return data
          }),
          data
        )
      }
      var Header = styled_components_browser_esm.a.header(
          _templateObject(),
          function(props) {
            return props.bgColor
          },
          function(props) {
            return props.bgImg
          },
        ),
        Content = styled_components_browser_esm.a.div(_templateObject2()),
        Title = styled_components_browser_esm.a.h1(_templateObject3(), function(
          props,
        ) {
          return props.textColor
        }),
        SubTitle = styled_components_browser_esm.a.h2(
          _templateObject4(),
          function(props) {
            return props.textColor
          },
        ),
        Video = styled_components_browser_esm.a.video(_templateObject5())
      function Main(_ref) {
        var title = _ref.title,
          subtitle = _ref.subtitle,
          bgColor = _ref.bgColor,
          textColor = _ref.textColor,
          bgImg = _ref.bgImg,
          video = _ref.video
        return react_default.a.createElement(
          Header,
          { 'data-testid': 'header', bgColor: bgColor, bgImg: bgImg },
          react_default.a.createElement(
            Content,
            null,
            !!title &&
              react_default.a.createElement(
                Title,
                { 'data-testid': 'title', textColor: textColor },
                title,
              ),
            !!subtitle &&
              react_default.a.createElement(
                SubTitle,
                { 'data-testid': 'subtitle', textColor: textColor },
                'React Testing Librar',
              ),
          ),
          !!video &&
            react_default.a.createElement(Video, {
              src: video,
              'data-testid': 'video',
              autoPlay: !0,
              muted: !0,
              loop: !0,
            }),
        )
      }
      Main.__docgenInfo = { description: '', methods: [], displayName: 'Main' }
      __webpack_exports__.a = Main
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/Main.js'] = {
          name: 'Main',
          docgenInfo: Main.__docgenInfo,
          path: 'src/Main.js',
        })
    },
    614: function(module, exports, __webpack_require__) {
      var map = { './Main.stories.js': 615 }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 614)
    },
    615: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              122,
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              11,
            ),
            _src_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61),
            _src_assets_video_demo_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              283,
            ),
            _src_assets_video_demo_mp4__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              _src_assets_video_demo_mp4__WEBPACK_IMPORTED_MODULE_4__,
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'FullHeader',
            module,
          )
            .addDecorator(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs,
            )
            .add('with title', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Main__WEBPACK_IMPORTED_MODULE_3__.a,
                { title: 'TDD in React' },
              )
            })
            .add('with title and subtitle', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Main__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('title', 'TDD on React'),
                  subtitle: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('subtitle', 'Using Testing Ribrary React'),
                },
              )
            })
            .add('with title, subtitle and bgColor', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Main__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('Title', 'TDD on React'),
                  subtitle: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('subtitle', 'Using Testing Ribrary React'),
                  bgColor: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.color,
                  )('bgColor', '#3299BB'),
                },
              )
            })
            .add('with title, subtitle, bgColor and textColor', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Main__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('title', 'TDD on React'),
                  subtitle: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('subtitle', 'Using Testing Ribrary React'),
                  bgColor: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.color,
                  )('bgColor', '#3299BB'),
                  textColor: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.color,
                  )('textColor', '#fff'),
                },
              )
            })
            .add('with title, subtitle, textColor bgImg', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Main__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('title', 'TDD on React'),
                  subtitle: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('subtitle', 'Using Testing Ribrary React'),
                  textColor: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.color,
                  )('textColor', '#fff'),
                  bgImg: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )(
                    'bgImg',
                    'http://www.htmldrive.net/edit_media/2011/201107/20110719/Full-background-webdevtuts/images/image1.jpg',
                  ),
                },
              )
            })
            .add('with title, subtitle, video', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_Main__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('title', 'TDD on React'),
                  subtitle: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )('subtitle', 'Using Testing Ribrary React'),
                  video: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text,
                  )(
                    'video',
                    _src_assets_video_demo_mp4__WEBPACK_IMPORTED_MODULE_4___default.a,
                  ),
                },
              )
            })
        }.call(this, __webpack_require__(219)(module))
    },
  },
  [[286, 1, 2]],
])
//# sourceMappingURL=main.558d5db15e1f503f78bd.bundle.js.map
