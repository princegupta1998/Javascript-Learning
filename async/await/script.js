//API Github - https://api.github.com/users/princegupta1998

const getUser = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/princegupta1998",
    );

    if (!response.ok) {
      throw new Error(`User Not Found! : status ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    console.log(
      `Hello my name is ${data.name} and i am from ${data.location}, i have ${data.followers} followers. My Bio - ${data.bio}`,
    );
  } catch (error) {
    //stack is to trace the error properly by proper location, message will print the message that passed in error throw statment
    console.log(error.stack, error.message);
  }
};

getUser();
