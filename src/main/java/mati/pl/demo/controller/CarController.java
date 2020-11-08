package mati.pl.demo.controller;

import mati.pl.demo.model.Car;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin
@RestController
public class CarController {



    @GetMapping("/cars")
    public ResponseEntity<List<Car>> findAllCars() {
        return
    }

    @PostMapping("/add")
    public String addCar(@ModelAttribute Car car){
        carList.add(car);
        System.out.println(car);
        return "redirect:/cars";
    }
}
