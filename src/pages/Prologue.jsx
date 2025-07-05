import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Prologue() {
  const navigate = useNavigate();
  const [showHint, setShowHint] = useState(false);
  const totalFramesPerFolder = 100;
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isInFolder2, setIsInFolder2] = useState(false);
  
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
  
  return (
    <div className="prologue-container" onClick={() => navigate("/one")}>
      
      {/* พื้นหลัง */}
      <img 
        src={imagePath} 
        alt="background animation" 
        className="background-animation"
      />


      {/* กรอบกลางควบคุมขนาด */}
      <div className="text-wrapper">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          สวัสดีคุณสรัสวันต์
        </motion.h1>

        <motion.p
          className="prologue-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          ทำใจให้สบาย นี่คือพื้นที่ปลอดภัยสำหรับคุณ
        </motion.p>

        {showHint && (
          <motion.div
            className="prologue-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            คลิกที่ใดก็ได้เพื่อไปต่อ
          </motion.div>
        )}
      </div>
    </div>
  );
}
