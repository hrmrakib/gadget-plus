const products = [
  {
    title: "Apple MacBook Pro 14",
    img: "https://example.com/macbookpro14.jpg",
    price: 1999,
    color: "Space Gray",
    description:
      "The MacBook Pro 14 features the powerful M1 Pro chip, delivering excellent performance for professionals. It has a 14-inch Liquid Retina XDR display and up to 17 hours of battery life.",
    brand: "Apple",
    category: "Laptop",
  },
  {
    title: "Dell XPS 13",
    img: "https://example.com/dellxps13.jpg",
    price: 1499,
    color: "Platinum Silver",
    description:
      "Dell XPS 13 is a premium ultrabook with a nearly bezel-less 13.4-inch display. It offers Intel's latest processors, stunning visuals, and all-day battery life, perfect for on-the-go professionals.",
    brand: "Dell",
    category: "Laptop",
  },
  {
    title: "HP Envy 15",
    img: "https://example.com/hpenvy15.jpg",
    price: 1249,
    color: "Nightfall Black",
    description:
      "The HP Envy 15 is a high-performance laptop with a sleek design. It comes with powerful Intel processors, a Full HD display, and advanced security features like a fingerprint reader.",
    brand: "HP",
    category: "Laptop",
  },
  {
    title: "Lenovo ThinkPad X1 Carbon",
    img: "https://example.com/thinkpadx1carbon.jpg",
    price: 1599,
    color: "Black",
    description:
      "The Lenovo ThinkPad X1 Carbon is a business laptop known for its durability and performance. It has a lightweight carbon-fiber body, an Intel Core i7 processor, and a 14-inch display.",
    brand: "Lenovo",
    category: "Laptop",
  },
  {
    title: "Asus ZenBook 14",
    img: "https://example.com/asuszenbook14.jpg",
    price: 999,
    color: "Royal Blue",
    description:
      "The Asus ZenBook 14 is an ultralight, portable laptop with a stunning design. It features a NanoEdge display, AMD Ryzen processors, and up to 22 hours of battery life, ideal for productivity.",
    brand: "Asus",
    category: "Laptop",
  },
  {
    title: "Apple iPhone 15 Pro",
    img: "https://example.com/iphone15pro.jpg",
    price: 1099,
    color: "Graphite",
    description:
      "The iPhone 15 Pro offers incredible speed with the A16 Bionic chip and a ProMotion 120Hz display. Its triple-camera system delivers high-quality photos and videos, ideal for professionals and creatives.",
    brand: "Apple",
    category: "iPhone",
  },
  {
    title: "Samsung Galaxy S23 Ultra",
    img: "https://example.com/galaxys23ultra.jpg",
    price: 1199,
    color: "Phantom Black",
    description:
      "The Galaxy S23 Ultra features a stunning 6.8-inch AMOLED display, 108MP camera, and Snapdragon 8 Gen 2 chip. It's designed for users who want the best in smartphone performance and photography.",
    brand: "Samsung",
    category: "iPhone",
  },
  {
    title: "Google Pixel 7 Pro",
    img: "https://example.com/pixel7pro.jpg",
    price: 899,
    color: "Stormy Black",
    description:
      "Google Pixel 7 Pro features the Tensor G2 chip, advanced AI-powered photography, and a 6.7-inch OLED display. It’s built for Google fans who value the best software integration and camera performance.",
    brand: "Google",
    category: "iPhone",
  },
  {
    title: "OnePlus 11",
    img: "https://example.com/oneplus11.jpg",
    price: 799,
    color: "Titan Black",
    description:
      "OnePlus 11 comes with the powerful Snapdragon 8 Gen 2, a 120Hz Fluid AMOLED display, and fast charging. This flagship offers a balanced blend of performance, design, and camera quality.",
    brand: "OnePlus",
    category: "iPhone",
  },
  {
    title: "Sony Xperia 5 IV",
    img: "https://example.com/xperia5iv.jpg",
    price: 999,
    color: "Green",
    description:
      "Sony Xperia 5 IV is a powerful smartphone with a 6.1-inch OLED display and a triple-camera system. It’s perfect for media enthusiasts, offering a 120Hz refresh rate and 21:9 aspect ratio for cinematic viewing.",
    brand: "Sony",
    category: "iPhone",
  },
  {
    title: "Apple Watch Series 8",
    img: "https://example.com/applewatchseries8.jpg",
    price: 399,
    color: "Midnight",
    description:
      "The Apple Watch Series 8 comes with advanced health tracking, including blood oxygen monitoring, ECG, and sleep tracking. Its always-on Retina display and waterproof design make it great for fitness lovers.",
    brand: "Apple",
    category: "Watch",
  },
  {
    title: "Samsung Galaxy Watch 5",
    img: "https://example.com/galaxywatch5.jpg",
    price: 329,
    color: "Silver",
    description:
      "Samsung Galaxy Watch 5 features an improved BioActive sensor for better health tracking. It has a sleek, durable design with a long-lasting battery, making it ideal for health-conscious users and tech enthusiasts.",
    brand: "Samsung",
    category: "Watch",
  },
  {
    title: "Garmin Forerunner 955",
    img: "https://example.com/forerunner955.jpg",
    price: 499,
    color: "Black",
    description:
      "Garmin Forerunner 955 is a premium GPS running smartwatch that offers advanced performance tracking, heart rate monitoring, and offline music storage. It's perfect for serious runners and athletes.",
    brand: "Garmin",
    category: "Watch",
  },
  {
    title: "Fitbit Sense 2",
    img: "https://example.com/fitbitsense2.jpg",
    price: 299,
    color: "Lunar White",
    description:
      "Fitbit Sense 2 is designed for comprehensive health tracking, including heart rate, stress monitoring, and sleep analysis. Its sleek design and long battery life make it a great choice for health-focused individuals.",
    brand: "Fitbit",
    category: "Watch",
  },
  {
    title: "Xiaomi Mi Watch",
    img: "https://example.com/miwatch.jpg",
    price: 149,
    color: "Black",
    description:
      "The Xiaomi Mi Watch offers a vibrant AMOLED display and comprehensive health tracking, including heart rate, SpO2, and sleep monitoring. It also features built-in GPS and a long-lasting battery for fitness enthusiasts.",
    brand: "Xiaomi",
    category: "Watch",
  },
  {
    title: "Sony WH-1000XM5",
    img: "https://example.com/sonywh1000xm5.jpg",
    price: 399,
    color: "Black",
    description:
      "The Sony WH-1000XM5 offers industry-leading noise cancellation and immersive sound quality. These over-ear headphones are perfect for travelers and audiophiles, offering up to 30 hours of battery life.",
    brand: "Sony",
    category: "Headphone",
  },
  {
    title: "Bose QuietComfort 45",
    img: "https://example.com/boseqc45.jpg",
    price: 329,
    color: "White Smoke",
    description:
      "Bose QuietComfort 45 headphones deliver world-class noise cancellation and deep, clear sound. They’re lightweight and comfortable, making them perfect for long listening sessions or travel.",
    brand: "Bose",
    category: "Headphone",
  },
  {
    title: "Apple AirPods Max",
    img: "https://example.com/airpodsmax.jpg",
    price: 549,
    color: "Space Gray",
    description:
      "Apple's AirPods Max are premium over-ear headphones with active noise cancellation and spatial audio. With an elegant design and superior sound quality, they offer up to 20 hours of battery life, ideal for immersive listening.",
    brand: "Apple",
    category: "Headphone",
  },
  {
    title: "Sennheiser HD 660S",
    img: "https://example.com/sennheiserhd660s.jpg",
    price: 499,
    color: "Black",
    description:
      "Sennheiser HD 660S are high-performance open-back headphones designed for audiophiles. They deliver precise, natural sound and are perfect for critical listening, offering long-term comfort for extended use.",
    brand: "Sennheiser",
    category: "Headphone",
  },
  {
    title: "Jabra Elite 85h",
    img: "https://example.com/jabraelite85h.jpg",
    price: 249,
    color: "Titanium Black",
    description:
      "Jabra Elite 85h provides intelligent active noise cancellation and exceptional sound quality. These headphones are great for travel, with a long-lasting battery and a water-resistant design.",
    brand: "Jabra",
    category: "Headphone",
  },
  {
    title: "JBL Charge 5",
    img: "https://example.com/jblcharge5.jpg",
    price: 179,
    color: "Black",
    description:
      "JBL Charge 5 is a portable Bluetooth speaker with powerful sound and built-in power bank functionality. Its rugged design and long battery life make it perfect for outdoor use and parties.",
    brand: "JBL",
    category: "Speaker",
  },
  {
    title: "Bose SoundLink Revolve+ II",
    img: "https://example.com/bosesoundlinkrevolve2.jpg",
    price: 329,
    color: "Triple Black",
    description:
      "Bose SoundLink Revolve+ II offers deep, immersive 360-degree sound. Its portable, durable design makes it ideal for outdoor use, while the battery provides up to 17 hours of playtime for long listening sessions.",
    brand: "Bose",
    category: "Speaker",
  },
  {
    title: "Sonos Move",
    img: "https://example.com/sonosmove.jpg",
    price: 399,
    color: "Lunar White",
    description:
      "Sonos Move is a smart speaker with Wi-Fi and Bluetooth capabilities, offering rich, powerful sound. Its weather-resistant design makes it perfect for both indoor and outdoor use, with up to 11 hours of battery life.",
    brand: "Sonos",
    category: "Speaker",
  },
  {
    title: "Ultimate Ears MEGABOOM 3",
    img: "https://example.com/uemegaboom3.jpg",
    price: 199,
    color: "Night Black",
    description:
      "The Ultimate Ears MEGABOOM 3 delivers 360-degree sound and powerful bass. Its IP67 rating makes it waterproof and dustproof, ideal for outdoor adventures, while the battery lasts up to 20 hours.",
    brand: "Ultimate Ears",
    category: "Speaker",
  },
  {
    title: "Marshall Emberton",
    img: "https://example.com/marshallemberton.jpg",
    price: 149,
    color: "Black & Brass",
    description:
      "Marshall Emberton is a compact portable speaker that delivers rich, clear sound with deep bass. Its durable design, water resistance, and 20-hour battery life make it ideal for music lovers on the go.",
    brand: "Marshall",
    category: "Speaker",
  },
  {
    title: "Apple AirPods Pro 2",
    img: "https://example.com/airpodspro2.jpg",
    price: 249,
    color: "White",
    description:
      "The AirPods Pro 2 features active noise cancellation, spatial audio, and a comfortable in-ear design. It delivers rich sound with Adaptive EQ and offers up to 6 hours of battery life on a single charge.",
    brand: "Apple",
    category: "Airpod",
  },
  {
    title: "Samsung Galaxy Buds 2 Pro",
    img: "https://example.com/galaxybuds2pro.jpg",
    price: 229,
    color: "Graphite",
    description:
      "Samsung Galaxy Buds 2 Pro offer active noise cancellation, 24-bit Hi-Fi sound, and a comfortable fit. These wireless earbuds are ideal for those looking for premium audio quality in a compact form.",
    brand: "Samsung",
    category: "Airpod",
  },
  {
    title: "Sony WF-1000XM4",
    img: "https://example.com/sonywf1000xm4.jpg",
    price: 279,
    color: "Black",
    description:
      "Sony WF-1000XM4 provides exceptional sound quality with industry-leading noise cancellation. These wireless earbuds offer a snug fit, long battery life, and are ideal for audiophiles who prefer compact headphones.",
    brand: "Sony",
    category: "Airpod",
  },
  {
    title: "Jabra Elite 7 Pro",
    img: "https://example.com/jabraelite7pro.jpg",
    price: 199,
    color: "Titanium Black",
    description:
      "Jabra Elite 7 Pro features advanced noise cancellation, excellent call quality, and a secure fit. These wireless earbuds are perfect for professionals who need reliable audio and clear communication on the go.",
    brand: "Jabra",
    category: "Airpod",
  },
  {
    title: "Beats Fit Pro",
    img: "https://example.com/beatsfitpro.jpg",
    price: 199,
    color: "Sage Gray",
    description:
      "Beats Fit Pro provides high-performance sound with noise cancellation and spatial audio. The secure-fit wingtips make them great for workouts and daily use, delivering up to 6 hours of playback on a charge.",
    brand: "Beats",
    category: "Airpod",
  },
];
