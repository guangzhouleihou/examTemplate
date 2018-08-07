// 接口文件创建示例
// 引入相关依赖
import fetch from '../config/fetch'
import { API_PATH } from '../config/env'

// 项目机构名称列表
export const getOrgList = (dataJson) => fetch(API_PATH + '/manage/institution/allInstitutionName', dataJson, 'GET')
