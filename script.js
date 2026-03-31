function getIdea(data, mood) {
    const list = data[mood];
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
  document.getElementById("image").src = result.image;
document.getElementById("image").style.display = "block";


