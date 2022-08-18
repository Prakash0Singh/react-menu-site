import Resturant from "./component/Resturant";
export default function App() {
  return (
    <>
      
      <Resturant />
      
    </>
  );
}

// export default function App() {
//   const [posts, setPosts] = useState([]);
   
//   useEffect(() => {
//     fetchPost();
//   }, []);

//   const fetchPost = async () => {
//     const response = await fetch("https://api.chucknorris.io/jokes/random");
//     const postData = await response.json();
//     setPosts(postData);
//     console.log(postData)
//     console.log(posts.icon_url)

// };
//   return (
//     <div className="App">
//       <h2> Random joke generator😂 </h2>
//       <p>{posts.value}</p>
//       <button onClick={fetchPost}>Get new joke</button>
//     </div>
//   );
// }
