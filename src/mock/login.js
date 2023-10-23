export default [{
  type: 'get',
  url: '/api/login',
  response: ({body}) => {
    return { code: 200, data: { index:1, body } }
  }
}]