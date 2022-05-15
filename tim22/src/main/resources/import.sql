INSERT INTO public.client(
    id, email, is_activated, is_deleted, loyalty_points, name, password, phone_number, surname, user_type, addres_id)
VALUES (1, 'katarinadjordjevic0702@gmail.com', true, false, 0, 'Katarina', 'kdj0702', 0642270707, 'Djordjevic', 'CLIENT', null);

INSERT INTO public.client(
    id, email, is_activated, is_deleted, loyalty_points, name, password, phone_number, surname, user_type, addres_id)
VALUES (2, 'stex266@gmail.com', true, false, 10, 'Stefan', 'debilCupavi', 0661172343, 'Milosevic', 'CLIENT', null);
INSERT INTO public.user_table(
    id, email, is_activated, is_deleted, loyalty_points, name, password, phone_number, surname, user_type, addres_id)
VALUES (3, 'vserfeze@gmail.com', true, false, 0, 'Vanja', '222222', 0665241322, 'Serfeze', 'INSTRUCTOR', null);
INSERT INTO public.user_table(
    id, email, is_activated, is_deleted, loyalty_points, name, password, phone_number, surname, user_type, addres_id)
VALUES (4, 'zumzumzum@gmail.com', true, false, 0, 'Aleksa', 'brkatiii', 0642270707, 'Stevanovic', 'SHIP_OWNER', null);


INSERT INTO public.vacation(
    id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id)
VALUES (1, 4,100, 4, 'top vikendica najjaca', 'VACATION', false, 'Raj za mlade babe', 500, 'Iskljucivo za mlade babe ispod 53 godine',null);
INSERT INTO public.vacation(
    id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id)
VALUES (2, 4,200, 6, 'ugodna kolibica blizu Jagodine,Daleko od sveta,ljudi smesno pricaju, ali je bar jeftino.Bre ', 'VACATION', false, 'Bogu iza nogu', 10, 'Ako nisi srbijanac i pricas sporo nisi dobrodosao',null);
INSERT INTO public.vacation(
    id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id)
VALUES (3, 5,220, 4, 'Vila u melencima najjaci deo Srbije ', 'VACATION', false, 'Vila Melenci', 500, 'Za bogate lale gospodu ako si iz bg izboscemo te nozem',null);
INSERT INTO public.vacation(
    id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id)
VALUES (4, 1,75, 3, 'Ubosni je top dodjite jarani da se napijete za sitne pare', 'VACATION', false, 'Dje ste', 50, 'Volim popit volim zagalamit ',null);
INSERT INTO public.vacation(
    id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id)
VALUES (5, 3,80, 2, 'Gajba u centru Bg jako je skupo ', 'VACATION', false, 'Dedinje goriiii matorii', 500, 'Za nafurane majmuncine sa beogradskog asfalta i mlade gaserke iskljucivo',null);


INSERT INTO public.address(
    id, city, country, street_name, street_number)
VALUES (1, 'Novi Sad', 'Serbia ', 'Alekse Santica', 4);

INSERT INTO public.address(
    id, city, country, street_name, street_number)
VALUES (2, 'Jagodina', 'Serbia', 'Kralja Aleksandra', 27);

INSERT INTO public.address(
    id, city, country, street_name, street_number)
VALUES (3, 'Planina', 'Bosnia', 'Na vrh brda', 13);

INSERT INTO public.address(
    id, city, country, street_name, street_number)
VALUES (4, 'Amsterdam', 'Netherlands', 'Robina van Persija', 18);


INSERT INTO public.photos(entity_id, photos)
VALUES (1,'https://images-ext-2.discordapp.net/external/2YxPTEV-Zs17HATSsZ52otvD1sgMLcyZ-9C27VfTHag/https/www.gradnja.rs/wp-content/uploads/2022/02/luksuzne-vikendice-srbija-izajmljivanje-gradnja.rs_.jpg?width=1005&height=670%27');




UPDATE public.vacation
SET  addres_id=1
WHERE id =1 ;
UPDATE public.vacation
SET  addres_id=2
WHERE id =2 ;
UPDATE public.vacation
SET  addres_id=3
WHERE id =3 ;
UPDATE public.vacation
SET  addres_id=4
WHERE id =4 ;
UPDATE public.vacation
SET  addres_id=4
WHERE id =5 ;