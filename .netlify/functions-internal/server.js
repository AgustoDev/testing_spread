var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 11,
    columnNumber: 33
  }, this));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-EMEJW27Q.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});

// app/components/spread/spread.tsx
var import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/helpers/cookie-store.ts
var import_js_cookie = __toESM(require("js-cookie")), setItem = (key, value) => (import_js_cookie.default.set(key, value), !0), getItem = (key) => import_js_cookie.default.get(key), removeItem = async (key) => (import_js_cookie.default.remove(key), !0), cookieStorage = {
  setItem,
  getItem,
  removeItem
}, cookie_store_default = cookieStorage;

// app/modules/data.ts
var spreadDataMap = [
  {
    title: "Revenue",
    isInput: !0,
    slug: "revenue",
    class: "default"
  },
  {
    title: "Cost of Goods Sold",
    isInput: !0,
    slug: "cost_of_goods_sold",
    class: "default"
  },
  {
    title: "Gross Profit c/f",
    isInput: !1,
    slug: "gross_profit",
    formula: "$($revenue$-$cost_of_goods_sold$)$+$gross_profit@1",
    class: "totals"
  }
], data_default = spreadDataMap;

// app/modules/spread/spread.controller.ts
var import_numeral = __toESM(require("numeral")), math = __toESM(require("mathjs")), spreadCompute = ({ newYears, rawData }) => {
  let spread = rawData, spreadData = {}, spreadDataObject = {};
  newYears && newYears.forEach((year) => {
    spreadData[year] = data_default.map((item) => ({
      ...item,
      year,
      formula: (item == null ? void 0 : item.formula) || null,
      input: item.input || "0",
      value: item != null && item.formula ? "0" : item.value || "0"
    }));
  }), rawData && rawData.forEach((year) => {
    spreadData[year[0].year] = year;
  });
  let years = Object.keys(spreadData).sort((a, b) => Number(a) - Number(b));
  return years.forEach((el) => {
    let x = flattenArrayToObject(spreadData[el]);
    spreadDataObject[el] = x;
  }), spread = computeSpread(years, spreadData, spreadDataObject), spread.sort((a, b) => b[0].year - a[0].year), spread;
}, flattenArrayToObject = (array) => {
  let x = {};
  return array.forEach((item) => {
    let key = item.slug;
    x[key] = (item == null ? void 0 : item.formula) || validateInput(item.input);
  }), x;
}, validateInput = (input) => (input = input.replace("=", ""), `${math.evaluate(input)}`), computeSpread = (years, spreadData, spreadDataObject) => {
  let result = [], kk = spreadDataObject;
  return years.sort((a, b) => Number(a) - Number(b)), years.forEach((year) => {
    let items = spreadData[year], arr = [];
    items.forEach((item) => {
      item.formula && (kk[year][item.slug] = item.formula ? computeFormula(year, item.formula, kk) : (item == null ? void 0 : item.input) || 0);
      let kkValue = kk[year][item.slug], value = (0, import_numeral.default)(kkValue).format("0,000.00") || 0, obj = { ...item, value };
      arr.push(obj);
    }), result.push(arr);
  }), result;
}, computeFormula = (year, formula, spreadDataObject) => {
  let identifier = "$", result = 0, splitFormula = formula.split(identifier);
  return splitFormula = splitFormula.filter((el) => el !== ""), splitFormula.forEach((el, index) => {
    var _a;
    let data = "";
    if (el.includes("@")) {
      let checkYear = year - el.split("@")[1];
      data = ((_a = spreadDataObject[checkYear]) == null ? void 0 : _a[el.split("@")[0]]) || 0;
    }
    data !== "" && (splitFormula[index] = (0, import_numeral.default)(data).value());
  }), splitFormula = splitFormula.join().replace(/,/g, ""), result = math.evaluate(splitFormula, spreadDataObject[year]), result;
}, spreadFormatting = (spread) => spread[0].map((year) => year.title).map((title) => spread.map((year) => year.find((item) => item.title === title)));

