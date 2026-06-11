'use client';
import Image from "next/image";
import { useRef ,useState} from "react";
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Star, CheckCircle2, CheckCircle, ShoppingBag, Droplets, CupSoda, Smile, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductDetails() {
  const productImages = [
  "/images/product-ginger.png",
  "/images/gingerchai.png",
];
  const reviewsRef = useRef<HTMLDivElement>(null);

const scrollLeft = () => {
  reviewsRef.current?.scrollBy({
    left: -320,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  reviewsRef.current?.scrollBy({
    left: 320,
    behavior: "smooth",
  });
};
const pricing = {
  "5ml": 243,
  "100ml": 1200,
  "1 Litre": 8500,
  "5 Litre": 35000,
};

const [selectedSize, setSelectedSize] = useState("5ml");
const [selectedImage, setSelectedImage] = useState(
  "/images/product-ginger.png"
);
  return (
    <div>
      <AnnouncementBar/>
      <Header/>
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <div className="bg-card rounded-xl border overflow-hidden">
              <Image
                src={selectedImage}
                alt="Irani Chai Extract"
                width={700}
                height={700}
                className="w-full object-cover"
              />
            </div>

            {/* Gallery */}
            <div className="flex gap-3 mt-4">
              {productImages.map((image) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`border rounded-lg overflow-hidden w-20 h-20 ${
                    selectedImage === image
                      ? "border-primary border-2"
                      : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div>

            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <span className="text-sm text-muted-foreground">
                (128 Reviews)
              </span>
            </div>

            <h1
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ginger Extract
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Pure ginger extract made to warm and heal fast. 
            </p>

            <div className="mb-6">
  <span className="text-3xl font-bold text-primary">
    ₹{pricing[selectedSize as keyof typeof pricing]}
  </span>
  <span className="ml-2 text-muted-foreground">
    onwards
  </span>
</div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">

              <Feature text="100% Natural Ingredients" />
              <Feature text="No Artificial Flavours" />
              <Feature text="Lab Tested Quality" />
              <Feature text="Made in India" />

            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Select Size
              </h3>

              <div className="flex flex-wrap gap-3">
  {Object.keys(pricing).map((size) => (
    <button
      key={size}
      onClick={() => setSelectedSize(size)}
      className={`px-4 py-2 rounded-lg border transition-all ${
        selectedSize === size
          ? "bg-primary text-white border-primary"
          : "border-border hover:border-primary"
      }`}
    >
      {size}
    </button>
  ))}
</div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917619610605"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-2 font-semibold"
            >
              <ShoppingBag size={18} />
              Order on WhatsApp
            </a>

          </div>
        </div>

        {/* Benefits */}
        <section
          className="mt-16 relative overflow-hidden rounded-2xl"
          style={{
            backgroundImage: "url('/images/teaimage.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 p-10">
            <h2
              className="text-3xl font-bold text-white mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Benefits
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-white text-2xl">
              <BenefitCard
                title="Supports Digestion"
                desc="Lemon and spices help improve digestion and reduce bloating."
              />

              <BenefitCard
                title="Boosts Immunity"
                desc="Rich in antioxidants and Vitamin C to strengthen immunity."
              />

              <BenefitCard
                title="Natural Detox"
                desc="Helps flush toxins and supports overall wellness."
              />

              <BenefitCard
                title="Refreshing & Energizing"
                desc="Perfect beverage to refresh and rejuvenate naturally."
              />
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section className="mt-16">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ingredients
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: "Ginger",
                image: "/images/ginger.png",
              },
              {
                name: "Clove",
                image: "/images/clove.png",
              },
              {
                name: "Cardamom",
                image: "/images/cardomom.png",
              },
              {
                name: "Cinnamon",
                image: "/images/cinnamon.png",
              },
            //   {
            //     name: "Natural Flavours",
            //     image: "/images/sideimage4.png",
            //   },
            ].map((item) => (
              <div
                key={item.name}
                className="border rounded-xl p-5 text-center hover:shadow-lg transition-all"
              >
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* How To Use */}
        <section className="mt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">

            {/* How To Use */}
            <div
              className="relative overflow-hidden rounded-2xl h-full"
              style={{
                backgroundImage: "url('/images/gingerchai.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 p-8">
                <h2
                  className="text-3xl font-bold text-white mb-8"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  How To Use
                </h2>

                <div className="space-y-8">

                  {/* Step 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Droplets size={28} className="text-white" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        Step 1
                      </h3>
                      <p className="text-white/90">
                        Add 10–15 drops into hot or cold water.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <CupSoda size={28} className="text-white" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        Step 2
                      </h3>
                      <p className="text-white/90">
                        Stir well and allow the tea to blend perfectly.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Smile size={28} className="text-white" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        Step 3
                      </h3>
                      <p className="text-white/90">
                        Enjoy a refreshing and flavorful cup instantly.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Packaging */}
            <div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border shadow-lg">
                <Image
                  src="/images/packaging.png"
                  alt="Packaging"
                  fill
                  className="object-cover"
                />
              </div>


              <div className="mt-2 bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Lightbulb size={20} className="text-primary" />
                </div>

                <div>
                  <p className="font-semibold">
                    Bulk packaging available for businesses and distributors.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Reviews */}
        <section className="mt-16 mb-10">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Customer Reviews
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left Side - Rating Summary */}
            <div className="border rounded-2xl p-8 shadow-sm">
              <div className="flex text-yellow-500 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={24} fill="currentColor" />
                ))}
              </div>

              <h3 className="text-4xl font-bold mb-2">
                4.8
              </h3>

              <p className="text-muted-foreground mb-6">
                Based on 128 reviews
              </p>

              <div className="space-y-3">

                {[
                  { star: 5, count: 102, width: "85%" },
                  { star: 4, count: 20, width: "20%" },
                  { star: 3, count: 4, width: "5%" },
                  { star: 2, count: 1, width: "2%" },
                  { star: 1, count: 1, width: "2%" },
                ].map((item) => (
                  <div
                    key={item.star}
                    className="flex items-center gap-3"
                  >
                    <span className="w-6 text-sm font-medium">
                      {item.star}
                    </span>

                    <Star
                      size={14}
                      fill="currentColor"
                      className="text-yellow-500"
                    />

                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-700 rounded-full"
                        style={{ width: item.width }}
                      />
                    </div>

                    <span className="text-sm w-8 text-right">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Reviews */}
            <div className="relative">

  {/* Arrows */}
  <div className="flex justify-end gap-2 mb-4">
    <button
      onClick={scrollLeft}
      className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-muted transition"
    >
      <ChevronLeft size={18} />
    </button>

    <button
      onClick={scrollRight}
      className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-muted transition"
    >
      <ChevronRight size={18} />
    </button>
  </div>

  {/* Reviews Slider */}
  <div
    ref={reviewsRef}
    className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
  >
    <div className="min-w-[300px]">
      <ReviewCard
        name="Ramesh"
        review="Amazing taste and very refreshing."
      />
    </div>

    <div className="min-w-[300px]">
      <ReviewCard
        name="Sneha"
        review="Perfect balance of tea and lemon."
      />
    </div>

    <div className="min-w-[300px]">
      <ReviewCard
        name="Amit"
        review="Easy to use and tastes great."
      />
    </div>

    <div className="min-w-[300px]">
      <ReviewCard
        name="Priya"
        review="Loved the aroma and freshness. Will definitely order again."
      />
    </div>

    <div className="min-w-[300px]">
      <ReviewCard
        name="Karthik"
        review="Excellent quality and very easy to prepare."
      />
    </div>

  </div>
</div>

          </div>
        </section>

      </div>
    </div>
    <Footer/>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle size={18} className="text-primary" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function BenefitCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5">
      <div className="flex items-start gap-3">
        <CheckCircle2
          size={20}
          className="text-green-500 shrink-0 mt-1"
        />

        <div>
          <h3 className="font-semibold text-white mb-2">
            {title}
          </h3>

          <p className="text-sm text-white">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function Step({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="border rounded-xl p-6 text-center">
      <div className="text-3xl font-bold text-primary mb-3">
        {number}
      </div>
      <p>{text}</p>
    </div>
  );
}

function ReviewCard({
  name,
  review,
}: {
  name: string;
  review: string;
}) {
  return (
    <div className="border rounded-xl p-5">
      <div className="flex text-yellow-500 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            fill="currentColor"
          />
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {review}
      </p>

      <p className="font-semibold">
        {name}
      </p>
    </div>
  );
}
