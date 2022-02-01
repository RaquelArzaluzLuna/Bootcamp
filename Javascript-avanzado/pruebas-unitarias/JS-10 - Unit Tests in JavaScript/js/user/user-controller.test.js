const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('findByEmail userController', () => {
    let email = 'raquel.luna@gmail.com';
    let user = new User(123213, 'Raquel Luna', email);
    userController.add(user);

    expect(userController.findByEmail(email)).toEqual(user);
  });

  test('findById userController', () =>{
    let id = '123231';
    let user = new User(id, 'Raquel Luna', 'raquel.luna@gmail.com');
    userController.add(user);

    expect(userController.findById(id)).toEqual(user);
  });




