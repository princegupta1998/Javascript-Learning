const searchInput = document.querySelector("#username");
const searchbutton = document.querySelector("#searchBtn");
const result = document.querySelector("#result");
const errorMsg = document.querySelector("#errorMsg");

//Search functtion from github
const searchUser = async () => {
  result.textContent = "";
  errorMsg.textContent = "";

  try {
    if (searchInput.value === "") {
      errorMsg.textContent = "Username required!";
      return;
    }

    const username = searchInput.value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("User Not Found!");
    }
    const data = await response.json();
    console.log(data);
    createData(data);
  } catch (error) {
    errorMsg.textContent = "User Not Found!";
    console.log(error.stack);
  }
};

const createData = (data) => {
  //create image tag, add avatar image from github and append to result.
  const img = document.createElement("img");
  img.src = data.avatar_url;
  img.id = "avatar";
  result.append(img);

  //create p tag, add name from github and append to result.
  const profileName = document.createElement("p");
  profileName.textContent = data.name;
  profileName.id = "profileName";
  result.append(profileName);

  //create p tag, add follower count from github and append to result.
  const followerCount = document.createElement("p");
  followerCount.textContent = `${data.followers} Followers`;
  followerCount.id = "followercount";
  result.append(followerCount);

  //create textarea tag, add bio from github and append to result.
  const bio = document.createElement("p");
  bio.textContent = data.bio;
  bio.id = "userBio";
  result.append(bio);
};

// trigger function using button click
searchbutton.addEventListener("click", () => {
  searchUser();
});

// trigger function using enter button
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchUser();
});
