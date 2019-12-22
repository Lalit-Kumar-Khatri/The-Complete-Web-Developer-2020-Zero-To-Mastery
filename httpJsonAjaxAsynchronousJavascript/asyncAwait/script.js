// ASYNC AWAIT

movePlayer(100, 'left')
    .then(() => movePlayer(400, 'left'))
    .then(() => movePlayer(10, 'right'))
    .then(() => movePlayer(330, 'left'))


async function playerStart() {
    const first = await movePlayer(100, 'left');  //pause
    await movePlayer(400, 'left');  //pause
    await movePlayer(10, 'right');  //pause
    await movePlayer(330, 'left');  //pause
}


// another example for async await

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

fetchUsers();

// before async

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log);


// another example

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
}).catch('oops');

// converting this to async await

const getData = async function () {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('oops', err)
    }
}

getData();