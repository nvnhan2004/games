import http from '@/lib/http'
import {
  CategoriesListResType,
  CategoriesResType
} from '@/schemaValidations/categories.schema'

const categoriesApiRequest = {
  getCateMenu: () => http.get<CategoriesListResType>('categories/get-categories-menu'),
  getDetail: (slug: string) =>
    http.get<CategoriesResType>(`categories/get-detail/${slug}`, {
      cache: 'no-store'
    })
}

export default categoriesApiRequest
