import { useState } from 'react'
import { Header } from '../../components/Header'
import { Container, Form } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddLink() {
    setLinks((prevstate) => [...prevstate, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks((prev) => prev.filter((link) => link !== deleted))
  }

  function handleAddTag() {
    setTags((prev) => [...prev, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags((prev) => prev.filter((tag) => tag !== deleted))
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>

            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />

          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  value={tag}
                  key={String(index)}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
