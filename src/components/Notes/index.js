// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  SubContainer,
  AppTitle,
  FormContainer,
  Input,
  TextArea,
  AddBtn,
  NotesContainer,
  NoNotesImg,
  NoNotesTitle,
  Desc,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const renderNotesList = () => (
    <NotesList>
      {notesList.map(each => (
        <NoteItem key={each.id} noteDetails={each} />
      ))}
    </NotesList>
  )

  const renderNoNotes = () => (
    <NotesContainer>
      <NoNotesImg
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesTitle>No Notes Yet</NoNotesTitle>
      <Desc>Notes you add will appear here</Desc>
    </NotesContainer>
  )

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {note, title, id: uuidv4()}
    setNotesList(prevList => [...prevList, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <MainContainer>
      <SubContainer>
        <AppTitle>Notes</AppTitle>
        <FormContainer onSubmit={onAddNote}>
          <Input
            required
            type="text"
            placeholder="Title"
            onChange={event => setTitle(event.target.value)}
            value={title}
          />
          <TextArea
            required
            placeholder="Take a Note..."
            onChange={event => setNote(event.target.value)}
            value={note}
          >
            {note}
          </TextArea>
          <AddBtn type="submit">Add</AddBtn>
        </FormContainer>
        {notesList.length > 0 ? renderNotesList() : renderNoNotes()}
      </SubContainer>
    </MainContainer>
  )
}

export default Notes
