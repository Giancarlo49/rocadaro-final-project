
import "./Carousel.scss";
import React, { useEffect, useState } from 'react';



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
        document.querySelector(".progress-bar--primary .progress-bar__fill").style.width = 0;
        currentPost.classList.remove("post--active");

        setPostIndex(prevIndex => {
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
        document.querySelector(".progress-bar--primary .progress-bar__fill").style.width = `${i}%`;
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
    <div class="carousel">
  <div class="progress-bar progress-bar--primary hide-on-desktop">
    <div class="progress-bar__fill"></div>
  </div>

<header class="main-post-wrapper">
  
  <div class="slides">
    <article class="main-post main-post--active">
      <div class="main-post__image">
        <img src="./images/Logo/LogoHeader.png" alt="Wir bieten mehrere Marken mit guten Preisen an" />
      </div>
      <div class="main-post__content">
        <div class="main-post__tag-wrapper">
          <span class="main-post__tag">News</span>
        </div>
        <h1 class="main-post__title">Mit unser Logo bieten mehrere Marken mit guten Preisen an  </h1>
        <a class="main-post__link" href="#">
              <span class="main-post__link-text">Finde mehr heraus</span>
              <svg
                class="main-post__link-icon main-post__link-icon--arrow"
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
    <article class="main-post main-post--not-active">
      <div class="main-post__image">
        <img src="./images/Elektro/Elektro1.jpg" alt="What To Watch For in the 2019 Hungarian Grand Prix" />
      </div>
      <div class="main-post__content">
        <div class="main-post__tag-wrapper">
          <span class="main-post__tag">Video</span>
        </div>
        <h1 class="main-post__title">hier schauen sie alles was es mit E-Commerce zu tuen hat wie wir unsere seite aufgebaut haben </h1>
        <a class="main-post__link" href="#">
              <svg
                class="main-post__link-icon main-post__link-icon--play-btn"
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
                  stroke-width="2"
                />
                <path d="M14 10L8 6V14L14 10Z" fill="white" />
              </svg>
              <span class="main-post__link-text">play video</span>
            </a>
      </div>
    </article>
    <article class="main-post main-post--not-active">
      <div class="main-post__image">
        <img src="./images/Haushaltswaren/hw2.jpg" alt="Hamilton wants harder championship fight from Leclerc and
            Verstappen" />
      </div>
      <div class="main-post__content">
        <div class="main-post__tag-wrapper">
          <span class="main-post__tag">News</span>
        </div>
        <h1 class="main-post__title">Ob es Elektro Geräte,Haushaltswaren oder nur Schuhe sind alles dabei
        </h1>
        <a class="main-post__link" href="#">
              <span class="main-post__link-text">find out more</span>
              <svg
                class="main-post__link-icon main-post__link-icon--arrow"
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
  </div>
</header>

<div    class="posts-wrapper hide-on-mobile">
  <article class="post post--active">
    <div class="progress-bar">
      <div class="progress-bar__fill"></div>
    </div>
    <header class="post__header">
      <span class="post__tag">News</span>
      <p class="post__published">Beste Marke</p>
    </header>
    <h2 class="post__title"> Schauen sie einfach unsere Produkte auf der Gallery an </h2>
  </article>
  <article class="post">
    <div class="progress-bar">
      <div class="progress-bar__fill"></div>
    </div>
    <header class="post__header">
      <span class="post__tag">Video</span>
      <p class="post__published">04 Februar 2091</p>
    </header>
    <h2 class="post__title">Dieses video wird zeigen wie man Erfolg mit E-Commerce haben kann</h2>
  </article>
  <article class="post">
    <div class="progress-bar">
      <div class="progress-bar__fill"></div>
    </div>
    <header class="post__header">
      <span class="post__tag">News</span>
      <p class="post__published">12 Dezember 2067</p>
    </header>
    <h2 class="post__title">unsere Brands zeigen ihnen was wir anbieten können 
    </h2>
  </article>
</div>
</div>
  );
}

export default Carousel;
