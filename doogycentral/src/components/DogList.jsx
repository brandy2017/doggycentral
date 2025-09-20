import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const DogList = () => {
  // to navigate an object we use dot notation (.). syntax: nameOfObject.nameOfProperty
  const dogsArray = [
    {name: "German Shepard", image: "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg", description: "A cute German Shepard!"},
    {name: "German Shepard", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5PHjdZ4WsSRIm56h-o_Vw5QaFPHtvyo04hoQFtmdUoEamrgfszd8JfHnq39vTTE3qIKf8j9C9MTUAKfpT4TdoqDls-6BnSwzT2s9AiHg", description: "A cute German Shepard!"},
    {name: "German Shepard", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5PHjdZ4WsSRIm56h-o_Vw5QaFPHtvyo04hoQFtmdUoEamrgfszd8JfHnq39vTTE3qIKf8j9C9MTUAKfpT4TdoqDls-6BnSwzT2s9AiHg", description: "A cute German Shepard!"},
    {name: "German Shepard", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5PHjdZ4WsSRIm56h-o_Vw5QaFPHtvyo04hoQFtmdUoEamrgfszd8JfHnq39vTTE3qIKf8j9C9MTUAKfpT4TdoqDls-6BnSwzT2s9AiHg", description: "A cute German Shepard!"}
  ];
  //   map is a function that iterates over an array and returns a new array
  // React will automatically iterate over an array and display the the items in the array
  // we can use the map function to iterate over the array and do something with each item in the array. .map() takes a function as an argument. The function we will pass it is called an anonymous function. the reason its called anonymous is because we dont give it a name.
  // YOU MUST RETURN SOMETHING IN A MAP FUNCTION!
  return (
    <div>
      <h1>Dog List</h1>
      {dogsArray.map((item) => {
        return (
          <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default DogList;
