const NAME = "Thamo";
const WELCOME_MESSAGE_TEMPLATE = ["Night", "Morning", "Afternoon", "Evening"];
const SHORTCUT_STARTER = "enter";
const SHORTCUT_TIMEOUT = 750;
const MASTER_MAP = [
  {
    groupName: "Atlassian",
    items: [
      {
        name: "Jira",
        shortcutKey: "q",
        url: "https://abilexdigital.atlassian.net/jira/your-work",
        icon: "jira.png",
      },
      {
        name: "Bitbucket",
        shortcutKey: "w",
        url: "https://bitbucket.org/abilexsf/workspace/overview/",
        icon: "bitbucket.png",
      },
      {
        name: "Confluence",
        shortcutKey: "e",
        url: "https://abilexdigital.atlassian.net/wiki/home",
        icon: "confluence.png",
      },
    ],
  },
  {
    groupName: "abileX",
    items: [
      {
        name: "STABI",
        shortcutKey: "a",
        url: "https://abilex.lightning.force.com/lightning/n/Zeiterfassung",
        icon: "abilexSalesforce.svg",
      },
      {
        name: "AgentX",
        shortcutKey: "f",
        url: "https://agentx.abilex.biz/c/new",
        icon: "agentX.png",
      },
      {
        name: "AgentX Dev",
        shortcutKey: "g",
        url: "https://agent-x-dev.abilex.biz/c/new",
        icon: "agentX.png",
      },
      {
        name: "SharePoint",
        shortcutKey: "s",
        url: "https://abilexde.sharepoint.com/",
        icon: "sharepoint.png",
      },
      {
        name: "abileX Office365",
        shortcutKey: "d",
        url: "https://m365.cloud.microsoft/apps?auth=2&home=1",
        icon: "o365.png",
      },
    ],
  },
  {
    groupName: "Salesforce",
    items: [
      {
        name: "Help",
        shortcutKey: "y",
        url: "https://help.salesforce.com/s/docs",
        icon: "salesforceDocumentation.png",
      },
      {
        name: "SLDS",
        shortcutKey: "v",
        url: "https://v1.lightningdesignsystem.com/",
        icon: "salesforceLogo.svg",
      },
      {
        name: "Developer",
        shortcutKey: "x",
        url: "https://developer.salesforce.com/docs",
        icon: "salesforceDeveloper.ico",
      },
      {
        name: "SLDS Icons",
        shortcutKey: "c",
        url: "https://www.salesforceicons.com/",
        icon: "sldsIcons.png",
      },
      {
        name: "StackExchange",
        shortcutKey: "n",
        url: "https://salesforce.stackexchange.com/",
        icon: "sfStackExchange.png",
      },
    ],
  },
  {
    groupName: "Projects",
    items: [
      {
        name: "Berthold",
        shortcutKey: "r",
        url: "https://bt-portals.atlassian.net/jira/your-work",
        icon: "jira.png",
      },
      {
        name: "Berthold",
        shortcutKey: "t",
        url: "https://bt-portals.atlassian.net/wiki/home",
        icon: "confluence.png",
      },
      {
        name: "Mann+Hummel OE",
        shortcutKey: "t",
        url: "https://mann-hummel.atlassian.net/jira/software/projects/SFLSEOE/boards/389",
        icon: "jira.png",
      },
      {
        name: "Mann+Hummel OE",
        shortcutKey: "t",
        url: "https://mann-hummel.atlassian.net/wiki/home",
        icon: "confluence.png",
      },
    ],
  },
  {
    groupName: "Things",
    items: [
      {
        name: "Github",
        shortcutKey: "ä",
        url: "https://github.com/thamok",
        icon: "github.png",
      },
      {
        name: "Excalidraw",
        shortcutKey: "ü",
        url: "https://excalidraw.com/",
        icon: "excalidraw.png",
      },
      {
        name: "WYSIWYG Editor",
        shortcutKey: "ß",
        url: "https://wysiwyghtml.com/",
        icon: "wysiwyg.png",
      },
    ],
  },
  {
    groupName: "Entertainment",
    items: [
      {
        name: "Hackernews",
        shortcutKey: "4",
        url: "https://news.ycombinator.com/",
        icon: "hackernews.svg",
      },
      {
        name: "Soundcloud",
        shortcutKey: "2",
        url: "https://www.soundcloud.com/",
        icon: "soundcloud.png",
      },
      {
        name: "Reddit",
        shortcutKey: "3",
        url: "https://www.reddit.com/",
        icon: "reddit.png",
      },
      {
        name: "YouTube",
        shortcutKey: "1",
        url: "https://www.youtube.com/",
        icon: "youtube.png",
      },
    ],
  },
];

