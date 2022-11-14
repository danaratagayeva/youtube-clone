import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCq7WVDD8rvU6nfHITbesfvYFHZcemLcMw',
  authDomain: 'video-8df0c.firebaseapp.com',
  projectId: 'video-8df0c',
  storageBucket: 'video-8df0c.appspot.com',
  messagingSenderId: '382672268865',
  appId: '1:382672268865:web:c098909582a386ee2060c0',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app
