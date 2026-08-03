export type ProductIngredient = {
  name: string
  image?: string
}

export type ProductReview = {
  name: string
  review: string
}

export type ProductPricing = {
  '5ml': number
  '100ml': number
  '1 Litre': number
  '5 Litre': number
}

export type Product = {
  id: string
  slug: string
  name: string
  shortName: string
  description: string
  href: string
  productImages: string[]
  beverageImage: string
  benefitsImage: string
  howToUseBackground: string
  ingredients: ProductIngredient[]
  benefits: string[]
  howToUse: string
  howToUseSteps: [string, string, string]
  reviews: ProductReview[]
  pricing: ProductPricing
}

export const sizeOptions: (keyof ProductPricing)[] = [
  '5ml',
  '100ml',
  '1 Litre',
  '5 Litre',
]

export const keyHighlights = [
  'Natural Extracts',
  'Just 1–2 Drops',
  'Easy to Use',
  'No Tea Extract Used',
] as const

export const whyLeafNRoots = [
  '100% Natural Spice & Herb Extracts',
  'No Tea Extract Used',
  'No Artificial Tea Flavour',
  'Just 1–2 Drops Required',
  'Easy to Carry & Use',
  'Perfect for Tea, Coffee, Milk, Hot Water & Beverages',
] as const

