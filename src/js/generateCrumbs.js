// generateCrumbs.js
const generateCrumbs = (location) => {
  if (!location.pathname) {
    // Можно вернуть пустой массив или дефолтный путь
    return [{ label: "Home", path: "/" }];
  }

  const parts = location.pathname.split("/").filter(Boolean);
  const crumbs = parts.map((part, idx) => {
    return {
      label: decodeURIComponent(part),
      path: "/" + parts.slice(0, idx + 1).join("/"),
    };
  });

  return [{ label: "Home", path: "/" }, ...crumbs];
};

export default generateCrumbs;
