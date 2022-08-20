package com.pizza.models.enumeration;


public enum PizzaStatus {

    Created(1),
    Delivered(2);
    private int value;

    PizzaStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return this.value;
    }
}
