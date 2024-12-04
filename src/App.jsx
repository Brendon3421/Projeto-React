//todos os componentes tem que ter a extensao JSX = javaScript + XML
import { Header } from "./components/header"
import { Post } from "./components/Post"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

//quando utilizamos o export na function precisamos importar com {}
export function App() {

  return (
    //para deixar varios componentees embiaxo do outro precisa de algum envolta como a div
    <div>
      {/* Podemos passar atributos para  os componentes */}
      <Header />

      <div className={styles.wrapper}>

        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post

          />
          <Post

          />
        </main>
      </div>


    </div>
  )
}
//forma de exporta
// export default App
