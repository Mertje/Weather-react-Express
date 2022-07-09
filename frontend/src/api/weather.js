import axios from "axios";

export default async function Weather(city) {
  await axios
    .post("/city", {
      data: {
        cityData: city,
      },
    })
    .catch((error) => {
      console.log(error);
    });

  return await axios
    .get("/weather")
    .catch((e) => console.log(e)).then()
    
}
