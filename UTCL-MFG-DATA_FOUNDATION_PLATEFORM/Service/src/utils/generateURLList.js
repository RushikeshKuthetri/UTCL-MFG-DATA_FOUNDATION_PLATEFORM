const generateURLList = (start, end, pages, apiName) => {
  var urlList = [];
  st = start;
  et = end;
  for (let i = 0; i < pages; i++) {
    str = `stored_query_result("${apiName}") | where S_No between(${st} .. ${et})`;
    st = et + 1;
    et = st + (end - 1);
    urlList.push(str);
  }
  return urlList;
};

module.exports = generateURLList;
