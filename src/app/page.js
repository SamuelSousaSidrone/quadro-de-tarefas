import React from 'react'
import s from './page.module.css'
import './globals.css'
const home = () => {
  return (
    <main className={s.main}>

      <header>
        <span>Projetos | ELITI</span>
        <h1>Board</h1>
      </header>

      <section className={s.columns} id='colunas'>
        <section className={s.column} id='coluna'>
          <h2 className={s.column_title}>
            Tarefas
          </h2>
          <section className={s.colunm_cards} id='cards_colunas'>
            <section className={s.card} id='card'>
              Deixar o Like
            </section>
          </section>
        </section>
      </section>

    </main>
  )
}

export default home