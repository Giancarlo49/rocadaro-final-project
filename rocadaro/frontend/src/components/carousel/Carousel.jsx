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
              <div className="main-post__tag-wrapper">
                <span className="main-post__tag">News</span>
              </div>
              <h1 className="main-post__title">
                Mit unser Logo bieten mehrere Marken mit guten Preisen an{" "}
              </h1>
              <a className="main-post__link" href="#">
                <span className="main-post__link-text">Finde mehr heraus</span>
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
              <img
                src="./images/elektro/elektro1.jpg"
                alt="What To Watch For in the 2019 Hungarian Grand Prix"
              />
            </div>
            <div className="main-post__content">
              <div className="main-post__tag-wrapper">
                <span className="main-post__tag">Video</span>
              </div>
              <h1 className="main-post__title">
                hier schauen sie alles was es mit E-Commerce zu tuen hat wie wir
                unsere seite aufgebaut haben{" "}
              </h1>
              <a className="main-post__link" href="#">
                <svg
                  className="main-post__link-icon main-post__link-icon--play-btn"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#C20000"
                    strokeWidth="2"
                  />
                  <path d="M14 10L8 6V14L14 10Z" fill="white" />
                </svg>
                <span className="main-post__link-text">play video</span>
              </a>
            </div>
          </article>

          <article className="main-post main-post--not-active">
            <div className="main-post__image">
              <img
                src="./images/haushaltswaren/hw2.jpg"
                alt=""
              />
            </div>
            <div className="main-post__content">
              <div className="main-post__tag-wrapper">
                <span className="main-post__tag">News</span>
              </div>
              <h1 className="main-post__title">
                Ob es Elektro Geräte,Haushaltswaren oder nur Schuhe sind alles
                dabei
              </h1>
              <Link className="main-post__link">
                <span className="main-post__link-text">find out more</span>
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
              </Link>
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
            <span className="post__tag">News</span>
            <p className="post__published">Beste Marke</p>
          </header>
          <h2 className="post__title">
            {" "}
            Schauen sie einfach unsere Produkte auf der Gallery an{" "}
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
