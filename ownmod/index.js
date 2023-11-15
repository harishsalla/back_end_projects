// let code = `def generate_fibonacci(limit):fibonacci_sequence = [0, 1]while True:next_number = fibonacci_sequence[-1] + fibonacci_sequence[-2]if next_number > limit:break
//     fibonacci_sequence.append(next_number)

// return fibonacci_sequence

// # Set the limit for the Fibonacci sequence
// limit = 50

// # Generate and print the Fibonacci sequence
// fibonacci_sequence = generate_fibonacci(limit)
// print(f"Fibonacci sequence up to {limit}: {fibonacci_sequence}")
// `;
// function formatPythonCode(code) {
//   // Split the code using common Python delimiters
//   const lines = code.split(
//     /(:|if|elif|else|for|while|with|def|class|try|except|finally)/
//   );

//   // Remove empty lines and adjust indentation
//   const indentedCode = lines
//     .filter((line) => line.trim() !== "")
//     .map((line, index) => {
//       // Adjust indentation based on the construct (e.g., if, for, def)
//       const indent = line.endsWith(":")
//         ? "    ".repeat(index + 1)
//         : "    ".repeat(index);
//       return indent + line;
//     })
//     .join("\n");

//   return indentedCode;
// }

// const formattedPythonCode = formatPythonCode(code);
// console.log(formattedPythonCode);

let code = `def generate_fibonacci(limit):fibonacci_sequence = [0, 1]
        while True:next_number = fibonacci_sequence[-1] + fibonacci_sequence[-2]
                if next_number > limit:break
        fibonacci_sequence.append(next_number)

        return fibonacci_sequence

# Set the limit
for the Fibonacci sequence
limit = 50

# Generate and print the Fibonacci sequence
fibonacci_sequence = generate_fibonacci(limit)
print(f"Fibonacci sequence up to {limit}: {fibonacci_sequence}")
`;

function formatPythonCode(code) {
  // Split the code using common Python delimiters
  const lines = code.split(/(\b(?:def|if|elif|else|for|while|with|class|try|except|finally)\b)/);

  // Remove empty lines and adjust indentation
  const indentedCode = lines
    .filter((line) => line.trim() !== "")
    .map((line, index, array) => {
      // Adjust indentation based on the construct (e.g., if, for, def)
      const indent = line.endsWith(":") ? "    ".repeat(index) : "    ".repeat(index + 1);

      // Adjust the indentation of subsequent lines in a construct
      if (index > 0 && array[index - 1].trim().endsWith(":")) {
        return "    " + line;
      }

      return indent + line;
    })
    .join("\n");

  return indentedCode;
}

const formattedPythonCode = formatPythonCode(code);
console.log(formattedPythonCode);
