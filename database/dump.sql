--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
2	1	1	2999
3	1	1	2999
4	2	1	2999
5	2	3	2900
6	2	1	2999
7	2	6	830
8	2	2	2595
9	3	1	2999
10	3	3	2900
11	3	2	2595
12	3	1	2999
13	3	5	9900
14	4	1	2999
15	5	5	9900
16	5	2	2595
17	5	6	830
18	6	2	2595
19	6	3	2900
20	7	2	2595
21	8	2	2595
22	8	1	2999
23	8	1	2999
24	9	2	2595
25	9	1	2999
26	9	3	2900
27	10	6	830
28	10	3	2900
29	11	5	9900
30	11	6	830
31	11	2	2595
32	12	5	9900
33	12	3	2900
34	13	5	9900
35	14	3	2900
36	14	5	9900
37	14	6	830
38	15	6	830
39	15	1	2999
40	15	6	830
41	15	6	830
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-07-26 16:37:50.266633-07
2	2020-08-24 17:24:01.279592-07
3	2020-08-25 11:58:37.703329-07
4	2020-08-25 17:41:02.489279-07
5	2020-08-25 18:37:02.133969-07
6	2020-08-26 11:01:10.993105-07
7	2020-08-26 11:47:01.030141-07
8	2020-08-26 11:47:52.758047-07
9	2020-08-26 14:17:05.526328-07
10	2020-08-26 15:35:09.257948-07
11	2020-08-26 15:36:19.087893-07
12	2020-08-26 16:46:12.211139-07
13	2020-08-31 17:09:59.40339-07
14	2020-09-02 10:42:38.891722-07
15	2020-09-02 11:26:56.116808-07
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
3	4	Danny Vargas	123980348	123 Maple St	2020-08-25 17:42:03.308121-07
4	6	Daniel Vargas	12345678	123 Maple St.	2020-08-26 11:46:30.88625-07
5	7	Daniel Vargas	12345678	123 Maple St	2020-08-26 11:47:15.462353-07
6	8	Daniel Vargas	12345678	123 Maple St\n	2020-08-26 14:14:49.078801-07
7	9	Daniel Vargas	12345678	123 Maple St.	2020-08-26 14:57:35.430456-07
8	10	Daniel Vargas	12345678	123 Maple St.	2020-08-26 15:35:42.938041-07
9	11	Daniel Vargas	12345678	123 Maple St.	2020-08-26 16:38:28.589518-07
10	12	Daniel Vargas	12345678	123 Maple St.	2020-08-26 16:46:36.494185-07
11	14	Daniel Vargas	12345678	123 Maple St. 	2020-09-02 11:24:20.805706-07
12	15	Daniel Vargas	12345678	123 Maple St.	2020-09-02 14:32:44.279382-07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
5	Patron LP Cap	9900	/images/hat5.jpg	Low Profile - Unstructured 6-Panel	Bricks and Wood might not be on your radar yet, but the brands caps, including this sanded cotton twill number, are real standouts—and are all made in L.A.
6	Messer Packable Fedora	830	/images/hat6.jpg	\tMedium Brim, Flat Brim, Semi-Floppy	One of our most-loved classics, now built with adventure top of mind. The Messer Packable fedora is a medium-brim classic, designed to make a statement and built with a material designed to bounce back when folded or rolled. Take it for a stroll around the block, or on a journey around the world.
3	Gate Bucket Hat	2900	/images/hat7.jpg	Short Brim, Curved Brim, Semi-Floppy	The Gate Bucket Hat is a short-brim bucket hat made of mixed fabrics and featuring a direct embroidery logo. An easy stand-out piece that makes a statement.
1	Oath Bucket Hat	2999	/images/hat8.jpg	Short Brim, Curved Brim, Semi-Floppy	The Oath Bucket Hat is a short-brim bucket hat made of cotton twill and featuring a direct embroidery logo. An easy stand-out piece that makes a statement.
2	Oath LP Cap	2595	/images/hat9.jpg	Unstructured, 6-panel, Low Profile, Adjustable	The Oath LP Cap is alow profile, unstructured 6-panel cap. Made of cotton twill and featuring a merrowed edge embroidered patch, the Oath LP Cap is a style staple and is finished with a self-fabric adjuster to find the best fit.
4	Grade Mesh Cap	999	/images/hat10.jpg	Structured, 6-panel, Medium Profile, Adjustable, Snapback	The Grade Mesh Cap is ahigh profile, structured 6-panel cap. Made of various fabrics and featuring a merrowed edge embroidered patch, the Grade Mesh Cap is a laidback staple and is finished with a plastic snap to find the best fit.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 41, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 15, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 12, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

