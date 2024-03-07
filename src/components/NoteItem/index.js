// Write your code here
import {Note, NoteTitle} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <Note>
      <NoteTitle>{title}</NoteTitle>
      <p>{note}</p>
    </Note>
  )
}

export default NoteItem
