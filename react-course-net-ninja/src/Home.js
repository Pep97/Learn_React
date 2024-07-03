import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;

// useEffect

// this will run every time the component renders
// useEffect(() => { 
//   console.log('use effect ran');
//   console.log(blogs);
//   }, [name]) 
// [name] is making sure that the useEffect only runs when the name state changes, it can also be empty [] to run only once when the component is mounted


// props

// this is a prop -> blogs={blogs}


// return (
//   <div className="home">
//     {blogs.map(blog => ( 
//       <div className="blog-preview" key={blog.id} >  {/*  key is used to identify the element in the virtual DOM */} 
//         <h2>{ blog.title }</h2>
//         <p>Written by { blog.author }</p>
//       </div>
//     ))}
//   </div>
// );


// click events

// const handleClick = (e) => {
//   console.log('hello ninjas', e);
// }

// const handleClickAgain = (name, e) => {
//   console.log('hello ' + name, e.target);
// }

// return (
//   <div className="home">
//     <h2>Homepage</h2>
//     <button onClick={handleClick}>Click me</button>
//     <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
//   </div>
// );
// }


// using hooks

// const Home = () => {
//   // let name = 'mario';
//   const [name, setName] = useState('mario');
//   const [age, setAge] = useState(25);

//   const handleClick = () => {
//     // name = 'luigi';
//     setName('luigi');
//     setAge(30);
//   }

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>{ name } is { age } years old</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }