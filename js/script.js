// Create parallax effect for banner image and text
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let banner = document.querySelector("header.banner");
  let bannerText = document.querySelector(".banner-text");
  let bannerTextTranslate = document.querySelector(".banner-text-translate");

  // Set direction and speed of parallax effect for banner image and text
  banner.style.backgroundPositionY = scrollPosition * -0.08 + "vw";
  bannerText.style.transform = `translateY(${scrollPosition * 0.09}vw)`;
  bannerText.style.opacity = 1 - scrollPosition / 150; // Text fade effect as user scrolls down
  bannerTextTranslate.style.transform = `translateY(${
    scrollPosition * 0.09
  }vw)`;
  bannerTextTranslate.style.opacity = 1 - scrollPosition / 150; // Text fade effect as user scrolls down
});

// Create location markers
const markersData = [
  // Good controlled locations
  {
    id: "grey-havens",
    name: "Grey Havens",
    x: "17.90%",
    y: "31.50%",
    type: "good",
  },
  {
    id: "the-shire",
    name: "The Shire",
    x: "26.21%",
    y: "30.64%",
    type: "good",
  },
  {
    id: "rivendell",
    name: "Rivendell",
    x: "44.32%",
    y: "30.82%",
    type: "good",
  },
  {
    id: "helms-deep",
    name: "Helm’s Deep",
    x: "44.64%",
    y: "60.62%",
    type: "good",
  },
  { id: "lorien", name: "Lórien", x: "52.12%", y: "44.48%", type: "good" },
  {
    id: "minas-tirith",
    name: "Minas Tirith",
    x: "61.58%",
    y: "68.39%",
    type: "good",
  },
  // Evil controlled locations
  { id: "moria", name: "Moria", x: "46.25%", y: "43.47%", type: "evil" },
  { id: "isengard", name: "Isengard", x: "42.46%", y: "52.88%", type: "evil" },
  {
    id: "dol-guldor",
    name: "Dol Guldor",
    x: "58.38%",
    y: "41.55%",
    type: "evil",
  },
  {
    id: "minas-morgul",
    name: "Minas Morgul",
    x: "70.10%",
    y: "68.24%",
    type: "evil",
  },
  {
    id: "black-gate",
    name: "Black Gate",
    x: "70.19%",
    y: "57.47%",
    type: "evil",
  },
  {
    id: "mount-doom",
    name: "Mount Doom",
    x: "75.69%",
    y: "63.68%",
    type: "evil",
  },
  {
    id: "barad-dur",
    name: "Barad-dûr",
    x: "82.12%",
    y: "63.83%",
    type: "evil",
  },
  {
    id: "near-harad",
    name: "Near Harad",
    x: "86.60%",
    y: "89.5%",
    type: "evil",
  },
  // Neutral / contested locations
  { id: "eregion", name: "Eregion", x: "41.29%", y: "42.58%", type: "neutral" },
  {
    id: "misty-mountains",
    name: "Misty Mountains",
    x: "47.61%",
    y: "37.69%",
    type: "neutral",
  },
  { id: "fangorn", name: "Fangorn", x: "47.94%", y: "50.24%", type: "neutral" },
  {
    id: "mirkwood",
    name: "Mirkwood",
    x: "57.08%",
    y: "27.85%",
    type: "neutral",
  },
];

// Assign location marker images
markersData.forEach((marker) => {
  let markerImage;

  if (marker.type === "good") {
    markerImage = "../assets/marker-good.png"; // Good marker
  } else if (marker.type === "evil") {
    markerImage = "../assets/marker-evil.png"; // Evil marker
  } else {
    markerImage = "../assets/marker-neutral.png"; // Neutral marker
  }

  // Create marker element
  const markerElement = document.createElement("img");
  markerElement.src = markerImage;
  markerElement.classList.add("marker");
  markerElement.style.left = marker.x;
  markerElement.style.top = marker.y;

  // Add marker to map
  document.querySelector(".map-container").appendChild(markerElement);
});

// Create location modal
const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal-content");
const modalImg = document.getElementById("modal-location-image");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Location modal background image sources
const modalBackgrounds = {
  good: "../assets/good-modal.png",
  evil: "../assets/evil-modal.png",
  neutral: "../assets/neutral-modal.png",
};

// Add click event listeners to each marker for location modal interaction
document.querySelectorAll(".marker").forEach((markerElement, index) => {
  const marker = markersData[index];

  markerElement.addEventListener("click", () => {
    modalContent.style.backgroundImage = `url(${modalBackgrounds[marker.type]})`;
    modalTitle.textContent = marker.name;
    modalImg.src = `../assets/${marker.id}.png`;
    modalDesc.textContent = marker.description || "Description";
    modal.style.display = "flex";
  });
});

// Close location modal on 'x'
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close location modal on click outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});