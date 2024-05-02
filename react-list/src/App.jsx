import Post from './Post'
import './App.css'



function App() {

  let postone = "Jerome Oswald"
  let posttwo = "Jack"

  return (
   <div>
    <h1>React Components!!</h1>
    <Post name={postone} venue = {"Chennai"}></Post>
    <Post name={posttwo} venue = {"Trichy"}></Post>
    <Post name={"Mavrick"} venue = {"USA"}></Post>

   </div>
  )
}

export default App