let $container = document.getElementById("content");
let getUrl = {};

// double-Enter detection state
let _doubleEnterCount = 0;
let _doubleEnterTimer = null;

// Background images folder - will pick one at random on each load
const BG_IMAGES = [
  "assets/bg/applelogoapplex.jpeg",
  "assets/bg/abstractbackgroundstockpurpleabstract.jpg",
  "assets/bg/applecarplayiosx .jpg",
  "assets/bg/applecomputerapplelogoretrodarkx.jpg",
  "assets/bg/applelogox.jpg",
  "assets/bg/bg.jpg",
  "assets/bg/bigsurrockswatersedgestock.jpg",
  "assets/bg/coastlineaerialviewabovecloudsseascapemountains.jpg",
  "assets/bg/coastlineseashorerocksbigsurstock.jpg",
  "assets/bg/desertstocknightrocks.jpg",
  "assets/bg/desertsunrisemountainsclearskypanoramic.jpg",
  "assets/bg/glaciermountainssnowcoveredalpenglow.jpg",
  "assets/bg/highmountainsstocklandscapefoggyautumn.jpg",
  "assets/bg/iosapplex 2.jpg",
  "assets/bg/iosapplex.jpg",
  "assets/bg/montereystockblackdarkmodelayers.jpg",
  "assets/bg/montereystockpurpledarkmodelayers.jpg",
  "assets/bg/mountainpeaksunseteveningstockx.jpg",
  "assets/bg/mountainsislandeveningtwilightsunset.jpg",
  "assets/bg/mountainsislandmorningfoggystock.jpg",
  "assets/bg/nevadamountainrangeeveningsunlight.jpg",
  "assets/bg/pplecarplayiosx.jpg",
  "assets/bg/roadmountainstarmacsunrisemorningbigsurstock.jpg",
  "assets/bg/sequoiax.jpg",
  "assets/bg/starry.jpg",
  "assets/bg/tahoe.jpg",
  "assets/bg/appleseptember.png",
  "assets/bg/glowingwwdcapplex.png",
  "assets/bg/image.png",
];

function setRandomBackground() {
  try {
    const idx = Math.floor(Math.random() * BG_IMAGES.length);
    const chosen = BG_IMAGES[idx];
    // set CSS variable used in styles
    document.documentElement.style.setProperty(
      "--bg-image",
      `url("${chosen}")`
    );
    // in case body uses background-image directly, set it too
    document.body.style.backgroundImage = `url("${chosen}")`;
  } catch (e) {
    // ignore
    console.warn("Failed to set random background", e);
  }
}

let $shortcutDisplayList = document.getElementsByClassName("shortcut");
let listeningForShortcut = false;
let listenerTimeout;

function setupWelcomeMessage() {
  const el = document.getElementById("welcome-string");
  // nothing to do if the element isn't present
  if (!el) return;

  let curHours = new Date().getHours();
  curHours = Math.floor(curHours / 6); // 0..3 (night, morning, afternoon, evening)
  // ensure index is in range
  curHours = Math.max(
    0,
    Math.min(curHours, WELCOME_MESSAGE_TEMPLATE.length - 1)
  );

  // Build welcome message
  const welcome = "Good " + WELCOME_MESSAGE_TEMPLATE[curHours] + ", " + NAME;
  el.textContent = welcome;
}

