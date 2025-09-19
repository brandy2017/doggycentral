
const Find = () => {
    const findArray =["Locations", "Donate to a shelter"]
    return(
        <div>
            <h1>Find a shelter</h1>
            {findArray.map((item) => {
        return <h1>{item}</h1>
        })}
        </div>
    )
}
export default Find;