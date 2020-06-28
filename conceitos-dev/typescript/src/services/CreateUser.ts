// para criar: Name, email, password

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function CreateUser({
  name = "",
  email,
  password,
}: CreateUserData) {
  const users = {
    name,
    email,
    password,
  };

  return user;
}
