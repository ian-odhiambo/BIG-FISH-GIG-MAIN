import galleryImage1 from "../assets/Images/BIG-1.jpeg";
import galleryImage2 from "../assets/Images/BIG-2.jpeg";
import galleryImage3 from "../assets/Images/BIG-3.jpeg";
import galleryImage4 from "../assets/Images/BIG-4.jpeg";
import galleryImage5 from "../assets/Images/BIG-5.jpeg";
import galleryImage6 from "../assets/Images/BIG-6.jpeg";
import galleryImage7 from "../assets/Images/BIG-7.jpeg";
import galleryImage8 from "../assets/Images/BIG-8.jpeg";
import galleryImage9 from "../assets/Images/BIG-9.jpeg";
import galleryImage10 from "../assets/Images/BIG-10.jpeg";
import galleryImage11 from "../assets/Images/BIG-11.jpeg";

const Gallery = () => {
  return (
    <div className="gallery-container px-4 py-8">
      <div className="gallery-header text-center mb-8">
        <h1 className="gallery-title text-blue-950 text-3xl font-bold mb-2">True taste, ever fresh</h1>
        <p className="gallery-subtitle text-red-500 text-lg">Brunch Moments</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ImageCard img={galleryImage1} />
        <ImageCard img={galleryImage2} />
        <ImageCard img={galleryImage3} />
        <ImageCard img={galleryImage4} />
        <ImageCard img={galleryImage5} />
        <ImageCard img={galleryImage6} />
        <ImageCard img={galleryImage7} />
        <ImageCard img={galleryImage8} />
        <ImageCard img={galleryImage9} />
        <ImageCard img={galleryImage10} />
        <ImageCard img={galleryImage11} />
      </div>
    </div>
  );
}

function ImageCard({ img }) {
  return (
    <div className="image-card overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <img 
        src={img} 
        alt="Brunch" 
        className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

export default Gallery;