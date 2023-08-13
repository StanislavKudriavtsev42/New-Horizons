async function requestPhotos(rovers, instruments, sol) {
  let photos = [];
  for (let rover of rovers) {
    let url = `https://mars-photos.herokuapp.com/api/v1/rovers/${rover}/photos?`;
    url += `sol=${sol}`;
    for (let instrument of instruments) {
      const response = await fetch(url + `&camera=${instrument}`);
      const data = await response.json();
      console.log(url + `&camera=${instrument}`);
      photos = photos.concat(data.photos);
    }
  }
  return photos;
}

export default requestPhotos;
