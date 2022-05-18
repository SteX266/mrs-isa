
INSERT INTO public.role(id, name)
VALUES (1, 'ADMIN');
INSERT INTO public.role(id, name)
VALUES (2, 'CLIENT');
INSERT INTO public.role(id, name)
VALUES (3, 'VACATION_OWNER');
INSERT INTO public.role(id, name)
VALUES (4, 'SHIP_OWNER');
INSERT INTO public.role(id, name)
VALUES (5, 'INSTRUCTOR');

INSERT INTO public.address(id, city, country, street_name, street_number)
VALUES (1, 'Novi Sad', 'Serbia ', 'Alekse Santica', 4);

INSERT INTO public.address(id, city, country, street_name, street_number)
VALUES (2, 'Jagodina', 'Serbia', 'Kralja Aleksandra', 27);

INSERT INTO public.address(id, city, country, street_name, street_number)
VALUES (3, 'Planina', 'Bosnia', 'Na vrh brda', 13);

INSERT INTO public.address(id, city, country, street_name, street_number)
VALUES (4, 'Amsterdam', 'Netherlands', 'Robina van Persija', 18);


INSERT INTO public.user_table(id, address, is_deleted, is_enabled, last_password_reset_date, loyalty_points, name, password, phone_number, surname, username)
VALUES (1, 'Petra Kocica 38, Jagodina', false, true, null, 0, 'Stefan','$2a$10$cc2TaFZx.pg3N8q3qNGhee252A/1YKth3KwywXrrGhRMLdD0baknC' , '066240610', 'Milosevic', 'stefan.milosevic.e14@gmail.com');

INSERT INTO public.user_table(id, address, is_deleted, is_enabled, last_password_reset_date, loyalty_points, name, password, phone_number, surname, username)
VALUES (2, 'Ulica retarda 1, Zrenjanin', false, true, null, 0, 'Vanja','$2a$10$cc2TaFZx.pg3N8q3qNGhee252A/1YKth3KwywXrrGhRMLdD0baknC' , '066222333', 'Serfeze', 'serfezev@gmail.com');

INSERT INTO public.user_table(id, address, is_deleted, is_enabled, last_password_reset_date, loyalty_points, name, password, phone_number, surname, username)
VALUES (3, 'Veliki grad, Novi Sad', false, true, null, 0, 'Aleksa','$2a$10$cc2TaFZx.pg3N8q3qNGhee252A/1YKth3KwywXrrGhRMLdD0baknC' , '066222111', 'Stevanovic', 'stevaszumza@gmail.com');

INSERT INTO public.user_table(id, address, is_deleted, is_enabled, last_password_reset_date, loyalty_points, name, password, phone_number, surname, username)
VALUES (4, 'Foca', false, true, null, 0, 'Milica','$2a$10$cc2TaFZx.pg3N8q3qNGhee252A/1YKth3KwywXrrGhRMLdD0baknC' , '066230222', 'Skipina', 'skipina@gmail.com');


INSERT INTO public.user_role(user_id, role_id)
VALUES (1, 2);
INSERT INTO public.user_role(user_id, role_id)
VALUES (2,3);
INSERT INTO public.user_role(user_id, role_id)
VALUES (3,4);
INSERT INTO public.user_role(user_id, role_id)
VALUES (4,5);


INSERT INTO public.adventure(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (1, 3,20,2,'TOOOOOOP!!!!','ADVENTURE',false, 'Nesto', 150,'None', 4,4);

INSERT INTO public.vessel(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (2, 3,20,2,'TOOOOOOP!!!!','VESSEL',false, 'Nesto', 120,'None', 3,3);

INSERT INTO public.adventure(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (3, 4,20,2,'TOOOOOOP!!!!','ADVENTURE',false, 'Nesto', 120,'None', 3,4);

INSERT INTO public.vessel(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (4, 1,20,2,'TOOOOOOP!!!!','VESSEL',false, 'Nesto', 120,'None', 3,3);

INSERT INTO public.vessel(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (5, 5,20,2,'TOOOOOOP!!!!','VESSEL',false, 'Nesto', 120,'None', 3,3);

INSERT INTO public.vacation(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (6, 4, 20 , 3,'Bad Place to stay','VACATION',false,'Kuzis', 300, 'None', 2,2);

INSERT INTO public.vacation(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (7, 3, 20, 4, 'Great Place', 'VACATION', false, 'Puz', 500, 'None', 1, 2);

INSERT INTO public.photos(entity_id, photos)
VALUES (1, 'https://www.gradnja.rs/wp-content/uploads/2022/02/luksuzne-vikendice-srbija-izajmljivanje-gradnja.rs_.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (2, 'https://www.gradnja.rs/wp-content/uploads/2021/01/balaton-vikendica.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (3, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/187868702.jpg?k=4368f5637f7ff4c79e5c7f993e37c48850d3e9d7d514486c15e971a4aa45ed38&o=&hp=1');
INSERT INTO public.photos(entity_id, photos)
VALUES (4, 'https://www.gdenaplaninu.com/uploads/images/objekti/200/vikendicA.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (5, 'https://media.mojtrg.rs/Image/ce9e459c7a9e46bdb35cd246288f903b/20150907/false/false/1280/960/Vikendica-od-65m2--Kopaonik.jpeg');
INSERT INTO public.photos(entity_id, photos)
VALUES (6, 'https://www.mojenterijer.rs/storage/posts/gallery/2017/Dec/115648/sarmantna-vikendica-u-kanadi.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (7, 'https://img.halooglasi.com/slike/oglasi/Thumbs/200904/l/prodaje-se-vikendica-25-m2-g-goracici-prijepo-5425635877817-71792611911.jpg');



INSERT INTO public.reservation(id, date_from, date_to, is_approved, client_id, system_entity_id, is_canceled)
VALUES (1, '2022-07-20', '2022-07-22', true, 1, 6, false);
INSERT INTO public.reservation(id, date_from, date_to, is_approved, client_id, system_entity_id, is_canceled)
VALUES (2, '2022-07-25', '2022-07-28', true, 1, 7, false);