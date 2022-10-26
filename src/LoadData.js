export const LoadData = async () => {
    const data = await fetch('http://localhost:5000/category')
    const fetchData = await data.json();
    return fetchData;
}