//todos os componentes tem que ter a extensao JSX = javaScript + XML
import { Header } from "./components/header"
import { Post } from "./components/Post"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/130409961?v=4",
      name: "Brendon",
      role: "Web developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design / doctorcare' }
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/130409961?v=4",
      name: "Mike",
      role: "front-end developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design / doctorcare' }
    ],
    publishedAt: new Date('2024-10-03 20:00:00')
  },
]

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
          {posts.map(post => (
            <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>

      </div>


    </div>
  )
}
//forma de exporta
// export default App
