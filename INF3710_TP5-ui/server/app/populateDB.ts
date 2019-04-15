export const data: string = `SET search_path = hotelDB;

--Clinique	   
INSERT INTO tp5_schema.Clinique VALUES('C001','3405,Chemin des bois','514-350-3245','514-887-8750',3,'E006');
INSERT INTO tp5_schema.Clinique VALUES('C002','12340 Rue des Patriotes','514-654-2357','514-523-7488',3,'E003');
INSERT INTO tp5_schema.Clinique VALUES('C003','3589 57eme avenue','514-168-2485','514-579-2368',3,'E002');

--Employé

INSERT INTO tp5_schema.Employe VALUES('E001','Julie Desrochers','5410 42eme avenue','438-467-2366',DATE'1998-05-30','F','314016301','Gestionnaire','60000','C003');
INSERT INTO tp5_schema.Employe VALUES('E002', 'Jessica Berry','12430 boulevard sherbrooke','514-374-5832',DATE'1970-01-01','F','904123740','Gestionnaire','75000','C002');
INSERT INTO tp5_schema.Employe VALUES('E003','Ahmoud El-Nany','1050 10eme avenue','450-322-2132',DATE'1984-08-04','M','978416031','Secrétaire','50000','C001');
INSERT INTO tp5_schema.Employe VALUES('E004','Ulrich Mbale','10380 boulevard Perras','450-417-3497',DATE'1977-09-12','M','431063165','Gestionnaire','90000','C001');
INSERT INTO tp5_schema.Employe VALUES('E005','Lise Dupres','15470 rue des hirondelles','514-267-1271',DATE'1989-08-09','F','160487594','Secrétaire','80000','C002');
INSERT INTO tp5_schema.Employe VALUES('E006','Luc Guy','17030 boulevard maurice-séguin','514-091-2180',DATE'1983-04-20','M','876314013','Infirmière','90000','C003');
INSERT INTO tp5_schema.Employe VALUES('E007','Iness Bouhelal','1010 rue primat-paré','450-323-954',DATE'1974-04-19','F','164091640','Vétérinaire','150000','C003');
INSERT INTO tp5_schema.Employe VALUES('E008','Jacques Duville','4578 rue des papillons','450-347-3125',DATE'1994-10-15','M','213564648','Vétérinaire','80000','C001');
INSERT INTO tp5_schema.Employe VALUES('E009','Mark Dumas','16840 rue Pool','438-434-3152',DATE'1990-03-21','M','145093170','Vétérinaire','100000','C002');

--Vétérinaire
INSERT INTO tp5_schema.Veterinaire VALUES('E007',true);
INSERT INTO tp5_schema.Veterinaire VALUES('E008',true);
INSERT INTO tp5_schema.Veterinaire VALUES('E009',false);

--Propriétaire
INSERT INTO tp5_schema.Proprietaire VALUES('P001','C001','Philippe Ducharme','11832 boulevard Rolland','450-135-1425');
INSERT INTO tp5_schema.Proprietaire VALUES('P001','C002','Mamadou Seykou','9194 Avenue du Zoo','514-943-4190');
INSERT INTO tp5_schema.Proprietaire VALUES('P001','C003','Hafsa Bouabid','21400 rue des Tarterets','438-888-8719');
INSERT INTO tp5_schema.Proprietaire VALUES('P002','C001','Xi Chang','12430 boulevard de la Jungle','514-888-9190');
INSERT INTO tp5_schema.Proprietaire VALUES('P002','C002','Kuta Ubud','14212 rue des Igo','514-789-9595');
INSERT INTO tp5_schema.Proprietaire VALUES('P002','C003','Charles Audd','1315 avenue Montaigne','438-130-7676');

--Animal
INSERT INTO tp5_schema.Animal VALUES('A001','C001','louis','Chat','Blanc',DATE'2008-07-07','vivant','P001',DATE'2011-03-20');
INSERT INTO tp5_schema.Animal VALUES('A002','C001','rex','Lézard','Vert',DATE'2017-04-30','vivant','P001',DATE'2018-01-01');
INSERT INTO tp5_schema.Animal VALUES('A003','C001','zoulou-tchaing','Chien','Noir',DATE'2009-01-30','vivant','P002',DATE'2011-05-25');
INSERT INTO tp5_schema.Animal VALUES('A001','C002','arthur','Souris','Blanc',DATE'2019-03-04','décédé','P001',DATE'2019-04-06');
INSERT INTO tp5_schema.Animal VALUES('A002','C002','perry','Lapin','Gris',DATE'2015-07-27','décédé','P002',DATE'2016-09-20');
INSERT INTO tp5_schema.Animal VALUES('A003','C002','hamtaro','Hamster','Blanc et orange',DATE'2018-12-31','vivant','P002',DATE'2019-02-20');
INSERT INTO tp5_schema.Animal VALUES('A001','C003','bob','Furret','Blanc',DATE'2012-01-27','vivant','P001',DATE'2014-11-24');
INSERT INTO tp5_schema.Animal VALUES('A002','C003','fluffy','Chat','Gris',DATE'2005-04-19','vivant','P002',DATE'2007-10-10');
INSERT INTO tp5_schema.Animal VALUES('A003','C003','blanka','Chien','Blond',DATE'1998-11-30','vivant','P002',DATE'2011-09-14');

--Examen
INSERT INTO tp5_schema.Examen VALUES('EX001',DATE'2012-04-13',TIME'12:30','Grippe','E008','A001','C001');
INSERT INTO tp5_schema.Examen VALUES('EX002',DATE'2014-07-08',TIME'13:30','Pneumonie','E007','A003', 'C003');
INSERT INTO tp5_schema.Examen VALUES('EX003',DATE'2018-03-03',TIME'13:00','Cancer','E009','A002', 'C002');
INSERT INTO tp5_schema.Examen VALUES('EX004',DATE'2010-11-14',TIME'15:00','Diarhée','E007','A002', 'C003');
INSERT INTO tp5_schema.Examen VALUES('EX005',DATE'2019-02-22',TIME'12:00','Allergie','E009','A003', 'C002');
INSERT INTO tp5_schema.Examen VALUES('EX006',DATE'2012-06-04',TIME'14:30','Fièvre','E008','A003', 'C001');

--Traitements
INSERT INTO tp5_schema.Traitement VALUES('T001', 'Examen',20.00);
INSERT INTO tp5_schema.Traitement VALUES('T002', 'Vaccin contre la grippe',50.00);
INSERT INTO tp5_schema.Traitement VALUES('T003', 'Chimiothérapie',200.00);
INSERT INTO tp5_schema.Traitement VALUES('T004', 'Pénicilinne',70.00);
INSERT INTO tp5_schema.Traitement VALUES('T005', 'Traitement contre la fièvre',120.00);
INSERT INTO tp5_schema.Traitement VALUES('T006', 'Pillule pour diarhée ',10.00);
INSERT INTO tp5_schema.Traitement VALUES('T007', 'Traitement contre la pneumonie ',60.00);

--TraitementsEffectués

INSERT INTO tp5_schema.TraitementEffectue VALUES('EX001','A001', 'T002', 2, DATE'2012-04-13', DATE'2012-04-13', 'C001');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX002','A003', 'T007', 1, DATE'2014-07-08', DATE'2014-07-15', 'C003');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX003','A002', 'T003', 4, DATE'2018-03-20', DATE'2012-04-20', 'C002');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX004','A002', 'T006', 5, DATE'2010-11-14', DATE'2010-11-19', 'C003');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX005','A003', 'T004', 3, DATE'2019-02-24', DATE'2012-02-25', 'C002');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX006','A003', 'T005', 1, DATE'2012-06-04', DATE'2012-06-04', 'C001');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX001','A001', 'T001', 1, DATE'2012-04-13', DATE'2012-04-13', 'C001');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX002','A003', 'T001', 1, DATE'2014-07-08', DATE'2014-07-08', 'C003');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX003','A002', 'T001', 1, DATE'2018-03-03', DATE'2018-03-03', 'C002');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX004','A002', 'T001', 1, DATE'2010-11-14', DATE'2010-11-14', 'C003');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX005','A003', 'T001', 1, DATE'2019-02-22', DATE'2019-02-22', 'C002');
INSERT INTO tp5_schema.TraitementEffectue VALUES('EX006','A003', 'T001', 1, DATE'2012-06-04', DATE'2012-06-04', 'C001');
;`;
