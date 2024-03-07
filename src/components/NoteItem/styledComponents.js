// Style your elements here
import styled from 'styled-components'

export const Note = styled.li`
  border: 1px solid #aab8c8;
  width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 48%;
    margin-right: 10px;
  }

  @media (min-width: 992px) {
    width: 32%;
    margin-right: 10px;
  }
`
export const NoteTitle = styled.h1`
  color: #1e293b;
  font-size: 26px;
`
