// レギュラーコンテストかどうかを判定する関数
const isRegularContest = (contestAlphabet) => {
  const contestType = ["abc", "arc", "agc"];
  if (contestType.includes(contestAlphabet)) {
    // レギュラーコンテストの場合は"regular"を返す
    return "regular";
  } else if (contestAlphabet === "typ") {
    // 典型90問の場合
    return "typical";
  }
  return false;
};

export const URL_last = (url) => {
  const urlObj = new URL(url);
  const urlPath = urlObj.pathname;
  const urlPathArr = urlPath.split("/").slice(1);
  return urlPathArr[urlPathArr.length - 1];
};

// urlの形式をチェックする関数
export const CheckURL = (url) => {
  // urlをパースする
  const urlObj = new URL(url);
  // ホスト名を取得する
  // 例:atcoder.jp
  const hostname = urlObj.hostname;

  if (hostname !== "atcoder.jp") {
    return { status: false, message: "not atcoder" };
  }

  // パスを取得する
  // 例:/contests/abc001/tasks/abc001_1
  const urlPath = urlObj.pathname;
  // パスを配列にする
  // 例:["", "contests", "abc001", "tasks", "abc001_1"]
  // 最初の要素は空文字なので除く
  const urlPathArr = urlPath.split("/").slice(1);

  if (!urlPathArr[1]) {
    // contestのページじゃないとき
    return { status: false, message: "not contest page" };
  }
  // コンテストのidを取得する
  // 例:abc001
  const contestid = urlPathArr[1];
  // 例:abc
  const contestAlphabet = contestid.slice(0, 3);
  // 例:001
  const contestNumber = contestid.slice(3);

  // 問題のidを取得する
  // 例:abc001_a
  //    =>a
  const taskAlphabet = urlPathArr[3]
    ? urlPathArr[3].split("_").slice(-1)[0]
    : undefined;

  // コンテストのページかどうかを判定する
  if (urlPathArr[0] !== "contests" || urlPathArr.length !== 4) {
    return { status: false, message: "not task page" };
  }

  // レギュラーコンテストかどうかを判定する
  if (isRegularContest(contestAlphabet) === "regular") {
    return {
      status: true,
      type: "regular",
      id: urlPathArr[3],
      contestAlphabet,
      contestNumber,
      taskAlphabet,
    };
    // 典型90問かどうかを判定する
  } else if (isRegularContest(contestAlphabet) === "typical") {
    return {
      status: true,
      type: "typical",
      id: urlPathArr[3],
      contestAlphabet: "",
      contestNumber: "",
      taskAlphabet,
    };
  }
  // レギュラーコンテストでも典型90問でもない場合
  return { status: false, message: "not regular nor typical contest" };
};
