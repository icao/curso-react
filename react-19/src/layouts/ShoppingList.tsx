import {  startTransition, useState, useTransition } from 'react'

 async function updateQuantity(newQuantity : number) :  Promise<number>  {
  return new Promise((resolve) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity)
    }, 2000)
  })
}

const ShoppingList = () => {
  const [quantity, setQuantity] = useState<number>(1)
  const [isPending, startTransition] = useTransition()

  const updateQuantityAction = (newQuantity: number) => {
    // To access the pending state of a transition,
    // call startTransition again.
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity)
      startTransition(() => {
        setQuantity(savedQuantity)
      })
    })
  }

  return (
    <div>
      <h1>ShoppingList - {JSON.stringify({ quantity, isPending })}</h1>
      <Item action={updateQuantityAction} />
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  )
}

type PropsItem = {
  action: (value: number) => void | Promise<void>
}

const Item = ({ action }: PropsItem) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange', event.target.value)
    const value = Number(event.target.value) // Convert string to number
    // To expose an action prop, await the callback in startTransition.
    startTransition(async () => {
      await action(value)
    })
  }

  return (
    <div className="flex gap-4 justify-between">
      <p>Eras Tour Tickets</p>

      <div>
        <label htmlFor="name"> $ 999.99 - Quantity: </label>
        <input
          type="number"
          onChange={handleChange}
          defaultValue={1}
          min={1}
          className="w-20 p-2 border rounded focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  )
}

type PropsTotal = {
  quantity: number
  isPending: boolean
}

const Total = ({ quantity, isPending }: PropsTotal) => {
  return (
    <div className="flex gap-4 justify-between align-baseline">
      <p className="text-3xl font-bold">Total</p>
      <div>
        {isPending ? (
          <div className="text-3xl text-cyan-500">🔄 Cargando...</div>
        ) : (
          <p className="text-3xl font-bold">{quantity * 999.99}</p>
        )}
      </div>
    </div>
  )
}

export default ShoppingList
