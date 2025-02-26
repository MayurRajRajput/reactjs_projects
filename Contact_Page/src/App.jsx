import ContactForm from "./components/ContactForm"
import ContactHeader from "./components/ContactHeader"
import Navigation from "./components/Navigation"


function App() {


  return (
    <div>
      <Navigation/>
      <main className="flex justify-end h-[calc(100vh-72px)] flex-col ">

      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  )
}

export default App
