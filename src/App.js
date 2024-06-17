import React, {useEffect, useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Time from "./components/Time";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./components/hooks/usePosts";

function App() {
    let [posts, setPosts] = useState([
        {id: 1, title: 'Kyiv', body: 'Kyiv is the capital of Ukraine'},
        {id: 2, title: 'Berlin', body: 'Berlin is the capital of German'},
        {id: 3, title: 'London', body: 'London is the capital of England'},
        {id: 4, title: 'Bakhchysarai', body: 'Bakhchysarai is the capital of Crimea'}
    ])

    const [filter, setFilter] = useState({sort : '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)




    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
      <div className="App">
          <Time/>
          <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
              Create a Post
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
          </MyModal>
          <hr style={{margin: '15px 0'}}></hr>
          <PostFilter
              filter={filter}
              setFilter={setFilter}
          />
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list 1"/>
      </div>

  );
}

export default App;
