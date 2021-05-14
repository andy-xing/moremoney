type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number
  createdAt?: string  // 类 / 构造函数
}

type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
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

