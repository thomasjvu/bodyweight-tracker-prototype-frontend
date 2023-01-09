// import { useState, useEffect } from "react"

// const EditItem = () => {

//     const [item, setItem] = useState({})

//     useEffect(() => {
//         async function fetchData() {
//             const response = await fetch(process.env.REACT_APP_TRACKER_API_URL + props.match.params.id)
//             const data = await response.json()
//             setItem(data)
//         }
//         fetchData()
//     }, [])

//     return (
//         <form>
//             <label>
//                 ID:
//                 <input type="text" value={item._id} />
//             </label>
//             <br />
//             <label>
//                 Weight:
//                 <input type="number" value={item.weight} />
//             </label>
//             <label>
//                 Date:
//                 <input type="date" value={item.date} />
//             </label>
//             <br />
//             <button type="submit">Save Changes</button>
//         </form>
//     )
// }

// export default EditItem
