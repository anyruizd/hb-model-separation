import StudentList from './model/StudentList'

import TextRetriever from './modules/TextRetriever/TextRetriever'
import TextDisplayer from './modules/TextDisplayer/TextDisplayer'

const studentList = new StudentList()

const textDisplayer = new TextDisplayer(
  document.querySelector('.js-text-displayer'),
  studentList.all.bind(studentList)
)

new TextRetriever(
  document.querySelector('.js-text-retriever-1'),
  studentList.add.bind(studentList)
)

new TextRetriever(
  document.querySelector('.js-text-retriever-2'),
  studentList.remove.bind(studentList)
)
