const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Edible' },
    { name: 'Flower' },
    { name: 'Pens' },
    { name: 'Extras' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Space Cloud',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta83.png?alt=media',
      category: categories[1]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Fruit Juice Delight',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta82.png?alt=media',
      category: categories[1]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Blueberry Haze',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta85.png?alt=media',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Cosmic Gummies',
      category: categories[0]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta8edi1.png?alt=media',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Apple Fritter',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta8pen1.png?alt=media',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Mango Haze',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta8pen2.png?alt=media',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Hash Chips',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta8extra2.png?alt=media',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Peace Tea',
      category: categories[3]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'https://firebasestorage.googleapis.com/v0/b/paradise-hemp-imgbucket.appspot.com/o/images%2Fdelta8extra1.png?alt=media',
      price: 2.99,
      quantity: 1000
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Admin',
    lastName: 'Account',
    email: 'admin@test.com',
    password: 'password',
    isAdmin: true, 
    isVerified: true,
  });

  console.log('users seeded');

  process.exit();
});
