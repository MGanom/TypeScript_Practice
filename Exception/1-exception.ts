// Java에선 Exception
// JavaScript에선 Error

// Error(Exception) Handling: try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === "no file") {
    throw new Error(`No file called ${fileName}`);
  }
  return "this is file contents";
}

function closeFile(fileName: string) {}

const fileName1 = "file";
const fileName2 = "no file";
console.log(readFile(fileName1)); // this is file contents
closeFile(fileName1);

// 에러가 발생하면서 코드 실행이 중단된다.
// console.log(readFile(fileName2)); // Error: No file called no file
// closeFile(fileName2);

// 에러를 발견하여도 코드 실행이 중단되지 않는다.
try {
  console.log(readFile(fileName2));
} catch (error) {
  console.log(`No file called ${fileName2}`);
} finally {
  closeFile(fileName2);
  console.log("file closed");
}
console.log("Not dead");
