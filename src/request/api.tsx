import request from './request'

export const SearchApi = (params:any) => request.get('/country', params)
export const LngLatApi = (params:any) => request.get('',params)