function setupGroups() {
  for (let i = 0; i < MASTER_MAP.length; i++) {
    let curGroupData = MASTER_MAP[i];

    let group = document.createElement("div");
    group.className = "group";
    $container.appendChild(group);

    let header = document.createElement("h1");
    header.innerHTML = curGroupData.groupName;
    group.appendChild(header);

    for (let j = 0; j < curGroupData.items.length; j++) {
      let curItemData = curGroupData.items[j];

      let pContainer = document.createElement("p");
      group.appendChild(pContainer);

      // favicon image (loaded from assets/ based on the item name, with graceful fallback)
      let favicon = document.createElement("img");
      favicon.className = "favicon";
      favicon.setAttribute("alt", curItemData.name + " favicon");
      favicon.setAttribute("width", "18");
      favicon.setAttribute("height", "18");
      // try loading favicon; prefer explicit `icon` property if provided on the item
      tryFaviconSrc(favicon, curItemData);
      pContainer.appendChild(favicon);

      let link = document.createElement("a");
      link.textContent = curItemData.name;
      link.setAttribute("href", curItemData.url);
      // Uncomment to open links in a new tab
      /*
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      */
      pContainer.appendChild(link);
      let shortcutDisplay = document.createElement("span");
      shortcutDisplay.textContent = curItemData.shortcutKey;
      shortcutDisplay.className = "shortcut";
      shortcutDisplay.style.animation = "none";
      pContainer.appendChild(shortcutDisplay);
      // normalize keys to lowercase so detection is consistent
      getUrl[curItemData.shortcutKey.toLowerCase()] = curItemData.url;
    }
  }
}

// Create a global Google search input placed after the welcome string
function setupGlobalSearch() {
  const welcomeEl = document.getElementById("welcome-string");
  const wrapper = document.createElement("div");
  wrapper.className = "global-search";

  const input = document.createElement("input");
  input.setAttribute("type", "search");
  input.setAttribute("placeholder", "Search Google or press Enter...");
  input.className = "global-search-input";
  wrapper.appendChild(input);

  // On Enter, open Google search
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const q = (this.value || "").trim();
      if (q) {
        const href = "https://www.google.com/search?q=" + encodeURIComponent(q);
        window.open(href, "_blank", "noopener");
      }
    }
  });

  // Insert after welcome string if possible, otherwise at top of container
  if (welcomeEl && welcomeEl.parentNode) {
    welcomeEl.parentNode.insertBefore(wrapper, welcomeEl.nextSibling);
  } else if ($container) {
    $container.insertBefore(wrapper, $container.firstChild);
  }
}

// Helper: create a slug from a name to match asset filenames
function slugify(name) {
  return (name || "")
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // spaces to -
    .replace(/[^a-z0-9\-]/g, ""); // remove non-alphanum
}

// Map WMO Weather codes to icons
function getWeatherIcon(code) {
  // WMO Weather interpretation codes (WW)
  const icons = {
    0: "☀️", // Clear sky
    1: "🌤️", // Mainly clear
    2: "⛅", // Partly cloudy
    3: "☁️", // Overcast
    45: "🌫️", // Fog
    48: "🌫️", // Depositing rime fog
    51: "🌦️", // Light drizzle
    53: "🌦️", // Moderate drizzle
    55: "🌧️", // Dense drizzle
    56: "🌧️", // Light freezing drizzle
    57: "🌧️", // Dense freezing drizzle
    61: "🌧️", // Slight rain
    63: "🌧️", // Moderate rain
    65: "🌧️", // Heavy rain
    66: "🌧️", // Light freezing rain
    67: "🌧️", // Heavy freezing rain
    71: "🌨️", // Slight snow fall
    73: "🌨️", // Moderate snow fall
    75: "❄️", // Heavy snow fall
    77: "🌨️", // Snow grains
    80: "🌦️", // Slight rain showers
    81: "🌧️", // Moderate rain showers
    82: "⛈️", // Violent rain showers
    85: "🌨️", // Slight snow showers
    86: "🌨️", // Heavy snow showers
    95: "⛈️", // Thunderstorm
    96: "⛈️", // Thunderstorm with slight hail
    99: "⛈️", // Thunderstorm with heavy hail
  };
  return icons[code] || "🌡️";
}

