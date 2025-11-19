const url = process.env.REACT_APP_POSTS_API_URL;

const postApiClient = {
    getAllPosts: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    resolve(data);
                }).catch(error => {
                    reject("Parsing Error")
                });
            }).catch(error => {
                reject("Communication Error")
            })
        });
    },
    getAllPostsAsync: async function () {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data
        } catch (err) {
            throw new Error(err.message);
        }
    }
};

export default postApiClient;