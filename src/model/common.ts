import { User } from "./session";

interface Action {
  type: string;
}

interface State {
  session: User;
}

export type { Action, State }
