import propertiesDetails from './propertiesDetails';
import LodhaImg from '../assets/LP6.png';
const developers = [
   {
    name: 'Lodha Amara',
    properties: [
      {
        id: 1,
        image: LodhaImg, 
        address: 'Lodha Amara, Kolshet Road, Thane West, Thane, Maharashtra 400607',
        price: '₹1.10 Cr - ₹2.75 Cr',
        description:
          'Lodha Amara, situated in prime central Thane, offers a luxurious lifestyle with a 2-acre private forest, grand sports arena, and 25,000 sq.ft. clubhouse. Enjoy a vibrant community and seamless connectivity to Mumbai.',
        beds: '2-3',
        baths: '2-3',
        sqft: '750-1100',
        details: propertiesDetails.lodhaAmara,
      },
    ],
  },
  /*{
    name: 'Godrej Ascend',
    properties: [
      {
        id: 2,
        image: 'https://www.godrejproperties.com/digitalcollaterals/mumbai/ascend/images/ariseImages/6.jpg',
        address: 'Godrej Ascend, Kolshet Road, Thane West, Mumbai - 400607',
        price: '₹0.98 Cr - ₹2.96 Cr',
        description:
          'Godrej Ascend offers spacious 1 to 3 BHK residences across 6.5 acres in Thane, featuring 45+ amenities, a Sky Sports Arena, and panoramic views. Experience luxury living with excellent connectivity.',
        beds: '1-3',
        baths: '1-3',
        sqft: '407-1010',
        details: propertiesDetails.godrejAscend,
      },
    ],
  },*/
];

export { developers };