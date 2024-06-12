const loadData = async () => {
    try {
        const response1 = await fetch("https://api.example.com/data1");
        const data1 = await response1.json();

        const response2 = await fetch(
            `https://api.example.com/data2?param=${data1.param}`
        );
        const data2 = await response2.json();

        return data2;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

(async function () {
    try {
        const result = await loadDataAndMakeRequest();
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error);
    }
})();