export const products: Product[] = [
  {
    id: 'masala-blend',
    slug: 'masalachai',
    name: 'Masala Blend Tea Drops',
    shortName: 'Masala Blend',
    description:
      'Rich authentic Indian masala chai flavour — a convenient alternative to whole spices.',
    href: '/products/masalachai',
    pricing: {
      '5ml': 270,
      '100ml': 1350,
      '1 Litre': 12500,
      '5 Litre': 45000,
    },
    productImages: [
      '/images/product-masala-chai.png',
      '/images/client-masala-1.png',
      '/images/client-masala-2.png',
      '/images/client-masala-3.png',
    ],
    beverageImage: '/images/client-masala-1.png',
    benefitsImage: '/images/client-masala-2.png',
    howToUseBackground: '/images/client-masala-3.png',
    ingredients: [
      { name: 'Ginger Extract', image: '/images/ginger.png' },
      { name: 'Cardamom Extract', image: '/images/cardomom.png' },
      { name: 'Cinnamon Extract', image: '/images/cinnamon.png' },
      { name: 'Clove Extract', image: '/images/clove.png' },
      { name: 'Black Pepper Extract', image: '/images/pepper.png' },
    ],
    benefits: [
      'Rich authentic Indian masala chai flavour',
      'Supports digestion',
      'Warming and refreshing',
      'Natural aroma and taste',
      'Convenient alternative to whole spices',
    ],
    howToUse:
      'Add 1–2 drops to hot tea, black tea, milk tea, coffee, hot water or desserts. Stir well and enjoy.',
    howToUseSteps: [
      'Add 1–2 drops to hot tea, black tea, milk tea, coffee, hot water or desserts.',
      'Stir well and allow the flavour to blend perfectly.',
      'Enjoy a rich, authentic masala chai experience instantly.',
    ],
    reviews: [
      {
        name: '~ Imran Khan',
        review: 'Strong and authentic masala chai flavour. Highly recommended.',
      },
      {
        name: '~ Shruthi Hegde',
        review: 'Perfect blend of spices and very convenient to use.',
      },
      {
        name: '~ Roshan Lobo',
        review: 'Tastes just like homemade masala chai. Excellent product.',
      },
    ],
  },
  {
    id: 'ginger',
    slug: 'ginger',
    name: 'Ginger Drops',
    shortName: 'Ginger',
    description:
      'Natural ginger extract that adds a refreshing spicy flavour to tea, coffee and recipes.',
    href: '/products/ginger',
    pricing: {
      '5ml': 170,
      '100ml': 750,
      '1 Litre': 7000,
      '5 Litre': 30000,
    },
    productImages: [
      '/images/product-ginger.png',
      '/images/client-ginger-1.png',
      '/images/client-ginger-2.png',
      '/images/client-ginger-3.png',
    ],
    beverageImage: '/images/client-ginger-1.png',
    benefitsImage: '/images/client-ginger-2.png',
    howToUseBackground: '/images/client-ginger-3.png',
    ingredients: [
      { name: 'Natural Ginger Extract', image: '/images/ginger.png' },
    ],
    benefits: [
      'Supports healthy digestion',
      'Helps reduce bloating',
      'Refreshing spicy flavour',
      'Comforting during cold weather',
      'Adds natural ginger taste instantly',
    ],
    howToUse: 'Add 1–2 drops to tea, hot water, coffee, juice or recipes.',
    howToUseSteps: [
      'Add 1–2 drops to tea, hot water, coffee, juice or recipes.',
      'Stir well and allow the ginger flavour to blend.',
      'Enjoy a warm, spicy cup instantly.',
    ],
    reviews: [
      {
        name: '~ Ananya Rao',
        review: 'Instant ginger warmth in every cup. Perfect for winters.',
      },
      {
        name: '~ Vikram Shetty',
        review: 'Helps with digestion and tastes completely natural.',
      },
      {
        name: '~ Meera Pinto',
        review: 'Just a drop or two and my tea tastes amazing.',
      },
    ],
  },
  {
    id: 'cardamom',
    slug: 'cardamom',
    name: 'Cardamom Drops',
    shortName: 'Cardamom',
    description:
      'Premium cardamom aroma that gives café-style taste to tea, coffee and desserts.',
    href: '/products/cardamom',
    pricing: {
      '5ml': 270,
      '100ml': 1350,
      '1 Litre': 12500,
      '5 Litre': 45000,
    },
    productImages: [
      '/images/product-cardamom.png',
      '/images/client-cardamom-1.png',
      '/images/client-cardamom-2.png',
      '/images/client-cardamom-3.png',
    ],
    beverageImage: '/images/client-cardamom-1.png',
    benefitsImage: '/images/client-cardamom-2.png',
    howToUseBackground: '/images/client-cardamom-3.png',
    ingredients: [
      { name: 'Natural Cardamom Extract', image: '/images/cardomom.png' },
    ],
    benefits: [
      'Premium cardamom aroma',
      'Freshens breath naturally',
      'Supports digestion',
      'Enhances flavour of beverages and desserts',
      'Gives café-style taste',
    ],
    howToUse: 'Add 1–2 drops to tea, coffee, milk, desserts or sweets.',
    howToUseSteps: [
      'Add 1–2 drops to tea, coffee, milk, desserts or sweets.',
      'Stir well to release the premium cardamom aroma.',
      'Enjoy a café-style flavour instantly.',
    ],
    reviews: [
      {
        name: '~ Farah Begum',
        review: 'The aroma is premium — my milk tea tastes like café cardamom chai.',
      },
      {
        name: '~ Nikhil Pai',
        review: 'Freshens the breath and adds lovely flavour. Love it.',
      },
      {
        name: '~ Divya Kamath',
        review: 'A few drops transform ordinary tea into something special.',
      },
    ],
  },
  {
    id: 'detox',
    slug: 'detox',
    name: 'Detox Tea Drops',
    shortName: 'Detox',
    description:
      'Refreshing herbal blend for a pleasant daily wellness drink.',
    href: '/products/detox',
    pricing: {
      '5ml': 170,
      '100ml': 750,
      '1 Litre': 7000,
      '5 Litre': 30000,
    },
    productImages: [
      '/images/product-detox.png',
      '/images/client-detox-1.png',
      '/images/client-detox-2.png',
      '/images/client-detox-3.png',
    ],
    beverageImage: '/images/client-detox-1.png',
    benefitsImage: '/images/client-detox-2.png',
    howToUseBackground: '/images/client-detox-3.png',
    ingredients: [
      { name: 'Ginger Extract', image: '/images/ginger.png' },
      { name: 'Tulsi Extract', image: '/images/ingredient-tulsi.png' },
      { name: 'Mint Extract', image: '/images/ingredient-mint.png' },
      { name: 'Cinnamon Extract', image: '/images/cinnamon.png' },
    ],
    benefits: [
      'Refreshing herbal taste',
      'Supports digestion',
      'Helps you feel refreshed',
      'Pleasant daily wellness drink',
      'Natural herbal goodness',
    ],
    howToUse:
      'Add 1–2 drops to hot water, green tea, herbal tea or warm water.',
    howToUseSteps: [
      'Add 1–2 drops to hot water, green tea, herbal tea or warm water.',
      'Stir well and let the herbal notes blend.',
      'Enjoy a refreshing wellness drink.',
    ],
    reviews: [
      {
        name: '~ Sneha Rodrigues',
        review: 'Light, refreshing herbal taste — perfect for my morning routine.',
      },
      {
        name: '~ Arjun Nair',
        review: 'Simple to use and feels clean and natural every day.',
      },
      {
        name: "~ Priya D'Souza",
        review: 'Great alternative to brewing herbs from scratch.',
      },
    ],
  },
  {
    id: 'irani-chai',
    slug: 'iranichai',
    name: 'Irani Chai Drops',
    shortName: 'Irani Chai',
    description:
      'Authentic Irani café flavour with rich aroma for an everyday indulgence.',
    href: '/products/iranichai',
    pricing: {
      '5ml': 310,
      '100ml': 2150,
      '1 Litre': 20500,
      '5 Litre': 71500,
    },
    productImages: [
      '/images/product-irani-chai.png',
      '/images/client-irani-1.png',
      '/images/client-irani-2.png',
      '/images/client-irani-3.png',
    ],
    beverageImage: '/images/client-irani-1.png',
    benefitsImage: '/images/client-irani-2.png',
    howToUseBackground: '/images/client-irani-3.png',
    ingredients: [
      { name: 'Cardamom Extract', image: '/images/cardomom.png' },
      { name: 'Cinnamon Extract', image: '/images/cinnamon.png' },
      { name: 'Lemon grass extract', image: '/images/lemongrass.png' },
    ],
    benefits: [
      'Authentic Irani café flavour',
      'Rich aroma and premium taste',
      'Enhances milk tea instantly',
      'Luxurious chai experience',
      'Perfect for everyday indulgence',
    ],
    howToUse: 'Add 1–2 drops to hot milk tea, black tea or coffee.',
    howToUseSteps: [
      'Add 1–2 drops to hot milk tea, black tea or coffee.',
      'Stir well for a rich café-style aroma.',
      'Enjoy a luxurious Irani chai experience.',
    ],
    reviews: [
      {
        name: '~ Rehan Ali',
        review: 'Tastes just like authentic Irani café chai. Superb.',
      },
      {
        name: '~ Kavitha Shenoy',
        review: 'Rich aroma and premium taste in every cup.',
      },
      {
        name: "~ Joseph D'Silva",
        review: 'My daily milk tea feels luxurious now.',
      },
    ],
  },
  {
    id: 'kashmir-kahwa',
    slug: 'kashmirkahwa',
    name: 'Kashmir Kahwa Drops',
    shortName: 'Kashmir Kahwa',
    description:
      'Authentic Kashmiri Kahwa flavour with rich saffron aroma — traditional taste, instantly.',
    href: '/products/kashmirkahwa',
    pricing: {
      '5ml': 280,
      '100ml': 1350,
      '1 Litre': 12500,
      '5 Litre': 45000,
    },
    productImages: [
      '/images/product-kashmir-kahwa.png',
      '/images/client-kahwa-1.png',
      '/images/client-kahwa-2.png',
      '/images/client-kahwa-3.png',
    ],
    beverageImage: '/images/client-kahwa-1.png',
    benefitsImage: '/images/client-kahwa-2.png',
    howToUseBackground: '/images/client-kahwa-3.png',
    ingredients: [
      { name: 'Saffron Extract', image: '/images/saffron.png' },
      { name: 'Cardamom Extract', image: '/images/cardomom.png' },
      { name: 'Cinnamon Extract', image: '/images/cinnamon.png' },
      { name: 'Almond oil', image: '/images/ingredient-almond-oil.png' },
    ],
    benefits: [
      'Authentic Kashmiri Kahwa flavour',
      'Rich saffron aroma',
      'Refreshing and soothing',
      'Premium herbal experience',
      'Enjoy traditional taste instantly',
    ],
    howToUse:
      'Add 1–2 drops to hot water, green tea, black tea or warm beverages.',
    howToUseSteps: [
      'Add 1–2 drops to hot water, green tea, black tea or warm beverages.',
      'Stir well to release the saffron and spice aroma.',
      'Enjoy traditional Kashmiri Kahwa instantly.',
    ],
    reviews: [
      {
        name: '~ Ayesha Khan',
        review: 'Beautiful saffron aroma — feels like real Kashmiri Kahwa.',
      },
      {
        name: '~ Rohan Bhat',
        review: 'Soothing, premium and so easy to prepare.',
      },
      {
        name: '~ Latika Menon',
        review: 'Traditional taste without the long brewing process.',
      },
    ],
  },
  {
    id: 'lemon-mint-masala',
    slug: 'lemontea',
    name: 'Lemon Mint Masala Blend Drops',
    shortName: 'Lemon Mint Masala',
    description:
      'Fresh lemon and mint flavour with a zesty twist — perfect for summer drinks.',
    href: '/products/lemontea',
    pricing: {
      '5ml': 200,
      '100ml': 900,
      '1 Litre': 8000,
      '5 Litre': 32000,
    },
    productImages: [
      '/images/product-black-lemon.png',
      '/images/client-lemonmint-1.png',
      '/images/client-lemonmint-2.png',
      '/images/client-lemonmint-3.png',
    ],
    beverageImage: '/images/client-lemonmint-1.png',
    benefitsImage: '/images/client-lemonmint-2.png',
    howToUseBackground: '/images/client-lemonmint-3.png',
    ingredients: [
      { name: 'Lemon Extract', image: '/images/lemon.png' },
      { name: 'Mint Extract', image: '/images/ingredient-mint.png' },
      { name: 'Ginger Extract', image: '/images/ginger.png' },
    ],
    benefits: [
      'Fresh lemon and mint flavour',
      'Refreshing and cooling taste',
      'Supports digestion',
      'Perfect for summer drinks',
      'Adds a zesty twist to beverages',
    ],
    howToUse:
      'Add 1–2 drops to hot tea, iced tea, water, lemonade or juices.',
    howToUseSteps: [
      'Add 1–2 drops to hot tea, iced tea, water, lemonade or juices.',
      'Stir well for a fresh lemon-mint twist.',
      'Enjoy a cool, zesty beverage anytime.',
    ],
    reviews: [
      {
        name: '~ Tanya Fernandes',
        review: 'So refreshing — lemon and mint come through beautifully.',
      },
      {
        name: '~ Harish Gowda',
        review: 'Perfect in iced tea and lemonade during summer.',
      },
      {
        name: '~ Ishita Banerjee',
        review: 'Light, cooling and easy to use every day.',
      },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
