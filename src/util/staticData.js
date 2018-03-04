export const options = {
  userType: [{
    value: '',
    label: '全部'
  }, {
    value: '0',
    label: 'システム管理者'

  }, {
    value: '1',
    label: 'システム担当者'
  }, {
    value: '2',
    label: '税理士管理者'
  }, {
    value: '3',
    label: '税理士担当者'
  }],
  sex: [{
    value: 'MALE',
    label: '男性'
  }, {
    value: 'FEMALE',
    label: '女性'
  }],
  cpExisted: [{
    value: 'false',
    label: '未購入'
  }, {
    value: 'true',
    label: '購入済'
  }],
  willExisted: [{
    value: '0',
    label: '未作成'
  }, {
    value: '1',
    label: '作成済'
  }],
  status: [
    {
      value: 'UNHANDLED',
      label: '未対応'
    }, {
      value: 'DISCUSS',
      label: ' 相談中'
    }, {
      value: 'SUGGEST_FINISH',
      label: '提案済'
    }, {
      value: 'DECLARING',
      label: '申告手続き中'
    }, {
      value: 'FINISHED',
      label: '完了'
    }],
  desire: [
    {
      value: 'PREVENT_DISPUTE',
      label: '争いを防止'
    }, {
      value: 'PREPARE_TAXES',
      label: '納税資金の用意'
    }, {
      value: 'SPARE_TAXES',
      label: '相続税の節税'
    }, {
      value: 'OTHER',
      label: 'その他'
    }],
  willType: [
    {
      value: 'HOLOGRAPH',
      label: '自筆'
    }, {
      value: 'NOTARIZED',
      label: '公正'
    }, {
      value: 'SECRET',
      label: '秘密'
    }],
  webVip: [
    {
      value: 'NORMAL',
      label: '非会員'
    }, {
      value: 'VIP',
      label: '会員'
    }],
  inheritRelation: [
    {
      value: '00',
      label: '本人'
    }, {
      value: '01',
      label: '妻'
    }, {
      value: '02',
      label: '夫'
    }, {
      value: '03',
      label: '子'
    }, {
      value: '04',
      label: '父'
    }, {
      value: '05',
      label: '母'
    }, {
      value: '06',
      label: '兄'
    }, {
      value: '07',
      label: '弟'
    }, {
      value: '08',
      label: '姉'
    }, {
      value: '09',
      label: '妹'
    }, {
      value: '10',
      label: '子の子'
    }, {
      value: '11',
      label: '父の父'
    }, {
      value: '12',
      label: '父の母'
    }, {
      value: '13',
      label: '母の父'
    }, {
      value: '14',
      label: '母の母'
    }, {
      value: '15',
      label: '兄の子'
    }, {
      value: '16',
      label: '弟の子'
    }, {
      value: '17',
      label: '姉の子'
    }, {
      value: '18',
      label: '妹の子'
    }, {
      value: '19',
      label: 'その他'
    }]
}

export const customerRequired = {
  'customerName': '氏名',
  'customerStatus': '対応状況',
  'registrDate': '登録日',
  'inheritRelation': '続柄',
  'webVip': 'Web会員区分',
  'decedentName': '氏名',
  'decedentCpExisted': '墓地購入',
  'decedentWillExisted': '遺言書の有無',
  'decedentWillType': '遺言書の種類',
  'decedentAddress': '現住所',
  'decedentPerAd': '本籍地',
  'decedentMi': '月間収入',
  'decedentMe': '月間支出',
  'decedentEc': '余裕資金額',
  'inheritTotal': '相続資産総額',
  'decedentAddPostcode': '現住所郵便番号',
  'name': '氏名',
  'legalHeirsNumber': '法定相続人数',
  'address': '現住所',
  'postcode': '郵便番号',
  'legalHeirsPercent': '法定相続割合',
  'yearIncome': '年収',
  'tel': '電話番号',
  'decedentTel': '電話番号',
  'decedentMp': '携帯電話番号',
  'mobilePhone': '携帯電話番号',
  'totalAssets': '資産総額',
  'decedentPerAdPostcode': '本籍地郵便番号'
}
