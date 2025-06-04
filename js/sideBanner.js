const SideBannerList = document.querySelectorAll(
  ".side-banner-wrap .side-banner"
);
const bgColorList = ["#edf4ff", "#def9fe", "#fff6de"];

SideBannerList.forEach((sideBanner, index) => {
  sideBanner.style.backgroundColor = bgColorList[index];
});
