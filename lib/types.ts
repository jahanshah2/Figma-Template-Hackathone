export interface Iproducts {
  _id: string;
  image: string;
  productName: string;
  price: number;
  colors: [];
  description: string;
  category: string;
  status: string;
  quantity: number;
}

export interface IAllProductCardProps {
  image: string;
  just: string;
  tittle: string;
  category: string;
  availableColors: number | string;
  price: number;
}

export interface IEssentialsCardProps {
  image: string;
  buttonName: string;
}

export interface IGearUpCardProps {
  image: string;
  tittle: string;
  category: string;
  price: number;
}

export interface IImageCardProps {
  image: string;
  tittle: string;
  category: string;
  price: number;
}

export interface IParams {
  params: { slug: string };
}

interface UserInfo {
  id: string;
  name: string;
  email: string;
}
export interface StoreState {
  nike: { 
    cart:Iproducts[];
    wishList:Iproducts[];
    userInfo:UserInfo | null;
   };
}


