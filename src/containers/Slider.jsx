import React, { useState } from "react";
import "./slider.css";
import { motion, AnimatePresence } from "framer-motion";
export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];
const [tomato, lettuce, cheese] = allIngredients;
export const tabs = [tomato, lettuce, cheese];
const Slider = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
            <h1 className="head">{selectedTab.label}</h1>
          </motion.div>
        </AnimatePresence>
      </main>
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Slider;
