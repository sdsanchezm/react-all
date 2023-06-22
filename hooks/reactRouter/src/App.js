import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';
import NotFound from './components/NotFound';
import BookLayout from './components/BookLayout';
import ProductRoutes from './routes/ProductRoutes'

function App() {

  const location = useLocation();

  return (
    <>
    <Routes>
      <Route path='/books' element={<h4>another router in /books</h4>} />
    </Routes>
    <nav>
      <ul>
        <li><Link to="/" >Home</Link></li> 

        {/* the replace property, replace the last page that was visited
        <li><Link replace to="/" >Home</Link></li> */}

        {/* in this example the reloadDocument, actually reloads the entire page, not just the are in the document
        <li><Link reloadDocument to="/books" >Books</Link></li> */}

        <li><Link to="/books" >Books</Link></li>
        <li><Link to="/products" >Products</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route>

        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<NewBook />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <hr />
      <Routes>
        <Route path='/products/*' element={<ProductRoutes />} />
      </Routes>
      <hr />

      <NavLink style={ ({isActive}) => {return isActive ? {color: "red"} : {color: "green"} }} to="/" state="something in home">
        { ({isActive}) => { return isActive ? "activeHome" : "Home"}}
      </NavLink>
        <br />
      <NavLink style={ ({isActive}) => {return isActive ? {color: "red"} : {color: "green"} }} to="/books">
        Books
      </NavLink>
        <br />
        {/* the end tag, ensure that it will not be colored or styled if the url is not exact to (in this case) /products */}
      <NavLink end style={ ({isActive}) => {return isActive ? {color: "red"} : {color: "green"} }} to="/products" state="something in products">
        Products
      </NavLink>

      <h4>hash: {location.hash}</h4>
      <h4>key: {location.key}</h4>
      <h4>pathname: {location.pathname}</h4>
      <h4>search: {location.search}</h4>
      <h4>state: {location.state}</h4>

    </>
  );
}

export default App;
