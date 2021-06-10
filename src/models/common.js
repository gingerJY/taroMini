import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    name: '麦豇豆',
  },

  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
