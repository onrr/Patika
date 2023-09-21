import axios from "axios";


async function getData(number) {

    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)

    const showData = {
        user: user,
        post: post
    }
    
    return showData
}


export default getData