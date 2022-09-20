export function useSetLocalStorageItem(name: any, payload: any) {
  if (!name) return

  let dataToSave = payload
  if (typeof payload !== 'string') {
    dataToSave = JSON.stringify(dataToSave)
  }

  localStorage.setItem(name, dataToSave)
}

export function useGetLocalStorageItem(name: string): string | null {
  if (!name) return null

  return localStorage.getItem(name)
}
