export const hotelsData = [
  {
    id: 1,
    title: "Adler Planetarium",
    permalink: "#",
    location: "Chicago,US",
    rating: 4.8,
    utils: {
      bed: 2,
      bath: 2,
    },
    price: "544",
    images: [
      "/images/hotels/img-1.jpg",
      "/images/hotels/img-2.jpg",
      "/images/hotels/img-3.jpg",
      "/images/hotels/img-4.jpg",
      "/images/hotels/img-5.jpg",
      "/images/hotels/img-6.jpg",
    ],
  },
  {
    id: 2,
    title: "Adler Planetarium",
    permalink: "#",
    location: "Chicago,US",
    rating: 4.8,
    utils: {
      bed: 2,
      bath: 2,
    },
    price: "544",
    images: [
      "/images/hotels/img-1.jpg",
      "/images/hotels/img-2.jpg",
      "/images/hotels/img-3.jpg",
      "/images/hotels/img-4.jpg",
      "/images/hotels/img-5.jpg",
      "/images/hotels/img-6.jpg",
    ],
  },
  {
    id: 3,
    title: "Adler Planetarium",
    permalink: "#",
    location: "Chicago,US",
    rating: 4.8,
    utils: {
      bed: 2,
      bath: 2,
    },
    price: "544",
    images: [
      "/images/hotels/img-1.jpg",
      "/images/hotels/img-2.jpg",
      "/images/hotels/img-3.jpg",
      "/images/hotels/img-4.jpg",
      "/images/hotels/img-5.jpg",
      "/images/hotels/img-6.jpg",
    ],
  },
];

export type Hotel = (typeof hotelsData)[number];
