// Correct version using arrow function
// const playlist = {
//   owner: "Prince",
//   songs: ["Song A", "Song B", "Song C"],
//   showSong: function () {
//     this.songs.forEach((song) => {
//       console.log(`${this.owner}'s playlist has: ${song} `);
//     });
//   },
// };

// playlist.showSong();

//wrong way without arrow function this will be undefined as it does't know who calls.

const playbutton = document.querySelector("#playBtn");

const playlist = {
  owner: "Prince",
  songs: ["Song A", "Song B", "Song C"],
  showSong: function () {
    this.songs.forEach((song) => {
      console.log(`${this.owner}'s playlist has: ${song} `);
    });
  },
};

playlist.showSong();

//I have also tried for wrong version and it shows undefined
// playbutton.addEventListener("click", playlist.showSong);

// Correct way by using arrow function
playbutton.addEventListener("click", () => {
  playlist.showSong();
});
