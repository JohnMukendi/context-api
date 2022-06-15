import '../styles/globals.css'
import {userContext} from '../pages/Context'
import {useContext,useState} from 'react'

function MyApp({ Component, pageProps }) {

  const [color,setColor] = useState(false)
  const [flasher,setFlasher] = useState(false)
  const username = useContext(userContext)
  return(
    <userContext.Provider value={{color,username:'Meechy',setColor,flasher,setFlasher}}>
             <Component {...pageProps} />
    </userContext.Provider>
    
  ) 
}

export default MyApp