function getWeatherDescription(code) {
  const descriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return descriptions[code] || "Unknown";
}

function fetchWeather(cardEl) {
  if (!cardEl) return;
  const body = cardEl.querySelector(".widget-body");
  body.textContent = "Loading…";

  // Berlin coordinates

  const lat = 52.506367968906595,
    lon = 13.461348186383875;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.current_weather) {
        const w = data.current_weather;
        const icon = getWeatherIcon(w.weathercode);
        const description = getWeatherDescription(w.weathercode);
        body.innerHTML =
          `<div class="weather-now">` +
          `<div style="font-size: 2rem; text-align: center; margin-bottom: 0.5rem;">${icon}</div>` +
          `<div><strong>${description}</strong></div>` +
          `<div>Temp: <strong>${w.temperature}°C</strong></div>` +
          `<div>Wind: ${w.windspeed} km/h</div>` +
          `</div>`;
      } else {
        body.textContent = "No weather data available.";
      }
    })
    .catch((err) => {
      console.warn("weather fetch failed", err);
      body.textContent = "Failed to load weather.";
    });
}

// Create a small weather widget in the top-right corner
function setupWeatherTopRight() {
  // remove any existing top-right weather
  const existing = document.querySelector(".weather-topright");
  if (existing && existing.parentNode)
    existing.parentNode.removeChild(existing);

  const div = document.createElement("div");
  div.className = "weather-topright";
  div.innerHTML =
    '<div class="widget card weather-card"><div class="widget-body">Loading…</div></div>';
  document.body.appendChild(div);
  const card = div.querySelector(".widget.card");
  fetchWeather(card);
}

// crate a simple to do list
function setupToDoList(cardEl) {
  if (!cardEl) return;
  const body = cardEl.querySelector(".widget-body");
  if (!body) return;

  const controls = cardEl.querySelector(".todo-controls");
  const listEl = cardEl.querySelector(".todo-list");
  if (!controls || !listEl) return;

  // create input and add button
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Add a new to-do item...";
  input.className = "todo-input";
  controls.appendChild(input);

  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.className = "todo-add";
  controls.appendChild(addButton);

  // load saved items
  const STORAGE_KEY = "startpage_todos_v1";
  function loadItems() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }
  function saveItems(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {}
  }

  function render() {
    listEl.innerHTML = "";
    const items = loadItems();
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const li = document.createElement("li");
      const txt = document.createElement("span");
      txt.textContent = it;
      li.appendChild(txt);
      const btn = document.createElement("button");
      btn.className = "remove";
      btn.textContent = "Done";
      btn.addEventListener("click", function () {
        removeItem(i);
      });
      li.appendChild(btn);
      listEl.appendChild(li);
    }
  }

  function addItem(text) {
    if (!text) return;
    const items = loadItems();
    items.push(text);
    saveItems(items);
    render();
  }

  function removeItem(index) {
    const items = loadItems();
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
      saveItems(items);
      render();
    }
  }

  addButton.addEventListener("click", function () {
    const v = (input.value || "").trim();
    if (!v) return;
    addItem(v);
    input.value = "";
    input.focus();
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addButton.click();
    }
  });

  // initial render
  render();
}

