// create all basic operations
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    public int subtract(int a, int b) {
        return a - b;
    }
    public int multiply(int a, int b) {
        return a * b;
    }
    public int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Division by zero is not allowed.");
        }
        return a / b;
    }
    public int modulus(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Modulus by zero is not allowed.");
        }
        return a % b;
    }
    public double power(double base, double exponent) {
        return Math.pow(base, exponent);
    }
    public double squareroot(double value) {
        if (value < 0) {
            throw new IllegalArgumentException("Cannot compute square root of negative number.");
        }
        return Math.sqrt(value);
    }
}
    