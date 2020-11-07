package mati.pl.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class CarController {

    List<Car> carList;

    public CarController() {
        Car car1 = new Car("Fiat", "126p");
        Car car2 = new Car("BMW", "3");
        Car car3 = new Car("Fiat", "Stilo");
        Car car4 = new Car("Opel", "Senator");
        Car car5 = new Car("Peugeot", "RCZ");
        carList = new ArrayList<>();
        carList.add(car1);
        carList.add(car2);
        carList.add(car3);
        carList.add(car4);
        carList.add(car5);
    }

    @GetMapping("/cars")
    public String get(Model model) {
        model.addAttribute("carList", carList);
        model.addAttribute("newCar", new Car());
        return "car";
    }

    @PostMapping("/add")
    public String addCar(@ModelAttribute Car car){
        carList.add(car);
        System.out.println(car);
        return "redirect: /cars";
    }
}
