const url = "https://jsonplaceholder.typicode.com/posts";

const postApiClient = {
    getAllPostsUsingCallback: function (successCB, errorCB) {
        fetch(url).then(response => {
            response.json().then(data => {
                successCB(data);
            }).catch(errror => {
                errorCB("Parsing Error");
            })
        }).catch(error => {
            errorCB("Communication Error");
        });
    },
    getAllPostsUsingPromise: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    setTimeout(() => {
                        resolve(data);
                    }, 5000);
                }).catch(errror => {
                    reject("Parsing Error");
                })
            }).catch(error => {
                reject("Communication Error");
            });
        });
    },
    getAllPostsAsync: async function () {
        try {

            const response = await fetch(url);
            const data = await response.json();
            // return data;

        } catch (error) {
            return new Error(error.message)
        }
    }
}

export default postApiClient;