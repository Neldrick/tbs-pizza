package com.pizza.models;

import com.pizza.constants.WordConstants;
import com.pizza.models.enumeration.ResponseType;

public class GeneralResponse<T> {
    private ResponseType type;
    private T payload;
    private String message;

    public GeneralResponse() {
    }

    public GeneralResponse(ResponseType type, String message) {
        this.type = type;
        this.message = message;
    }

    public ResponseType getType() {
        return type;
    }

    public void setType(ResponseType type) {
        this.type = type;
    }

    public T getPayload() {
        return payload;
    }

    public void setPayload(T payload) {
        this.payload = payload;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void notFound(){
        this.message = WordConstants.notFound;
        this.type = ResponseType.NotFound;
    }
    public void contentError(){
        this.message = WordConstants.inCorrectContent;
        this.type = ResponseType.ContentError;
    }
    public void internalError(){
        this.message = WordConstants.internalError;
        this.type = ResponseType.Fail;
    }
    public void success(T payload) {
        this.message = WordConstants.success;
        this.payload = payload;
        this.type = ResponseType.Success;
    }

}
