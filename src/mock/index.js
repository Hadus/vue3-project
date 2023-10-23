import allDataJson from './allData.json';
export default [{
  type: 'post',
  url: '/api/allData',
  response: ({body}) => {
    return { code: 200, data: allDataJson }
  }
}]