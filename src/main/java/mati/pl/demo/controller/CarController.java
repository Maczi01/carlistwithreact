package mati.pl.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class CarController {


    @GetMapping
    public String get(Model model){
        Car car1 = new Car("Fiat", "126p");
        Car car2 = new Car("BMW", "3");
        Car car3 = new Car("Fiat", "Stilo");
        Car car4 = new Car("Fiat", "125p");
        Car car5 = new Car("Fiat", "500");

        List<Car> carList = Arrays.asList(car1,car2,car3, car3, car4, car5);
        model.addAttribute("carList", carList);
        return "car";
    }
}
