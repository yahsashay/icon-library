import _extends from '@babel/runtime/helpers/extends';
import * as React from 'react';

const SvgPencil = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "m19.625 4.813-3.438-3.438-13.75 13.75-1.374 4.813 4.812-1.375 13.75-13.75Zm-6.188-.688 3.438 3.438-3.438-3.438Zm-11 11 3.438 3.438-3.438-3.438Z",
    stroke: "#1E2B56",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

export { SvgPencil as Pencil };
