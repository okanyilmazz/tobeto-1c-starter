import './App.css';
import { useEffect, useState } from 'react';
import PostService from './services/postService';
import Homepage from './pages/Homepage/Homepage';
import Posts from './pages/Posts/Posts';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';

function App() {

  //backend bağlantısı http isteği
  //bağlantı sonucu gelen değeri ekranda göstermek
  //component arası veri iletişimi
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetchItems();
  }, [])
  const fetchItems = async () => {
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => { console.log(response) })
    //   .catch((error) => { console.log(error) })
    //   .finally(() => { console.log("async işlem bitti") });

    try {
      let response = await PostService.getAll();
      setPosts(response.data);
    } catch (e) {
      console.log(e)
    }
  }
  const removePost = (id) => {
    setPosts(posts.filter(i => i.id !== id))
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
