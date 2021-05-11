type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createAt?: Date
}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  create: (name: string) => 'success' | 'duplicated'
  save: () => void;
}

interface Window {

}

