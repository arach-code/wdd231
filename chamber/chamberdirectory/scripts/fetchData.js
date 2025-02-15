
const fetchData = async () => {
    let results = await fetch("https://arach-code.github.io/wdd231/chamber/data/members.json")
    return results.json();
}

export default fetchData
   
