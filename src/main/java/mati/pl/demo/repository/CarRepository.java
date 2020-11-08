package mati.pl.demo.repository;

import mati.pl.demo.model.Car;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarRepository {

    List<Car> findAllCars();

    Optional<Car> getCarById(long id);

    boolean addCar(Car car);

    boolean editCar(Car car);

    boolean deleteCar(long id);

}
