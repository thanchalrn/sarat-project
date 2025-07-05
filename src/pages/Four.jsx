import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Four() {
  const navigate = useNavigate();
  const [showHint, setShowHint] = useState(false);
  const totalFramesPerFolder = 100;
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isInFolder2, setIsInFolder2] = useState(false);
  const [ans3, setAns3] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame(prev => {
        // กรณีอยู่โฟลเดอร์ 2 ให้วนที่ 0-99 ตลอด
        if (isInFolder2) {
          return (prev + 1) % totalFramesPerFolder;
        }
        // กรณีโฟลเดอร์ 1
        if (prev + 1 >= totalFramesPerFolder) {
          setIsInFolder2(true);
          return 0; // เริ่มนับโฟลเดอร์ 2 จากเฟรม 0
        }
        return prev + 1;
      });
    }, 100);
  
    return () => clearInterval(interval);
  }, [isInFolder2]);
  
  const folder = isInFolder2 ? 2 : 1;
  const frameNumber = currentFrame + 1;
  const imagePath = `/frames/${folder}/frame${String(frameNumber).padStart(4, '0')}.png`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  
  const handleSelect = (answer) => {
    setAns3(answer);
    localStorage.setItem("ans3", answer);
    navigate("/five");
  };
  
  return (
    <div className="prologue-container" onClick={() => navigate("/three")}>
      
      {/* พื้นหลัง */}
      <img 
        src={imagePath} 
        alt="background animation" 
        className="background-animation"
      />


      {/* กรอบกลางควบคุมขนาด */}
      <div className="text-wrapper">

      <motion.p
          className="prologue-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          คุณในตอนนั้น
        </motion.p>
        <motion.p
          className="prologue-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          กับคุณในตอนนี้ ต่างกันมากมั้ย
        </motion.p>
        <motion.div
            className="prologue-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            >
            <button
                onClick={(e) => {
                e.stopPropagation();
                handleSelect("YES");
                }}
                className="answer-button"
            >
                ต่างนะ
            </button>

            <button
                onClick={(e) => {
                e.stopPropagation();
                handleSelect("NO");
                }}
                className="answer-button"
            >
                ไม่ต่างอะไรเลย
            </button>
            </motion.div>

      </div>
    </div>
  );
}
