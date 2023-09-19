// const requireAll = (requireContext) => requireContext.keys().map(requireContext);
// const req = require.context('./', true, /\.svg$/);
// requireAll(req);

// const allSvgKeys = req.keys();
// // console.log(store);
// const svgs = [];
// allSvgKeys.map((svg) => {
//   const svgNames = svg.split('/');
//   const reg = /([\w1-9A-Za-z-_]+)\.svg/;

//   const result = reg.exec(svgNames[svgNames.length - 1]);
//   if (result) {
//     const svgName = result[1];
//     svgs.push(svgName);
//   }
// });
