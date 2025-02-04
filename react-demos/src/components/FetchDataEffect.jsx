import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
	const [posts, setPosts] = useState([]);

	useEffect(()=>{
		async function fetchData(){
			try {
				const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
				const data = await resp.json()
				console.log(data);
				if (data.length && data){
					setPosts(data);
				}
			} catch (error) {
				console.log(error)
			}
		}
		fetchData();
	}, [])
  return (
	<div>
	  {posts && posts.length > 0 && posts[0].title}
	</div>
  )
}

export default FetchDataEffect