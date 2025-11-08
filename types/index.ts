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
