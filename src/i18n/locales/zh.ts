import type { DeepPartial, Messages } from '../types';

/**
 * 中文（简体）。
 * ja.ts と同じ形で書きます。書いていないキーは日本語で表示されます。
 * 翻訳が揃ったら src/i18n/config.ts の ENABLED_LOCALES に 'zh' を追加すると公開されます。
 */
export const zh: DeepPartial<Messages> = {
  meta: {
    defaultTitle: '應加合同会社｜东京中野区的房地产公司（买卖・租赁・投资咨询）',
    titleTemplate: '{page}｜應加合同会社',
  },
  common: {
    phoneLabel: '电话咨询',
    callShort: '电话',
    emailUs: '邮件咨询',
    viewDetails: '查看详情',
    priceOnRequest: '价格请咨询',
    photoComingSoon: '照片准备中',
    menuOpen: '打开菜单',
    menuClose: '关闭菜单',
    skipToContent: '跳到正文',
    languageSwitcher: '显示语言',
    supportedLanguages: '支持日语・中文・英语',
  },
  nav: {
    home: '首页',
    properties: '房源信息',
    company: '公司简介',
    contact: '联系我们',
    tsuchiya: 'TSUCHIYA大厦',
  },
  propertyKinds: {
    sale: '出售',
    rent: '出租',
    owned: '自有物业',
  },
  // TODO: home, propertiesPage, propertyDetail, company, contact, properties などを翻訳
};
