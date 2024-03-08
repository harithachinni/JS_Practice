import logo from './logo.svg';
import './App.css';
import Menu from './4Menu/Menu';
import Categories from './4Menu/Categories';
import { useState } from 'react';
import menu from './4Menu/data';
import Tab from './5tabsFromApi/Tab';
import Header from './4Menu/Header';
import UserComponent from '../src/context/UserComponent';
// import DisplayPost from './posts/DisplayPost';
// import Counter from './reactor/Counter';
// import StudentMaster from './reactor/StudentMaster';

function App() {
  const [load, setLoad] = useState(false);
  const [menuItems, setMenuItems] = useState(menu);
  const newM = new Set(menu.map(i => i.category));
  const [categories, setCategories] = useState(['all', ...newM]);
  console.log(newM);
  console.log(menuItems);
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter(i => i.category === category)
    setMenuItems(newItems);
  }
  return (
    <div className="App">

      <>

        <div>
          <button onClick={() => setLoad(!load)}>LOAD
          </button>
        </div>
        {load && <Header />}
        {load && <Categories filterItems={filterItems} categories={categories} />}
        {load && <Menu items={menuItems} />}
        <UserComponent>

          <Tab />
        </UserComponent>
      </>
    </div>
  );
}

export default App;
