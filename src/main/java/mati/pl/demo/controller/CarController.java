package mati.pl.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CarController {


    @GetMapping
    public String get(Model model){
        Car car = new Car("Fiat", "126p");
        model.addAttribute("car", car);
        return "hello";
    }
}
