export interface ResultApi {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface Persons {
  id: number;
  name: string;
  description: string;
  image: string;
}
