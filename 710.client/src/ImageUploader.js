import { storage } from './main'

export default async function Upload(file, path) {
  const collection = storage.ref(path + '/' + file.name)
  const snapshot = await collection.put(file)
  const url = await snapshot.ref.getDownloadURL()
  return { snapshot, url }
}