// Wrapper to create todo list area below bookmarks
function setupTodoList() {
  const wrapper = document.createElement("div");
  wrapper.className = "todo-container";

  const card = document.createElement("div");
  card.className = "widget card todo-card";
  card.innerHTML =
    '<h3>To Do</h3><div class="widget-body"><div class="todo-controls"></div><ul class="todo-list"></ul></div>';

  wrapper.appendChild(card);
  // Insert after content div instead of appending to body
  if ($container && $container.parentNode) {
    $container.parentNode.insertBefore(wrapper, $container.nextSibling);
  } else {
    document.body.appendChild(wrapper);
  }

  // IMPORTANT: wait a tick to ensure DOM elements are ready, then wire functionality
  setTimeout(function () {
    setupToDoList(card);
  }, 0);
}

// Resolve and load a favicon image for an item.
// If the item has an explicit `icon` property, try that first (assets/<icon>).
// Otherwise, attempt slugified candidates and fall back to assets/favicon.png.
function tryFaviconSrc(imgEl, itemOrName) {
  const isString = typeof itemOrName === "string";
  const item = isString ? { name: itemOrName } : itemOrName || {};

  const explicit = item.icon;
  const base = slugify(item.name || "");

  const candidates = [];
  if (explicit) {
    // ensure explicit is a string filename
    candidates.push(String(explicit));
  }
  // then common guesses
  if (base) {
    candidates.push(base + ".png", base + ".svg", base + ".ico");
  }
  // finally a generic favicon
  candidates.push("favicon.png");

  let idx = 0;

  function next() {
    if (idx >= candidates.length) {
      imgEl.style.display = "none";
      return;
    }
    const candidate = "assets/" + candidates[idx++];
    imgEl.onerror = function () {
      // try next candidate
      next();
    };
    imgEl.onload = function () {
      imgEl.style.display = "inline-block";
    };
    imgEl.src = candidate;
  }

  next();
}

// Global search
function setupGlobalSearch() {
  const welcomeEl = document.getElementById("welcome-string");
  const wrapper = document.createElement("div");
  wrapper.className = "omnibox";

  const providers = [
    {
      id: "google",
      name: "Google",
      prefix: "https://www.google.com/search?q=",
      icon: "🔍",
    },
    {
      id: "ddg",
      name: "DuckDuckGo",
      prefix: "https://duckduckgo.com/?q=",
      icon: "🦆",
    },
    {
      id: "bing",
      name: "Bing",
      prefix: "https://www.bing.com/search?q=",
      icon: "🔎",
    },
  ];
  let selected = providers[0];

  const providerBtn = document.createElement("button");
  providerBtn.type = "button";
  providerBtn.className = "provider-btn";
  providerBtn.setAttribute("aria-label", "Choose search provider");
  providerBtn.textContent = selected.icon;
  wrapper.appendChild(providerBtn);

  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Search the web or type a URL...";
  input.className = "omnibox-input";
  wrapper.appendChild(input);

  const dropdown = document.createElement("ul");
  dropdown.className = "omnibox-dropdown";
  providers.forEach((p) => {
    const li = document.createElement("li");
    li.className = "omnibox-item";
    li.dataset.id = p.id;
    li.innerHTML =
      '<span class="omnibox-item-icon">' +
      p.icon +
      '</span><span class="omnibox-item-name">' +
      p.name +
      "</span>";
    li.addEventListener("click", function (ev) {
      ev.stopPropagation();
      selected = p;
      providerBtn.textContent = p.icon;
      dropdown.style.display = "none";
      input.focus();
    });
    dropdown.appendChild(li);
  });
  wrapper.appendChild(dropdown);

  providerBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  // close dropdown when clicking elsewhere
  document.addEventListener("click", function () {
    dropdown.style.display = "none";
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const q = (this.value || "").trim();
      if (!q) return;
      // detect URL-like inputs
      if (
        /^https?:\/\//i.test(q) ||
        (q.indexOf(".") !== -1 && q.indexOf(" ") === -1)
      ) {
        const url = /^https?:\/\//i.test(q) ? q : "https://" + q;
        window.open(url, "_blank", "noopener");
      } else {
        window.open(
          selected.prefix + encodeURIComponent(q),
          "_blank",
          "noopener"
        );
      }
    }
  });

  // Insert after welcome string if possible, otherwise at top of container
  if (welcomeEl && welcomeEl.parentNode) {
    welcomeEl.parentNode.insertBefore(wrapper, welcomeEl.nextSibling);
  } else if ($container) {
    $container.insertBefore(wrapper, $container.firstChild);
  }
}

