#include <iostream>

int main() {
    // the const keyword specifies that a variable's value is constant
    // tells the compiler to prevent anything from modifying it 
    // (read only)

    const double PI = 3.1415;
    double radius = 10;
    double circumference = 2 * PI * radius;

    std::cout << circumference << "cm" << '\n';

    const int LIGHT_SPEED = 299;
    const int WIDTH = 1920;
    const int HEIGHT = 1080;
    std::cout << LIGHT_SPEED << "000 km/h" << '\n';
    return 0;
}