import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import one from "../../../assets/javascript.jpg";
import two from "../../../assets/js.jpg";

const JavascriptPromise = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [position, setPosition] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.3) setPosition(1);
    else if (latest > 0.3 && latest < 0.5) {
      return setPosition(2);
    } else if (latest > 0.5 && latest < 0.8) {
      return setPosition(3);
    } else setPosition(4);
  });

  const section1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const section2Opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const section3Opacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <div>
      <div ref={ref} className="text-red-500">
        <div
          className={`Merriweather py-20 tracking-10 text-lg font-light ${
            position === 1 && "bg-green-600"
          }`}
        >
          Learning about javascript promises possimus blanditiis minima eos modi
          quasi voluptatem, voluptas cumque exercitationem asperiores, nihil
          iste necessitatibus, saepe deleniti dolores et quia aliquid totam
          dolor. Aut quia non reprehenderit quo quaerat labore deserunt
          cupiditate delectus, similique magnam quas provident hic rerum
          molestiae voluptate reiciendis, dolorum ea nemo. Doloribus officia
          iure laudantium odio ipsam, sit quod blanditiis vitae
        </div>

        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-64 h-64">
          <motion.img
            src={one}
            alt="Image 1"
            className="absolute w-full h-full object-cover"
            style={{ opacity: section1Opacity }}
          />
          <motion.img
            src={two}
            alt="Image 2"
            className="absolute w-full h-full object-cover"
            style={{ opacity: section2Opacity }}
          />
          <motion.img
            src="/image3.jpg"
            alt="Image 3"
            className="absolute w-full h-full object-cover"
            style={{ opacity: section3Opacity }}
          />
        </div>

        <div>
          <div className="w-full flex flex-col items-center space-y-40">
            <div className="h-screen flex items-center justify-center text-4xl">
              Section 1
            </div>
            <div className="h-screen flex items-center justify-center text-4xl">
              Section 2
            </div>
            <div className="h-screen flex items-center justify-center text-4xl">
              Section 3
            </div>
          </div>
        </div>
        <section className="py-16">
          <div className="Merriweather py-20 tracking-10 text-lg font-light">
            Learning about javascript promises possimus blanditiis minima eos
            modi quasi voluptatem, voluptas cumque exercitationem asperiores,
            nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
            totam dolor. Aut quia non reprehenderit quo quaerat labore deserunt
            cupiditate delectus, similique magnam quas provident hic rerum
            molestiae voluptate reiciendis, dolorum ea nemo. Doloribus officia
            iure laudantium odio ipsam, sit quod blanditiis vitae
          </div>
        </section>
        <section>
          <div className="Merriweather py-20 tracking-10 text-lg font-light">
            Learning about javascript promises possimus blanditiis minima eos
            modi quasi voluptatem, voluptas cumque exercitationem asperiores,
            nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
            totam dolor. Aut quia non reprehenderit quo quaerat labore deserunt
            cupiditate delectus, similique magnam quas provident hic rerum
            molestiae voluptate reiciendis, dolorum ea nemo. Doloribus officia
            iure laudantium odio ipsam, sit quod blanditiis vitae
          </div>
        </section>

        <section>
          <div className="Merriweather py-20 tracking-10 text-lg font-light">
            Learning about javascript promises possimus blanditiis minima eos
            modi quasi voluptatem, voluptas cumque exercitationem asperiores,
            nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
            totam dolor. Aut quia non reprehenderit quo quaerat labore deserunt
            cupiditate delectus, similique magnam quas provident hic rerum
            molestiae voluptate reiciendis, dolorum ea nemo. Doloribus officia
            iure laudantium odio ipsam, sit quod blanditiis vitae
          </div>
        </section>

        <section>
          {" "}
          <div className="Merriweather py-20 tracking-10 text-lg font-light">
            Learning about javascript promises possimus blanditiis minima eos
            modi quasi voluptatem, voluptas cumque exercitationem asperiores,
            nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
            totam dolor. Aut quia non reprehenderit quo quaerat labore deserunt
            cupiditate delectus, similique magnam quas provident hic rerum
            molestiae voluptate reiciendis, dolorum ea nemo. Doloribus officia
            iure laudantium odio ipsam, sit quod blanditiis vitae
          </div>
        </section>
        <section>
          <div
            className={`Merriweather py-20 tracking-10 text-lg font-light ${
              position === 3 && "bg-red-500"
            }`}
          >
            Learning about javascript promises possimus blanditiis minima eos
            modi quasi voluptatem, voluptas cumque exercitationem asperiores,
            nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
            totam dolor. Aut quia non reprehenderit quo quaerat labore deserunt
            cupiditate delectus, similique magnam quas provident hic rerum
            molestiae voluptate reiciendis, dolorum ea nemo. Doloribus officia
            iure laudantium odio ipsam, sit quod blanditiis vitae
          </div>
        </section>

        <section>
          <div className={`Merriweather py-20 tracking-10 text-lg font-light`}>
            Learning about javascript promises possimus blanditiis minima eos
            modi quasi voluptatem, voluptas cumque exercitationem asperiores,
            nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
            totam dolor. Aut quia non reprehenderit quo quaerat labore deserunt
            cupiditate delectus, similique magnam quas provident hic rerum
            molestiae voluptate reiciendis, dolorum ea nemo. Doloribus officia
            iure laudantium odio ipsam, sit quod blanditiis vitae
          </div>
        </section>

        <section>
          <div
            className={`Merriweather py-20 tracking-10 text-lg font-light ${
              position === 4 && "bg-blue-500"
            }`}
          >
            Learning about javascript promises possimus blanditiis minima eos
            modi quasi voluptatem, voluptas cumque exercitationem asperiores,
            nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
            totam dolor. Aut quia non reprehenderit quo quaerat labore deserunt
            cupiditate delectus, similique magnam quas provident hic rerum
            molestiae voluptate reiciendis, dolorum ea nemo. Doloribus officia
            iure laudantium odio ipsam, sit quod blanditiis vitae
          </div>
        </section>
      </div>
    </div>
  );
};

export default JavascriptPromise;
