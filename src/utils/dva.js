import { create } from 'dva-core';
// import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

function createApp(opt) {
  // redux日志
  // opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  // 注入model
  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  // 设置store
  store = app._store;
  app.getStore = () => store;
  app.use({
    onError(err) {
      console.log(err);
    }
  })

  // 设置dispatch
  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
}