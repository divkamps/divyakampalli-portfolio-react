import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-8">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Education
        </motion.h1>

        <div>
          {EDUCATION.map((education, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              {/* Left Column — College Name (same spacing as year) */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-purple-100">
                  {education.collegeName}
                </p>
              </motion.div>

              {/* Right Column — Subjects (same spacing as experience details) */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                {education.subjects.map((sub, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 inline-flex whitespace-nowrap"
                  >
                    {sub}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
