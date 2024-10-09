async function get() {
    try {
        const response = await fetch("http://localhost:3001/todos", {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const ans = await response.json();
        console.log(ans.todo);
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

get();
