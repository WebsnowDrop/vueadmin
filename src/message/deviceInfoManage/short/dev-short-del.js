// 删除设备分类
export default class requestContent {
  constructor() {
    // 上送报文字段定义
    this.data = {
      devAssortmentId: ''
    }
    // 交易码，每次新建此文件，修改此处为对应的交易码即可
    this.TransServiceCode = 'aums.v052.devassortment_info_delete';
  }
}
