const db = require("./connection");
const { User, Product, Category, Order } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Edible", image: "edible.png" }, // 0
    { name: "CBD", image: "cbd.png" }, // 1
    { name: "Hookah", image: "hookah.png" }, //2
    { name: "Pens", image: "pen.png" }, //3
    { name: "Glass", image: "glass.png" }, //4
    { name: "Accessories", image: "accessories.png" }, //5
    { name: "Flower", image: "flower.png" }, //6
    { name: "Nootropics", image: "nootropic.png" }, //7
    { name: "Batteries", image: "batteries.png" }, //8
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "Space Cloud",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 20.0,
      quantity: 500,
      cloverId: "ZZRFHM84G16RA",
    },
    {
      name: "Eleaf Ijust S Kit Rainbow",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "VPFGVV1WXKGT6",
    },
    {
      name: "Eleaf Ijust X Kit Black",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "ZZRXHM84G16RA",
    },
    {
      name: "Wismec Theorem Rdta",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 24.99,
      quantity: 80,
      cloverId: "G300WYQM77DFE",
    },
    {
      name: "20700 21700 Battery",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 15.99,
      quantity: 80,
      cloverId: "NYJ3G9RA9939C",
    },
    {
      name: "Nic Packs",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 2.99,
      quantity: 80,
      cloverId: "A56DD6TZ5QFEC",
    },
    {
      name: "Blu Pods",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 9.99,
      quantity: 80,
      cloverId: "SVY7RJY3N3J20",
    },
    {
      name: "Rock 710",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 23.99,
      quantity: 80,
      cloverId: "SFRX4VAXKYHFW",
    },
    {
      name: "Aura",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 14.99,
      quantity: 80,
      cloverId: "K70RW0SR59Z5R",
    },
    {
      name: "Superlife preroll 10 count",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 27.99,
      quantity: 80,
      cloverId: "F8W85M4PEGB46",
    },
    {
      name: "Kijo shot",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 15.99,
      quantity: 80,
      cloverId: "8HG28CMN0T3DT",
    },
    {
      name: "Bliss Caps 1 Count",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 15.99,
      quantity: 80,
      cloverId: "5F7N3D2VDMX22",
    },
    {
      name: "Ej Mix Sample Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 14.99,
      quantity: 80,
      cloverId: "NVWBW4FAN41QP",
    },
    {
      name: "Ej Mix 15ml",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 16.99,
      quantity: 80,
      cloverId: "R8T7V7ZXB5TBG",
    },
    {
      name: "Ej Mix 50 Ml",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "83WDMZVDNBCVR",
    },
    {
      name: "7 Day Detox",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "TH44YMPVXE4SJ",
    },
    {
      name: "Vaporesso Nrg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "HKWBFKTBD8JSP",
    },
    {
      name: "Geekvape Pod System",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "16XK05EYZPN9J",
    },
    {
      name: "Raw Hemp Wick",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 3.99,
      quantity: 80,
      cloverId: "KQJPAW8S48WNA",
    },
    {
      name: "Exxus Vape",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "SBRHBSG8E94TY",
    },
    {
      name: "Daypipe Dry Herb",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "2XNSGBX66J25C",
    },
    {
      name: "Fuze Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "Q56MXRJR923YW",
    },
    {
      name: "Bmore Xtra Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "TBHZ53RE25MR2",
    },
    {
      name: "Small Hookah",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "78BMVN7K410Y0",
    },
    {
      name: "Aegolas Uwell",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "EQTHE611DQ2S8",
    },
    {
      name: "Splitter",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 1.99,
      quantity: 80,
      cloverId: "N8EYM13BGNZ04",
    },
    {
      name: "Red Dawn 4",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 8.99,
      quantity: 80,
      cloverId: "70393WW19AA6R",
    },
    {
      name: "Ooze Silicone Plus",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "60QF8ZJYFJVKW",
    },
    {
      name: "Ash Tray",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 4.99,
      quantity: 80,
      cloverId: "96ABCMPMD17WA",
    },
    {
      name: "Small Bags 100 Count",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 2.99,
      quantity: 80,
      cloverId: "0GPDWJAWZDP1Y",
    },
    {
      name: "Delta 8 Tincture 750mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "GEQZQH7EAGE0Y",
    },
    {
      name: "Delta 8 Tincture 1500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 74.99,
      quantity: 80,
      cloverId: "36WJ70224776R",
    },
    {
      name: "Delta 8 Tincture 2500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 99.99,
      quantity: 80,
      cloverId: "4SNB0KTMW17PR",
    },
    {
      name: "Snowwolf Pod Mod",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "T4H1HT7V70GXJ",
    },
    {
      name: "Snowwolf Pod Coils",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 2.99,
      quantity: 80,
      cloverId: "7E0DGDPJ1PVAT",
    },
    {
      name: "Tray Set",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "6DXH7X381STFT",
    },
    {
      name: "Hippo Scale",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "AZTGSNSJ60WZG",
    },
    {
      name: "Muscle Cream 500 Mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 59.99,
      quantity: 80,
      cloverId: "VVKD3RCHSK5JA",
    },
    {
      name: "Lit Kratom",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "MZHJPTEYWCMAG",
    },
    {
      name: "Diffuser",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "KQXE9CAE1V80C",
    },
    {
      name: "Aromar Scents",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 3.99,
      quantity: 80,
      cloverId: "Q69GE53JG78KT",
    },
    {
      name: "Rare Duo",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "54G5S2Y5G236W",
    },
    {
      name: "Sourin Ace Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "VRD75Z8JAJQFE",
    },
    {
      name: "O.P.M.S Gold 5 Count",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "9HZ140HRN7G8R",
    },
    {
      name: "Uwell Havok Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 59.99,
      quantity: 80,
      cloverId: "M22CF5J7KQ84T",
    },
    {
      name: "Whip It Chargers 50ct Brand Name",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 44.99,
      quantity: 80,
      cloverId: "K6PJ9GF9F010E",
    },
    {
      name: "Whip It Off Brand 50ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "V6TXF6NCN72MM",
    },
    {
      name: "Starwars Gas Mask",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "TMQ5F8NBSH7C8",
    },
    {
      name: "Bob Marley King",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 2.99,
      quantity: 80,
      cloverId: "KBYCKF4JBEVNR",
    },
    {
      name: "Smoke Buddy Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "AJDB4GP0Y53CE",
    },
    {
      name: "Opms 5 Count Extracts",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "VEV19HZNFSR92",
    },
    {
      name: "Ithor Cart Battery",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "798WJBNKYH1RY",
    },
    {
      name: "Backwoods/Cookies Scale",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 24.99,
      quantity: 80,
      cloverId: "PQEQDF108N8T0",
    },
    {
      name: "Ijoy Airgo Pod Device",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "M1M8TNERB87G2",
    },
    {
      name: "Delta 8 Vape Juice 1000mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "0KE1RC4WTFP32",
    },
    {
      name: "Delta 8 chips",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 24.99,
      quantity: 80,
      cloverId: "EM0JD6SGPSA4A",
    },
    {
      name: "Kk Candy Bar Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 5.99,
      quantity: 80,
      cloverId: "HGHBVQKB4BPZR",
    },
    {
      name: "Sludge Hammer 2.5 Gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[3]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "1AG0VKYHVKA00",
    },
    {
      name: "Vaporesso Gen S 18650 Starter Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 89.99,
      quantity: 80,
      cloverId: "WBGB2DDC9RBTR",
    },
    {
      name: "Delta 8 Cookies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "AEJKNHGD2BEY0",
    },
    {
      name: "Half Gram Hhc Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 24.99,
      quantity: 80,
      cloverId: "G300HTF1R2FH8",
    },
    {
      name: "Sea horse 2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "ERTT7X9D54SMM",
    },
    {
      name: "OilRecoveryKit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "KBWWM37V2R6FP",
    },
    {
      name: "Scales - $10",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 9.99,
      quantity: 80,
      cloverId: "CQVANT1BXP1FP",
    },
    {
      name: "Rare - D10 - LemonSlushy",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "PDMDT466QTHSJ",
    },
    {
      name: "Delta 8 Strips",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 19.99,
      quantity: 80,
      cloverId: "79PP7M4MGRCWG",
    },
    {
      name: "Dimo D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "1P4NBK2KDJ4ZE",
    },
    {
      name: "Dimo D8 Cart",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "4T5CGQ9YPRKBG",
    },
    {
      name: "Dimo D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "XG91FG9X61TKW",
    },
    {
      name: "Dimo D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "AG6K84QFC5WFY",
    },
    {
      name: "Dimo D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "308TYX4FEJTCA",
    },
    {
      name: "Full Send D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "H57K4MB2YW104",
    },
    {
      name: "Traphouse D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "7PX089QQ1J872",
    },
    {
      name: "Twist Pen",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 14.99,
      quantity: 80,
      cloverId: "AB3K8TC6N655M",
    },
    {
      name: "Original Hemp Tincture 250mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "JY4N7155BGXEP",
    },
    {
      name: "Hemplucid CBD Tincture 1000mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 59.99,
      quantity: 80,
      cloverId: "EWJC41JVNCQPW",
    },
    {
      name: "Elevate Kratom 30 Count",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 14.99,
      quantity: 80,
      cloverId: "2YJ8E9JCDREZ8",
    },
    {
      name: "Smok SPriv Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 99.99,
      quantity: 80,
      cloverId: "8XPVDGF36SJYE",
    },
    {
      name: "Smok SPriv Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 99.99,
      quantity: 80,
      cloverId: "GRT5FCYW82RXC",
    },
    {
      name: "Smok SPriv Box Mod",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 79.99,
      quantity: 80,
      cloverId: "JSEAFG7C8D04M",
    },
    {
      name: "Smok SPriv Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 99.99,
      quantity: 80,
      cloverId: "R1F9961582NYA",
    },
    {
      name: "Smok SPriv Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 99.99,
      quantity: 80,
      cloverId: "R1F9961582NYA",
    },
    {
      name: "Smok TPriv Mod",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 79.99,
      quantity: 80,
      cloverId: "M9TV2MVKRMKBC",
    },
    {
      name: "Kaos Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 89.99,
      quantity: 80,
      cloverId: "31ZSHD98H353C",
    },
    {
      name: "Smok SPriv Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 99.99,
      quantity: 80,
      cloverId: "KNH7D64500WGE",
    },
    {
      name: "iJoy Diamond",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 99.99,
      quantity: 80,
      cloverId: "8ZQ3W8T520EXJ",
    },
    {
      name: "Graffiti 200w",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 99.99,
      quantity: 80,
      cloverId: "P0RAW8Q96TRGW",
    },
    {
      name: "Mi Pod",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "X06PBE8FFZN74",
    },
    {
      name: "Exceed Grip",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "7Q0WE060JYDNT",
    },
    {
      name: "Drag X",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 49.99,
      quantity: 80,
      cloverId: "C8G513G8B16M8",
    },
    {
      name: "Drag Nano 2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "W8JJDCKTCYEJT",
    },
    {
      name: "Uwell Aeglos",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 59.99,
      quantity: 80,
      cloverId: "BMB0PDDZ7GB36",
    },
    {
      name: "Smok GPriv Pod Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 69.99,
      quantity: 80,
      cloverId: "CE0FQAMM87620",
    },
    {
      name: "Smok Nord4 80w Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 69.99,
      quantity: 80,
      cloverId: "8QG7X5JREKEVR",
    },
    {
      name: "Suorin Drop",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
      cloverId: "SBS89RZ6CAFG2",
    },
    {
      name: "Smok Fetch",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
      cloverId: "DNG0C03PVM2RP",
    },
    {
      name: "Smok Novo2S",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "ZYKEXFJ7ZNXJ6",
    },
    {
      name: "Smok Novo 2S",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "SWHBM7SCPB3AW",
    },
    {
      name: "iThor Cart Battery",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
      cloverId: "8MJ3BJ055FDQJ",
    },
    {
      cloverId: "JHHX25BK77HYJ",
      name: "Twist Battery",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "VKEFZP5PC6G0T",
      name: "Koko A2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "3RPACPRCDA0XM",
      name: "Koko A2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "1VWR7HN2DPZ3J",
      name: "Suorin Ace",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "7ECRMAQ8RVXYY",
      name: "Freemax Onix 2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "A02Q7ZBPJ4BBY",
      name: "Xros Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "9J4T4S5AYM618",
      name: "Xros 2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "GDEDRGZB959ME",
      name: "Vthru Pro",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "MBNSQXKJ5G2BG",
      name: "Vthru Pro",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "K2Q2DE9TN6R3M",
      name: "Vthru Pro",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "D03E33D9NRJ1M",
      name: "Zero",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "763DAYTK35P66",
      name: "Zero",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "G0QPTCPYDEMZC",
      name: "Zero",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "XZY7BDQVG0QW8",
      name: "Vaporesso Osmall",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "VHCQF8TC76CGT",
      name: "Vaporesso Osmall",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "6WK3PVRAQG7EJ",
      name: "Twist Battery",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "CTMKJFV01C5NR",
      name: "Twist Pen",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "4CGNXYZTM79S2",
      name: "Nuro D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "T36NME463YH7P",
      name: "Effex Golden Pineapple",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "NHJ4SB88FYT3G",
      name: "Dimo D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "B1EWH238W92T8",
      name: "Dimo D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "R6ARMS1268DC6",
      name: "Dimo D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "52M8JJY3CGE44",
      name: "Dimo D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "AMPEFCS5JSYAJ",
      name: "Dimo D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "51VW5842QMCGA",
      name: "Traphouse D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "HGZPK1J449TG8",
      name: "Chakra HHC",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "BWM1BKANNMM8E",
      name: "Chakra HHC",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "BWM1BKANNMM8E",
      name: "Chakra HHC",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "JMT79J9AJT9S0",
      name: "8Delta8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "ETJ511TAD2DRC",
      name: "DrDelta D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "DGA63SMJT234J",
      name: "DrDelta D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "ECTA41JDJQZWC",
      name: "DrDelta D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "J7STFJNHD7Q9G",
      name: "D8 Shot",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[2]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "Z9PVK8Y6GWNP8",
      name: "Complex D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "G3V82H0BGYG42",
      name: "Complex D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "H54D441KFBJDY",
      name: "Complex D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "ZN414MW2N3NKP",
      name: "Complex D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "N794F97Z6J8ZG",
      name: "Complex D8",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "EFV76S3VMT7J2",
      name: "Air Bar Box",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "CJYVVHQMTFNV4",
      name: "Air Bar Box",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "1Y88GME8K3WXM",
      name: "Air Bar Box",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "DBW8WFNGKM1C4",
      name: "Kan-Di Dispossable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "Q23TGZM4Q6NKM",
      name: "The Dopest Gummy Sharks Individual",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 7.99,
      quantity: 80,
    },
    {
      cloverId: "BBZEJW9S9N2T8",
      name: "The Dopest Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "D7MVPN3BE2CP4",
      name: "Freebase Eliquid 60ml",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "4TRZCEWDDVKMC",
      name: "Freebase Eliquid 100ml",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "9X8WVRS3BJS24",
      name: "Salt Eliquid 30ML",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "7G089BKWEMS5P",
      name: "Escobar 2500 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "CEVEPDTQ54QB6",
      name: "Escobar 5000 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 23.99,
      quantity: 80,
    },
    {
      cloverId: "WGC4BC09MRHXW",
      name: "KangVape 3000 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 16.99,
      quantity: 80,
    },
    {
      cloverId: "BGT0V0EAAC4P4",
      name: "Fume 2500 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "S8BCHDY03VRZ2",
      name: "Delta Extrax 1 Gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "MM94TWZX8Y00G",
      name: "3Chi 1 Gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "FCEP9M3QTRPBA",
      name: "Kik 2 Gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "W0K1QT5VF4V12",
      name: "Delta Extrax 2 Gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "VW2JS6H04391R",
      name: "3Chi 1 Gram Cartridge",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "H75SA1EZ7KR0W",
      name: "Kik 1 Gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "RDD2M3B0JMXQ0",
      name: "Lipht 2 Gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "Y7R3Z2RQ7TGSM",
      name: "Kik 1 Gram Pod",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 22.99,
      quantity: 80,
    },
    {
      cloverId: "EJEC3C1NRB3AM",
      name: "Delta Extrax Lights Out Gummies 2500 MG",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "RC8KX4JQPY39E",
      name: "Delta Extrax Lights Out Cartridges 2 Grams",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "EBKCR4CC4FCJJ",
      name: "3Chi Delta 9 Gummies 200mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "MW59XJ5CK6WPY",
      name: 'Rolling Paper 1 1/4"',
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 1.99,
      quantity: 80,
    },
    {
      cloverId: "8EGR03EZV5M9E",
      name: "King Size Paper",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "AFATNHDP51H2W",
      name: 'Cones 1 1/4"',
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "4GBAH8CDEC7XY",
      name: "Cones King Size",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "T0Y9MWHHWAZWP",
      name: "Yocan Uni Pro",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "T97BHE5NZN2M0",
      name: "TreHouse D9 2 Gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "YDD8DP8DJP02C",
      name: "TreHouse Cookies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "YRQCAABZFRBBJ",
      name: "Gas Mask Bong",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "MN82Z9JP9CNVM",
      name: "TreHouse Gummy Jars",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "7E6M4VYJGCZAW",
      name: "Shisha 50 Gram",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "H74CGX1FJQ38C",
      name: "ElfBar 5000 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "JPRSZD039GFSA",
      name: "Salt Device Coils",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "70P640AB1ZW0J",
      name: "Box Mod Coils",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "CN47YKRH37P0Y",
      name: "Pod",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "0BSAMWSSS2QF6",
      name: "Backwoods 5pck",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 7.99,
      quantity: 80,
    },
    {
      cloverId: "VNM588N4RNP9G",
      name: "Backwoods 3pack",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "FZMZQRDPXT7SP",
      name: "Delta Extrax Best Buds 2pk Disposables",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "XQN2YM0BPQ0C4",
      name: "Backwood Single",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 1.99,
      quantity: 80,
    },
    {
      cloverId: "CWJX9BAMGC3TR",
      name: "Delta 8 Flower 7g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "H15VFY44KFYWR",
      name: "Delta 8 Flower 14g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 79.99,
      quantity: 80,
    },
    {
      cloverId: "H5GVSKDVJH36G",
      name: "Cigarellos 2 packs",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 0.99,
      quantity: 80,
    },
    {
      cloverId: "RG37CWG4Z6N70",
      name: "Remarkable Herbs Kratom 20oz",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "7CC67ANCP5J9C",
      name: "Remarkable Herbs Kratom 8oz",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "AWYS0JZA1ZXV2",
      name: "OPMS 120ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "26S7XYDP0BZQA",
      name: "OPMS 240ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "5PDDR3F6ZP2XM",
      name: "Kik Pod Battery",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "GZK64ZFPZGD00",
      name: "Kik Battery & Pod Bundle",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "TZ9WY7J3GV78M",
      name: "Earth Kratom 150ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "ER1VBC6AXCFYT",
      name: "Earth Kratom 300ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "JD82T00PVVN50",
      name: "OPMS Extract 2ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "D0HGWYE4EN2BG",
      name: "OPMS Extract 3ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "7NB49GRJB46FP",
      name: "OPMS Extract 5ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "8HGWMY29WSYXR",
      name: "OPMS Shots",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "PF8V2KENX9E9Y",
      name: "Viva Extreme Shot",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "QFS4Y61T8V1V4",
      name: "MIT 45 Shot",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 16.99,
      quantity: 80,
    },
    {
      cloverId: "0A3YC7A9QWJGT",
      name: "K Shot",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 15.99,
      quantity: 80,
    },
    {
      cloverId: "M5MGXHBNA36YC",
      name: "Viva Zen Ultimate Shot",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 15.99,
      quantity: 80,
    },
    {
      cloverId: "KHAMSN8K7FCFC",
      name: "Viva Zen Shot",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 8.99,
      quantity: 80,
    },
    {
      cloverId: "DQJT4C96RR87E",
      name: "Kik 1 Gram Cartridge",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "9XRQRN0W259YR",
      name: "Starbuzz Shisha 250g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "GGA63ETJKN4QC",
      name: "SmokeBuddy Mega",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "1VQF61MYEZNRC",
      name: "SmokeBuddy",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 27.99,
      quantity: 80,
    },
    {
      cloverId: "HQEHZNBFY0TP8",
      name: "SmokeBuddy Mini",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 15.99,
      quantity: 80,
    },
    {
      cloverId: "SJVW2DHH65HPM",
      name: "Cupholder Ashtray",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 6.99,
      quantity: 80,
    },
    {
      cloverId: "TXJEF8AW0XE80",
      name: "Candles",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 8.99,
      quantity: 80,
    },
    {
      cloverId: "4E3NKXFNJ7Y00",
      name: "Synthetic Urine",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 19.99,
      quantity: 80,
    },

    {
      cloverId: "289CBDCRRPY7C",
      name: "Foil",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 7.99,
      quantity: 80,
    },
    {
      cloverId: "EN3REVHHDCAZJ",
      name: "Hookah Tips",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 5.99,
      quantity: 80,
    },
    {
      cloverId: "NVEYDHMPENP38",
      name: "PuffCo Peak Pro",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 449.99,
      quantity: 80,
    },
    {
      cloverId: "RF8TJVHYAP56A",
      name: "Volcano",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 649.99,
      quantity: 80,
    },
    {
      cloverId: "677WXW4HJCXYM",
      name: "MarLeaf",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 7.99,
      quantity: 80,
    },
    {
      cloverId: "9BWCZ1RPA5NK8",
      name: "Fronto King",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 7.99,
      quantity: 80,
    },
    {
      cloverId: "DCN60F1697N64",
      name: "Koi 1gr Cartridge",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "DRFC999M3R57T",
      name: "Koi 1g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "81ZGGHDE8VP4A",
      name: "Koi Delta 8 Gummies 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "KD7JD1HR11VYA",
      name: "Koi Delta 8 Gummies 1500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "V5HAMBKKFEAA2",
      name: "Delta King Gummies 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "JFTF0Z5X0WV4A",
      name: "Delta King Gummies 1500/2000mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "Z7JXEPQH2K1KE",
      name: "Delta King Knock Out",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "PFSKM431C7SA6",
      name: "Delta Extrax Chocolate Bar",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 15.99,
      quantity: 80,
    },
    {
      cloverId: "DXGN5BZ8R70NY",
      name: "Summit D9 Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "PN7W64R7HTJCP",
      name: "Prerolls",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "B4CM2SB5K8S8W",
      name: "Prerolls",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 11.99,
      quantity: 80,
    },
    {
      cloverId: "757VFTXWVBFKP",
      name: "Rolling Paper KingSize",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "0C692VCM85QAE",
      name: "Medusa 2g KO Blend Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "5TE7Q5Q7Z0SXR",
      name: "Urb 2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "F4N2RVKZ6G4EA",
      name: "Urb Flower 7g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "5S3J05GY7SPH4",
      name: "Alien Delta 8 THC Cookies (500mg)",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "30535ZM9E6XJY",
      name: "Airbar 3 gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "951KR053NHN7R",
      name: "Koi Delta 8 THC Tincture (1000mg)",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "MPKW0734SKXS4",
      name: "KangVape 5500 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "TCE2VF2NG9XJR",
      name: 'Raw 1 1/4"',
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "PF093AB9TQ8N6",
      name: "Raw King Size",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "M4PDCAGW2T3ZC",
      name: 'Raw 1 1/4" Cones',
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "ER11ZMQHK012Y",
      name: "Raw King Size Cone",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "B26JKH0YW57A6",
      name: 'Blazy Susan 1 1/4"',
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "R36BAYYH7237R",
      name: "Blazy Susan King Size",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "X7EFTVTSEPD94",
      name: "Raw Rolling Paper Misc",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 2.33,
      quantity: 80,
    },
    {
      cloverId: "QJGC6H5KG08W4",
      name: 'Blazy Susan 1 1/4" Cone',
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "4M71G7VHSSZP0",
      name: "Blazy Susan King Size Cone",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "Q07QS98N8SY8P",
      name: "Delta Extrax X Urb Delta 9 THC Gummies (250mg)",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "9PCKABS41D1DW",
      name: "Delta Extrax Resin Series Delta 9 THC Gummies (250mg)",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "F0NZFZP4VYATJ",
      name: "Grabba Leaf Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 1.99,
      quantity: 80,
    },
    {
      cloverId: "94D1D9TWN0KGE",
      name: "Grabba Leaf Large",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 5.99,
      quantity: 80,
    },
    {
      cloverId: "CYJEJ7ZNGNZAP",
      name: "Dab Rite Digital Thermometer",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 259.99,
      quantity: 80,
    },
    {
      cloverId: "Q90KRN08SEPWA",
      name: "The Dopest 1g Cartridge",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 37.99,
      quantity: 80,
    },
    {
      cloverId: "C431BG4DZ3A6Y",
      name: "Caliburn G2 Pod System",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "5VHFWWDCJQXZ2",
      name: "Caliburn A2 Pod System",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "NSXG5WKWTKYG8",
      name: "Caliburn KOKO Prime",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "J75DPZNR8HWN0",
      name: "Uwell Aeglos Pod System",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "HC48BKEXB8D56",
      name: "GeekVape ONE",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "X5GTVZ9W6BG4M",
      name: "Smok Novo 2 S Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "EYSYXTHXZ7PFP",
      name: "Smok Nord X Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "24HXEA38TYGGW",
      name: "Smok Novo 4 Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "244GD7K4ZJ1DT",
      name: "Smok Nord Pro Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "M6S8KQNJDJ7PP",
      name: "Smok Nord 50w Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "V6T66SC2N5P7W",
      name: "Smok Nfix Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "0611RWVJHGSK6",
      name: "Voopoo VThru Pro",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "BSMD7GPEA5A3J",
      name: "Vaporesso XROS Mini",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "J6AD7JCNZS2W0",
      name: "VooPoo Drag Nano 2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "BFE239X2TCMRT",
      name: "GeekVape AP2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "SE2BV8CDQPA46",
      name: "Vaporesso XROS 2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "0D1HFBHNH4984",
      name: "Vaporesso Zero 2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "PBRRVHW62Y1Q0",
      name: "Smok Morph Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "YN38YBE501FTC",
      name: "Smok Nord 4 Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "KF2CVDK0S25D8",
      name: "Smok Thiner Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "HGQ7WWPKJKK24",
      name: "Freemax Marvos 1",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "EDBQJ7CES1H4J",
      name: "Freemax Onnix 2",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[1]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "RBFNSY8CJYW0P",
      name: "Lookah Ice Cream",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "8PJWNK561WXZM",
      name: "Lookah Seahorse Pro Plus",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "K29TNS8CE89ZW",
      name: "Lookah Unicorn",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 169.99,
      quantity: 80,
    },
    {
      cloverId: "8EDPQY65M5D5T",
      name: "Lookah Swordfish",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "VNR1AFKZ1G67M",
      name: "PAX 3 Smart Vaporizer",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 249.99,
      quantity: 80,
    },
    {
      cloverId: "0XSEPG0AN7M62",
      name: "Pablo Bar 6000 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 26.99,
      quantity: 80,
    },
    {
      cloverId: "A6DFKDG6GC4PY",
      name: "Top Shelf Gummies Delta 8 THC (1000mg)",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "9ZRVJ58KF2FNT",
      name: "Black And Mild Single",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 1.29,
      quantity: 80,
    },
    {
      cloverId: "TMCXJNA8Q3W4R",
      name: "Wild Hemp Wraps 4 Pack",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 0.99,
      quantity: 80,
    },
    {
      cloverId: "1JDQJWWCF6BQC",
      name: "High Hemp Wraps 2 Pack",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 1.99,
      quantity: 80,
    },
    {
      cloverId: "MZZ5G4X0Y9NBA",
      name: "King Palm King Size",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "PZK6DT5A8FGDM",
      name: "King Palm Flavored",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "BNRD4C2HK4RX8",
      name: "King Palm Mini (No Flavor)",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "N7CKVPEPCWYZY",
      name: "Klarity Kratom 300g Powder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "0KFA9EMZQEMNA",
      name: "Klarity Kratom 200 Capsules",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "XENM60C67XAET",
      name: "Delta Man Space Rings",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "VFSMNRMDM0D2P",
      name: "Delta Man Neon Worms",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "C29S6BMFTETEJ",
      name: "Medusa Knock Out Blend 2g Cartridge",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "TGFYFE57CHYFC",
      name: "HorizonTech Falcon 2 Tank",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "4GS4EM1FT6CAC",
      name: "FreeMax Maxus 200w",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 119.99,
      quantity: 80,
    },
    {
      cloverId: "BTNYTQ1CQWBX4",
      name: "Lost Vape Orion Mini",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "BN3KKN4P0SZER",
      name: "Lost Vape Orion Q Ultra",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "D2M3DS51Q4AEE",
      name: "Caliburn AK2 Pod System",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "73HYWPJC3D7WA",
      name: "Urb X Delta Extrax 10ct Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 13.99,
      quantity: 80,
    },
    {
      cloverId: "K32JZ4R5F5JSW",
      name: "Mike Tyson Blunt Wraps",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "22T5JX3ZTTNM2",
      name: "Mike Tyson Rolling Papers",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "HFS5PMVZQRTRM",
      name: "AirBox 3000 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "2ECBFYQYZZQSY",
      name: "Hot Grabba",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 1.99,
      quantity: 80,
    },
    {
      cloverId: "25S15HNN8QJ0G",
      name: "Rare D9 Gummies 1:1",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "4H3NTZKGHD61M",
      name: "Kik Live Resin 1 Gram Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "3SD5BAJA8P1H6",
      name: "Medusa 2g Cartridge KO Blend",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "P0PKR2MFPD6B2",
      name: "Delta Extrax 3 Gram D11 Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "4029BW1R0C2GT",
      name: "Rare 1g Disposables",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "MDS4PS0RPZNPC",
      name: "420 Bong Cleaner",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "Q7913AB396MY6",
      name: "Delta King 2.5g D8 Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },

    {
      cloverId: "GQFMP7TG4H80R",
      name: "Valarian 3 tank",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "8Y51XYC2WF0PJ",
      name: "IPX80 kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "5TAE6CYK74NKR",
      name: "Geekvape H45",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "GXFNHWCXS3KSR",
      name: "Digi Flavor XP pod tank",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "A79H1DPMXTTYY",
      name: "Maxus 50W kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 79.99,
      quantity: 80,
    },
    {
      cloverId: "XNJSRTGP57772",
      name: "Maxus 100W kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 89.99,
      quantity: 80,
    },
    {
      cloverId: "QZDTNV47Y12ZY",
      name: "Suorin Air mod",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "MC1N5GWQZNGK6",
      name: "Ijoy Captain Airgo",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "7KJBTXBPBVT3M",
      name: "Geekvape L200",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 99.99,
      quantity: 80,
    },
    {
      cloverId: "1R4P94DXTJVYP",
      name: "Uwell Crown IV kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 99.99,
      quantity: 80,
    },
    {
      cloverId: "FCEBPVG4KMRTG",
      name: "VooPoo Drag 3 TTPX kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 99.99,
      quantity: 80,
    },
    {
      cloverId: "6KHVDA1G399NE",
      name: "VooPoo Drag X and S",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "ZD0EVEF9R6FFJ",
      name: "VooPoo TOO",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 89.99,
      quantity: 80,
    },
    {
      cloverId: "0ETBJ9VB12MZY",
      name: "Vandyvape Pulse Skwonk",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "Y4ADQJYH62AGM",
      name: "Smoant Cilon",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 79.99,
      quantity: 80,
    },
    {
      cloverId: "3DKSNJFQ6K8TP",
      name: "FreeMax Max Luke tank",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "5KY2AAW71YKAJ",
      name: "GeekVape Obelisk 60",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "KG1MC9XN13JXG",
      name: "Swisher Leafs",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 1.79,
      quantity: 80,
    },
    {
      cloverId: "P3XREA39F2B32",
      name: "Swisher Legends",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 1.29,
      quantity: 80,
    },
    {
      cloverId: "WFDJD1DXTH9VW",
      name: "Viva Extreme Extra Strength 100g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 25.99,
      quantity: 80,
    },
    {
      cloverId: "KJPV47CTPBP1R",
      name: "Escobar X Kilo 4000 puffs",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "TMP3YQKB26H06",
      name: "Wild Berry Incense - 10",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 2.25,
      quantity: 80,
    },
    {
      cloverId: "P62VCGVZNWRFP",
      name: "Wild Berry Incense - 30",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 6.25,
      quantity: 80,
    },
    {
      cloverId: "G43FT138CYYXT",
      name: "Wild Berry Incense - 100",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 20.0,
      quantity: 80,
    },
    {
      cloverId: "AXYQNWJSNAQ1E",
      name: "Aegis Boost",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 89.99,
      quantity: 80,
    },
    {
      cloverId: "S28SDPAQ78Q3J",
      name: "Geekvape Obelisk 200",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 99.99,
      quantity: 80,
    },
    {
      cloverId: "G9YJ4CE9TY4DE",
      name: "Hempwick - 3ft",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 0.99,
      quantity: 80,
    },
    {
      cloverId: "71375EX2YPW56",
      name: "Hempwick - 3 meters",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "0CZT9EAP4RW8A",
      name: "Stick Battery - Large",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "1WSPFX3E86DVJ",
      name: "Scent Removing Spray",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "44RDXW9X9V8S4",
      name: "Grinders - Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "H017CJWHAT7G8",
      name: "Kado Bar - 5000 puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "HN2GCWR4DYEBE",
      name: "Delta Extrax Liquid Diamonds PreRoll Jar",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 27.99,
      quantity: 80,
    },
    {
      cloverId: "PFJZJ5177HSD4",
      name: "Delta Extrax 2 Gram D11 Cartridge",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "FZV1D03J0T2PM",
      name: "King Palm Cones",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "BX7ADDT9K42CG",
      name: "Urb D9:HHC 500mg Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "RKS1RAPGSARTE",
      name: "Medusa 2g Uppercut Blend Disposables",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "1RDGVS0G8QXHC",
      name: "JuiceHead Bars - 5000 puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "2Y7GGPA5P3VSP",
      name: "Delta Extrax Hydro Bubbler",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "EG1FD5HGYQG8J",
      name: "PackWood Wraps",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "CZJTQWWHC5862",
      name: "King Palm Flavored - 5ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 5.99,
      quantity: 80,
    },
    {
      cloverId: "G5CN2EJDNEKZA",
      name: "Sugar Delta 8 THC & PHC Live Rosin 2.2g Cartridges",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "65A3GFQHRZGYW",
      name: "Sugar Delta 8 THC & PHC Live Rosin 2.2g Carts 2 pk",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "DCYX1KQV5TZBA",
      name: "Rare Glow - 4000 puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 20.99,
      quantity: 80,
    },

    {
      cloverId: "QCSXBVW63CW7E",
      name: "MagJar",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 19.99,
      quantity: 80,
    },

    {
      cloverId: "9WB17XF1X0406",
      name: "18650 Battery",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 11.99,
      quantity: 80,
    },
    {
      cloverId: "ZFEARJ64ZKVH6",
      name: "18650 Battery Pack",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 23.99,
      quantity: 80,
    },
    {
      cloverId: "K6RE0GQGCVXHP",
      name: "Herbal Clean QCarbo20 Clear",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "F1NB4WK7DZ1NJ",
      name: "Galaxy Gas Infusions - 24 Pack",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "BF6RZV5KDE60E",
      name: "All Day Pills",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "MZB6VWZT2RJV6",
      name: "Koi Delta 9 Gummies 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "Q4WMGEDM43T9Y",
      name: "Rosin Press",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 499.99,
      quantity: 80,
    },
    {
      cloverId: "5FAET7B9EK7T8",
      name: "Fume 3500 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "9Z1BPQW7G966T",
      name: "Kilo's Kreamery Chocolate Bar",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "5WA2AKVWGV23G",
      name: "Kilo's Kreamery Infused Ice Cream Cones",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "P626HDD8ZPPF8",
      name: "DugOuts",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 11.99,
      quantity: 80,
    },
    {
      cloverId: "T1QM0BMXG35Q0",
      name: "Dispose a Bowl",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 5.99,
      quantity: 80,
    },
    {
      cloverId: "KMCNWRNJ5SY48",
      name: "Wooden Pipe",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "YJZCNGNKAD6VG",
      name: "4 Pc Dab Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "G0AWQQDF99GQA",
      name: "Thicket All in One Portable Device",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "DD3JN41G3XHF2",
      name: "Easy Butter Maker",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "3RAZGAFGNA1D8",
      name: "Delta King THC-O Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "SS6FGHZSKR3CP",
      name: "High Voltage Detox Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "WSRMP40BE2E6T",
      name: "Quick Fix Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "DR0SYRGR072BG",
      name: "Puffco Budsy Water Bottle",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 79.99,
      quantity: 80,
    },
    {
      cloverId: "W8EAKQVGZ1YFR",
      name: "Lost9's Delta 9 Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "TNBXJK33TWE48",
      name: "Blazy Susan Shorty Jars",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "TA6M1HDEJC0MG",
      name: "Blazy Susan King Size Jars",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 25.99,
      quantity: 80,
    },
    {
      cloverId: "GHXAWBDGJKCPW",
      name: "Delta King Gummies 4000mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "RACT5AT0MNCHW",
      name: "Game Leaf 5 ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "CZDK0CNFGPSXG",
      name: "Hush Kratom Shots",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "YRET05HCW563M",
      name: "Torch 2.2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "47ZYNRMXXVVBP",
      name: "Torch D9 Gummies 250mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "8APK10KEQDGMC",
      name: "Torch THC-X Gummies 3500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "PV700VFZ3C4WG",
      name: "Koi Delta 8 Gummies 150mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 15.99,
      quantity: 80,
    },
    {
      cloverId: "AQ0XEYK12A244",
      name: "Koi CBD Balm 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "6MC2G296W7VFE",
      name: "Koi CBD Balm 1000mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "8SQ7CZBW0C45T",
      name: "Koi CBD Roll-on 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "53TKWBY0DNPYA",
      name: "JoySol CBD Creme",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "4PAGAMAVGB812",
      name: "Vaporesso NRG-S Tank",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "S121GPC3PBFVJ",
      name: "Mellow Fellow Delta 8 Gummies 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "2VPPPX8TRN4MP",
      name: "Urb D9:HHC 25mg Single Chocolates",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[0]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "0XKJB83AJMSV4",
      name: "Urb D9:HHC 25mg 4 Chocolate Bundle",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "3ZAP59WMNQM5Y",
      name: "Delta Extrax Goliath Starter Kit",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "Q8MTJV1KK1CMT",
      name: "Delta Extrax Goliath 2 Pack Pods",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "XRCM5DG85VGY6",
      name: "GeekVape Z100C DNA",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 149.99,
      quantity: 80,
    },
    {
      cloverId: "YR0JMFS496Z9A",
      name: "WhipIts - 50ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "2Z42MTR63WFWR",
      name: "Lit Kratom Shots",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "7T0X0N07TXJJY",
      name: "Super Chill CBD Gummies - 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "R1PJ3FHE44HZW",
      name: "Galaxy Treats Cosmic Krispies 100mg Delta 8 THC",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "8F1PGXW02PNTG",
      name: "Lights Out Blister Pack Gummies 1250mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 17.99,
      quantity: 80,
    },
    {
      cloverId: "2EDD6RS8XBCYG",
      name: "TreHouse 1000mg THC Syrups",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "EAWNKDBRKKAZY",
      name: "3Chi D9 THCO Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "MNQPQ6PRSSJK4",
      name: "Wild Berry Incense - 1",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 0.99,
      quantity: 80,
    },
    {
      cloverId: "V17M689NAS0S6",
      name: "Day Pipe Dry Herb",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "YB968Y668X0T4",
      name: "Ankomn Turn-N-Seal Vacuum Container",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "6ADSPT9810HCW",
      name: "Urb D9:HHC 300mg Chocolate Bar",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "6KE0S4N9JYG4W",
      name: "Blue Moon Hemp 3.5g Jar Flower",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "VXST5HGX4ME66",
      name: "Blue Moon Hemp 250mg CBD Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "MXAENDMRF3XW4",
      name: "Blue Moon Hemp 250mg D8 Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 27.99,
      quantity: 80,
    },
    {
      cloverId: "K1XXM6HTV095R",
      name: "OPMS 480ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "DPQ05J3BBKVVR",
      name: "Caliburn X Pod System",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "C3F0Y2ZFBT5VE",
      name: "Torch 3.5g THC-X Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "3CPE6WSHGCBNC",
      name: "Snail 510 Battery",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "AMWHH2WZQ47HR",
      name: "2 n 1 Cartridge and Wax Tool",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "J9C6NDDG9R1MG",
      name: "Medusa 2g THC-X Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "PHG0DFVCW9WXC",
      name: "Al Capone Leaves",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 1.99,
      quantity: 80,
    },
    {
      cloverId: "8A81EBEEAHWSP",
      name: "Delta Extrax 3.5g Infused Flower",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "FJQ4PNXJKF7PA",
      name: "King Palm Glass Tips",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "04GN1H89QTWM8",
      name: "Earth Kratom 100g Powder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "1G2GRFBHNS052",
      name: "Earth Kratom 200g Powder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "HHNX6PS3KSM5A",
      name: "Viva Zen 2x Shot",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 13.99,
      quantity: 80,
    },
    {
      cloverId: "05T6GVZA9NVFE",
      name: "Butane Can",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "65P8RV7C8TXJ2",
      name: "Yocan Kodo 510",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 12.99,
      quantity: 80,
    },
    {
      cloverId: "8ZQ53QSVK4N2C",
      name: "PuffCo Proxy",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 399.99,
      quantity: 80,
    },
    {
      cloverId: "R9TABRQMVGE9M",
      name: "Raw Six Shooter",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "XWWTPVNQ2FVKP",
      name: "Raw Hydro Stones",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 1.99,
      quantity: 80,
    },
    {
      cloverId: "YEACBRERB01Y4",
      name: "Raw x Lyrical Bud Wraps",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 7.99,
      quantity: 80,
    },
    {
      cloverId: "KCQ3K2AHJ7SX0",
      name: "Alternativ D9 THCp Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "ZN7JKJ6EBAP5T",
      name: "Delta Extrax X Zombi 3 Gram Blackout Blend",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "J3C8K1T05S3TJ",
      name: "Delta Extrax D9 THC THCo POP Rocks",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 2.5,
      quantity: 80,
    },
    {
      cloverId: "PT8JJ1P9HCJNJ",
      name: "Delta Extrax X Zombi Blackout Blend Cookies 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "QHWHYEY4BD3TE",
      name: "Backwood Small Batch",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 18.99,
      quantity: 80,
    },
    {
      cloverId: "N2DYXKCBRG0KM",
      name: "Geekvape T200",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 109.99,
      quantity: 80,
    },
    {
      cloverId: "CCR37ZQ1ENFDE",
      name: "CannaAid Mega Blend Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "H7AGXB8YGBAZP",
      name: "Delta Extrax D6 3.5g Disposables",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "BKM3G48YATGC6",
      name: "Delta Extrax X Zombi 2g Blackout Blend Carts",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "XK8RB6YY7Z2ZW",
      name: "Xite D9:CBD Taffy",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "YE4AH129YHFR4",
      name: "Raw 100ct Tips",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 7.99,
      quantity: 80,
    },
    {
      cloverId: "0M115C4J066YY",
      name: "Mellow Fellow 2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "N3MQ64WEBY0D0",
      name: "Mellow Fellow 2pk 2g Carts",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "YT0PXR30Z31QM",
      name: "CannaAid D9:CBD Popcorn",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 17.99,
      quantity: 80,
    },
    {
      cloverId: "RDGC3CGZ6NR0A",
      name: "Mellow Fellow Delta 9 Jars",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "1B96HE3S9QMYG",
      name: "WhipIts - 24ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "ACF8DMRTZ17N2",
      name: "Loose Leaf 5pk",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 12.99,
      quantity: 80,
    },
    {
      cloverId: "6ZFWDVEVHXGR4",
      name: "Kado Bar - 3500 puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 16.99,
      quantity: 80,
    },
    {
      cloverId: "6EN9SSGCZMCRR",
      name: "Earth Kratom 500ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "F9WM08Z06BSBA",
      name: "Yoxy Bar By Elf Bar - 6000 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "P9Y6W6DT8VTQ8",
      name: "D9 Candy Bundles 4pc",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "XVJRZRK53F7J0",
      name: "CannaAid Black Label 2g Disposables",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "8RAA4K9HM6MSC",
      name: "Xite D9:CBD Caramel",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "6KK12K1VAXXZ6",
      name: "CannaAid D9:CBD Peanut Butter Cups",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "5JBJ5E1BZ11M0",
      name: "Urb Uphoria CBD 2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "WYZ7YEB89Q768",
      name: "Magic Mushroom Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[4]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "ACDC3FGQEX248",
      name: "Caliburn A3 Pod System",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "HJSQG9WX1XF0J",
      name: "Space God D9:CBD 300mg Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "P9JHF2QPTKTHT",
      name: "Stick Battery - Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "3R7TEDRHD4CER",
      name: "Stick Battery - Medium",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 12.99,
      quantity: 80,
    },
    {
      cloverId: "VBFCD4M1M6ZRT",
      name: "Koi Dragon Blend 1250mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 49.99,
      quantity: 80,
    },

    {
      cloverId: "SJM4MZV4G1BN2",
      name: "CannaAid Black Label 1g Disposables",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 39.99,
      quantity: 80,
    },

    {
      cloverId: "A33B1SYAZPDGA",
      name: "Urb D9:HHC Lozenges",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "FRWYDM2G52GDW",
      name: "Torch Liquid Diamonds 3.5g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "MZVRY4CV03ET0",
      name: "Fume Extracts THCa 2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "EZT1TFDMYG6BW",
      name: "Urb D9o 3g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "R3PSBHQR8DTZ6",
      name: "Urb D9:D8 3500mg Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "39EYCRABQTB56",
      name: "Brother's Broad Leaf Duds",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 8.99,
      quantity: 80,
    },
    {
      cloverId: "TGFGMN5GYN7WP",
      name: "Just CBD Gummies 1000mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "QNT5A607KG398",
      name: "CannaAid Legal Limit Gummy Bags 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "FWPJ8S9XNHEHT",
      name: "CannaAid Weed Seeds 5pk",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "2VW7050GGA9FM",
      name: "Mike Tyson Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "D5XV2T6BXZM5E",
      name: "HoneyRoot D9 35mg Gummy",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 5.99,
      quantity: 80,
    },
    {
      cloverId: "6V5XV4X0X074P",
      name: "HoneyRoot D9 D8 PopRocks",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 5.99,
      quantity: 80,
    },
    {
      cloverId: "KQDFR66NJ2VME",
      name: "Delta Extrax Liquid Diamonds 3g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "6W0DCV5CJF40M",
      name: "Delta Extrax Liquid Diamonds 2g Cart",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "MJYFKGYW2VSV0",
      name: "Delta Extrax 2g Moon Blunts",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "F7HNHJSE00496",
      name: "Delta Extrax Lights Out 2pck",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "7CAFV2122E6XW",
      name: "CannaAid Snoozeberry Gummies D9 CBN CBD 30ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "ZVP2RE05YG64C",
      name: "CannaAid Chocolate D9:CBD Chocolate Squares",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "HG6SCPA6D55EA",
      name: "CannaAid D9 300mg Gummy Jars",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "6S7TNBJFNGPFR",
      name: "Lookah Seahorse 2.0",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "6P1RQ9C8VARJ8",
      name: "Hi5 3000 puff Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 15.99,
      quantity: 80,
    },
    {
      cloverId: "QWNBPRMBXRKHE",
      name: "Elf Bar Ultra",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "GNBEQGVHD4KW4",
      name: "Lost Mary 5000 puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "9ZA2N8CNNXW7R",
      name: "Float Vegan Mushroom THC Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "6M10HSSW5KS0C",
      name: "Dugout Grinder 2n1",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "Q7QAXYQ3Z19ZE",
      name: "Spray Paint Torch",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "348DSSMAQYTP4",
      name: "Black Tie Indoor Eighths THCa Flower",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "P0SF12CCXJ2ST",
      name: "Black Tie Outdoor Eighths THCa Flower",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "ERRH15YJVS3J6",
      name: "Black Tie THCa Isolate",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "TR3PYCGEN3FWM",
      name: "Black Tie THCa Diamonds",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "VYEJS66W4JAXJ",
      name: "Kandy Boy D9 150mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "19T04HR1Z2EAE",
      name: "Kandy Boy Eighths Tops",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "W11PNVGC6EACE",
      name: "Orange Pistachio Cookies 250 D9",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "X6FT6GZMVYVBG",
      name: "Space Gods 2 Pack D9:CBD",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "RJZWNEFC2K1HJ",
      name: "Galaxy Treats Mushroom Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "KB5YV5BWNT2PE",
      name: "The Hype 5000 puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "0BWW03AVKJ542",
      name: "Black Tie Indoor Quarter THCa Flower",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "83DEJVZ2KDX3A",
      name: "Black Tie Outdoor Quarters THCa Flower",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "QPJ6FEV185YB8",
      name: "Black Tie Live Rosin THCa Budder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "BH63XSV2NVZH6",
      name: "Shroomz By Flayvors Capsules",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "YTRDGP4VR1YE6",
      name: "Delta Extrax 2pk Carts",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "8G44FGJ1QK4FG",
      name: "Delta Extrax Preheat 3.5g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "5WE1T7D797A7W",
      name: "Wolf Uni X",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "YSCBHJN1KWKQ8",
      name: "OPMS 16oz Powder",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "VKP9PSJXDNSYP",
      name: "Jeeter D8 Prerolls",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 11.99,
      quantity: 80,
    },
    {
      cloverId: "GX2AY8W9J20VY",
      name: "Delta Extrax 2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "YXQ1Q2NZSSNM0",
      name: "Delta Extrax 1g Cart",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "HGECJES3C95W8",
      name: "CannaAid D9 100mg Shot",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 12.99,
      quantity: 80,
    },
    {
      cloverId: "32S0K1AWMCAX2",
      name: "CannaAid CBN Gummies 100mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "G0K92S743JN40",
      name: "CannaAid CBN Gummies 300mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "97641KRRSJE3P",
      name: "CannaAid SoftGels Sleep CBD CBN",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "PJQG6C6J62N6C",
      name: "CannaAid SoftGels Energy THCv CBD",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "HJ7TESTQP53EE",
      name: "CannaAid SoftGels Hangover",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "N37VRBF15NNAW",
      name: "CannaAid SoftGels Male Libido",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "CMMTZMWV8V2HP",
      name: "CannaAid SoftGels Focus",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 23.99,
      quantity: 80,
    },
    {
      cloverId: "1ZYVWM1HVZNZT",
      name: "CannaAid SoftGels Female Passion",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "ANWSH550DPPN2",
      name: "CannaAid D8 1200mg Tincture",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "ZMRQ1GZTR6W94",
      name: "CannaAid CBGa & CBDa 4200 Tinctures",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 104.99,
      quantity: 80,
    },
    {
      cloverId: "9F0AAG19SNWK0",
      name: "CannaAid Full Spectrum 5000mg Tincture",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "36BQWB1YXSQN2",
      name: "CannaAid CBN Tincture",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 53.99,
      quantity: 80,
    },
    {
      cloverId: "CXRKE0346AEZR",
      name: "CannaAid Black Label Sauce",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "288QKZ4BMHRFP",
      name: "Kik 2 Gram Disposable Exotic Blend",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "W8Q2G7YZVAWFP",
      name: "Black Tie GH Bulk 14g Big Buds",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 109.99,
      quantity: 80,
    },
    {
      cloverId: "03WTY52S8J41C",
      name: "Dorito's Mexican Taco Chips",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "8XF8J57S0VVQ4",
      name: "Cheeto's Barbecue",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "W9JPG36116EWA",
      name: "Cheeto's Cheese",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "Z7S6CSCBCQ5VW",
      name: "Bokun Habanero",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "C9TF6Z8HRKRKJ",
      name: "KitKit Strawberry",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 6.99,
      quantity: 80,
    },
    {
      cloverId: "HZTQP5QDRJJYA",
      name: "KitKat 13 Sheets",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 6.99,
      quantity: 80,
    },
    {
      cloverId: "96AWPBDWWADV2",
      name: "Dars Milk Chocolate",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "Z7EVWVCSKDGE8",
      name: "Bourbon Alfort Mini Strawberry",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "Q6Q1WSHHP7724",
      name: "Slapwood Wraps",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 8.99,
      quantity: 80,
    },
    {
      cloverId: "Q04KFNGX0PBQ0",
      name: "Delta Munchies Sour Belts",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "SNB49STAAWAEE",
      name: "Medusa Tap Out Blend 2g Cartridges",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "57TZRPTJJ9H5A",
      name: "King Palm Goji Wraps",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "K2SYGZFTTNBET",
      name: "Delta Munchies THCa Double Doinks",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "N0S1V7EKYX55G",
      name: "Delta Munchies Nerds Rope",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "3HJJ479BYAF80",
      name: "Space Gods D9:CBD Chips",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 12.99,
      quantity: 80,
    },
    {
      cloverId: "EPNGTVCK71KWM",
      name: "Elf THC 5g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "P2REKKVTXWEZA",
      name: "PHD Deli Flower 1g Big",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 12.99,
      quantity: 80,
    },
    {
      cloverId: "5VHWH4W2KFCNE",
      name: "PHD Deli Flower 1g Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "BTDHBH1KHEVYM",
      name: "PHD Deli Flower 3.5g Big",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "F42G1S1CT7CRG",
      name: "PHD Deli Flower 3.5g Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "5K4YR5EFYR5FA",
      name: "PHD Deli Flower 7g Big",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 64.99,
      quantity: 80,
    },
    {
      cloverId: "1KGDAJ0YZ33XR",
      name: "PHD Deli Flower 7g Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "05JJDXVG8XT06",
      name: "PHD Deli Flower 14g Big",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 114.99,
      quantity: 80,
    },
    {
      cloverId: "YGZT1DWN70KBP",
      name: "PHD Deli Flower 14g Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 104.99,
      quantity: 80,
    },
    {
      cloverId: "NTQADSXR5AKE2",
      name: "PHD Deli Flower 28g Big",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 219.99,
      quantity: 80,
    },
    {
      cloverId: "HY0QQERSFKK9E",
      name: "PHD Deli Flower 28g Small",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 199.99,
      quantity: 80,
    },
    {
      cloverId: "5JRZ9ES44Z248",
      name: "Smak'd 2 pk Gummies 500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 6.99,
      quantity: 80,
    },
    {
      cloverId: "BHSMEWEEPTFM6",
      name: "Shroomz Gummies 1200mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "WD0JRD52XXDTR",
      name: "Remarkable Herbs Kratom 3oz",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "VHRGJYHYMZ2E4",
      name: "SugarBar 5500 puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 17.99,
      quantity: 80,
    },
    {
      cloverId: "Q408AHFMAP5QW",
      name: "Cali Reserve 5000mg Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "VA22MAWW3GC0C",
      name: "Delta Man 5000mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "K2GNZKBY9EXVE",
      name: "Puffy THCa Prepacked 4g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "5BFZD9ZY2RAVJ",
      name: "Ghost Shadow THCa 3.5g Disposables",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "GBTE1TW97VE4T",
      name: "Sugar X WonderBrett 3.5g Disposables Single",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "YA65Z2YCQ88M8",
      name: "Sugar X WonderBrett 3.5g Disposables Double",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 79.99,
      quantity: 80,
    },
    {
      cloverId: "FEQEDMV4YF9V0",
      name: "Exotic Skittle Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 11.99,
      quantity: 80,
    },
    {
      cloverId: "PSZFKA6M61A3W",
      name: "Exotic Oreos",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "E93SK53DN8EZJ",
      name: "Delta Extrax Amanita Mushroom Chocolate",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "0Q0HPXPMQM6TA",
      name: "Delta Extrax Amanita Tincture",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "JX7APE9RN7SP8",
      name: "Top Shelf Gummies 2500mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "51AVA8K05HF7P",
      name: "Bambu Big Rolling Paper",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 3.99,
      quantity: 80,
    },
    {
      cloverId: "B8E8YRAVZHNAE",
      name: "Bambu Small Rolling Paper",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "91WAATW698X8Y",
      name: "GCore 7000 puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 17.99,
      quantity: 80,
    },
    {
      cloverId: "AK74KH7F73XP0",
      name: "Jelly D9 Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 7.99,
      quantity: 80,
    },
    {
      cloverId: "BQJC5NTEEQHNJ",
      name: "Mike Tyson 2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "BGXCWBST8791T",
      name: "2 Bay Charger",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "VR6KAM1J2AHY6",
      name: "4 Bay Chargers",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "CDW1MG1BA7B8Y",
      name: "Fire 0% Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "8J9MRCNQ4EVW6",
      name: "WhipIts - 100ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[8]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "BN3RZ0PTS4XZ4",
      name: "MHC Baby Jay's",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "697DRYC4XKBDE",
      name: "CutLeaf THCa PreRolls",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "T7VY9NDTQ6C6Y",
      name: "Top Shelf Gummies 5000mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "56PG171KSJXBE",
      name: "Runts Leaf 5 pack",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 10.99,
      quantity: 80,
    },
    {
      cloverId: "D2KGJDZT9WJF0",
      name: "Koi Dog Treats",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "N3VYTRCX7VKBG",
      name: "Just CBD Dog",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "NC2DEFJZV57KC",
      name: "Sweet Life D9 THC Syrup 200mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "ZC757NCQDN7K4",
      name: "Baba Mushroom Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "BNEG2M9PXGR96",
      name: "Orion 7500 Puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "TXGRKMF8CSNPR",
      name: "Air Bar Max",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 18.99,
      quantity: 80,
    },
    {
      cloverId: "QY4P3EH7N90FA",
      name: "Top Shelf Single 500mg Gummy",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "4M736RWK3DNDR",
      name: "Mellow Fellow 1000mg Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "0CEKS51BV02BM",
      name: "CannaAid Giga Blend 3g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "BER7HZP6JKX0W",
      name: "Peak 1000mg THCa Vape",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "9KZKG4687C30P",
      name: "Peak 10000mg Mushroom Capsules",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 119.99,
      quantity: 80,
    },
    {
      cloverId: "FDFCNEMAA2SPE",
      name: "Purple Mushroom Gummies 5 ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "QV3BMGE5MWDKY",
      name: "Throwback Woods Cigar",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 6.99,
      quantity: 80,
    },
    {
      cloverId: "TRRHMW7GT0JK4",
      name: "Alcohol Free Infused Shots",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "YBHGNBD7EHJYY",
      name: "CutLeaf THCa 4.2g PreRoll",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "N6MQ5ZT47KFSE",
      name: "Catskill HHCp Live Resin Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "KABM6SEV99CTY",
      name: "Koi Kratom Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "5MGKHE0NM9DDM",
      name: "Hidden Hills 2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "4K5F5HCWN96XJ",
      name: "Delta Extrax X Ghost Double Up 3.5g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "SCNXBT8FGP79G",
      name: "Koko X Urb 3g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[5]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "S11AXJQ4Q5Y1C",
      name: "Modus Amanita Mushroom Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "X3SM3WEDSKDQA",
      name: "Cali Reserve 2500mg Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "3NYE6GG73E8MA",
      name: "Enjoy Live Rosin D9 Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "NPY0F3WY1EC48",
      name: "Hidden Hills Sour Belt",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "N08S4P2Q2FQ9G",
      name: "Medusa 3g THCa Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "0CSHD5MRAX4NY",
      name: "Koi D9 600mg Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "XXAS732GJZCAJ",
      name: "ElfBar TE6000",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 21.99,
      quantity: 80,
    },
    {
      cloverId: "3RQP2FWZQVQTE",
      name: "PHD PrePacked Flower 1g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 12.99,
      quantity: 80,
    },
    {
      cloverId: "Y40N73HPVB1G6",
      name: "Peak Knockout Blend 3000mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "90KHF083V0X92",
      name: "Don't Trip THCa 2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "R2KJ0GS19VZA6",
      name: "Smak'd Fukd Blend",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 11.99,
      quantity: 80,
    },
    {
      cloverId: "2GBTAQRKMVYC8",
      name: "Ghost 5000mg THCa Gummies",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "N01KKCDR59SD4",
      name: "EvoBar 5000 puff",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 17.99,
      quantity: 80,
    },
    {
      cloverId: "Z21S3JBY541WP",
      name: "Cookies Grinder & Blow Torch",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "FZYJRJX5GT69Y",
      name: "Happi Happy Hour 3g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "3DE4F950YBKT4",
      name: "Xite D9 Peanut Butter Cups",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "PTA3VB6VN4P0G",
      name: "Xite D9 Fruit Chews",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "VF242TFK5FT72",
      name: "Xite D9 Almond Toffee 120mg",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 14.99,
      quantity: 80,
    },
    {
      cloverId: "43WEW9VND07BJ",
      name: "Xite D9 Chocolate Squares",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 2.99,
      quantity: 80,
    },
    {
      cloverId: "TZABVKW4WRA78",
      name: "Trinity Beast 5g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 69.99,
      quantity: 80,
    },
    {
      cloverId: "7K74YH68RS900",
      name: "Kik D8 Baby Joints",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 24.99,
      quantity: 80,
    },
    {
      cloverId: "59HSP0H9VYD1T",
      name: "Mellow Fellow 1000mg Cereal Bar",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "HF4NPKETR1CC4",
      name: "Delta Extrax Lights Out Chocolate Bar",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 17.99,
      quantity: 80,
    },
    {
      cloverId: "MDYJ6SABVGEWY",
      name: "Fizzy D9 30mg Seltzer",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 7.99,
      quantity: 80,
    },
    {
      cloverId: "770QFHRQ9MFRJ",
      name: "Fizzy D9 30mg Seltzer 4pk",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 29.99,
      quantity: 80,
    },
    {
      cloverId: "HFHARQTD40BAG",
      name: "PHD Shake 1g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 4.99,
      quantity: 80,
    },
    {
      cloverId: "YAGFKK459A6GY",
      name: "PHD Shake 3.5g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "AYXMGYM4EFAYE",
      name: "PHD Shake 7g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 19.99,
      quantity: 80,
    },
    {
      cloverId: "7QEJ5JHP5K5PY",
      name: "PHD Shake 14g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 34.99,
      quantity: 80,
    },
    {
      cloverId: "8R08CK3RZBHE4",
      name: "PHD Shake 28g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "6NCACFYV5DN4R",
      name: "Yocan Hot Knife",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "BRXNWAZ5AT58Y",
      name: "NYB THCa Dabs",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "CHD2HFDM767NR",
      name: "Purple Mushroom Gummies 2ct",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 11.99,
      quantity: 80,
    },
    {
      cloverId: "WGAM6RWXMVTS2",
      name: "Hemp Living Hash Rosin 1g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "T0Z7FFTNP7XBP",
      name: "Hemp Living Diamond Sauce 2g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 59.99,
      quantity: 80,
    },
    {
      cloverId: "1Z0WSM3EF8RG0",
      name: "Hemp Living THCa Eighths",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 39.99,
      quantity: 80,
    },
    {
      cloverId: "2JHR7Z8PCWEM2",
      name: "Hemp Living THCa Prerolls 1g",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 11.99,
      quantity: 80,
    },
    {
      cloverId: "NQXH4004DF4NT",
      name: "Rare 3g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[7]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "X2ZEMP6M7JB4W",
      name: "Jungo Wraps",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 9.99,
      quantity: 80,
    },
    {
      cloverId: "DABJD90CM5A9M",
      name: "Dazed 2g THCa Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 54.99,
      quantity: 80,
    },
    {
      cloverId: "6KEXCZM4PA74G",
      name: "Dazed 2g THCa Cartridge",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 44.99,
      quantity: 80,
    },
    {
      cloverId: "XJFDR0SA2GERA",
      name: "CannaAid THCa Diamonds",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 49.99,
      quantity: 80,
    },
    {
      cloverId: "3FETRA3YGKNWJ",
      name: "Peak THCa THCp 2g Disposable",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media",
      category: categories[6]._id,
      price: 44.99,
      quantity: 80,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();
  await Order.deleteMany();

  await User.create({
    firstName: "Admin",
    lastName: "Account",
    email: "admin@test.com",
    password: "password",
    isAdmin: true,
    isVerified: true,
  });

  console.log("users seeded");

  process.exit();
});
