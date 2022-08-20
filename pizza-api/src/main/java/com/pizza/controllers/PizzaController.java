package com.pizza.controllers;

import com.pizza.models.GeneralOperatorRequest;
import com.pizza.models.GeneralResponse;
import com.pizza.models.dto.PizzaOrderStatusDTO;
import com.pizza.services.PizzaService;
import com.pizza.models.dao.PizzaOrder;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pizza")
public class PizzaController {
    private static final Logger LOGGER = LogManager.getLogger(PizzaController.class);
    @Autowired
    private PizzaService pizzaService;

    @PostMapping(value = "")
    public ResponseEntity<GeneralResponse<PizzaOrder>> create(
            @RequestBody GeneralOperatorRequest<PizzaOrder> request){
        LOGGER.info("POST /pizza request: {} ", request);
        GeneralResponse<PizzaOrder> result = pizzaService.CreatePizzaOrder(request);
        LOGGER.info("POST /pizza/ result.type = {}, result.message = {}",
                result.getType(), result.getMessage());
        switch (result.getType()) {
            case Success:
                return ResponseEntity.ok().body(result);
            default:
                return ResponseEntity.badRequest().body(result);
        }
    }
    @PutMapping(value = "")
    public ResponseEntity<GeneralResponse<PizzaOrder>> update(
            @RequestBody GeneralOperatorRequest<PizzaOrderStatusDTO> request){
        LOGGER.info("PUT /pizza request: {} ", request);
        GeneralResponse<PizzaOrder> result = pizzaService.UpdatePizzaOrder(request);
        LOGGER.info("PUT /pizza/ result.type = {}, result.message = {}",
                result.getType(), result.getMessage());
        switch (result.getType()) {
            case Success:
                return ResponseEntity.ok().body(result);
            default:
                return ResponseEntity.badRequest().body(result);
        }
    }
    @GetMapping(value = "")
    public ResponseEntity<GeneralResponse<List<PizzaOrder>>> getAll(){
        LOGGER.info("GET /pizza request: {} ");
        GeneralResponse<List<PizzaOrder>> result = pizzaService.GetAllPizzaOrder();
        LOGGER.info("GET /pizza/ result.type = {}, result.message = {}",
                result.getType(), result.getMessage());
        switch (result.getType()) {
            case Success:
                return ResponseEntity.ok().body(result);
            default:
                return ResponseEntity.badRequest().body(result);
        }
    }
}
