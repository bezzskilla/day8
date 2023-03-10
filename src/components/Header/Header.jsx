import React from 'react';
import { Form } from '../Form';
import './header.css'

function Header({ addToList }) {

  return (
    <header>
      <Form addToList={addToList} />
    </header>
  )
}

export const MemoHeader = React.memo(Header)

