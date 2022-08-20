package com.pizza.services;

import com.pizza.models.GeneralOperatorRequest;
import com.pizza.models.GeneralResponse;
import com.pizza.models.dto.PizzaOrderStatusDTO;
import com.pizza.models.dao.PizzaOrder;
import com.pizza.models.enumeration.PizzaStatus;
import com.pizza.models.repositories.PizzaOrderRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class PizzaService {
    private static final Logger logger = LogManager.getLogger(PizzaService.class);
    @Autowired
    private PizzaOrderRepository pizzaOrderRepository;

    public GeneralResponse<List<PizzaOrder>> GetAllPizzaOrder(){
        GeneralResponse<List<PizzaOrder>> result = new GeneralResponse<List<PizzaOrder>>();
        try {
            List<PizzaOrder> orders = pizzaOrderRepository.findAll();
            if (orders != null) {
                result.success(orders);
            } else {
                result.notFound();
            }
        }catch(Exception ex){
            logger.error("GET /orders errors: {}", ex.getMessage());
            result.internalError();
        }
        return result;
    }
    public GeneralResponse<PizzaOrder> CreatePizzaOrder(GeneralOperatorRequest<PizzaOrder> request){
        GeneralResponse<PizzaOrder> result = new GeneralResponse<PizzaOrder>();
        try {
            PizzaOrder newOrder = request.payload;
            newOrder.setId(UUID.randomUUID());
            newOrder.setStatus(PizzaStatus.Created.getValue());
            newOrder.setCreateTime(new Date());
            newOrder.setUpdateTime(new Date());
            pizzaOrderRepository.save(newOrder);
            result.success(newOrder);
        }catch(Exception ex){
            logger.error("POST /orders errors: {}", ex.getMessage());
            result.contentError();
        }
        return result;
    }
    public GeneralResponse<PizzaOrder> UpdatePizzaOrder(GeneralOperatorRequest<PizzaOrderStatusDTO> request) {
        GeneralResponse<PizzaOrder> result = new GeneralResponse<PizzaOrder>();
        try {
            Optional<PizzaOrder> objOrder = pizzaOrderRepository.findById(request.payload.getId());
            if (!objOrder.isPresent()) {
                result.notFound();
            } else {
                PizzaOrder oldOrder = objOrder.get();
                oldOrder.setUpdateTime(new Date());
                oldOrder.setStatus(request.payload.getStatus());
                pizzaOrderRepository.save(oldOrder);
                result.success(oldOrder);
            }
        } catch (Exception ex) {
            logger.error("PUT /orders errors: {}", ex.getMessage());
            result.contentError();
        }
        return result;
    }
}
