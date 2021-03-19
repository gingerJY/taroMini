import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config';

/// http状态
const HTTP_STATUS = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

/// 错误捕捉
const logError = (name, action, info) => {
  if (!info) {
    info = 'empty'
  }
  try {
    let deviceInfo = wx.getSystemInfoSync()
    var device = JSON.stringify(deviceInfo)
  } catch (e) {
    console.error('not support getSystemInfoSync api', err.message)
  }

  console.error(name, action, info, device)
  if (typeof info === 'object') {
    info = JSON.stringify(info)
  }
}

/// 请求方法封装
let baseOptions = (params, method = 'GET') => {
  const { url, data } = params
  if (!noConsole) console.log(`${new Date().toLocaleString()}【 M=${url} 】P=${JSON.stringify(data)}`);
  const option = {
    isShowLoading: false,
    loadingText: '正在加载',
    url: baseUrl + url,
    data: data,
    method: method,
    header: {
      'Content-Type': 'application/json',
    }
  }
  return Taro.request(option).then(async (res) => {
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return logError('api', '请求资源不存在')
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return logError('api', '服务端出现了问题')
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      return logError('api', '没有权限访问')
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      if (!noConsole) console.log(`${new Date().toLocaleString()}【 M=${url} 】【接口响应：】`, res.data);
      return res.data
    }
  }).catch((err) => {
    logError('api', 'error', err)
  })
};

const GET = (url, data = '') => {
  const option = { url, data }
  return baseOptions(option)
}

const POST = (url, data = '', contentType) => {
  const params = { url, data, contentType }
  return baseOptions(params, 'POST')
}

export default { GET, POST }