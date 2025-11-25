"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Gsapto = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      rotation: 360,
      x: 300,
      duration: 10,
      ease: "power4.inOut",
    });
  }, []);
  return (
    <div className="mt-20">
      <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
    </div>
  );
};

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {  },
      { x: 300, rotation: 360, borderRadius: "100%", duration: 7, ease: "elastic" }
    
    );
  }, []);
  return (
    <div className="mt-20">
      <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg"></div>
    </div>
  );
};

const Gsaptimeline = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to("#box", { x: 300, duration: 2, ease: "power1.inOut" })
      .to("#box", { rotation: 360, duration: 2, ease: "power1.inOut" })
      .to("#box", { borderRadius: "50%", duration: 2, ease: "power1.inOut" });
  }, []);
  return (
    <div className="mt-20">
      <div id="box" className="w-20 h-20 bg-purple-500 rounded-lg"></div>
    </div>
  );
};
const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      rotation: 360,
      x: 300,
      duration: 10,
      ease: "power4.inOut",
    });
  }, []);
  return (
    <div className="mt-20">
      <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg"></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Gsapto />
      <GsapFromTo />
      <GsapFrom />
      <Gsaptimeline />
    </>
  );
}
