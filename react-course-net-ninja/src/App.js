import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


// npm install react-router-dom v5 it should work like this

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Switch>
//             {/* Switch is made so that it will responde to only 1 route at a time. 
//             and is gonna stop at the first match that it found and render that component inside the route.
//             */ 
//             <Route exact path="/">
//               {/* 
// exact is used to match the exact path otherwise it will match the first path that matches the start of the path, like "/create" will match as well
//               */}  
//               <Home />
//             </Route>
//             <Route path="/create">
//               <Create />
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// starting training on JSX
/* 

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 }; 
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

        {/*  Starting training on JSX
        
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        
        <p>{ person }</p>  this won't work  
        <p>{person.name}</p>  this will work 
  
        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>
        
        </div>
        </div>
        );
      }
    */ 
// you can write in both ways: <Navbar /> {/*<Navbar><Navbar/> */} 



