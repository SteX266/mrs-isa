


INSERT INTO public.role(
    id, name)
VALUES (1, 'ADMIN');
INSERT INTO public.role(
    id, name)
VALUES (2, 'CLIENT');
INSERT INTO public.role(
    id, name)
VALUES (3, 'VACATION_OWNER');
INSERT INTO public.role(
    id, name)
VALUES (4, 'SHIP_OWNER');
INSERT INTO public.role(
    id, name)
VALUES (5, 'INSTRUCTOR');


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



INSERT INTO public.user_table(
    id, address, is_deleted, is_enabled, last_password_reset_date, loyalty_points, name, password, phone_number, surname, username)
VALUES (1, 'Petra Kocica 38, Jagodina', false, true, null, 0, 'Stefan','$2a$10$cc2TaFZx.pg3N8q3qNGhee252A/1YKth3KwywXrrGhRMLdD0baknC' , '066240610', 'Milosevic', 'stefan.milosevic.e14@gmail.com');

INSERT INTO public.user_role(
    user_id, role_id)
VALUES (1, 2);





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


