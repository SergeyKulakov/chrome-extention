(() => {
  function waitForElement(selector) {
    let tries = 10;
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        let element = document.querySelector(selector);
        let finalState = true;

        if (!element) {
          tries--;
          finalState = false;
        }

        if (!tries) {
          resolve(null);
          clearInterval(interval);
        }

        if (finalState) {
          // resolve(element)
          rerender(element);
          clearInterval(interval);
        }
      }, 200);
    });
  }

  /* Wrapper container */
  let wrapperContainer = document.createElement("div");
  wrapperContainer.setAttribute("class", "wrap-container");
  wrapperContainer.setAttribute("id", "wrap-container");

  /* Create a container to append */
  let chatContainer = document.createElement("div");

  chatContainer.setAttribute("class", "bd-chat-cont");
  chatContainer.setAttribute("id", "bd-chat-contain");

  /* Adcontainer */
  let adContainer = document.createElement("div");
  adContainer.setAttribute("class", "ad-container");

  wrapperContainer.appendChild(chatContainer);
  wrapperContainer.appendChild(adContainer);

  let ad = document.createElement("div");
  ad.setAttribute("class", "ad-conte");

  let adAnc = document.createElement("a");
  adAnc.setAttribute("class", "ad-anc");

  ad.appendChild(adAnc);

  let promoLabel = document.createElement("div");
  promoLabel.setAttribute("class", "promo-label");

  let promoBtn = document.createElement("button");
  promoBtn.setAttribute("class", "promo-btn");

  promoLabel.appendChild(promoBtn);

  adContainer.appendChild(ad);
  adContainer.appendChild(promoLabel);

  /* Identify the engine */
  const findElement = (elements) => {
    for (let element of elements) {
      let foundElm = document.querySelector(element);

      if (foundElm) return foundElm;
    }

    return null;
  };

  const engines = {
    google: {
      inputQueries: ["[name='q']"],
      prependQueries: ["#rhs"],
      appendQueries: ["#rcnt"],
    },
    yahoo: {
      inputQueries: ["input[name='p']"],
      prependQueries: ["#right", ".Contents__inner.Contents__inner--sub"],
      appendQueries: ["#cols", "#contents__wrap"],
    },
    bing: {
      inputQueries: ["[name='q']"],
      prependQueries: ["#b_context"],
      appendQueries: [],
    },
    duckduckgo: {
      inputQueries: ["input[name='q']"],
      prependQueries: [".results--sidebar.js-results-sidebar"],
      appendQueries: ["#links_wrapper"],
    },
    brave: {
      inputQueries: ["input[name='q']"],
      prependQueries: ["#side-right"],
      appendQueries: [],
    },
    searx: {
      inputQueries: ["input[name='q']"],
      prependQueries: ["#sidebar_results"],
      appendQueries: [],
    },
    yandex: {
      inputQueries: ["input[name='text']"],
      prependQueries: ["#search-result-aside"],
      appendQueries: [],
    },
    kagi: {
      inputQueries: ["input[name='q']"],
      prependQueries: [".right-content-box ._0_right_sidebar"],
      appendQueries: ["#_0_app_content"],
    },
    naver: {
      inputQueries: ["input[name='query']"],
      prependQueries: ["#sub_pack"],
      appendQueries: ["#content"],
    },
    baidu: {
      inputQueries: ["input[name='wd']"],
      prependQueries: ["#content_right"],
      appendQueries: ["#container"],
    },
  };

  let pattern = new RegExp(Object.keys(engines).join("|"));
  let identifiedEngine = location.hostname.match(pattern)[0];

  let engineControl = engines[identifiedEngine];

  const rerender = (chatgpCont) => {
    if (chatgpCont) {
      let twoExtWrapper = document.createElement("div");

      twoExtWrapper.setAttribute("class", "two-ext-container");
      twoExtWrapper.setAttribute("id", "two-ext-container");

      wrapperContainer.setAttribute("class", "wrap-container-two");

      twoExtWrapper.appendChild(wrapperContainer);
      twoExtWrapper.appendChild(chatgpCont);

      let prependElement = findElement(engineControl.prependQueries);
      let appendElement = findElement(engineControl.appendQueries);

      if (prependElement) {
        prependElement.prepend(twoExtWrapper);
      } else if (appendElement) {
        if (chatgpCont) {
          twoExtWrapper.style.height = "fit-content";
          wrapperContainer.style.marginLeft = "0px";
          twoExtWrapper.style.marginLeft = "30px";

          appendElement.appendChild(twoExtWrapper);
        } else {
          wrapperContainer.style.height = "fit-content";
          wrapperContainer.style.marginLeft = "30px";

          appendElement.appendChild(wrapperContainer);
        }
      }
    }
  };

  waitForElement("#bd-chat-contain");

  let prependElement = findElement(engineControl.prependQueries);
  let appendElement = findElement(engineControl.appendQueries);

  if (prependElement) {
    prependElement.prepend(wrapperContainer);
  } else if (appendElement) {
    wrapperContainer.style.height = "fit-content";
    wrapperContainer.style.marginLeft = "30px";

    appendElement.appendChild(wrapperContainer);
  }

})();
