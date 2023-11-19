const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')
const PORT = 5550

app.use(cors())
app.use(express.json())

app.get('/api/todos', async (req, res) => {
  try {
    const allTodos = await pool.query(
      `SELECT * FROM todo;`
    )

    res.json(allTodos.rows)
  } catch (error) {
    console.log(error.message)
  }
})

app.get('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params

    const selectedTodo = await pool.query(
      `SELECT * FROM todo WHERE todo_id = $1;`,
      [id]
    )

    res.json(selectedTodo.rows[0])
  } catch (error) {
    console.log(error.message)
  }
})

app.post('/api/todos', async (req, res) => {
  const { todo_title, todo_description, todo_is_complete } = req.body

  const newTodo = await pool.query(
    `INSERT INTO todo (todo_title, todo_description, todo_is_complete) VALUES($1, $2, $3) RETURNING *;`,
    [todo_title, todo_description, todo_is_complete]
  )
  
  res.json(newTodo.rows[0])
})

app.put('/api/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { todo_title } = req.body

    await pool.query(
      `UPDATE todo SET todo_title = $1 WHERE todo_id = $2`,
      [todo_title, id]
    )

    res.json("Todo was updated.")
  } catch (error) {
    console.log(error.message)
  }
})

app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params

  const deletedTodo = await pool.query(
    `DELETE FROM todo WHERE todo_id = $1 RETURNING*;`,
    [id]
  )

  res.json(`Todo '${deletedTodo.rows[0].todo_title.toUpperCase()}' has been deleted.`)
})

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}.`))