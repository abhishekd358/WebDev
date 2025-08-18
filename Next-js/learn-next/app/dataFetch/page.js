
// function will be async to fetch data from the api 

const fetchedData = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await api.json()
    // console.log(data)
    return data
}


// here we also need to make component async
export default async function dataFetch(){
    // need to call the fetch function here
    const posts = await fetchedData()

    return(
        <div className="text-center">
            <h1 className="text-2xl text-pink-400">hello! to understand how the fetch works in sever component see code in the folder name 'dataFetch' </h1>

            <p className="text-xl text-pink-400">showing all fetch data below</p>
            
            
            {posts.map((post)=>(
                <div key={post.id} className="bg-amber-950 m-10 p-5 text-left">
                    <h1> <span className="font-bold text-lg">title:</span> {post.title}</h1>
                    <p><span className="font-bold text-lg">body:</span> body: {post.body}</p> 
                </div>
            ))}



        </div>
    )
}