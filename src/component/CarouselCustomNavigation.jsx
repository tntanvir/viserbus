import { Carousel } from "@material-tailwind/react";
import { Review } from "./Review";

export function CarouselCustomNavigation() {
    return (
        <Carousel
            className="rounded-xl w-4/5 h-96 shadow-lg "
            // autoplay={true}
            // loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className="bg-blue-gray-50 p-2 h-full">
                <Review />
            </div>
            <div className="bg-blue-gray-50 p-2 h-full">
                <Review />

            </div>
            <div className="bg-blue-gray-50 p-2 h-full">
                <Review />

            </div>
        </Carousel>
    );
}