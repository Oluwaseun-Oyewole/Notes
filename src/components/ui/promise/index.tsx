import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import jsImage2 from "../../../assets/javascript.jpg";
import jsImage from "../../../assets/js.jpg";

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

  const section1Opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const section2Opacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  return (
    <div>
      <div ref={ref} className="flex">
        <div className="bg-gray-800 basis-1/2 min-h-screen flex items-center justify-center flex-col">
          <motion.img
            src={jsImage}
            className="w-60 h-60 rounded-lg"
            style={{ opacity: section1Opacity }}
          />
          <motion.img
            src={jsImage2}
            className="w-60 h-60 rounded-lg"
            style={{ opacity: section2Opacity }}
          />
        </div>
        <div className="basis-1/2 min-h-screen overflow-y-scroll bg-gray-200 text-black">
          <section className="py-16">
            <div
              className={`Merriweather py-20 tracking-10 text-lg font-light ${
                position === 1 && "bg-green-500"
              }`}
            >
              Learning about javascript promises possimus blanditiis minima eos
              modi quasi voluptatem, voluptas cumque exercitationem asperiores,
              nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
              totam dolor. Aut quia non reprehenderit quo quaerat labore
              deserunt cupiditate delectus, similique magnam quas provident hic
              rerum molestiae voluptate reiciendis, dolorum ea nemo. Doloribus
              officia iure laudantium odio ipsam, sit quod blanditiis vitae
            </div>
          </section>
          <section>
            <div className="Merriweather py-20 tracking-10 text-lg font-light">
              Learning about javascript promises possimus blanditiis minima eos
              modi quasi voluptatem, voluptas cumque exercitationem asperiores,
              nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
              totam dolor. Aut quia non reprehenderit quo quaerat labore
              deserunt cupiditate delectus, similique magnam quas provident hic
              rerum molestiae voluptate reiciendis, dolorum ea nemo. Doloribus
              officia iure laudantium odio ipsam, sit quod blanditiis vitae
            </div>
          </section>

          <section>
            <div className="Merriweather py-20 tracking-10 text-lg font-light">
              Learning about javascript promises possimus blanditiis minima eos
              modi quasi voluptatem, voluptas cumque exercitationem asperiores,
              nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
              totam dolor. Aut quia non reprehenderit quo quaerat labore
              deserunt cupiditate delectus, similique magnam quas provident hic
              rerum molestiae voluptate reiciendis, dolorum ea nemo. Doloribus
              officia iure laudantium odio ipsam, sit quod blanditiis vitae
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
              totam dolor. Aut quia non reprehenderit quo quaerat labore
              deserunt cupiditate delectus, similique magnam quas provident hic
              rerum molestiae voluptate reiciendis, dolorum ea nemo. Doloribus
              officia iure laudantium odio ipsam, sit quod blanditiis vitae
            </div>
          </section>

          <section>
            <div
              className={`Merriweather py-20 tracking-10 text-lg font-light`}
            >
              Learning about javascript promises possimus blanditiis minima eos
              modi quasi voluptatem, voluptas cumque exercitationem asperiores,
              nihil iste necessitatibus, saepe deleniti dolores et quia aliquid
              totam dolor. Aut quia non reprehenderit quo quaerat labore
              deserunt cupiditate delectus, similique magnam quas provident hic
              rerum molestiae voluptate reiciendis, dolorum ea nemo. Doloribus
              officia iure laudantium odio ipsam, sit quod blanditiis vitae
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
              totam dolor. Aut quia non reprehenderit quo quaerat labore
              deserunt cupiditate delectus, similique magnam quas provident hic
              rerum molestiae voluptate reiciendis, dolorum ea nemo. Doloribus
              officia iure laudantium odio ipsam, sit quod blanditiis vitae
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JavascriptPromise;
