const user = {
  name: "Prince",
  social: {
    twitter: "@prince",
  },
};

//optional chaining to handle the error properly instead of crashing
console.log(user.address?.city);

//Optional chaning with message
console.log(user?.linkedin ?? "No Linkedin");

//Working condition
console.log(user?.social?.twitter ?? "No Twitter");
