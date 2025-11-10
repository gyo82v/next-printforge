import type {ReactNode} from "react"

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export interface Model  {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export type ModelDetailPageProps = {
  params: Promise<{id : string}>
}

export type PillProps = {
  children: ReactNode,
  className?: string
}

export type ModelCardProps = {
  data: Model
}
