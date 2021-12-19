let n = 5;
// downside pyramid
for (let i = 0; i < n ; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
     process.stdout.write(' ');
  }
  // printing star
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    process.stdout.write('*');
  }
  console.log();
}

// Upside pyramid
for (let i = 2; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ')
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    process.stdout.write('*')
  }
  console.log();
}