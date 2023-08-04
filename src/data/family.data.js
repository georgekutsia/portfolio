const randomWords = [
  // {
  //   name: "MARCEL",
  //   img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690844391/portfolio/oscaryoliver/familia/marcel_voajc5.jpg",
  // },
  // {
  //   name: "MARIO",
  //   img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690844391/portfolio/oscaryoliver/familia/mario_rn0udu.jpg",
  // },
  // {
  //   name: "DANI",
  //   img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690844391/portfolio/oscaryoliver/familia/daniel_rvaqd2.jpg",
  // },
  {
    id:1,
    name: "EVEREST",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_19_wvr0lb.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:2,
    name: "MARSHAL",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_17_gybgh5.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:3,
    name: "CHASE",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_20_bwruhp.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:4,
    name: "RUBBLE",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_18_omew5q.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:5,
    name: "ZUMA",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850246/portfolio/oscaryoliver/familia/pngwing.com_22_lqnz1l.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:6,
    name: "ROCKY",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850246/portfolio/oscaryoliver/familia/pngwing.com_23_pxtdh8.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:7,
    name: "RIDER",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850246/portfolio/oscaryoliver/familia/pngwing.com_16_whsthj.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:8,
    name: "SKY",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850464/portfolio/oscaryoliver/familia/pngwing.com_21_otfofg.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:9,
    name: "EVEREST",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_19_wvr0lb.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:10,
    name: "MARSHAL",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_17_gybgh5.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:11,
    name: "CHASE",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_20_bwruhp.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:12,
    name: "RUBBLE",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850243/portfolio/oscaryoliver/familia/pngwing.com_18_omew5q.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:13,
    name: "ZUMA",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850246/portfolio/oscaryoliver/familia/pngwing.com_22_lqnz1l.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:14,
    name: "ROCKY",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850246/portfolio/oscaryoliver/familia/pngwing.com_23_pxtdh8.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:15,
    name: "RIDER",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850246/portfolio/oscaryoliver/familia/pngwing.com_16_whsthj.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
  {
    id:16,
    name: "SKY",
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1690850464/portfolio/oscaryoliver/familia/pngwing.com_21_otfofg.png",
    backImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020178/portfolio/oscaryoliver/familia/paw_xtdxbr.webp",
    winImg:"https://res.cloudinary.com/dxnzcewsy/image/upload/v1691020353/portfolio/oscaryoliver/familia/chicken_rjjlnd.png"
  },
];

export default randomWords