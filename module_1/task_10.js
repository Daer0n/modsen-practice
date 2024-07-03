const delayedRandomNumber = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const delayInSeconds = randomNumber;

        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(randomNumber);
            } else {
                reject(
                    new Error(
                        `Generated number (${randomNumber}) is greater than 5.`
                    )
                );
            }
        }, delayInSeconds * 1000);
    });
};

delayedRandomNumber()
    .then((number) => {
        console.log(`Generated number: ${number}`);
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
    });
