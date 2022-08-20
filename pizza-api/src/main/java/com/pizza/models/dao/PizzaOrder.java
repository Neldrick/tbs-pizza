package com.pizza.models.dao;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Table(name = "pizza_order")
public class PizzaOrder implements Serializable {
    @Id
    private UUID id;

    private String customerName;
    private String customerAddress;
    @Type(type = "com.vladmihalcea.hibernate.type.json.JsonType")
    private List<Pizza> pizzas;
    private Integer status;
    private Date createTime;
    private Date updateTime;

}

