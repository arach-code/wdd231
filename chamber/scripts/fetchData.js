
const fetchData = async () => {
    let results = await fetch("data/members.json")
    return results.json();
}

export default fetchData
   
