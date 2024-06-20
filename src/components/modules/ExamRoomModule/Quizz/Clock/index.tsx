import React, { useState, useEffect } from "react";
import "./style.css";
// https://3d-countdown.netlify.app/
function FlipClock() {
  // * To flip all card
  const flipAllCards = (time: any) => {
    // * Breaking the time into sec, min, hours
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
    flip(document.querySelector("[data-hours-ones]"), hours % 10);
    flip(
      document.querySelector("[data-minutes-tens]"),
      Math.floor(minutes / 10),
    );
    flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
    flip(
      document.querySelector("[data-seconds-tens]"),
      Math.floor(seconds / 10),
    );
    flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
  };

  // * call to flip single card
  const flip = (flipCard: any, newNumber: any) => {
    const top = flipCard.querySelector(".top");
    const bottom = flipCard.querySelector(".bottom");
    const startNumber = flipCard.querySelector(".top").textContent;

    // ! it will check if your past value is same as newvalue it will return;
    if (newNumber == startNumber) return;

    top.textContent = startNumber;
    bottom.textContent = startNumber;
    flipCard.dataset.currentNumber = newNumber;
    flipCard.dataset.nextNumber = newNumber;

    flipCard.addEventListener("animationstart", () => {
      top.textContent = newNumber;
    });

    flipCard.addEventListener("animationend", () => {
      bottom.textContent = newNumber;
      flipCard.classList.remove("flip");
    });

    flipCard.classList.add("flip");
  };

  useEffect(() => {
    const startTime = new Date().setHours(new Date().getHours() + 24);
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      var totalCountDownTime = Math.ceil((startTime - currentTime) / 1000);
      if (totalCountDownTime == 0) clearInterval(interval);
      flipAllCards(totalCountDownTime);
    }, 250);

    // * Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="clock-main">
        <div>
          <h1 className="main-heading text-black">SỚM DIỄN RA TRONG</h1>
        </div>
        <div className="countdown-container">
          <div className="countdown-cards">
            <div className="card-title">GIỜ</div>
            <div className="card-container">
              <div className="flip-card" data-hours-tens>
                <div className="top">2</div>
                <div className="bottom">2</div>
              </div>
              <div className="flip-card" data-hours-ones>
                <div className="top">4</div>
                <div className="bottom">4</div>
              </div>
            </div>
          </div>
          <div className="countdown-cards">
            <div className="card-title">PHÚT</div>
            <div className="card-container">
              <div className="flip-card" data-minutes-tens>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
              <div className="flip-card" data-minutes-ones>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
            </div>
          </div>
          <div className="countdown-cards">
            <div className="card-title">GIÂY</div>
            <div className="card-container">
              <div className="flip-card" data-seconds-tens>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
              <div className="flip-card" data-seconds-ones>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipClock;
