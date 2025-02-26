// 1. for문
for (let idx = 1; idx <= 100; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }

  // break 와 continue
  // break는 빠져나오고 continue는 만나면 조건식으로 돌아감
}
