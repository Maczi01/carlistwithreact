package mati.pl.demo.service;

import mati.pl.demo.model.Car;
import mati.pl.demo.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CarService implements CarRepository {

    private List<Car> cars;

    public CarService() {
        this.cars = new ArrayList<>();
        cars.add(new Car(1L, "Opel", "Senator"));
        cars.add(new Car(2L, "Ford", "Sierra"));
        cars.add(new Car(3L, "Skoda", "Favorit"));

    }

    @Override
    public List<Car> findAllCars() {
        return cars;
    }

    @Override
    public Optional<Car> getCarById(long id) {
        return cars.stream().filter(e -> e.getId() == id).findFirst();
    }

    @Override
    public boolean addCar(Car car) {
        return cars.add(car);
    }

    @Override
    public boolean editCar(Car car) {
        Optional<Car> optionalCar = cars.stream()
                .filter(e -> e.getId() == car.getId())
                .findFirst();
        if (optionalCar.isPresent()) {
            cars.set((int) optionalCar.get().getId(), car);
        }
        return false;
    }

    @Override
    public boolean deleteCar(long id) {
        Optional<Car> optionalCar = cars.stream().filter(e -> e.getId() == id).findFirst();
        return cars.remove(optionalCar.get());
    }
}
