import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import { motion, useAnimation } from "framer-motion";
import imag from "./imag.png";
import pach from "./Untitled.png";
const Sprite = props => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  let direction1,
    direction2 = "forward";
  const directionEnum = {
    forward: "rewind",
    rewind: "forward"
  };
  const startAt1 = {
    28: 18,
    18: 28
  };
  const endEN = {
    30: 20,
    20: 30
  };
  const startAt2 = {
    "50%": "10%",
    "10%": "50%"
  };
  let start1 = 28;
  let end = 30;
  let start2 = "50%";
  let start3 = "50%";
  return (
    <>
      <div className="sprite1 animation">
        <Spritesheet
          image={imag}
          widthFrame={420}
          heightFrame={500}
          steps={14}
          loop={false}
          fps={14}
          autoplay={false}
          startAt={1}
          endAt={14}
          onClick={spritesheet => {
            spritesheet.goToAndPlay(1);
          }}
          onMouseEnter={spritesheet => {
            console.log(spritesheet.getInfo("frame"));
          }}
          onLoopComplete={spritesheet => {
            console.log("onLoopComplete");
          }}
        />
      </div>
      <div className="sprite2 animation">
        <motion.div animate={controls}>
          <Spritesheet
            image={
              "https://media.prod.mdn.mozit.cloud/attachments/2017/04/06/14847/069df3e8aeb6e88ea7b75767cff08770/walk-right.png"
            }
            widthFrame={102}
            scale={0.25}
            heightFrame={148}
            steps={12}
            loop={false}
            fps={14}
            direction={"forward"}
            autoplay={false}
            startAt={0}
            endAt={6}
            onClick={spritesheet => {
              controls.start({
                x: "50%",
                transition: { duration: 1 }
              });
              spritesheet.goToAndPlay(0);
            }}
            onEachFrame={spritesheet => {
              console.log("onEachFrame");
            }}
            onMouseEnter={spritesheet => {
              console.log(spritesheet.getInfo("frame"));
            }}
            onPause={spritesheet => {
              console.log("onLoopComplete");
            }}
          />
        </motion.div>
      </div>
      <div className="sprite3 animation">
        <motion.div animate={controls2}>
          <Spritesheet
            image={"https://i.imgur.com/mvqg4CI.png"}
            widthFrame={64}
            scale={20}
            heightFrame={64}
            steps={9}
            loop={false}
            fps={14}
            direction={"forward"}
            autoplay={false}
            startAt={28}
            endAt={32}
            onClick={spritesheet => {
              controls2.start({
                x: "50%",
                transition: { duration: 1 }
              });
              spritesheet.goToAndPlay(28);
            }}
            onMouseEnter={spritesheet => {
              console.log(spritesheet.getInfo("frame"));
            }}
            onPause={spritesheet => {
              console.log("onLoopComplete");
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Sprite;
