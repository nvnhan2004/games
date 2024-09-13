import http from '@/lib/http'
import {
  GamesListResType,
  GamesResType
} from '@/schemaValidations/games.schema'

const gamesApiRequest = {
  getGamesByGames: (cate: string) => http.get<GamesListResType>(`games/get-by-categories/${cate}`),
  getDetail: (slug: string) => http.get<GamesResType>(`games/get-detail/${slug}`)}

export default gamesApiRequest
