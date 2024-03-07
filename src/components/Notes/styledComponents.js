// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
  padding-bottom: 20px;
  font-family: 'Roboto';
`

export const SubContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`

export const AppTitle = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 1px 8px #000;
`

export const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  height: 40px;
  padding-left: 10px;
  border: none;
  outline: none;
  font-weight: 550;
`

export const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 20px;
  height: 60px;
  padding-left: 10px;
  border: none;
  outline: none;
  font-weight: 550;
`

export const AddBtn = styled.button`
  height: 40px;
  width: 80px;
  height: 40px;
  align-self: flex-end;
  background-color: #4c63b6;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  flex-grow: 1;
  width: 100%;
`

export const NoNotesImg = styled.img`
  width: 100px;
  margin-top: 35px;
  @media (min-width: 768px) {
    width: 180px;
  }
`

export const NoNotesTitle = styled.h1`
  color: #334155;
  font-size: 24px;
`

export const Desc = styled.p`
  color: #aab8c8;
`

export const NotesList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 29px;
`
