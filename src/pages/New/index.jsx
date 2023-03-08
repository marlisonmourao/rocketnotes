import { useState } from 'react'
import { Header } from '../../components/Header'
import { Container, Form } from './styles'

import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { api } from '../../services/api'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

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

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota')
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clocou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    if (newLink) {
      return alert(
        'Você deixou um link no campo para adicionar, mas não clocou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    await api.post('/notes', {
      text: title,
      description,
      tags,
      links,
    })

    alert('Nota criada com sucesso!')
    navigate('/')
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

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

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

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
