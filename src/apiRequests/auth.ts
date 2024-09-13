import http from '@/lib/http'
import {
  LoginBodyType,
  LoginResType,
  RegisterBodyType,
  RegisterResType,
  SlideSessionResType
} from '@/schemaValidations/auth.schema'
import { MessageResType } from '@/schemaValidations/common.schema'

const authApiRequest = {
  login: (body: LoginBodyType) => http.post<LoginResType>('/Authentication/login', body),
  register: (body: RegisterBodyType) =>
    http.post<RegisterResType>('/Authentication/Register', body),
  auth: (body: { sessionToken: string; expiresAt: string }) =>
    http.post('/api/auth', body, {
      baseUrl: ''
    }),
  logoutFromNextServerToServer: (sessionToken: string) =>
    http.post<MessageResType>(
      '/Authentication/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${sessionToken}`
        }
      }
    ),
  logoutFromNextClientToNextServer: (
    force?: boolean | undefined,
    signal?: AbortSignal | undefined
  ) =>
    http.post<MessageResType>(
      '/Authentication/logout',
      {
        force
      },
      {
        baseUrl: '',
        signal
      }
    ),
  slideSessionFromNextServerToServer: (sessionToken: string) =>
    http.post<SlideSessionResType>(
      '/Authentication/slide-session',
      {},
      {
        headers: {
          Authorization: `Bearer ${sessionToken}`
        }
      }
    ),
  slideSessionFromNextClientToNextServer: () =>
    http.post<SlideSessionResType>(
      '/Authentication/slide-session',
      {},
      { baseUrl: '' }
    )
}

export default authApiRequest
