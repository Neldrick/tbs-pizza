package com.pizza.models.dto;

import java.util.UUID;

public class PizzaOrderStatusDTO {
    private Integer status;
    private UUID id;

    public UUID getId(){
        return this.id;
    }
    public Integer getStatus(){
        return this.status;
    }
}
