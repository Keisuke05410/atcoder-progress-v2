const isRegularContest = (
  contestAlphabet: string
): "regular" | "typical" | false => {
  const contestType = ["abc", "arc", "agc"];
  if (contestType.includes(contestAlphabet)) {
    return "regular";
  } else if (contestAlphabet === "typ") {
    return "typical";
  }
  return false;
};

export const URL_last = (url: string | URL): string => {
  const urlObj = new URL(url.toString());
  const urlPath = urlObj.pathname;
  const urlPathArr = urlPath.split("/").slice(1);
  return urlPathArr[urlPathArr.length - 1];
};

export const createID = (id: string, uid: string): string => {
  return id + uid;
};

export const CheckURL = (url: string | URL) => {
  const urlObj = new URL(url.toString());
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

  const regularOrTypical = isRegularContest(contestAlphabet);

  if (regularOrTypical === "regular") {
    return {
      status: true,
      type: "regular",
      id: urlPathArr[3],
      contestAlphabet,
      contestNumber,
      taskAlphabet,
    };
  } else if (regularOrTypical === "typical") {
    return {
      status: true,
      type: "typical",
      id: urlPathArr[3],
      contestAlphabet: "",
      contestNumber: "",
      taskAlphabet,
    };
  }

  return { status: false, message: "not regular nor typical contest" };
};
