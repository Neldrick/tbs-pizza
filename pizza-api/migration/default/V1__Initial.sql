create table if not exists pizza_order (
    id uuid primary key,
    customer_name character varying NOT NULL,
    customer_address character varying NOT NULL,
    pizzas json NOT NULL,
    status integer NOT NULL,
    create_time timestamptz NOT NULL,
    update_time timestamptz NOT NULL
);