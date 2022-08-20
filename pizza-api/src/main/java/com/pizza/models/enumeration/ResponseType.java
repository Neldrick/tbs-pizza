package com.pizza.models.enumeration;

public enum ResponseType {

    Success(1),
    PartialSuccess(2),
    Fail(3), // Get fail response from third party
    ContentError(4), // Condition verify failed
    AlreadyExists(5), // POST, data already exists
    NotFound(6); // GET, data not found
    private int value;

    ResponseType(int value) {
        this.value = value;
    }

    public int getValue() {
        return this.value;
    }
}
