// let code = `def generate_fibonaccilimit: fibonacci_sequence = [0, 1] 
// while True:
// next_number = fibonacci_sequence[-1] + fibonacci_sequence[-2]
// if next_number > limit:
// break
//     fibonacci_sequence.append(next_number)
//     return fibonacci_sequence

// limit = 50

// fibonacci_sequence = generate_fibonacci(limit)
// print(f"Fibonacci sequence up to {limit}: {fibonacci_sequence}")
// `;
// // function formatPythonCode(code) {
// //   // Split the code using common Python delimiters
// //   const lines = code.split(
// //     /(:|if|elif|else|for|while|with|def|class|try|except|finally)/
// //   );

// //   // Remove empty lines and adjust indentation
// //   const indentedCode = lines
// //     .filter((line) => line.trim() !== "")
// //     .map((line, index) => {
// //       // Adjust indentation based on the construct (e.g., if, for, def)
// //       const indent = line.endsWith(":")
// //         ? "    ".repeat(index + 1)
// //         : "    ".repeat(index);
// //       return indent + line;
// //     })
// //     .join("\n");

// //   return indentedCode;
// // }

// // const formattedPythonCode = formatPythonCode(code);
// // console.log(formattedPythonCode);

// function formatPythonCode(code) {
//     // Split the code using a regular expression to match lines with Python keywords and text in double quotes
//     const line_split=code.split('\n');
//     const new_str=''
//     for(let value of line_split){
//       if(value.endsWith(":")){
//         new_str= 
//       }
      

//     }
//     const lines = code.split(/(\b(?:def|if|elif|else|for|while|with|class|try|except|finally)\b)\s+"([^"]+)"\s*:/g);
//     console.log("lines",lines)
//     // Remove empty lines and adjust indentation
//     const indentedCode = lines
//       .filter((line) => line && line.trim() !== "")
//       .map((line, index, array) => {
     
//         const indent = line.endsWith(":") ? "    ".repeat(index) : "    ".repeat(index + 1);
  
//         // Adjust the indentation of subsequent lines in a construct
//         if (index > 0 && array[index - 1].trim().endsWith(":")) {
//           return indent + line.trim();
//         }
  
//         return indent + line.trim();
//       })
//       .join("\n");
  
//     return indentedCode;
//   }
  
//   const formattedPythonCode = formatPythonCode(code);
//   // console.log(formattedPythonCode);

const { exec } = require('child_process');
// const mysql = require('mysql');

const unindentedGoCode = `
package main
import "fmt"
func main() {
fmt.Println("Hello, World!")
}`;

// Use the gofmt command to format the code
const gofmtProcess = exec('gofmt', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error formatting Go code: ${stderr}`);
    return;
  }

  // Read the formatted Go code from stdout
  const indentedGoCode = stdout;

  // Save the indented Go code to MySQL Workbench
  // saveToMySQL(indentedGoCode);
  console.log(indentedGoCode)
});

// Write the unindented Go code to the standard input of gofmt
gofmtProcess.stdin.write(unindentedGoCode);
gofmtProcess.stdin.end();
  