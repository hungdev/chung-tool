const transformations = [
  { find: "ae", replace: "ä" },
  { find: "oe", replace: "ö" },
  { find: "ue", replace: "ü" },
  { find: "ss", replace: "ß" },
  // Thêm các cặp thay thế khác ở đây nếu cần
];

export const replaceCharacters = (str) => {
  str = str.replace(/ae/g, "ä");
  str = str.replace(/oe/g, "ö");
  str = str.replace(/ue/g, "ü");
  str = str.replace(/ss/g, "ß");
  // Bỏ các khoảng trắng liền nhau
  // str = str.replace(/ + /g, " ");
  // str = str.trim();

  return str;
};
