import { Link } from "react-router-dom";
import "./Carousel.scss";
import React, { useEffect, useState } from "react";

function Carousel() {
  const [postIndex, setPostIndex] = useState(0);

  useEffect(() => {
    const mainPosts = document.querySelectorAll(".main-post");
    const posts = document.querySelectorAll(".post");

    let i = 0;
    let currentPost = posts[postIndex];
    let currentMainPost = mainPosts[postIndex];

    const progressInterval = setInterval(progress, 100);

    function progress() {
      if (i === 100) {
        i = -5;
        currentPost.querySelector(".progress-bar__fill").style.width = 0;
        document.querySelector(
          ".progress-bar--primary .progress-bar__fill"
        ).style.width = 0;
        currentPost.classList.remove("post--active");

        setPostIndex((prevIndex) => {
          let newIndex = prevIndex + 1;
          if (newIndex === posts.length) {
            newIndex = 0;
          }
          return newIndex;
        });

        currentMainPost.classList.add("main-post--not-active");
        currentMainPost.classList.remove("main-post--active");

        currentPost = posts[postIndex];
        currentMainPost = mainPosts[postIndex];
      } else {
        i++;
        currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
        document.querySelector(
          ".progress-bar--primary .progress-bar__fill"
        ).style.width = `${i}%`;
        currentPost.classList.add("post--active");

        currentMainPost.classList.add("main-post--active");
        currentMainPost.classList.remove("main-post--not-active");
      }
    }

    return () => {
      clearInterval(progressInterval);
    };
  }, [postIndex]);

  return (
    <div className="carousel">
      <div className="progress-bar progress-bar--primary hide-on-desktop">
        <div className="progress-bar__fill"></div>
      </div>

      <header className="main-post-wrapper">
        <div className="slides">
          <article className="main-post main-post--active">
            <div className="main-post__image">
              <img
                src="./images/Logo/Logocarusel.png"
                alt="Wir bieten mehrere Marken mit guten Preisen an"
              />
            </div>
            <div className="main-post__content">
              <h1 className="main-post__title">
                RoCaDaRo steht für eine Auswahl an qualitativen Produkten{" "}
              </h1>
              <a className="main-post__link" href="/about">
                <span className="main-post__link-text">Über uns</span>
                <svg
                  className="main-post__link-icon main-post__link-icon--arrow"
                  width="37"
                  height="12"
                  viewBox="0 0 37 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
                    stroke="white"
                  />
                </svg>
              </a>
            </div>
          </article>

          <article className="main-post main-post--not-active">
            <div className="main-post__image">
              <img src="./images/elektro/elektro1.jpg" />
            </div>
            <div className="main-post__content">
              <div className="main-post__tag-wrapper"></div>
              <h1 className="main-post__title">
                Wir selektieren für Sie. Qualität und Preisleistung. Ob Hobby
                oder Professionell.{" "}
              </h1>
              <a className="main-post__link" href="#"></a>
            </div>
          </article>

          <article className="main-post main-post--not-active">
            <div className="main-post__image">
              <img src="./images/haushaltswaren/hw2.jpg" alt="" />
            </div>
            <div className="main-post__content">
              <h1 className="main-post__title">
                Von Elektro, Haushaltswaren bis hin zu Mode, bei RoCaDaRo finden
                sie es{" "}
              </h1>
            </div>
          </article>
        </div>
      </header>

      <div className="posts-wrapper hide-on-mobile">
        <article className="post post--active">
          <div className="progress-bar">
            <div className="progress-bar__fill"></div>
          </div>
          <header className="post__header">
            <p className="post__published">Beste Marke</p>
          </header>
          <h2 className="post__title">
            {" "}
            Schauen sie einfach unsere Produkte an{" "}
          </h2>
        </article>

        <article className="post">
          <div className="progress-bar">
            <div className="progress-bar__fill"></div>
          </div>
          <header className="post__header">
            <span className="post__tag">Video</span>
            <p className="post__published">Youtube</p>
          </header>
          <h2 className="post__title">
            Dieses video wird zeigen wie man Erfolg mit E-Commerce haben kann
          </h2>
        </article>

        <article className="post">
          <div className="progress-bar">
            <div className="progress-bar__fill"></div>
          </div>
          <header className="post__header">
            <span className="post__tag">News</span>
            <p className="post__published">Brands</p>
          </header>
          <h2 className="post__title">
            unsere Brands zeigen ihnen was wir anbieten können
          </h2>
        </article>
      </div>
    </div>
  );
}

export default Carousel;
