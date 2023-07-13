const isRegularContest = (contestAlphabet) => {
  const contestType = ["abc", "arc", "agc"];

  if (contestType.includes(contestAlphabet)) {
    return "regular";
  } else if (contestAlphabet === "typ") {
    return "typical";
  }
  return false;
};

const alphabetToNumber = (char) => {
  return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
};

const stringToNumber = (str) => {
  let result = 0;
  let base = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    let alphaValue = alphabetToNumber(str[i]);
    result += alphaValue * base;
    base *= 26;
  }
  return result;
};

export const CheckURL = (url) => {
  const urlObj = new URL(url);

  const hostname = urlObj.hostname;

  if (hostname !== "atcoder.jp") {
    return { status: false, message: "not atcoder" };
  }

  const urlPath = urlObj.pathname;
  const urlPathArr = urlPath.split("/").slice(1);

  if (!urlPathArr[1]) {
    return { status: false, message: "not contest page" };
  }
  const contestid = urlPathArr[1];
  const contestAlphabet = contestid.slice(0, 3);
  const contestNumber = contestid.slice(3);

  const taskAlphabet = urlPathArr[3]
    ? urlPathArr[3].split("_").slice(-1)[0]
    : undefined;

  if (urlPathArr[0] !== "contests" || urlPathArr.length !== 4) {
    return { status: false, message: "not task page" };
  }

  if (isRegularContest(contestAlphabet) === "regular") {
    return {
      status: true,
      type: "regular",
      id: urlPathArr[3],
      contestAlphabet,
      contestNumber,
      taskAlphabet,
    };
  } else if (isRegularContest(contestAlphabet) === "typical") {
    return {
      status: true,
      type: "typical",
      id: urlPathArr[3],
      taskAlphabet: stringToNumber(taskAlphabet),
    };
  }
  return { status: false, message: "not regular nor typical contest" };
};
