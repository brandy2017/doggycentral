const DogList = () => {
  const dogsArray = ["German Shepherd", "Labrador", "Golden Retriever"];
//   map is a function that iterates over an array and returns a new array
// React will automatically iterate over an array and display the the items in the array
// we can use the map function to iterate over the array and do something with each item in the array. .map() takes a function as an argument. The function we will pass it is called an anonymous function. the reason its called anonymous is because we dont give it a name.
// YOU MUST RETURN SOMETHING IN A MAP FUNCTION!
  return (
    <div>
      <h1>Dog List</h1>
      {dogsArray.map((item) => {
        return <h1>{item}</h1>
      })}
    </div>
  );
};
export default DogList;
