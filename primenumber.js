
n = 100;
for (i = 2; i <= n; i++) {
  isPrime = true;

  for (j = 2; j <= i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }


  if (i == j) {
    console.log(i);
  }
}
