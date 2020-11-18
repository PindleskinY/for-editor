import zhCN from './lang/zh-CN/index.json'
import { IToolbar, IWords } from '../index'
export interface ICONFIG {
  language: {
    'zh-CN': IWords
    [key: string]: IWords
  }
  langList: string[]
  toolbar: IToolbar
}

export const CONFIG: ICONFIG = {
  language: {
    'zh-CN': zhCN,
  },
  langList: ['zh-CN'],
  toolbar: {
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    bold: true,
    unOrderList: true,
    orderList: true,
    img: true,
    link: true,
    code: true,
    preview: true,
    expand: true,
    undo: true,
    redo: true,
    save: true,
    subfield: true
  }
}
