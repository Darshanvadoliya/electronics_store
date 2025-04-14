const product =[
  {
    "id": 1,
    "name": "Smartphone X200",
    "category": "Smartphones",
    "brand": "TechNova",
    "price": 57999,
    "stock": 25,
    "description": "6.5-inch AMOLED display, 128GB storage, triple-lens camera.",
    "image_url": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "id": 2,
    "name": "4K Ultra HD Smart TV 55\"",
    "category": "Televisions",
    "brand": "VisionPlus",
    "price": 42999,
    "stock": 10,
    "description": "55-inch screen, HDR10 support, built-in streaming apps.",
    "image_url": "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "id": 3,
    "name": "Bluetooth Wireless Earbuds",
    "category": "Audio",
    "brand": "SoundRush",
    "price": 3499,
    "stock": 150,
    "description": "Noise-cancelling earbuds with 24-hour battery life.",
    "image_url": "https://m.media-amazon.com/images/I/71+BBZBBT2L.jpg"
  },
  {
    "id": 4,
    "name": "Gaming Laptop GX500",
    "category": "Laptops",
    "brand": "PowerCore",
    "price": 98999,
    "stock": 7,
    "description": "Intel i7, RTX 4060, 16GB RAM, 1TB SSD.",
    "image_url": "https://as2.ftcdn.net/v2/jpg/07/48/51/51/1000_F_748515102_p0UNMyTxdIXsJHJwyd43nH9bnM5SODU4.webp"
  },
  {
    "id": 5,
    "name": "Smartwatch Pro S3",
    "category": "Wearables",
    "brand": "TimeTrack",
    "price": 15499,
    "stock": 32,
    "description": "Fitness tracking, heart rate monitor, GPS.",
    "image_url": "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
  },
  {
    "id": 6,
    "name": "Wireless Router AX5400",
    "category": "Networking",
    "brand": "NetGo",
    "price": 7499,
    "stock": 18,
    "description": "Wi-Fi 6, dual-band, up to 5.4Gbps.",
    "image_url": "https://images.pexels.com/photos/1447881/pexels-photo-1447881.jpeg"
  },
  {
    "id": 7,
    "name": "Portable Bluetooth Speaker",
    "category": "Audio",
    "brand": "BoomBox",
    "price": 2899,
    "stock": 60,
    "description": "Waterproof, 12-hour playtime, deep bass.",
    "image_url": "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw979f5fbe/JBL_GO_4_3_4_LEFT_BLUE_48173_x1.png?sw=535&sh=535"
  },
  {
    "id": 8,
    "name": "External Hard Drive 2TB",
    "category": "Storage",
    "brand": "DataVault",
    "price": 5999,
    "stock": 40,
    "description": "USB 3.1, compact design, 2TB capacity.",
    "image_url": "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
  },
  {
    "id": 9,
    "name": "DSLR Camera Z500",
    "category": "Cameras",
    "brand": "PhotoSharp",
    "price": 74999,
    "stock": 6,
    "description": "24MP sensor, 4K video, interchangeable lens.",
    "image_url": "https://images.pexels.com/photos/340874/pexels-photo-340874.jpeg"
  },
  {
    "id": 10,
    "name": "Electric Toothbrush E1",
    "category": "Health",
    "brand": "SmileBright",
    "price": 2999,
    "stock": 50,
    "description": "Smart pressure sensor, 3 brushing modes.",
    "image_url": "https://images.pexels.com/photos/4015106/pexels-photo-4015106.jpeg"
  },
  {
    "id": 11,
    "name": "Noise Cancelling Headphones",
    "category": "Audio",
    "brand": "SilentBeats",
    "price": 6999,
    "stock": 45,
    "description": "Active noise cancelling, 30-hour battery.",
    "image_url": "https://m.media-amazon.com/images/I/51rpbVmi9XL._AC_SX148_SY213_QL70_.jpg"
  },
  {
    "id": 12,
    "name": "Robot Vacuum Cleaner S8",
    "category": "Home Appliances",
    "brand": "CleanMate",
    "price": 18999,
    "stock": 20,
    "description": "Smart navigation, 2-in-1 vacuum and mop.",
    "image_url": "https://images.pexels.com/photos/1656676/pexels-photo-1656676.jpeg"
  },
  {
    "id": 13,
    "name": "Smart Security Camera",
    "category": "Cameras",
    "brand": "SecureView",
    "price": 8999,
    "stock": 25,
    "description": "1080p resolution, motion detection, night vision.",
    "image_url": "https://images.pexels.com/photos/1625985/pexels-photo-1625985.jpeg"
  },
  {
    "id": 14,
    "name": "Apple AirPods Pro",
    "category": "Audio",
    "brand": "Apple",
    "price": 24999,
    "stock": 15,
    "description": "Active noise cancellation, spatial audio.",
    "image_url": "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/11/01/fca6da0e-fc77-11e9-acf9-cafedce87d15_image_hires_154757.jpg?itok=hSjvc9Mm&v=1572594484"
  },
  {
    "id": 15,
    "name": "Smartphone Z500",
    "category": "Smartphones",
    "brand": "GalaxyCore",
    "price": 49999,
    "stock": 30,
    "description": "6.1-inch OLED display, Snapdragon 888, 128GB storage.",
    "image_url": "https://images.pexels.com/photos/1591066/pexels-photo-1591066.jpeg"
  },
  {
    "id": 16,
    "name": "Wireless Charging Pad",
    "category": "Accessories",
    "brand": "ChargeIt",
    "price": 1799,
    "stock": 120,
    "description": "Fast charging, compatible with Qi devices.",
    "image_url": "https://images.pexels.com/photos/2676064/pexels-photo-2676064.jpeg"
  },
  {
    "id": 17,
    "name": "Smart Home Thermostat",
    "category": "Home Appliances",
    "brand": "EcoTemp",
    "price": 7999,
    "stock": 22,
    "description": "Wi-Fi enabled, voice control, energy saving.",
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PGij3wEg0XcmymxXhdKU_PDA7J55I4VySA&s"
  },
  {
    "id": 18,
    "name": "Gaming Headset Z200",
    "category": "Audio",
    "brand": "RazerCore",
    "price": 4999,
    "stock": 40,
    "description": "Surround sound, noise-canceling microphone.",
    "image_url": "https://images.pexels.com/photos/3664264/pexels-photo-3664264.jpeg"
  },
  {
    "id": 19,
    "name": "Electric Kettle 1.7L",
    "category": "Home Appliances",
    "brand": "KettleKing",
    "price": 1499,
    "stock": 75,
    "description": "Boil dry protection, automatic shut-off.",
    "image_url": "https://images.pexels.com/photos/3578921/pexels-photo-3578921.jpeg"
  },
  {
    "id": 20,
    "name": "LED Desk Lamp with USB Charger",
    "category": "Home Appliances",
    "brand": "LightFlow",
    "price": 1999,
    "stock": 50,
    "description": "Adjustable brightness, built-in USB charging port.",
    "image_url": "https://images.pexels.com/photos/2764935/pexels-photo-2764935.jpeg"
  },
  {
    "id": 21,
    "name": "4K Action Camera Pro",
    "category": "Cameras",
    "brand": "ActionX",
    "price": 12999,
    "stock": 18,
    "description": "4K video recording, waterproof up to 30 meters.",
    "image_url": "https://images.pexels.com/photos/278543/pexels-photo-278543.jpeg"
  },
  {
    "id": 22,
    "name": "Smart Door Lock",
    "category": "Home Appliances",
    "brand": "SecureHome",
    "price": 14999,
    "stock": 10,
    "description": "Keyless entry, remote access, Bluetooth enabled.",
    "image_url": "https://images.pexels.com/photos/4503004/pexels-photo-4503004.jpeg"
  },
  {
    "id": 23,
    "name": "Portable Air Conditioner",
    "category": "Home Appliances",
    "brand": "CoolBreeze",
    "price": 29999,
    "stock": 5,
    "description": "Mobile AC unit, energy-efficient, remote control.",
    "image_url": "https://images.pexels.com/photos/2932961/pexels-photo-2932961.jpeg"
  },
  {
    "id": 24,
    "name": "Smartphone Charger 20W",
    "category": "Accessories",
    "brand": "ChargePro",
    "price": 899,
    "stock": 200,
    "description": "Fast charging for compatible smartphones.",
    "image_url": "https://images.pexels.com/photos/2381183/pexels-photo-2381183.jpeg"
  },
  {
    "id": 25,
    "name": "Mini Bluetooth Speaker",
    "category": "Audio",
    "brand": "JBL",
    "price": 1299,
    "stock": 300,
    "description": "Compact, 10-hour battery life, waterproof.",
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LlxXcZvOojf65ouXEL9XNFQ39XO3ExJg9w&s"
  },
  {
    "id": 26,
    "name": "Smart Glasses V2",
    "category": "Wearables",
    "brand": "SmartView",
    "price": 24999,
    "stock": 20,
    "description": "AR features, Bluetooth connectivity, hands-free calls.",
    "image_url": "https://images.pexels.com/photos/38514/pexels-photo-38514.jpeg"
  },
  {
    "id": 27,
    "name": "Laptop Cooling Pad",
    "category": "Accessories",
    "brand": "CoolTech",
    "price": 899,
    "stock": 120,
    "description": "Dual fans, ergonomic design, portable.",
    "image_url": "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
  },
  {
    "id": 28,
    "name": "VR Headset Pro",
    "category": "Wearables",
    "brand": "Visionary",
    "price": 24999,
    "stock": 12,
    "description": "High-resolution display, 6DOF, immersive experience.",
    "image_url": "https://images.pexels.com/photos/3613647/pexels-photo-3613647.jpeg"
  },
  {
    "id": 29,
    "name": "Smartwatch X1",
    "category": "Wearables",
    "brand": "FitTech",
    "price": 12999,
    "stock": 50,
    "description": "Touchscreen, fitness tracking, sleep monitoring.",
    "image_url": "https://cdn.shopify.com/s/files/1/0564/9652/1403/files/X1Pro-Black_1_300x@2x.jpg?v=1743044903"
  },
  {
    "id": 30,
    "name": "Laptop Sleeve 15-inch",
    "category": "Accessories",
    "brand": "TechGuard",
    "price": 1299,
    "stock": 100,
    "description": "Protective sleeve for laptops, water-resistant.",
    "image_url": "https://images.pexels.com/photos/1395361/pexels-photo-1395361.jpeg"
  },
  {
    "id": 31,
    "name": "Bluetooth Car Adapter",
    "category": "Car Electronics",
    "brand": "CarLink",
    "price": 1499,
    "stock": 80,
    "description": "Hands-free calling, music streaming, fast charging.",
    "image_url": "https://images.pexels.com/photos/1661632/pexels-photo-1661632.jpeg"
  },
  {
    "id": 32,
    "name": "Smart Thermostat Pro",
    "category": "Home Appliances",
    "brand": "ClimateTech",
    "price": 16999,
    "stock": 15,
    "description": "Energy-saving, voice control, temperature scheduling.",
    "image_url": "https://images.ctfassets.net/a3qyhfznts9y/1TvNvrRvIg257qyUeoGP35/b411d56ab4b9de477b547f27444f966e/Canada_Ares_hero_mobile.jpg?w=1200&h=1200&fl=progressive&q=80&fm=jpg"
  },
  {
    "id": 33,
    "name": "Wi-Fi Mesh System",
    "category": "Networking",
    "brand": "NetMesh",
    "price": 16999,
    "stock": 20,
    "description": "3-pack mesh routers, seamless coverage.",
    "image_url": "https://images.pexels.com/photos/2759456/pexels-photo-2759456.jpeg"
  },
  {
    "id": 34,
    "name": "Smartphone Stand",
    "category": "Accessories",
    "brand": "StandPro",
    "price": 799,
    "stock": 150,
    "description": "Adjustable height, foldable, lightweight.",
    "image_url": "https://deq64r0ss2hgl.cloudfront.net/images/product/metal-universal-mobile-stand-32076986047604.jpg"
  },
  {
    "id": 35,
    "name": "Portable Charger 10000mAh",
    "category": "Accessories",
    "brand": "PowerPack",
    "price": 1599,
    "stock": 200,
    "description": "Fast charging, multiple ports, compact.",
    "image_url": "https://images.pexels.com/photos/3805573/pexels-photo-3805573.jpeg"
  },
  {
    "id": 36,
    "name": "Electric Wine Opener",
    "category": "Home Appliances",
    "brand": "VinoPro",
    "price": 2499,
    "stock": 50,
    "description": "Cordless, automatic, easy cork removal.",
    "image_url": "https://www.liquor.com/thmb/Xc5LdgJK7_AeNOznupgRzyMIusc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wine_Openers_Group_02-f230e792ef2248129422b9bd043dfa75-473625a93dd14e7ba6b4002d427f512a.jpeg"
  },
  {
    "id": 37,
    "name": "Smart Air Purifier",
    "category": "Home Appliances",
    "brand": "CleanAir",
    "price": 14999,
    "stock": 10,
    "description": "HEPA filter, Wi-Fi control, 3 fan speeds.",
    "image_url": "https://electronicparadise.in/cdn/shop/files/6_42c69e56-5a9d-4f6a-afc2-a8016ec3e4d5.webp?v=1730790630&width=1214"
  },
  {
    "id": 38,
    "name": "Home Theater System",
    "category": "Audio",
    "brand": "HomeSound",
    "price": 29999,
    "stock": 8,
    "description": "5.1 channel, wireless subwoofer, Bluetooth streaming.",
    "image_url": "https://images.pexels.com/photos/1679565/pexels-photo-1679565.jpeg"
  },
  {
    "id": 39,
    "name": "Car Dashboard Camera",
    "category": "Car Electronics",
    "brand": "DriveSafe",
    "price": 8999,
    "stock": 25,
    "description": "1080p HD recording, loop recording, night vision.",
    "image_url": "https://images.pexels.com/photos/1661416/pexels-photo-1661416.jpeg"
  },
  {
    "id": 40,
    "name": "Smart Power Strip",
    "category": "Home Appliances",
    "brand": "SmartPower",
    "price": 1299,
    "stock": 100,
    "description": "Voice control, energy monitoring, surge protection.",
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfORFMo1XbsXLd3AsZ7w9XQBAZw4K4aTLCBA&s"
  },
  {
    "id": 41,
    "name": "Fitness Tracker Band",
    "category": "Wearables",
    "brand": "FitBand",
    "price": 3999,
    "stock": 85,
    "description": "Steps tracking, heart rate monitor, sleep tracking.",
    "image_url": "https://5.imimg.com/data5/SELLER/Default/2021/1/YP/LY/FV/78305368/m4-fitness-band-500x500.png"
  },
  {
    "id": 42,
    "name": "Bluetooth Car Speakerphone",
    "category": "Car Electronics",
    "brand": "CarLink",
    "price": 1499,
    "stock": 75,
    "description": "Hands-free calling, easy installation, compact.",
    "image_url": "https://images.pexels.com/photos/2932372/pexels-photo-2932372.jpeg"
  },
  {
    "id": 43,
    "name": "Smart Mirror with LED Lights",
    "category": "Home Appliances",
    "brand": "Reflecta",
    "price": 14999,
    "stock": 18,
    "description": "LED lighting, Bluetooth speaker, touch control.",
    "image_url": "https://images.pexels.com/photos/4072420/pexels-photo-4072420.jpeg"
  },
  {
    "id": 44,
    "name": "Portable Induction Cooktop",
    "category": "Home Appliances",
    "brand": "CookMaster",
    "price": 5999,
    "stock": 40,
    "description": "Energy-efficient, touch controls, portable.",
    "image_url": "https://images.pexels.com/photos/3019327/pexels-photo-3019327.jpeg"
  },
  {
    "id": 45,
    "name": "Smart Wi-Fi Plug",
    "category": "Home Appliances",
    "brand": "SmartPlug",
    "price": 999,
    "stock": 150,
    "description": "Voice control, energy-saving, scheduling.",
    "image_url": "https://images.pexels.com/photos/2674063/pexels-photo-2674063.jpeg"
  },
  {
    "id": 46,
    "name": "Electric Hand Blender",
    "category": "Home Appliances",
    "brand": "BlendTech",
    "price": 2499,
    "stock": 100,
    "description": "Multiple speed settings, detachable shaft.",
    "image_url": "https://m.media-amazon.com/images/I/6125JspgkCL.jpg"
  },
  {
    "id": 47,
    "name": "Electric Massage Gun",
    "category": "Health",
    "brand": "RelieveX",
    "price": 4999,
    "stock": 30,
    "description": "Multiple massage heads, adjustable speed.",
    "image_url": "https://images.pexels.com/photos/4066824/pexels-photo-4066824.jpeg"
  },
  {
    "id": 48,
    "name": "Smart Humidifier",
    "category": "Home Appliances",
    "brand": "BreatheEasy",
    "price": 3999,
    "stock": 40,
    "description": "App control, ultra-quiet operation, adjustable mist.",
    "image_url": "https://images.pexels.com/photos/4532558/pexels-photo-4532558.jpeg"
  },
  {
    "id": 49,
    "name": "Electric Pressure Cooker",
    "category": "Home Appliances",
    "brand": "CookPro",
    "price": 8999,
    "stock": 30,
    "description": "Multiple cooking programs, 6L capacity.",
    "image_url": "https://m.media-amazon.com/images/I/710KoJMG2lL.jpg"
  },
  {
    "id": 50,
    "name": "Smart LED Strip Lights",
    "category": "Home Appliances",
    "brand": "LightUp",
    "price": 2499,
    "stock": 50,
    "description": "RGB, Wi-Fi control, adjustable brightness.",
    "image_url": "https://images.pexels.com/photos/4083849/pexels-photo-4083849.jpeg"
  }
]



export default product;
  