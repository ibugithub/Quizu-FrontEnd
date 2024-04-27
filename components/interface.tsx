import { useRouter } from "next/navigation";

type NextNavigationRouter = ReturnType<typeof useRouter>;
export interface CustomRouter extends NextNavigationRouter {
}

export interface signupResponseData {
  email : string[],
  password : string[],
  password2: string[]
}


export interface Answers {
  id: number,
  text: string,
  is_correct: boolean
}

export interface Questions {
  id : number,
  text : string,
  answers : Answers[]
}

export interface NoteInterface {
  id: number,
  text: string,
}
