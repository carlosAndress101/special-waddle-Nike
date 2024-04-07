
import { facebook, instagram, twitter } from "../assets";
import { Links, Statistics, FooterLinks, SocialMedia } from "../types/type";

export const navLinks: Links[] = [
  { href: "#home", label: "Home"},
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
]


export const statistics: Statistics[] = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const footerLinks: FooterLinks[] = [
  {
      title: "Products",
      links: [
          { name: "Air Force 1", link: "/" },
          { name: "Air Max 1", link: "/" },
          { name: "Air Jordan 1", link: "/" },
          { name: "Air Force 2", link: "/" },
          { name: "Nike Waffle Racer", link: "/" },
          { name: "Nike Cortez", link: "/" },
      ],
  },
  {
      title: "Help",
      links: [
          { name: "About us", link: "/" },
          { name: "FAQs", link: "/" },
          { name: "How it works", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
  },
  {
      title: "Get in touch",
      links: [
          { name: "customer@nike.com", link: "mailto:customer@nike.com" },
          { name: "+92554862354", link: "tel:+92554862354" },
      ],
  },
];

export const socialMedia: SocialMedia[] = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];