module.exports = {
  mockResponse: () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.send = jest.fn().mockReturnValue(res)
    return res
  },
}
