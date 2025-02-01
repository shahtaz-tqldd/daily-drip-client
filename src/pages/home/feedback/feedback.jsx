import { quote } from "@/assets/icons";
import { Star, StarHalf } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { feedback } from "./data";

const Feedback = () => {
  return (
    <div>
      <div className="container py-24">
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl text-center font-semibold text-black/70"
        >
          Our Coffee Perfection Feedback
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-5 text-black/75 max-w-3xl mx-auto text-center"
        >
          Our delecate drink option include classic espresso choises, house
          spececialities
        </motion.p>

        <div className="mt-20 grid grid-cols-2 gap-10">
          {feedback?.map((feedback, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="absolute left-10 -top-6 bg-background px-3 rotate-180">
                {quote}
              </div>
              <div className="absolute right-10 -bottom-6 bg-background px-3">
                {quote}
              </div>
              <div className="border-2 border-primary rounded-xl p-4">
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p>{feedback.comment}</p>
                  <div className="flex justify-between items-end mt-8">
                    <div className="flex gap-4">
                      <img
                        src={feedback?.photo}
                        className="h-14 w-14 border-2 border-primary p-1 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-lg font-medium">{feedback.name}</h2>
                        <p>{feedback.designation}</p>
                      </div>
                    </div>
                    <div className="flex">{generateStars(feedback.rating)}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;

function generateStars(rating) {
  const stars = [];

  // Iterate through 1 to 5 for each star
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full star if rating is greater or equal to the current star index
      stars.push(
        <Star key={i} fill="#b27457" stroke="#b27457" className="w-5 h-5" />
      );
    } else if (rating > i - 1 && rating < i) {
      // Half star if rating is between the previous and current index
      stars.push(
        <StarHalf key={i} fill="#b27457" stroke="#b27457" className="w-5 h-5" />
      );
    } else {
      // Empty star if rating is less than the current index
      stars.push(<Star key={i} stroke="#b27457" className="w-5 h-5" />);
    }
  }

  return stars;
}
