const netProtocol = 'http://'
const host = 'localhost'
const port = ':8888'

const mainBackendUrl = netProtocol + host + port

export const urls = {
  downloadApk: mainBackendUrl + '/download/apk'
}