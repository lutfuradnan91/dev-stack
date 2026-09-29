import { Suspense, useState } from 'react'
import Nav from './components/Navigation'
import Banner from './components/Banner'
import Cards from './components/Cards'
import './App.css'
import Stack from './components/Stack'
import type { CardType } from './components/Types'

const fetchcarddata = async () =>{
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

const CardPromis = fetchcarddata()
function App() {

const [selectedStack, setSelectedStack] = useState<CardType[]>([])

const addStack = (card:CardType) =>{
  setSelectedStack((prev) =>{
    const alreadyadd = prev.some((item) => item.id ===card.id)
      if(alreadyadd){
        return prev
      }return[...prev, card]
  })
}

const removetoStack = (id: string) => {
  setSelectedStack((prev) => prev.filter((item) => item.id !== id))
}

const removeAll = () =>{
  setSelectedStack([])
}

  return (
    <><Nav></Nav>
    <Banner></Banner>
    <main>
      <section className='container mx-auto my-10'>
          <div className=' mb-10'>
              <h1 className=' text-2xl font-bold '>Explore The <span className='text-fuchsia-600'>Technologies</span></h1>
              <p className='text-gray-400'>Pick one technology per category to build your ideal stack.</p>
          </div>
        <div className='grid grid-cols-4 gap-5'>
          <Suspense fallback = {<h2>Loading...</h2>}>
              <Cards CardPromis = {CardPromis} selectedStack = {selectedStack} onAdd = {addStack}></Cards>
              <Stack selectedStack = {selectedStack} onRemove = {removetoStack} onRemoveAll = {removeAll}></Stack>
          </Suspense>
        </div>
      </section>
    </main>
    </>
  )
}

export default App