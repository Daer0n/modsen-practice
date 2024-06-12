const loadURLs = (urls) => {
    const promises = urls.map((url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(Error(`URL loading error: ${url}`));
                }
            };
            xhr.onerror = () => {
                reject(Error(`URL loading error: ${url}`));
            };
            xhr.send();
        });
    });

    return Promise.all(promises);
};

const urls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
];

loadURLs(urls)
    .then((results) => {
        console.log("Loading result:", results);
    })
    .catch((error) => {
        console.error("Loading error:", error);
    });
