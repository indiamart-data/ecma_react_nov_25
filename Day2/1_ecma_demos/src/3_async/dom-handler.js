import postApiClient from './post_api_client';

const messageDiv = document.querySelector('#messageDiv');
const ajaxDiv = document.querySelector('#ajaxDiv');

if (ajaxDiv.style.display === 'none') {
    ajaxDiv.style.display = 'block';
    messageDiv.style.display = 'none';
}

const button = document.createElement('button');
button.className = 'btn btn-primary';
button.innerHTML = 'Load Data';

{/* <button className='btn btn-primary'>Load Data</button> */}

const btnArea = document.querySelector('#aDiv_btnArea');
btnArea.appendChild(button);

const button2 = document.createElement('button');
button2.className = 'btn btn-primary';
button2.innerHTML = 'Test';

btnArea.appendChild(button2);

// button.addEventListener('click', ()=>{
//     const data = getData();
//     generateRows(data);
// });

// button.addEventListener('click', () => {
//     postApiClient.getAllPostsUsingCallback((data) => {
//         generateRows(data);
//     }, (eMsg) => {
//         console.error(eMsg);
//     });
// });

// button.addEventListener('click', () => {
//     postApiClient.getAllPosts().then((data) => {
//         generateRows(data);
//     }).catch((eMsg) => {
//         console.error(eMsg);
//     });
// });

button2.addEventListener('click', () => {
    alert("From Test");
});

// button.addEventListener('click', async () => {
//     try {
//         const data = await postApiClient.getAllPostsUsingPromise();
//         generateRows(data);
//     } catch(eMsg) {
//         console.error(eMsg);
//     }
// });

function withErrorHandling(fn) {
    return async function (...args) {
        try {
            return await fn(...args);
        } catch (error) {
            console.error("Handled by HOF:", error);
        }
    };
}

const clickHandler = async () => {
    const data = await postApiClient.getAllPostsUsingPromise();
    generateRows(data);
}

button.addEventListener('click', withErrorHandling(clickHandler));

try {
    const results = await Promise.all([
        getUsers(),
        getPosts(),
        getComments(),
    ]);
}
catch (err) {

}




try {
    const results = await Promise.allSettled([
        getUsers(),
        getPosts(),
        getComments(),
    ]);
}
catch (err) {

}

await getUsers()
await getPosts(),
    await getComments(),

    // button.addEventListener('click', async () => {
    //     try {
    //         const data = await postApiClient.getAllPostsAsync();
    //         generateRows(data);
    //     } catch(eMsg) {
    //         console.error(eMsg);
    //     }
    // });

    // button.addEventListener('click', async () => {
    //     const data = await postApiClient.getAllPostsAsync();
    //     generateRows(data);
    // });

    function generateRows(data) {
        const tbody = document.querySelector('#postTable tbody');
        let row, cell;

        for (const item of data) {
            row = tbody.insertRow();
            cell = row.insertCell();
            cell.textContent = item.id;
            cell = row.insertCell();
            cell.textContent = item.title;
            cell = row.insertCell();
            cell.textContent = item.body;
        }
    }