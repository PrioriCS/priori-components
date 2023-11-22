"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Title = _interopRequireDefault(require("../components/Title"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test('Renderiza o componente Title com as classes CSS padrão', () => {
  var {
    container
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Title.default, {
    children: "Meu T\xEDtulo"
  }));
  var titleElement = container.querySelector('h1');
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveClass('text-primary-900');
  expect(titleElement).toHaveClass('text-3xl');
  expect(titleElement).toHaveClass('font-light');
  expect(titleElement.textContent).toBe('Meu Título');
});
test('Renderiza o componente Title com classes CSS personalizadas', () => {
  var {
    container
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Title.default, {
    color: "red",
    size: "lg",
    weight: "bold",
    className: "custom-class",
    children: "T\xEDtulo Personalizado"
  }));
  var titleElement = container.querySelector('h1');
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveClass('text-red-600 text-xl font-bold custom-class');
  expect(titleElement.textContent).toBe('Título Personalizado');
});
test('Renderiza o componente Title com tamanho e peso padrão', () => {
  var {
    container
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Title.default, {
    children: "T\xEDtulo Padr\xE3o"
  }));
  var titleElement = container.querySelector('h1');
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveClass('text-3xl');
  expect(titleElement).toHaveClass('font-light');
});