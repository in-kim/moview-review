export interface reviewState {
  status: "idle" | "loading" | "failed";
  reviews?: Array<reviewItem>;
}

export interface reviewItem{
  id?:number;
  title: string;
  comment: string;
  score?: number | string;
  scoreArr?:Array<number>
}

export interface actionProps{
  [payload:string]: actionProps;
}

interface SerializedError {
  name?: string
  message?: string
  code?: string
  stack?: string
}

export interface PendingAction<ThunkArg> {
  type: string
  payload: undefined
  meta: {
    requestId: string
    arg: ThunkArg
  }
}

interface SerializedError {
  name?: string
  message?: string
  code?: string
  stack?: string
}

export interface FulfilledAction<ThunkArg, PromiseResult> {
  type: string
  payload: PromiseResult
  meta: {
    requestId: string
    arg: ThunkArg
  }
}

interface SerializedError {
  name?: string
  message?: string
  code?: string
  stack?: string
}

export interface RejectedAction<ThunkArg> {
  type: string
  payload: undefined
  error: SerializedError
  meta: {
    requestId: string
    arg: ThunkArg
    aborted: boolean
    condition: boolean
  }
}