// app/components/spread/spread.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Spread = () => {
  let itemsRef = (0, import_react4.useRef)([]), [newYears, setNewYears] = (0, import_react4.useState)([]), { spreadData, company } = (0, import_react3.useLoaderData)(), [rawData, setRawData] = (0, import_react4.useState)([]), [updateRawData, setUpdateRawData] = (0, import_react4.useState)(spreadData), [spread, setSpread] = (0, import_react4.useState)([]), [keys, setKeys] = (0, import_react4.useState)([]), [years, setYears] = (0, import_react4.useState)([]), [isFocused, setIsFocused] = (0, import_react4.useState)(""), addNewYear = () => {
    let yearsUsed = rawData.map((item) => item[0].year), newYear = yearsUsed.length > 0 ? Math.max(...yearsUsed) + 1 : 2018;
    setNewYears([newYear]);
  }, clearData = () => {
    cookie_store_default.removeItem(company.slug), window.location.reload();
  }, updateSpread = (data) => {
    let formattedData = spreadFormatting(data), tableKeys = formattedData.map((item) => ({ title: item[0].title, class: item[0].class })), allYears = formattedData[0].map((item) => item.year);
    setNewYears([]), setYears(allYears), setKeys(tableKeys), setSpread(formattedData), setRawData(data), cookie_store_default.setItem(company.slug, JSON.stringify(data));
  }, runCalc = () => {
    if (rawData.length === 0 && !newYears)
      return;
    let result = spreadCompute({ newYears, rawData: (updateRawData == null ? void 0 : updateRawData.length) > 0 ? updateRawData : rawData });
    result && updateSpread(result);
  }, onFocus = (refIndex) => {
    setIsFocused(refIndex);
  }, onBlur = ({ refIndex, item }) => {
    setIsFocused("");
    let { current } = itemsRef, currentRef = current[refIndex], { year, title } = item;
    if (currentRef) {
      let yearIndex = rawData.findIndex((item2) => item2[0].year === year), titleIndex = rawData[yearIndex].findIndex((item2) => item2.title === title), newData = rawData;
      newData[yearIndex][titleIndex].input = (currentRef == null ? void 0 : currentRef.textContent) || "0", setUpdateRawData(newData);
    }
  };
  return (0, import_react4.useEffect)(() => {
    rawData.length === 0 || !rawData || runCalc();
  }, [updateRawData]), (0, import_react4.useEffect)(() => {
    newYears.length === 0 || !newYears || runCalc();
  }, [newYears]), (0, import_react4.useEffect)(() => {
    if (spreadData.length === 0) {
      let data = cookie_store_default.getItem(company.slug);
      data && (data = JSON.parse(data), setRawData(data), setUpdateRawData(data));
    }
  }, [spreadData]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "p-3 mb-4 text-xs text-white uppercase bg-green-700 rounded ", onClick: addNewYear, children: "Add New Year" }, void 0, !1, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "p-3 mb-4 text-xs text-white uppercase bg-red-700 rounded ", onClick: clearData, children: "reset data" }, void 0, !1, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/spread/spread.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { className: "w-full uppercase ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "w-full p-3 text-left border-l-2", children: "Year" }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        years.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { className: "p-3 border-l-2", children: item }, i, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { children: keys.map((el, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { className: `${el.class}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: "p-3 text-left border-l-2 ", children: el.title }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 120,
          columnNumber: 17
        }, this),
        spread[i].map((item, ii) => {
          let refIndex = `${item.slug}${item.year}`;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "td",
            {
              ref: (el2) => itemsRef.current[refIndex] = el2,
              onFocus: (e) => onFocus(refIndex),
              onBlur: (e) => onBlur({ refIndex, item }),
              contentEditable: item == null ? void 0 : item.isInput,
              suppressContentEditableWarning: !0,
              className: `${item.class} p-3 text-center min-w-[10vw]`,
              children: isFocused === refIndex ? item == null ? void 0 : item.input : item == null ? void 0 : item.value
            },
            ii,
            !1,
            {
              fileName: "app/components/spread/spread.tsx",
              lineNumber: 124,
              columnNumber: 21
            },
            this
          );
        })
      ] }, i, !0, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 119,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/spread/spread.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "font-bold uppercase", children: "NOTE:" }, void 0, !1, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-bold", children: "1. " }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 147,
          columnNumber: 11
        }, this),
        " To add new year click on the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-bold uppercase", children: "Add New Year (min 2018)" }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-bold", children: "2. " }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this),
        " To reset data click on the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-bold uppercase", children: "reset data" }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-bold", children: "3. " }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this),
        " To edit data click on the cell and edit the value"
      ] }, void 0, !0, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-bold", children: "4. " }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        " To save data click outside the cell (Just like excel)"
      ] }, void 0, !0, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-bold", children: "5. " }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 165,
          columnNumber: 11
        }, this),
        " You can also use expression ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 165,
          columnNumber: 78
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block mt-4 font-bold uppercase", children: "eg:" }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block mt-1", children: "1. 100 + 200 " }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block mt-1", children: "2. 100 - 200 " }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block mt-1", children: "3. 100 * 200 " }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "block mt-1", children: "4. 100 / 200 " }, void 0, !1, {
          fileName: "app/components/spread/spread.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/spread/spread.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/spread/spread.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/spread/spread.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}, spread_default = Spread;

// app/components/spread/index.tsx
var spread_default2 = spread_default;

// app/routes/index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader = () => ({ spreadData: [], company: { name: "Agusto Test", slug: "agusto_test" } });
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex gap-6 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(spread_default2, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "a6a6746d", entry: { module: "/build/entry.client-JFLMTQEP.js", imports: ["/build/_shared/chunk-LYAC43W4.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EONISAR5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-MZTZFI4E.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-A6A6746D.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
