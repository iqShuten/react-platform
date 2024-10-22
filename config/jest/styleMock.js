// проба пофиксить подгурзку стилей в jest
export default new Proxy(
  {},
  {
    get: function getter(target, key) {
      if (key === '__esModule') {
        return true;
      }
      return key;
    },
  },
);
