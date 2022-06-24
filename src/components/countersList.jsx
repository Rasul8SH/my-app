import React, { useState } from "react"
import Counter from "./counter"

const CountersList = () => {
  const initialState = [
    { id: 0, value: 2, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "ложка" },
    { id: 2, value: 7, name: "Вилка" },
    { id: 3, value: 7, name: "Тарелка" },
    { id: 4, value: 7, name: "Набор минималиста" },
  ]
  const [counters, setCounters] = useState(initialState)

  const handleDelete = (_id) => {
    setCounters(counters.filter(item => item.id !== _id))
  }
  const handleReset = () => {
    setCounters(initialState)
  }
  const handleIncrement = (_id) => {
    setCounters(counters.map(item => {
      if (item.id === _id) {
        item.value += 1
      }
      return item
    }))
  }
  const handleDecrement = (_id) => {
    setCounters(counters.map(item => {
      if (item.id === _id) {
        item.value -= 1
      }
      return item
    }))
  }

  return (
    <>
      {counters.map(count => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
  )
}

export default CountersList