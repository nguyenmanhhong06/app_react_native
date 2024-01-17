export interface RegisterReqBody {
  email: string
  password: string
  full_name: string
}

export interface TokenPayLoad {
  user_id: string
}
