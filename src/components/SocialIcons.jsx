
// const SocialIcons = () => {
//     return (
//         <div className="flex justify-center gap-6 mt-6">
//             <a
//                 href="https://www.instagram.com/thebigfishke/?hl=en"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img
//                     src="https://cdn.prod.website-files.com/687a11f54d44d667252235a0/6880cc784e97e68290fa7086_instagram%20(1).svg"
//                     alt="Instagram"
//                     className="w-8 h-8 hover:scale-110 transition"
//                 />
//             </a>

//             <a
//                 href="https://www.tiktok.com/@thebigfish_ke"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img
//                     src="https://cdn.prod.website-files.com/687a11f54d44d667252235a0/6880cc778157d38adefbb19d_tik-tok%20(1).svg"
//                     alt="TikTok"
//                     className="w-8 h-8 hover:scale-110 transition"
//                 />
//             </a>

//             {/* <a
//                 href="hhttps://x.com/thebigfishke?lang=en"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img
//                     src="http://www.w3.org/2000/svg"
//                     alt="X (Twitter)"
//                     className="w-8 h-8 hover:scale-110 transition"
//                 />
//             </a> */}

//             <a
//                 href="https://www.facebook.com/thebigfishke/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img src="https://cdn.prod.website-files.com/687a11f54d44d667252235a0/6880cc77e89f48cc9cd024ff_facebook%20(1).svg" loading="lazy" width="40" alt="facebook icon" class="image-16" />
//             </a>
//         </div>
//     );
// };

// export default SocialIcons;



const SocialIcons = () => {
    return (
        <div className="flex justify-center gap-6 mt-6 text-white text-2xl">
            {/* Instagram */}
            <a
                 href="https://www.instagram.com/thebigfishke/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <i className="fa-brands fa-instagram hover:text-[#d00000] transition"></i>
            </a>

            {/* TikTok */}
            <a
                 href="https://www.tiktok.com/@thebigfish_ke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
            >
                <i className="fa-brands fa-tiktok hover:text-[#d00000] transition"></i>
            </a>

            {/* Facebook (FIXED) */}
            <a
                href="https://www.facebook.com/thebigfishke/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
            >
                <i className="fa-brands fa-facebook hover:text-[#d00000] transition"></i>
            </a>

            {/* X / Twitter (FIXED) */}
            <a
                 href="https://x.com/thebigfishke?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
            >
                <i className="fa-brands fa-x-twitter hover:text-[#d00000] transition"></i>
            </a>
        </div>
    );
};

export default SocialIcons;
