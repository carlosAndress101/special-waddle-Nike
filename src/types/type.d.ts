
export interface Links {
  href: string, label: string
}

export interface Shoes {
  thumbnail: string, bigShoe: string
}

export interface Statistics {
  value: string, label: string
}

export interface Products {
  imgURL: string
  name: string
  price: string
}

export interface Services {
  imgURL: string
  label: string
  subtext: string
}

export interface Reviews {
  imgURL: string
  customerName: string
  rating: number
  feedback: string
}

interface ObjLinks {
  name: string
  link: string
  
}

export interface FooterLinks {
  title: string,
  links:ObjLinks[]
}

export interface SocialMedia {
  src: string, alt: string
}