module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/ronald/desenvolvimento/api/site/components/Menu.js\";\n\n\n\nconst Menu = props => {\n  const {\n    0: isOpen,\n    1: setIsOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const toggle = () => setIsOpen(!isOpen);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], {\n      color: \"dark\",\n      dark: true,\n      expand: \"md\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavbarBrand\"], {\n          href: \"/\",\n          children: \"Metas\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavbarToggler\"], {\n          onClick: toggle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Collapse\"], {\n          isOpen: isOpen,\n          navbar: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n            className: \"mr-auto\",\n            navbar: true,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavItem\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n                href: \"/\",\n                children: \"Listar\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 33\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 29\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavItem\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n                href: \"/cadastrar\",\n                children: \"Cadastrar\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 33\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 29\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUuanM/MTEwZCJdLCJuYW1lcyI6WyJNZW51IiwicHJvcHMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFXQSxNQUFNQSxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUNwQixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsS0FBRCxDQUFwQzs7QUFFQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUYsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBOUI7O0FBRUEsc0JBQ0k7QUFBQSwyQkFFSSxxRUFBQyxpREFBRDtBQUFRLFdBQUssRUFBQyxNQUFkO0FBQXFCLFVBQUksTUFBekI7QUFBMEIsWUFBTSxFQUFDLElBQWpDO0FBQUEsNkJBQ0kscUVBQUMsb0RBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxzREFBRDtBQUFhLGNBQUksRUFBQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJLHFFQUFDLHdEQUFEO0FBQWUsaUJBQU8sRUFBRUc7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJLHFFQUFDLG1EQUFEO0FBQVUsZ0JBQU0sRUFBRUgsTUFBbEI7QUFBMEIsZ0JBQU0sTUFBaEM7QUFBQSxpQ0FDSSxxRUFBQyw4Q0FBRDtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUF5QixrQkFBTSxNQUEvQjtBQUFBLG9DQUNJLHFFQUFDLGtEQUFEO0FBQUEscUNBQ0kscUVBQUMsa0RBQUQ7QUFBUyxvQkFBSSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBSUkscUVBQUMsa0RBQUQ7QUFBQSxxQ0FDSSxxRUFBQyxrREFBRDtBQUFTLG9CQUFJLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBc0JILENBM0JEOztBQTZCZUYsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIENvbGxhcHNlLFxuICAgIE5hdmJhcixcbiAgICBOYXZiYXJUb2dnbGVyLFxuICAgIE5hdmJhckJyYW5kLFxuICAgIE5hdixcbiAgICBOYXZJdGVtLFxuICAgIE5hdkxpbmssXG4gICAgQ29udGFpbmVyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxOYXZiYXIgY29sb3I9XCJkYXJrXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPk1ldGFzPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIj5MaXN0YXI8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2NhZGFzdHJhclwiPkNhZGFzdHJhcjwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu.js\");\n\n\nvar _jsxFileName = \"/home/ronald/desenvolvimento/api/site/pages/index.js\";\n\n\n\n\nfunction Home({\n  data\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Jumbotron\"], {\n      fluid: true,\n      className: \"list\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n        children: `.list{\n                        background-color: #D3D3D3;\n                        padding-top: 30px;\n                        padding-bottom: 150px;\n                        margin-bottom: 0rem !important;\n                    }.list-meta {\n                        border-color: #686868 !important;\n                    }`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"display-4 text-center tittle-top\",\n          children: \"Minhas metas\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"ListGroup\"], {\n          children: data.metas.map(meta => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"ListGroupItem\"], {\n              className: \"list-meta\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"ListGroupItemHeading\"], {\n                children: [\" \", meta.name, \" \"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 37\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"ListGroupItemText\"], {\n                children: [\" \", meta.description, \" \"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 37\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"ListGroupItemText\"], {\n                children: [\" \", meta.status, \" \"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 37\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 33\n            }, this)\n          }, meta._id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 29\n          }, this))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\nasync function getServerSideProps() {\n  const response = await fetch(`http://localhost:8080/metas`);\n  const data = await response.json();\n  return {\n    props: {\n      data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJkYXRhIiwibWV0YXMiLCJtYXAiLCJtZXRhIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiX2lkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBd0I7QUFDcEIsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxvREFBRDtBQUFXLFdBQUssTUFBaEI7QUFBaUIsZUFBUyxFQUFDLE1BQTNCO0FBQUEsOEJBQ0k7QUFBQSxrQkFDTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFXSSxxRUFBQyxvREFBRDtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFJSSxxRUFBQyxvREFBRDtBQUFBLG9CQUNLQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxJQUFJLGlCQUNoQjtBQUFBLG1DQUNJLHFFQUFDLHdEQUFEO0FBQWUsdUJBQVMsRUFBQyxXQUF6QjtBQUFBLHNDQUNJLHFFQUFDLCtEQUFEO0FBQUEsZ0NBQXdCQSxJQUFJLENBQUNDLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLDREQUFEO0FBQUEsZ0NBQXFCRCxJQUFJLENBQUNFLFdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJLHFFQUFDLDREQUFEO0FBQUEsZ0NBQXFCRixJQUFJLENBQUNHLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFVSCxJQUFJLENBQUNJLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQSxrQkFESjtBQWlDSDs7QUFFTSxlQUFlQyxrQkFBZixHQUFvQztBQUV2QyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLDZCQUFGLENBQTVCO0FBQ0EsUUFBTVYsSUFBSSxHQUFHLE1BQU1TLFFBQVEsQ0FBQ0UsSUFBVCxFQUFuQjtBQUNBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQUVaO0FBQUY7QUFESixHQUFQO0FBR0g7QUFHY0QsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBKdW1ib3Ryb24sIENvbnRhaW5lciwgTGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtLCBMaXN0R3JvdXBJdGVtSGVhZGluZywgTGlzdEdyb3VwSXRlbVRleHQgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuXG5mdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIHtgLmxpc3R7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0ubGlzdC1tZXRhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY4Njg2OCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXIgdGl0dGxlLXRvcFwiPk1pbmhhcyBtZXRhczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tZXRhcy5tYXAobWV0YSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21ldGEuX2lkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGNsYXNzTmFtZT1cImxpc3QtbWV0YVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtSGVhZGluZz4ge21ldGEubmFtZX0gPC9MaXN0R3JvdXBJdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dD4ge21ldGEuZGVzY3JpcHRpb259IDwvTGlzdEdyb3VwSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwSXRlbVRleHQ+IHttZXRhLnN0YXR1c30gPC9MaXN0R3JvdXBJdGVtVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tZXRhc2ApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IGRhdGEgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ })

/******/ });