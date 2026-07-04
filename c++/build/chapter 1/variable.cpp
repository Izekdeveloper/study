#include <iostream>

int main() {
    int x = 5; // int x; x = 5; //int de dat mot bien gia tri 
    int y = 6;
    int sum = x + y;

    std::cout << x << '\n';
    std::cout << y << '\n';
    std::cout << sum << '\n';


    //integer (whole number)
    int age = 21;
    int year = 2026;
    int days = 2.5;

    std::cout << days << '\n';

    //double (number including decimal)
    double price = 10.99;
    double spg = 2.5;
    double temperature = 25.1;

    // single character 
    char grade = 'A';
    char initial = 'B';
    char currency = '$';
    std::cout << initial << '\n';

    //boolean (true or false )
    bool student = true;
    bool power = false;
    bool forSale = false;

    //string(object that represent a senquence of text )
    std::string name = "fuck";
    std::string day = "monday";
    std::string food = "pizza";
    std::string address = "123 fake St.";

    std::cout << "hello" << name << '\n';
    std::cout << "you are " << age << " year old" << '\n';
    return 0;
}