function logging(target) {
  const originalFn = target.descriptor.value;

  if (typeof originalFn === "function") {
    target.descriptor.value = function (...args) {
      console.log("[INFO] start calculating...");

      const result = originalFn.apply(null, args);

      console.log(`[INFO] result is ${result}`);
      console.log("[INFO] finish calculating");

      return result;
    };
  }
}

class MathOperations {
  @logging
  sum(a, b) {
    return a + b;
  }
}

const mathOperations = new MathOperations();
mathOperations.sum(3, 4);
