import http from '@/lib/http'
import {
  CategoriesListResType,
  CategoriesResType
} from '@/schemaValidations/categories.schema'

const categoriesApiRequest = {
  getCateMenu: () => http.get('categories/get-categories-menu'),
  getDetail: (slug: string) =>
    http.get(`categories/get-detail/${slug}`, {
      cache: 'no-store'
    })
}

export default categoriesApiRequest
