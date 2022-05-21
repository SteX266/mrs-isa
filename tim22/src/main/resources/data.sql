
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
VALUES (1, 3,20,2,'TOOOOOOP!!!! Adrenalinska avantura u kojoj ćete iskusiti skakanje sa padobranom, planinarenje i svašta nešto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','ADVENTURE',false, 'Top avantura', 150,'Zabranjeno pušenje! Zabranjeni kućni ljubimci!', 1,4);

INSERT INTO public.vessel(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id, engine_number, engine_power, max_speed, vessel_type)
VALUES (2, 3,20,2,'TOOOOOOP!!!!','VESSEL',false, 'Jahta', 120,'None', 3,3, 1, 150, 50, 'YACHT');

INSERT INTO public.adventure(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (3, 4,20,2,'TOOOOOOP!!!!','ADVENTURE',false, 'Avantura', 120,'None', 3,4);

INSERT INTO public.vessel(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id, engine_number, engine_power, max_speed, vessel_type)
VALUES (4, 1,20,2,'TOOOOOOP!!!!','VESSEL',false, 'Brodic', 120,'None', 3,3, 1, 150, 50, 'YACHT');

INSERT INTO public.vessel(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id, engine_number, engine_power, max_speed, vessel_type)
VALUES (5, 5,20,2,'TOOOOOOP!!!!','VESSEL',false, 'Brod', 120,'None', 3,3, 1, 150, 50, 'YACHT');

INSERT INTO public.vacation(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (6, 4, 20 , 3,'Bad Place to stay','VACATION',false,'Fina kuca', 300, 'None', 2,2);

INSERT INTO public.vacation(id, average_score, cancellation_fee, capacity, description, entity_type, is_deleted, name, price, rules_of_conduct, addres_id, owner_id)
VALUES (7, 3, 20, 4, 'Great Place', 'VACATION', false, 'Drvena kuca', 500, 'None', 1, 2);

INSERT INTO public.photos(entity_id, photos)
VALUES (1, 'https://images.hindustantimes.com/img/2022/01/21/1600x900/bf0cce4e-79af-11ec-9200-af8cbbcf9206_1642765235944.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (1, 'https://destinationdeluxe.com/wp-content/uploads/2021/06/Adventure-Activities-Destination-Deluxe.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (1, 'https://www.bsframework.io/wp-content/uploads/2020/12/Adventure-Travel-A-Thrilling-And-Enthralling-Experience.jpg');

INSERT INTO public.photos(entity_id, photos)
VALUES (2, 'https://cdn.boatinternational.com/files/2021/01/b2c5a350-5998-11eb-beb1-e5b23185a864-avanti-profile.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (3, 'https://sgbonline.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-31-at-8.54.57-AM-copy.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (4, 'https://sailtraininginternational.org/app/uploads/2016/06/vessel-shtandart-1.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Amerigo_vespucci_1976_nyc_aufgetakelt.jpg/800px-Amerigo_vespucci_1976_nyc_aufgetakelt.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (6, 'https://www.mojenterijer.rs/storage/posts/gallery/2017/Dec/115648/sarmantna-vikendica-u-kanadi.jpg');
INSERT INTO public.photos(entity_id, photos)
VALUES (7, 'https://img.halooglasi.com/slike/oglasi/Thumbs/200904/l/prodaje-se-vikendica-25-m2-g-goracici-prijepo-5425635877817-71792611911.jpg');



INSERT INTO public.reservation(id, date_from, date_to, is_approved, client_id, system_entity_id, is_canceled)
VALUES (1, '2022-07-20', '2022-07-22', true, 1, 6, false);
INSERT INTO public.reservation(id, date_from, date_to, is_approved, client_id, system_entity_id, is_canceled)
VALUES (2, '2022-07-25', '2022-07-28', true, 1, 7, false);
INSERT INTO public.reservation(id, date_from, date_to, is_approved, client_id, system_entity_id, is_canceled)
VALUES (3, '2022-04-25', '2022-04-28', true, 1, 7, false);


INSERT INTO public.reservation(id, date_from, date_to, is_approved, client_id, system_entity_id, is_canceled)
VALUES (4, '2022-04-20T15:20', '2022-04-23T13:00', true, 1, 6, false);
INSERT INTO public.reservation(id, date_from, date_to, is_approved, client_id, system_entity_id, is_canceled)
VALUES (5, '2022-03-15', '2022-03-20', true, 1, 4, false);
INSERT INTO public.reservation(id, date_from, date_to, is_approved, client_id, system_entity_id, is_canceled)
VALUES (6, '2022-03-22', '2022-03-23', true, 1, 2, false);
INSERT INTO public.reservation(id, date_from, date_to, is_approved, client_id, system_entity_id, is_canceled)
VALUES (7, '2021-09-26', '2021-10-01', true, 1, 1, false);


