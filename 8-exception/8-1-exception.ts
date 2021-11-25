// Java: Exception
// JavaScript: Error
// const array = new Array(1000000000000000000);

// function move(direction: "up" | "down" | "left" | "right" | "he") {
//   switch (direction) {
//     case "up":
//       position.y += 1;
//       break;
//     case "down":
//       position.y += 1;
//       break;
//     case "left":
//       position.x -= 1;
//       break;
//     case "right":
//       position.x += 1;
//       break;
//     default:
//       // 'he'가 never에 할당될 수 없다.
//       // 개발자가 api를 잘못 조작하는 것을 방지
//       const invalid: never = direction;
//       throw new Error(`unknown direction: ${invalid}`);
//   }
// }

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {}

const fileName = "not exist!";
// error가 생길 수도 있는 부분에 try catch 작성
try {
  console.log(readFile(fileName));
} catch (error) {
  // 에러가 떠도 잡았기 때문에 프로그램이 죽진 않음
  console.log(`catched!!`);
} finally {
  // 무언가를 시도했을 때 성공하던 실패하던 실행
  closeFile(fileName);
  console.log(`finally!!`);
}

closeFile(fileName);
