import { Action } from './common'

interface User {
  name: string;
}

interface SessionAction extends Action {
  payload?: User
}

export type { User, SessionAction }
