export const writeDataToLocalStorage=()=>{
    let users=[
      {
        username:'user1',
        password:'password1'
      },
      {
        username:'user2',
        password:'password2'
      },
      {
        username:'user3',
        password:'password3'
      }
    ];

    users=JSON.stringify(users)
    localStorage.setItem('users',users);
  }