function shortcutListener(e) {
  // Use the raw key value and normalize only when needed. Use keydown so we can prevent default (e.g. Tab).
  const rawKey = e.key;
  const key = rawKey && rawKey.toLowerCase();

  // Ignore when user is typing into editable fields
  const active = document.activeElement;
  const tag = active && active.tagName;
  const isEditable = !!(
    active &&
    (active.isContentEditable ||
      tag === "INPUT" ||
      tag === "TEXTAREA" ||
      tag === "SELECT")
  );

  // If we're already listening for a second key and the pressed key maps to a URL, open it.
  if (listeningForShortcut && key && getUrl.hasOwnProperty(key)) {
    const url = getUrl[key];
    if (url) {
      // open in a new tab/window and stop listening
      window.open(url, "_blank", "noopener");
      listeningForShortcut = false;
      clearTimeout(listenerTimeout);
    }
    return;
  }

  // Start the shortcut listening when the starter key is pressed (e.g. Tab), but don't do this while typing in inputs.
  if (!isEditable && key === SHORTCUT_STARTER) {
    // Prevent the browser from moving focus when using Tab as a shortcut starter
    e.preventDefault();

    clearTimeout(listenerTimeout);
    listeningForShortcut = true;

    // Animation reset
    for (let i = 0; i < $shortcutDisplayList.length; i++) {
      $shortcutDisplayList[i].style.animation = "none";
      setTimeout(function () {
        $shortcutDisplayList[i].style.animation = "";
      }, 10);
    }

    listenerTimeout = setTimeout(function () {
      listeningForShortcut = false;
    }, SHORTCUT_TIMEOUT);
  }
}

function main() {
  setRandomBackground();
  setupWelcomeMessage();
  setupWeatherTopRight();
  setupGroups();
  setupGlobalSearch();
  setupTodoList();
  // listen on keydown so we can prevent default behavior (Tab shifting focus)
  document.addEventListener("keydown", shortcutListener, false);

  // Double-Enter -> focus omnibox input
  document.addEventListener("keydown", function (e) {
    try {
      if (e.key !== "Enter") return;

      const active = document.activeElement;
      const tag = active && active.tagName;
      const isEditable = !!(
        active &&
        (active.isContentEditable ||
          tag === "INPUT" ||
          tag === "TEXTAREA" ||
          tag === "SELECT")
      );

      if (isEditable) {
        // reset counter when already typing
        _doubleEnterCount = 0;
        if (_doubleEnterTimer) {
          clearTimeout(_doubleEnterTimer);
          _doubleEnterTimer = null;
        }
        return;
      }

      _doubleEnterCount++;
      if (_doubleEnterTimer) clearTimeout(_doubleEnterTimer);

      _doubleEnterTimer = setTimeout(function () {
        _doubleEnterCount = 0;
        _doubleEnterTimer = null;
      }, 750);

      if (_doubleEnterCount >= 2) {
        _doubleEnterCount = 0;
        if (_doubleEnterTimer) {
          clearTimeout(_doubleEnterTimer);
          _doubleEnterTimer = null;
        }

        const omniboxInput = document.querySelector(".omnibox-input");
        if (omniboxInput) {
          omniboxInput.focus();
          // move cursor to end and select text
          try {
            const len = omniboxInput.value ? omniboxInput.value.length : 0;
            omniboxInput.setSelectionRange(len, len);
          } catch (err) {
            // ignore if not supported
          }
        }
      }
    } catch (err) {
      // swallow errors
      console.warn("double-enter handler error", err);
    }
  });
}

main();
