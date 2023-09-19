const svgList = [];
const svgModules = import.meta.glob('./*.svg', {
  eager: true,
});
Object.keys(svgModules).forEach(key => {
  const svgNames = key.split('/');
  const reg = /([\w1-9A-Za-z-_]+)\.svg/;
  const result = reg.exec(svgNames[svgNames.length - 1]);
  if (result) {
    const svgName = result[1];
    svgList.push(svgName);
  }
});
console.log(svgList);