function getYearWeek(a: number, b: number, c: number): number {
  //a为年 b为月 c为日
  /*  
      date1是当前日期  
      date2是当年第一天  
      d是当前日期是今年第多少天  
      用d + 当前年的第一天的周差距的和在除以7就是本年第几周  
  */
  var date1 = new Date(a, b - 1, c),
    date2 = new Date(a, 0, 1),
    d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
  return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
}

export { getYearWeek };

/****
  text: 是否有 年月日
  type: Y: 只保留年， YM: 只保留年月
**/
export function getDateString({
  text, type
} = {
    text: false, type: ''
  }) {
  const date = new Date();

  let dateString = date.toLocaleDateString().replaceAll('/', '-');
  if (text) {
    const dateStringList = dateString.split('-');
    dateString = `${dateStringList[0]}年${dateStringList[1]}月${dateStringList[2]}日`;
    if (type == 'Y') {
      dateString = date.getFullYear() + '年';
    } else if (type == 'YM') {
      dateString = dateString.split('月')[0] + '月';
    }
  } else {
    if (type == 'Y') {
      dateString = date.getFullYear() + '';
    } else if (type == 'YM') {
      const list = dateString.split('-');
      dateString = list[0] + '-' + list[1];
    }
  }
  return dateString;
}
export function getDateTimeString(text = false) {
  const date = new Date();
  let dateString = date.toLocaleDateString().replaceAll('/', '-');
  if (text) {
    const dateStringList = dateString.split('-');
    dateString = `${dateStringList[0]}年${dateStringList[1]}月${dateStringList[2]}日`;
  }

  const timeString = date.toLocaleTimeString();
  return `${dateString} ${timeString}`;
}