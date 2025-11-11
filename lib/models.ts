import modelsData from "@/data/models.json"
import type { Model } from "@/types"

type Props = {
  category?: string | undefined
}

export async function getAllModels():Promise<Model[]>{
  return modelsData
}

export async function getModels({category}:Props):Promise<Model[]>{
  let filteredModels = [...modelsData]
  if(category){
    filteredModels = modelsData.filter(m => m.category === category)
  }
  return filteredModels
}

export async function getModelById(id: string | number):Promise<Model>{

  const foundModel = modelsData.find((m:Model) => m.id.toString() === id.toString())
  if(!foundModel){throw new Error(`model with id:${id} not found.`)}
  return foundModel
}